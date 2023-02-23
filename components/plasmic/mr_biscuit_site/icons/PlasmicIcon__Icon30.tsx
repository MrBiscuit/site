// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon30Icon(props: Icon30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 126 126"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".4"}
        d={
          "M84.793 62.711l-.218.34.218.34 39.756 61.859H1.196l39.756-61.86.218-.34-.218-.339L1.196.851h123.353l-39.756 61.86z"
        }
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"1.257"}
      ></path>
    </svg>
  );
}

export default Icon30Icon;
/* prettier-ignore-end */
