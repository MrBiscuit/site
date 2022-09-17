// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector30Icon(props: Vector30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 12"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.207 2.708c.6.4 1.1.8 1.7 1.3.3.3.9.6.7.9-.2.4-.8.1-1.2 0-.6-.1-.6-.2-1.2-.3-.2-.1-1.225-.878-1.025-.678.5.7 1.225 1.578 1.925 2.078.2.1.9.5.7.4-2.1-.6-3.1-1.4-4.7-2.7-.4-.3.7.7 1.1.9.9.7 1.8 1.4 2.7 2l.9.6c.2.1.8.5.6.5-1.9-.3-4-1.9-5.9-2.5-.1 0 .1.2.2.3.2.2.5.4.7.6.4.3.8.6 1.1 1 .1.1.5.4.3.4-.7 0-1.3-.2-2-.4-.3-.1-.9-.5-1-.2-.1.5.2 1.2.7 1.4 1.7.6 3.6.9 5.4.9 1.5 0 2.3-3.1 2-4.2-1-3.7-5.1-2.8-7.7-1.8-1.7.6-1.1 3.6-.9 4.6"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector30Icon;
/* prettier-ignore-end */
