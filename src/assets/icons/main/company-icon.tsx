import * as React from "react"
const CompanyIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <title>{"Group 18"}</title>
    <g fill="none" fillRule="nonzero">
      <circle cx={32} cy={32} r={32} fill="#F90" fillOpacity={0.08} />
      <path d="M16 16h32v32H16z" />
      <g
        stroke="#F90"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <path d="M20.8 25h22.4c1.546 0 2.8 1.28 2.8 2.857v14.286C46 43.72 44.746 45 43.2 45H20.8c-1.546 0-2.8-1.28-2.8-2.857V27.857C18 26.28 19.254 25 20.8 25Z" />
        <path d="M37 44V21.778c0-.737-.263-1.443-.732-1.964-.47-.521-1.105-.814-1.768-.814h-5c-.663 0-1.299.293-1.768.814A2.942 2.942 0 0 0 27 21.778V44" />
      </g>
    </g>
  </svg>
)
export default CompanyIcon
