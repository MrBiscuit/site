// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 48"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M27.976 1.888C39.77 11.221 2.938 37.354 1.01 35.6-.92 33.846 16.182-7.445 27.976 1.888zM7.65 45.875c-.569-2.485 24.494-17.618 26.633-7.923C36.42 47.647 8.216 48.36 7.649 45.875z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
