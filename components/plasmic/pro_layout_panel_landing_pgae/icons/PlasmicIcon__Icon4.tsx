// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 7"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M3.498 1.432l-.353.354-1.147 1.146h13.586l-1.146-1.146-.354-.354.707-.707.354.354 2 2 .353.353-.353.354-2 2-.354.353-.707-.707.354-.353 1.146-1.147H1.998L3.145 5.08l.353.353-.707.707-.353-.353-2-2-.354-.354.354-.353 2-2L2.79.725l.707.707z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
