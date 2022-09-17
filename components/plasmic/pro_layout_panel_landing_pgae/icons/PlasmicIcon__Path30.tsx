// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path30Icon(props: Path30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 9"}
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
          "M1.628.571C1.282-.273.087-.167.022.791c-.096 1.357.145 2.717.316 4.063.156 1.205.2 2.345.924 3.36.266.37.763.39 1.024 0 1.35-2.014.166-5.59-.658-7.643z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path30Icon;
/* prettier-ignore-end */
