// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path23Icon(props: Path23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 9"}
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
          "M1.52.223C.918-.324-.267.203.054 1.077c.427 1.185.874 2.32 1.115 3.56.22 1.14.156 2.49.984 3.394.216.236.653.24.869 0 1.737-1.953.18-6.272-1.502-7.808z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path23Icon;
/* prettier-ignore-end */
