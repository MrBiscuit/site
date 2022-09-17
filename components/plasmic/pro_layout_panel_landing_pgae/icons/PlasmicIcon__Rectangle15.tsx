// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle15Icon(props: Rectangle15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 37"}
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
          "M6.654 0l2.983 2.105a19.141 19.141 0 015.818 6.563c.37.687.57 1.455.544 2.235-.135 4.01-.96 7.98-2.68 11.607C9.661 30.216 6.356 34.276 0 36.966c3.007-6.406 4.472-10.663 5.955-17.288.487-2.176.699-4.405.699-6.634V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle15Icon;
/* prettier-ignore-end */
