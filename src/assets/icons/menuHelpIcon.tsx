import * as React from "react"
const MenuHelpIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={19.5} height={19.5} {...props}>
    <title>{"menu_help"}</title>
    <g fill="none" fillRule="evenodd">
      <path d="M-2.25-2.25h24v24h-24z" />
      <path
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.75 9.75a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
      />
      <path
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M.75 9.75a9 9 0 1 0 18 0 9 9 0 0 0-18 0M12.75 12.75l3.35 3.35M6.75 12.75 3.4 16.1M3.4 3.4l3.35 3.35M16.1 3.4l-3.35 3.35"
      />
    </g>
  </svg>
)
export default MenuHelpIcon
