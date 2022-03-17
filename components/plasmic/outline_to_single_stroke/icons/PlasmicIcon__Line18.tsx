// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line18Icon(props: Line18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 4"}
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
        d={"M2 2h40"}
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Line18Icon;
/* prettier-ignore-end */
