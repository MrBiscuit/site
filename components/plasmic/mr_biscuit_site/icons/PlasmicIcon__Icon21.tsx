// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon21Icon(props: Icon21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 139 138"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1.913 68.59L69.442 1.06l67.529 67.53-67.53 67.528L1.914 68.589z"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"1.5"}
      ></path>
    </svg>
  );
}

export default Icon21Icon;
/* prettier-ignore-end */
