// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon51IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon51Icon(props: Icon51IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 3"}
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
          "M3.573 1.333a1 1 0 112 0 1 1 0 01-2 0zm3.5 0a1 1 0 112 0 1 1 0 01-2 0zm-7 0a1 1 0 112 0 1 1 0 01-2 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon51Icon;
/* prettier-ignore-end */
