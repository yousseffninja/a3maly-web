import * as React from "react"
const UsersIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <title>{"users"}</title>
    <g fill="none" fillRule="nonzero">
      <circle cx={32} cy={32} r={32} fill="#7737FF" fillOpacity={0.08} />
      <path d="M16 16h32v32H16z" />
      <g
        stroke="#7737FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <path d="M44 46v-3a6 6 0 0 0-6-6H26a6 6 0 0 0-6 6v3M38 24a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
      </g>
    </g>
  </svg>
)
export default UsersIcon
