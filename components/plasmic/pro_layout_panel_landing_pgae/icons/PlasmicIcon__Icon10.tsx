// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M10.666 5h3a1 1 0 011 1v4a1 1 0 01-1 1h-3M5.667 5H2.333a1 1 0 00-1 1v4a1 1 0 001 1h3.334M8 2v12M4 8h1.333m5.333 0H12"
        }
        stroke={"currentColor"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
