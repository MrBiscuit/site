// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path19Icon(props: Path19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 11"}
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
          "M2.243.43c-.176-.488-.788-.593-1.085-.146C.22 1.724.18 3.603.084 5.274-.012 6.983-.202 8.78.72 10.297a.672.672 0 001.15 0c.814-1.33.738-2.822.733-4.338-.01-1.808.267-3.806-.361-5.529z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path19Icon;
/* prettier-ignore-end */
