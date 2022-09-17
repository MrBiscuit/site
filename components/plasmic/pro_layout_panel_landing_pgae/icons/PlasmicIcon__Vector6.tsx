// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 25"}
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
          "M5.85 24.344C5.933 15.677 6.328 9.792.318.867.061.484.529-.008.916.244L6.42 3.815l1.62 1.192a8.294 8.294 0 012.705 9.97L6.634 24.51c-.179.413-.789.285-.785-.166z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
