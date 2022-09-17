// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SubtractIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SubtractIcon(props: SubtractIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 144 98"}
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
          "M10.407 22.177a39.428 39.428 0 00-1.586 8.387c.965-4.162 1.736-5.25 3.897-3.714a72.81 72.81 0 01-2.311-4.673z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M10.407 22.177C8.392 15.34 8.549 8.412 9.284 2.983L9.904 0C7.237 3.505 4.891 7.63 2.923 12.48c-10.204 25.14 7.33 54.219 36.72 73.587L60.68 97.403s-16.908-11.346-25.708-20.28c-16.281-16.53-27.484-29.775-26.15-46.56a39.428 39.428 0 011.586-8.386z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SubtractIcon;
/* prettier-ignore-end */
