// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path79IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path79Icon(props: Path79IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 19"}
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
        d={"M1 1v17.333h13.333V1H1z"}
        stroke={"currentColor"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Path79Icon;
/* prettier-ignore-end */
