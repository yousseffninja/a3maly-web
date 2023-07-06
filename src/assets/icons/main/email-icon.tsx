import * as React from "react"
const EmailIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} {...props}>
    <title>{"Icon-3"}</title>
    <g fill="none" fillRule="evenodd">
      <circle cx={35} cy={35} r={35} fill="#4FC353" fillRule="nonzero" />
      <path d="M13 13h44v44H13z" />
      <path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.75}
        d="M18.5 25.833a3.667 3.667 0 0 1 3.667-3.666h25.666a3.667 3.667 0 0 1 3.667 3.666v18.334a3.667 3.667 0 0 1-3.667 3.666H22.167a3.667 3.667 0 0 1-3.667-3.666V25.833Z"
      />
      <path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.75}
        d="m18.5 25.833 16.5 11 16.5-11"
      />
    </g>
  </svg>
)
export default EmailIcon
