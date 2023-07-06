import * as React from "react"
const WordsIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <title>{"words"}</title>
    <g fill="none" fillRule="nonzero">
      <circle cx={32} cy={32} r={32} fill="#FB5392" fillOpacity={0.08} />
      <path d="M16 16h32v32H16z" />
      <g
        stroke="#FB5392"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <path d="M34.75 18h-11c-.73 0-1.429.295-1.945.82A2.826 2.826 0 0 0 21 20.8v22.4c0 .743.29 1.455.805 1.98.516.525 1.216.82 1.945.82h16.5c.73 0 1.429-.295 1.945-.82A2.826 2.826 0 0 0 43 43.2V26.4L34.75 18Z" />
        <path d="M34.75 18v8.4H43M37 34H26M37 40H26M29 28h-3" />
      </g>
    </g>
  </svg>
)
export default WordsIcon
