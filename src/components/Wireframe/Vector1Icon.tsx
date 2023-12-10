import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 312 183' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M182.5 97L181.277 101.848L182.5 97ZM26.5 97L22.6419 93.8196L26.5 97ZM0.500018 182.5L34.8562 136.1L-22.5058 129.547L0.500018 182.5ZM306.552 1.21682C308.897 17.4048 301.748 46.2531 281.984 68.0388C262.597 89.4092 230.958 104.071 183.723 92.152L181.277 101.848C232.042 114.658 267.486 98.9031 289.391 74.7579C310.918 51.0281 319.27 19.2619 316.448 -0.216817L306.552 1.21682ZM183.723 92.152C157.284 85.4804 125.36 76.075 96.3877 73.0888C67.5875 70.1204 39.6041 73.2425 22.6419 93.8196L30.3582 100.18C43.8959 83.7575 67.1626 80.1296 95.3624 83.0362C123.39 85.925 154.216 95.0196 181.277 101.848L183.723 92.152ZM22.6419 93.8196C11.7006 107.093 4.89741 122.22 0.803863 136.403L10.4117 139.176C14.2244 125.966 20.4856 112.157 30.3582 100.18L22.6419 93.8196Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
