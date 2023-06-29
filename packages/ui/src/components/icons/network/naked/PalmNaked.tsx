import * as React from 'react'
import { IconComponent } from '../../../../types'

export const PalmNaked: IconComponent = (props) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.5465 24.9607C26.6197 25.4635 25.4425 26.6851 24.9311 27.6753C24.3846 28.732 24 31.102 24 33.4147C24 36.4949 24.3065 37.8113 25.4037 39.4459C26.5015 41.0823 29.0788 42.6971 37.2498 46.8703C46.6585 51.6756 47.7126 52.3734 47.8991 53.9175C48.0332 55.0302 47.7218 55.9115 47.0123 56.4309C46.4105 56.8703 45.6252 57.2291 45.2671 57.2272C44.9083 57.226 41.8615 55.2875 38.4954 52.9193C33.464 49.38 31.9502 48.6144 29.9865 48.6144C28.1668 48.6144 27.1692 49.0428 25.7988 50.4133C24.5077 51.7051 24 52.8098 24 54.3305C24 55.5225 24.5422 57.1386 25.2406 58.0261C25.9225 58.8932 27.3766 59.8756 28.4714 60.2083C29.5662 60.5411 36.1385 61.1512 43.0769 61.5635C50.0154 61.9758 56.8 62.5244 58.1538 62.7815C60.5934 63.2453 60.585 63.2505 57.2308 63.3156C55.3692 63.3521 48.6609 63.0892 42.3237 62.7314C31.8455 62.1398 30.5982 62.1771 28.5588 63.145C27.3255 63.7305 25.7963 65.0624 25.1606 66.1046C24.4806 67.2198 24.0055 69.1407 24.0062 70.7697C24.0074 72.429 24.4646 74.2312 25.1465 75.2655C25.7723 76.2149 26.9317 77.4453 27.7231 77.9991C28.5803 78.5996 30.2935 78.9872 31.9655 78.9582C34.1366 78.9209 37.1249 77.7908 45.2098 73.9521C53.1791 70.167 55.8449 69.1547 56.4714 69.6747C57.1446 70.2334 57.1489 70.4914 56.4923 71.1099C56.0523 71.5248 49.4615 74.5428 41.8461 77.8176C32.7754 81.7173 27.3631 84.3982 26.1538 85.5894C24.4209 87.2967 24.2966 87.738 24.1243 92.782C23.968 97.3516 24.1311 98.4611 25.2148 100.193C25.9151 101.314 27.4757 102.643 28.6825 103.147C30.4646 103.892 33.6308 104.029 45.544 103.88L57.9436 103.723C59.4033 103.705 60.8044 103.147 61.8769 102.156C62.7934 101.31 63.92 99.7341 64.3802 98.6536C65.1103 96.9411 65.0215 95.1319 63.6857 84.5011C62.8431 77.7965 62.1538 71.9187 62.1538 71.4378C62.1538 70.9574 62.3508 70.7609 62.5908 71.0017C62.8312 71.2417 63.7877 77.4308 64.7165 84.7543C65.6448 92.0787 66.7415 98.8839 67.1534 99.8787C67.5648 100.873 68.7543 102.207 69.7969 102.842C71.0259 103.591 72.8497 103.999 74.9846 104C77.9094 104.003 78.5103 103.769 80.3692 101.91C81.8307 100.448 82.4615 99.2536 82.4615 97.9472C82.4615 96.6492 81.7077 95.2061 80 93.2325C78.3987 91.382 77.5384 89.7894 77.5384 88.6747C77.5384 87.7323 78.0448 86.5028 78.6642 85.9428C79.2831 85.3828 80.4861 84.9244 81.338 84.9244C82.1894 84.9244 83.3231 85.4088 83.858 86.0013C84.3921 86.5934 86.3318 90.2633 88.1679 94.1556C90.0044 98.0483 92.0677 101.73 92.7538 102.337C93.44 102.943 94.9617 103.596 96.1358 103.786C97.5072 104.009 98.9617 103.775 100.202 103.134C101.264 102.585 102.553 101.323 103.066 100.33C103.812 98.8875 104 95.9767 104 85.8584C104 76.4861 103.779 72.6633 103.151 71.1609C102.685 70.0439 101.508 68.4949 100.536 67.7191C98.803 66.3349 98.5718 66.3152 88.4615 66.6998C82.3279 66.9332 78.1538 66.8628 78.1538 66.527C78.1538 66.2163 79.4694 65.8 81.0769 65.6026C82.6844 65.4048 87.3173 64.9538 91.3723 64.6C95.9472 64.2004 99.2857 63.6018 100.171 63.0215C100.955 62.5077 102.137 61.2018 102.796 60.1204C103.456 59.0385 103.996 57.2943 103.997 56.2444C103.999 55.1945 103.369 53.3981 102.597 52.2528C101.825 51.1081 100.509 49.825 99.6738 49.4015C98.8373 48.9788 97.2356 48.6286 96.1134 48.6236C94.9912 48.6187 93.4681 48.9308 92.7288 49.3172C91.9894 49.7037 86.9169 53.5809 81.4558 57.9331C75.9956 62.2853 71.2184 65.8461 70.8404 65.8461C70.4628 65.8461 70.1538 65.6044 70.1538 65.309C70.1538 65.0136 77.2242 59.3129 85.865 52.6418C94.5063 45.9706 102.032 39.817 102.589 38.9677C103.145 38.1184 103.72 35.9866 103.865 34.2308C104.034 32.1901 103.787 30.2176 103.179 28.7622C102.646 27.4858 101.334 25.9411 100.191 25.2444C98.3367 24.1132 97.1059 24.0019 86.4615 24.0019C75.9481 24.0019 74.5705 24.1231 72.7995 25.2038C71.7156 25.8641 70.4343 27.1787 69.9525 28.1246C69.4708 29.0705 68.0369 33.7212 66.7666 38.46C65.4958 43.1987 64.2242 47.4913 63.9398 47.999C63.5433 48.7055 63.418 48.583 63.4031 47.4759C63.3934 46.6802 63.9613 42.6159 64.6659 38.444C65.898 31.1531 65.9059 30.7709 64.869 28.5868C64.2765 27.3368 62.938 25.794 61.8954 25.1582C60.5327 24.3274 58.8234 24.0012 55.8154 24C53.2375 23.9982 50.9237 24.3631 49.7883 24.9508C48.7748 25.4746 47.4049 26.7903 46.7446 27.8741C46.0837 28.9572 45.5421 30.8651 45.5409 32.1131C45.5391 33.7957 46.256 35.4302 48.3163 38.4397C49.8443 40.6718 52.1028 43.9434 53.3354 45.7102C54.5674 47.4765 56.7791 50.6189 58.2498 52.6928C59.72 54.7668 60.9231 56.7743 60.9231 57.1546C60.9231 57.535 60.7151 57.8371 60.4615 57.8267C60.2075 57.8162 54.7385 50.6392 48.3077 41.8774C41.8769 33.1163 35.8806 25.509 34.9822 24.973C34.0837 24.4364 32.4222 24.0086 31.2898 24.0222C30.1575 24.0357 28.4726 24.4579 27.5465 24.9607Z"
      fill="url(#paint0_linear_318_827)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_318_827"
        x1={22.1081}
        y1={68.3244}
        x2={104}
        y2={66.9732}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4D286C" />
        <stop offset={0.203125} stopColor="#E0BD10" />
        <stop offset={0.34375} stopColor="#522B70" />
        <stop offset={0.604167} stopColor="#522B70" />
        <stop offset={0.823724} stopColor="#D8B221" />
        <stop offset={0.9928} stopColor="#703D86" />
      </linearGradient>
    </defs>
  </svg>
)
