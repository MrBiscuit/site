// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector17Icon(props: Vector17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 94 25"}
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
          "M85.68 1.65C32.345-8.38 34.561 31.147 1.692 17.612l5.846 3.486C42.19 36.71 38.986-4.332 93.218 5.866L85.679 1.65z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector17Icon;
/* prettier-ignore-end */
