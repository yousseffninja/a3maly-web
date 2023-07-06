import * as React from "react"
const SocialIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} {...props}>
    <title>{"Icon-6"}</title>
    <g fill="none" fillRule="evenodd">
      <circle cx={35} cy={35} r={35} fill="#FF5895" fillRule="nonzero" />
      <path d="M13 13h44v44H13z" />
      <path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.75}
        d="M31.333 22.167a3.667 3.667 0 1 0 7.334 0 3.667 3.667 0 0 0-7.334 0M18.5 47.833a3.667 3.667 0 1 0 7.333 0 3.667 3.667 0 0 0-7.333 0M44.167 47.833a3.667 3.667 0 1 0 7.333 0 3.667 3.667 0 0 0-7.333 0M29.5 38.667a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0M35 25.833v7.334M25.283 45.633l5.134-3.666M44.717 45.633l-5.134-3.666"
      />
    </g>
  </svg>
)
export default SocialIcon
