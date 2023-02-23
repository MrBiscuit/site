// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon45IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon45Icon(props: Icon45IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.885 1.417H8.46c.98 0 1.47 0 1.845.19.329.168.597.436.764.765.191.375.191.865.191 1.845v6.066c0 .98 0 1.47-.19 1.845a1.75 1.75 0 01-.765.765c-.375.19-.865.19-1.845.19H4.727c-.98 0-1.47 0-1.845-.19a1.75 1.75 0 01-.764-.765c-.191-.374-.191-.865-.191-1.845v-.408m7-2.042H6.302M8.927 5.5H6.885m2.042 4.667H4.26M3.094 6.083V2.875a.875.875 0 111.75 0v3.208a1.75 1.75 0 01-3.5 0V3.75"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon45Icon;
/* prettier-ignore-end */
