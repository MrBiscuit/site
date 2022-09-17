// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path20Icon(props: Path20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 8"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.775.249c-.146-.337-.733-.327-.879 0C.4 1.349.314 2.513.158 3.693c-.156 1.17-.351 2.44.261 3.505.236.412.839.397 1.08 0 .617-1.024.582-2.345.637-3.505.06-1.2.11-2.325-.361-3.444z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path20Icon;
/* prettier-ignore-end */
