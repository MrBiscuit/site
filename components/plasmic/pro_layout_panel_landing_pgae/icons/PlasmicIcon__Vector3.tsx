// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 349 359"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M165.035 9.99c49.154-8.226 105.406-21.813 143.447 10.385 39.27 33.238 44.176 92.335 38.299 143.447-5.247 45.635-36.516 80.304-67.884 113.862-33.007 35.312-65.728 76.168-113.862 80.576-51.229 4.691-103.946-18.051-136.816-57.622C-2.565 263.58-3.358 211.504 3.52 163.822c5.848-40.543 29.533-74.07 59.194-102.321 28.745-27.377 63.169-44.96 102.321-51.511z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
