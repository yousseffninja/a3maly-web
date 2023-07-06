import * as React from "react"
const FinanceIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} {...props}>
    <title>{"Icon-4"}</title>
    <g fill="none" fillRule="evenodd">
      <circle cx={35} cy={35} r={35} fill="#FC362E" fillRule="nonzero" />
      <path d="M57 13H13v44h44z" />
      <path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.75}
        d="M49.667 24A3.667 3.667 0 0 0 46 20.333H24A3.667 3.667 0 0 0 20.333 24v22A3.667 3.667 0 0 0 24 49.667h22A3.667 3.667 0 0 0 49.667 46V24ZM38.667 20.333l-7.334 29.334M35 35l14.667 3.667"
      />
    </g>
  </svg>
)
export default FinanceIcon
