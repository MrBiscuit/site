// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path18Icon(props: Path18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 10"}
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
          "M2.117.183c-.08-.21-.331-.251-.467-.06C.676 1.503.485 3.24.244 4.878c-.21 1.461-.527 3.038.262 4.358a.72.72 0 001.23 0c.758-1.215.592-2.686.652-4.067.076-1.657.332-3.404-.27-4.986z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path18Icon;
/* prettier-ignore-end */
