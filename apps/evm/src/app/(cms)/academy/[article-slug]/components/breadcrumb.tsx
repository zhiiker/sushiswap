'use client'

import { ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/solid'
import type { AcademyArticle } from '@sushiswap/graph-client/strapi'
import { Container, IconButton } from '@sushiswap/ui'
import { useRouter } from 'next/navigation'
import { FC, useCallback } from 'react'
import { getShareText } from 'src/app/(cms)/constants'

interface Breadcrumb {
  article: AcademyArticle
}

export const Breadcrumb: FC<Breadcrumb> = ({ article }) => {
  const router = useRouter()

  const shareText = getShareText(article.title)
  const url = `https://www.sushi.com/academy/articles/${article.slug}`

  const onShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: shareText,
        text: shareText,
        url,
      })
    }
  }, [shareText, url])

  return (
    <Container
      maxWidth="6xl"
      className="px-4 mx-auto sm:mt-6 sticky sm:relative top-[54px] bg-slate-900 z-30 h-10 flex justify-between items-center sm:top-0"
    >
      <div
        onClick={router.back}
        onKeyDown={router.back}
        className="flex items-center gap-2 group cursor-pointer"
      >
        <ArrowLeftIcon
          width={12}
          className="text-slate-400 group-hover:text-slate-50"
        />
        <p className="text-sm font-medium cursor-pointer group-hover:text-slate-50 text-slate-400">
          Back
        </p>
      </div>
      <IconButton icon={ShareIcon} name="Share" onClick={onShare} />
    </Container>
  )
}
