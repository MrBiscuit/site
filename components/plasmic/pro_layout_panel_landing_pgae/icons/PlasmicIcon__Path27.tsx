// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path27Icon(props: Path27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 12"}
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
          "M4.308 6.027C3.409 4.099 2.184 1.558.632.092.457-.068.12-.018.07.242c-.341 1.662.638 3.405 1.35 4.87 1.02 2.11 1.12 4.249 1.833 6.423.151.467.703.497.975.13 1.26-1.717.939-3.785.08-5.638z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path27Icon;
/* prettier-ignore-end */
