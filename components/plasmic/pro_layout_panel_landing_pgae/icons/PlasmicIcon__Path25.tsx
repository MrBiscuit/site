// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path25Icon(props: Path25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 8"}
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
          "M2.585 3.46C2.465 2.23 2.188.894 1.164.116.722-.221-.061.23.004.783c.135 1.115.24 2.22.291 3.344.05 1.09.08 2.305.834 3.169.195.22.612.22.803 0 .909-1.045.778-2.556.653-3.836z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path25Icon;
/* prettier-ignore-end */
