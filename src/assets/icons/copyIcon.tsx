import * as React from "react"
const CopyIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} {...props}>
    <title>{"copy"}</title>
    <g fill="none" fillRule="nonzero">
      <path
        fill="#549BFF"
        d="M18.071 0H7.658a3.617 3.617 0 0 0-3.614 3.614l-.083 13.118a3.587 3.587 0 0 0 1.05 2.57 3.595 3.595 0 0 0 2.565 1.068h11.81A3.617 3.617 0 0 0 23 16.756V4.929A4.935 4.935 0 0 0 18.071 0Z"
      />
      <rect
        width={19.057}
        height={19.057}
        y={3.943}
        fill="#BAD7FF"
        rx={3.575}
      />
    </g>
  </svg>
)
export default CopyIcon
