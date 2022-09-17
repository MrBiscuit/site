// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path13Icon(props: Path13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 6"}
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
          "M2.907.783C2.626-.28 1.094-.24.793.783.603 1.451.527 2.15.336 2.822.13 3.56-.136 4.253.08 5.022c.186.637.984 1.024 1.577.637 1.39-.909 1.642-3.374 1.25-4.876z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path13Icon;
/* prettier-ignore-end */
