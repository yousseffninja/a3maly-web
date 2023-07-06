import * as React from "react"
const FeedbackIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <title>{"feedback"}</title>
    <g fill="none" fillRule="nonzero">
      <circle cx={32} cy={32} r={32} fill="#69C85A" fillOpacity={0.08} />
      <path d="M16 16h32v32H16z" />
      <g
        stroke="#69C85A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <path d="M46 32c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14Z" />
        <path d="M26.4 34.8c1.4 2 3.267 3 5.6 3 2.333 0 4.2-1 5.6-3M27.8 27.8h.014M36.2 27.8h.014" />
      </g>
    </g>
  </svg>
)
export default FeedbackIcon
