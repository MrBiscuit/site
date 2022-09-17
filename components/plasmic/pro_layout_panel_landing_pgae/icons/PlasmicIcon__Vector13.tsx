// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector13Icon(props: Vector13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 27"}
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
          "M15.971 18.524c7.123-4.892 15.187-10.43 28.36-11.897 7.803-2.915 7.655-6.41 7.655-6.41.735-1.362-25.993 3.713-36.015 14.568C5.95 25.639 0 26.413 0 26.413c5.936-.997 10.696-4.266 15.971-7.89z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector13Icon;
/* prettier-ignore-end */
