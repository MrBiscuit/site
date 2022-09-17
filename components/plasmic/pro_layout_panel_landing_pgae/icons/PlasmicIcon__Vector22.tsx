// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector22Icon(props: Vector22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 15"}
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
          "M18 1.732a7.394 7.394 0 01-2.12.581A3.703 3.703 0 0017.502.27a7.373 7.373 0 01-2.345.895 3.694 3.694 0 00-6.293 3.37A10.487 10.487 0 011.253.674a3.693 3.693 0 001.143 4.93 3.684 3.684 0 01-1.672-.46v.047a3.695 3.695 0 002.962 3.62 3.72 3.72 0 01-1.668.064 3.695 3.695 0 003.45 2.564A7.41 7.41 0 010 12.97a10.445 10.445 0 005.66 1.66c6.794 0 10.508-5.628 10.508-10.508 0-.158-.004-.318-.011-.477a7.508 7.508 0 001.841-1.91L18 1.732z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector22Icon;
/* prettier-ignore-end */
