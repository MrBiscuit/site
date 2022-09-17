// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector15Icon(props: Vector15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 114 135"}
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
          "M23.335 83.756c4.9-3.398 9.046-14.446 11.862-21.956C39.869 49.343 65.038 2.79 113.332.178c-54.59-3.594-82.786 48.298-87.76 61.559-2.815 7.51-8.362 12.764-13.263 16.162C6.746 81.757 1.412 86.601.503 93.31c-1.623 11.983-.428 31.26 20.72 40.788-28.166-12.69-19.102-35.631 2.112-50.341z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector15Icon;
/* prettier-ignore-end */
