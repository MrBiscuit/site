// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line20Icon(props: Line20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 2"}
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
        d={"M0 1h40"}
        stroke={"currentColor"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Line20Icon;
/* prettier-ignore-end */
