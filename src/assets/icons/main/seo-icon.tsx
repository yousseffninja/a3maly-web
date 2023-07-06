
import * as React from "react"
const SeoIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} {...props}>
    <title>{"Icon-2"}</title>
    <g fill="none" fillRule="evenodd">
      <circle cx={35} cy={35} r={35} fill="#27A8EF" fillRule="nonzero" />
      <path d="M57 13H13v44h44z" />
      <path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.75}
        d="M49.667 24H20.333M49.667 35H20.333M49.667 46h-22"
      />
    </g>
  </svg>
)
export default SeoIcon
