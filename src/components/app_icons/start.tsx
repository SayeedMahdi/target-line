import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SvgComponent = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={13}
    viewBox='0 0 512.009 512.009'
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    xmlSpace='preserve'
    {...props}
  >
    <path
      d='M508.625 247.801 392.262 131.437c-4.18-4.881-11.526-5.45-16.407-1.269-4.881 4.18-5.45 11.526-1.269 16.407.39.455.814.88 1.269 1.269l96.465 96.582H11.636C5.21 244.426 0 249.636 0 256.063s5.21 11.636 11.636 11.636H472.32l-96.465 96.465c-4.881 4.18-5.45 11.526-1.269 16.407s11.526 5.45 16.407 1.269c.455-.39.88-.814 1.269-1.269l116.364-116.364c4.511-4.537 4.511-11.867-.001-16.406z'
      fill='#FFF'
      data-original='#FFF'
    />
  </svg>
);

export default SvgComponent;
