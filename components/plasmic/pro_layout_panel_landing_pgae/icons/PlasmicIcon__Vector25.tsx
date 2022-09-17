// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector25Icon(props: Vector25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 213 70"}
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
        opacity={".2"}
        d={
          "M199.127 3.257s-8.532 19.061-57.019 32.053C93.621 48.302 113.57 18.424 129.03 8.026s45.233-4.692 6.01 16.244C95.816 45.206 35.198 51.022 2.548 41.917"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector25Icon;
/* prettier-ignore-end */
