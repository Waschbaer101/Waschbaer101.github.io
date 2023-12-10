import { memo, SVGProps } from 'react';

const Vector2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 162 720' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M103.5 145L99.264 142.344L103.5 145ZM3 347.5L-1.91492 346.582L3 347.5ZM92.5 720L104.071 663.436L49.2997 681.698L92.5 720ZM155.548 1.189C159.34 28.448 150.393 55.8394 137.722 80.597C124.981 105.49 109.137 126.601 99.264 142.344L107.736 147.656C116.991 132.899 133.646 110.51 146.624 85.153C159.671 59.6606 169.66 30.052 165.452 -0.189004L155.548 1.189ZM99.264 142.344C84.552 165.803 61.6101 204.501 41.204 243.397C20.9145 282.071 2.74382 321.651 -1.91492 346.582L7.91493 348.418C12.2556 325.19 29.6774 286.893 50.0593 248.043C70.3246 209.415 93.1331 170.942 107.736 147.656L99.264 142.344ZM-1.91492 346.582C-5.65594 366.601 -4.44707 392.413 -0.280979 420.796C3.89823 449.269 11.1162 480.724 19.6551 512.201C36.7326 575.153 59.199 638.567 73.552 678.975L82.9752 675.628C68.6132 635.195 46.2705 572.117 29.3063 509.583C20.8243 478.316 13.7133 447.279 9.61301 419.344C5.49964 391.32 4.47861 366.807 7.91493 348.418L-1.91492 346.582Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(Vector2Icon);
export { Memo as Vector2Icon };