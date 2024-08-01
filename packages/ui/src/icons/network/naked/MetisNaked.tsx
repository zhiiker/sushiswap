import * as React from 'react'

import { NakedNetworkIconComponent } from '../../../types'

export const MetisNaked: NakedNetworkIconComponent = (props) => (
  <svg
    {...props}
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {props.circle}
    <path
      d="M103.991 64.1409C103.523 41.8745 84.9576 24.2553 62.6121 25.0242C40.8019 25.7598 23.541 44.0142 24.0093 65.8459C24.3438 81.9606 34.2119 95.6682 48.0942 101.686C50.0679 99.1786 51.707 94.6986 52.5098 92.1911C53.3126 90.1517 54.1824 88.1457 55.0856 86.2066C59.1332 87.6108 64.5857 86.2735 67.5963 83.0305L67.7301 82.8968C64.1174 81.3254 59.1332 82.1278 55.8549 84.6687C56.9588 82.3618 58.1631 80.1218 59.4008 77.9487C63.3815 79.5535 68.9009 78.4502 72.0119 75.3743L72.1457 75.2406C68.6668 73.5355 63.7494 74.0704 60.3708 76.3439C61.6085 74.3045 62.8797 72.2985 64.2178 70.4263C68.3657 71.6967 73.8183 70.1254 76.6616 66.7486L76.762 66.6149C73.3834 65.311 68.9678 66.08 65.8234 68.2865C65.9238 68.1528 66.0576 67.9856 66.1579 67.8519C66.9608 66.8155 67.797 65.7791 68.6333 64.7761C73.5172 63.4053 77.8659 58.4238 78.5684 53.2751L78.6018 53.0745H78.5684C73.5172 54.0775 68.834 59.059 67.8974 64.308C67.0946 65.2776 66.2917 66.2471 65.5224 67.2501C66.7935 63.84 66.5593 59.6608 64.7195 56.7856L64.6192 56.9193C61.8427 60.4298 61.4078 66.1468 63.5487 69.9582C62.2776 71.7636 61.0399 73.6024 59.8691 75.5415C60.605 71.6633 59.3673 67.1498 56.6243 64.6089L56.5574 64.7761C54.751 68.8215 55.7211 74.4048 58.6983 77.5809C57.5275 79.6203 56.4236 81.7266 55.3532 83.8997C55.9887 79.8544 54.5503 75.1737 51.6735 72.6663L51.6066 72.8334C49.9675 77.0794 51.2387 82.8299 54.4165 85.9057C53.7141 87.4102 53.045 88.9147 52.4095 90.4861C52.2422 90.3189 52.0415 90.2186 51.8073 90.1183C50.971 89.8843 49.8337 89.4496 48.5626 88.6807C47.7263 88.1792 46.8231 87.778 45.9199 87.4771C42.3072 86.3069 42.8424 84.5684 40.9691 81.0579C40.8353 80.8239 39.3634 79.286 39.0289 78.9851C38.962 78.9182 37.9919 78.3499 37.5236 77.3469C37.0888 76.4108 36.8212 75.5415 36.7542 74.7057C36.6204 73.569 36.1521 72.8334 35.0482 72.4322C29.7295 70.5934 32.1045 63.7062 32.3052 62.8035C32.4725 62.0346 31.77 60.3295 31.5358 59.3934C31.5024 59.2931 31.4689 59.1593 31.4355 58.9587C31.0675 57.1199 31.9038 55.5486 32.5394 54.9133C33.175 54.2781 35.3827 53.2417 35.8511 52.6399C36.3194 52.0381 36.6539 51.3694 37.1222 50.8011C37.7578 50.0321 39.6311 48.5276 42.2068 47.1569C43.7456 46.3211 44.0132 44.1814 44.6153 43.5127C45.6188 42.376 47.1576 42.376 48.2949 41.373C48.8636 40.8715 49.6999 40.604 50.2351 40.0691C52.8778 37.361 56.3901 36.2912 59.8691 35.6225C62.2107 35.1879 64.8199 35.8565 67.2953 36.2912C67.6632 36.358 67.9977 36.4249 68.3323 36.5252C73.8517 36.7258 80.4751 37.8625 82.8836 40.2028C84.3889 41.6739 85.1248 43.2452 85.4593 44.3485C85.8607 45.5855 86.396 46.7557 87.065 47.8255L88.5368 50.2327C89.4735 51.7372 89.7745 53.576 89.3731 55.3145C89.139 56.3175 89.0386 57.354 89.3062 57.9223C89.7745 58.825 91.1795 60.2961 92.0158 61.1319C92.4172 61.5331 92.8855 61.9008 93.3538 62.2017C94.4912 62.9038 96.632 64.308 96.632 64.4083C96.632 64.5755 96.7993 65.2441 95.8627 66.08C94.926 66.9158 93.1197 68.2197 93.1197 68.2197C93.1197 68.2197 93.22 68.8215 93.4542 69.2895C93.7218 69.7576 94.3239 70.4931 94.1232 71.1283C93.9225 71.7636 92.6179 72.2985 92.9859 73.0006C93.3538 73.7361 94.2905 73.9367 94.0229 74.6054C93.7552 75.2406 92.4506 76.3773 92.5844 76.8454C92.7183 77.3134 93.7887 81.7935 91.3133 82.5624C89.4735 83.1642 84.3889 83.4651 82.0138 83.5989C80.9768 83.6657 80.0737 84.2341 79.5719 85.1368C79.2039 85.8054 78.836 86.7416 78.6687 87.9786C78.2004 91.1213 75.0894 98.3762 75.0894 98.3762C75.0894 98.3762 74.9891 98.5768 74.8553 98.8777C74.5877 99.5464 74.1862 100.549 74.2531 100.984C74.2866 101.251 74.6546 101.786 75.1898 102.422C75.6246 102.923 76.3271 103.124 76.9627 102.923C92.9859 97.3064 104.359 81.9606 103.991 64.1409Z"
      fill="#00DACC"
    />
  </svg>
)
