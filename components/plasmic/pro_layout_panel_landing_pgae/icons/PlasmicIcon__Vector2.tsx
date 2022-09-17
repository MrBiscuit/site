// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 397 365"}
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
        opacity={".2"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M174.026 1.244c51.909 6.804 77.608 61.279 115.403 97.504 39.325 37.691 113.665 61.376 106.731 115.403-7.063 55.027-93.53 50.146-132.986 89.148-38.934 38.486-82.051 66.332-104.48 60.322-22.43-6.01-58.649-.072-91.187-42.95-25.62-33.762-52.996-64.739-60.107-106.52-8.787-51.622-15.866-108.983 16.407-150.22C58.57 19.514 118.1-6.085 174.026 1.245z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
