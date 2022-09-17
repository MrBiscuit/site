// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector24Icon(props: Vector24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 212 74"}
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
          "M202.841 4.723s-6.813 17.986-55.3 30.978c-48.488 12.992-31.679-17.056-16.219-27.454 15.46-10.399 55.458-7.04 16.235 13.895C108.333 43.078 45.315 49.538 2.427 42.784"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector24Icon;
/* prettier-ignore-end */
