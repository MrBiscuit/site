// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path17Icon(props: Path17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 7"}
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
          "M3.024.186a.195.195 0 00-.326-.135C1.87.789 1.383 1.607.956 2.627.464 3.802-.25 5.032.087 6.327c.106.407.567.457.859.226.934-.743 1.16-1.993 1.526-3.078.377-1.114.648-2.104.552-3.289z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path17Icon;
/* prettier-ignore-end */
