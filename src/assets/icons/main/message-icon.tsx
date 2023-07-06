import * as React from "react"
const MessageIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} {...props}>
    <title>{"Icon-5"}</title>
    <g fill="none" fillRule="evenodd">
      <circle cx={35} cy={35} r={35} fill="#FFD457" fillRule="nonzero" />
      <path d="M13 13h44v44H13z" />
      <path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.75}
        d="M27.667 29.5h14.666M27.667 36.833h11M29.5 46H24a5.5 5.5 0 0 1-5.5-5.5V25.833a5.5 5.5 0 0 1 5.5-5.5h22a5.5 5.5 0 0 1 5.5 5.5V40.5A5.5 5.5 0 0 1 46 46h-5.5L35 51.5 29.5 46Z"
      />
    </g>
  </svg>
)
export default MessageIcon
