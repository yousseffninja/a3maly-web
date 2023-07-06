import * as React from "react"
const BlogIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} {...props}>
    <title>{"Icon-2"}</title>
    <g fill="none" fillRule="evenodd">
      <circle cx={35} cy={35} r={35} fill="#7842E7" fillRule="nonzero" />
      <path d="M13 13h44v44H13z" />
      <path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.75}
        d="M18.5 24a3.667 3.667 0 0 1 3.667-3.667h25.666A3.667 3.667 0 0 1 51.5 24v22a3.667 3.667 0 0 1-3.667 3.667H22.167A3.667 3.667 0 0 1 18.5 46V24ZM25.833 27.667h18.334M25.833 35h18.334M25.833 42.333h18.334"
      />
    </g>
  </svg>
)
export default BlogIcon
