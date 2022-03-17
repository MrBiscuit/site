// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line19Icon(props: Line19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 9"}
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
        d={
          "M1 4.108h11.705M1 4.108V1m0 3.108v3.107m11.705-3.107V1m0 3.108v3.107"
        }
        stroke={"currentColor"}
        strokeWidth={"1.75"}
        strokeLinecap={"square"}
        strokeLinejoin={"round"}
        strokeDasharray={"2.62 2.62"}
      ></path>
    </svg>
  );
}

export default Line19Icon;
/* prettier-ignore-end */
