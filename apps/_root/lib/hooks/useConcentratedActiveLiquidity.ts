import { Type } from '@sushiswap/currency'
import { FeeAmount, TICK_SPACINGS, tickToPrice, SushiSwapV3ChainId } from '@sushiswap/v3-sdk'
import { useMemo } from 'react'
import { useConcentratedLiquidityPool } from '@sushiswap/wagmi/future/hooks'
import { JSBI } from '@sushiswap/math'
import computeSurroundingTicks from '../functions'
import { useTicks } from './useTicks'

const PRICE_FIXED_DIGITS = 8

export interface TickProcessed {
  tick: number
  liquidityActive: JSBI
  liquidityNet: JSBI
  price0: string
}

const getActiveTick = (tickCurrent: number | undefined, feeAmount: FeeAmount | undefined) =>
  tickCurrent && feeAmount ? Math.floor(tickCurrent / TICK_SPACINGS[feeAmount]) * TICK_SPACINGS[feeAmount] : undefined

const useAllV3Ticks = ({
  token0,
  token1,
  feeAmount,
  chainId,
}: {
  chainId: SushiSwapV3ChainId
  token0: Type | undefined
  token1: Type | undefined
  feeAmount: FeeAmount | undefined
}) => {
  // TODO: Add subgraph support
  return useTicks({ token0, token1, feeAmount, chainId })
}

export const useConcentratedActiveLiquidity = ({
  token0,
  token1,
  feeAmount,
  chainId,
  enabled = true,
}: {
  chainId: SushiSwapV3ChainId
  token0: Type | undefined
  token1: Type | undefined
  feeAmount: FeeAmount | undefined
  enabled?: boolean
}) => {
  const { data: pool, isLoading: isPoolLoading } = useConcentratedLiquidityPool({
    chainId,
    token0,
    token1,
    feeAmount,
    enabled,
  })

  // Find nearest valid tick for pool in case tick is not initialized.
  const activeTick = useMemo(() => getActiveTick(pool?.tickCurrent, feeAmount), [pool, feeAmount])
  const { isLoading, error, data: ticks } = useAllV3Ticks({ token0, token1, feeAmount, chainId })

  return useMemo(() => {
    if (!token0 || !token1 || activeTick === undefined || !pool || !ticks || ticks.length === 0 || isLoading) {
      return {
        isLoading: isLoading || isPoolLoading,
        error,
        activeTick,
        data: undefined,
      }
    }

    const _token0 = token0.wrapped
    const _token1 = token1.wrapped

    // find where the active tick would be to partition the array
    // if the active tick is initialized, the pivot will be an element
    // if not, take the previous tick as pivot
    const pivot = ticks.findIndex(({ tickIdx }) => tickIdx > activeTick) - 1

    if (pivot < 0) {
      // consider setting a local error
      console.error('TickData pivot not found')
      return {
        isLoading,
        error,
        activeTick,
        data: undefined,
      }
    }

    const activeTickProcessed: TickProcessed = {
      liquidityActive: JSBI.BigInt(pool?.liquidity ?? 0),
      tick: activeTick,
      liquidityNet:
        Number(ticks[pivot].tickIdx) === activeTick ? JSBI.BigInt(ticks[pivot].liquidityNet) : JSBI.BigInt(0),
      price0: tickToPrice(_token0, _token1, activeTick).toFixed(PRICE_FIXED_DIGITS),
    }

    const subsequentTicks = computeSurroundingTicks(_token0, _token1, activeTickProcessed, ticks, pivot, true)
    const previousTicks = computeSurroundingTicks(_token0, _token1, activeTickProcessed, ticks, pivot, false)
    const ticksProcessed = previousTicks.concat(activeTickProcessed).concat(subsequentTicks)

    return {
      isLoading,
      error,
      activeTick,
      data: ticksProcessed,
    }
  }, [token0, token1, activeTick, pool, ticks, isLoading, error, isPoolLoading])
}
