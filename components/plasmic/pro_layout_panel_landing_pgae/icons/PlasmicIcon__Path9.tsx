// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path9Icon(props: Path9IconProps) {
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
          "M3.266 1.034C3.146 0 1.936-.402 1.313.502.95 1.034.796 1.682.595 2.284c-.241.733-.492 1.421-.588 2.19-.125 1.019 1.396 1.591 2.029.843.527-.623.793-1.326.969-2.114.156-.693.346-1.456.261-2.169z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path9Icon;
/* prettier-ignore-end */
