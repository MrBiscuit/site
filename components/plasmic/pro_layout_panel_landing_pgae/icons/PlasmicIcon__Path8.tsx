// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path8Icon(props: Path8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 6"}
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
          "M2.487 2.355C2.357 1.275 1.905.03.655 0 .499-.005.308.09.238.236c-.316.718-.12 1.36-.09 2.12.025.792-.302 1.576-.056 2.349.171.542.91.984 1.431.587.91-.703 1.095-1.832.964-2.937z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path8Icon;
/* prettier-ignore-end */
