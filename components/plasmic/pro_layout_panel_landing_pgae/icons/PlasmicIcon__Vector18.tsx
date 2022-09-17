// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector18Icon(props: Vector18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 287 62"}
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
          "M2 20.536S9.371 2 59.569 2C109.766 2 92.02 53.051 92.02 53.051S20.24 30.217 52.225 20.536c31.986-9.682 104.131-18.536 161.462 0 57.33 18.535 71.195 40.067 71.195 40.067"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */
