// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path24Icon(props: Path24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 9"}
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
          "M1.312.042c-.13-.09-.306-.025-.387.1C.222 1.267.483 2.688.458 3.96.423 5.354-.33 7.02.172 8.357c.176.477.633.663 1.095.447 2.51-1.19 2.164-7.33.045-8.762z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path24Icon;
/* prettier-ignore-end */
