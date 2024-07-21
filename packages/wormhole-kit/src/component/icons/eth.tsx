import * as React from 'react';

import type { IconProps } from './types';

export const Eth = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="15"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1920"
        xmlSpace="preserve"
      >
        <path fill="#8A92B2" d="M959.8 80.7 420.1 976.3 959.8 731z" />
        <path
          fill="#62688F"
          d="M959.8 731 420.1 976.3l539.7 319.1zM1499.6 976.3 959.8 80.7V731z"
        />
        <path fill="#454A75" d="m959.8 1295.4 539.8-319.1L959.8 731z" />
        <path fill="#8A92B2" d="m420.1 1078.7 539.7 760.6v-441.7z" />
        <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
      </svg>
    );
  },
);

Eth.displayName = 'Eth';

export default Eth;
