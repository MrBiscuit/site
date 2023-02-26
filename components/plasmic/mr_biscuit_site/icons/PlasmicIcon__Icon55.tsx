// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon55IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon55Icon(props: Icon55IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 3"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.083 1.807a1.167 1.167 0 112.334 0 1.167 1.167 0 01-2.334 0zm4.084 0a1.167 1.167 0 112.333 0 1.167 1.167 0 01-2.333 0zM0 1.807a1.167 1.167 0 112.333 0 1.167 1.167 0 01-2.333 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon55Icon;
/* prettier-ignore-end */
