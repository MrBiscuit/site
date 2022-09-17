// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector23Icon(props: Vector23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 213 59"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".2"}
        d={
          "M210.266 5.36s-2.322 19.813-50.81 32.805c-8.59 2.302-15.536 2.504-21.149 1.277-28.591-6.245 5.167-50.756 27.741-32.132 3.46 2.855 3.069 6.476-4.295 11.05-28.391 17.63-97.9 35.587-159.262 15.223"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector23Icon;
/* prettier-ignore-end */
