// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector28Icon(props: Vector28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 56"}
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
          "M22.466 28.46c.2.4 2.7 5 3.6 5.7.3.2 2.7 1.6 3.7.8.4-.3.5-.9.7-1.3.5-1 1.1-2 1.3-3.1.6-3.6.3-7.1-.8-10.6-.3-.8-.9-1.4-1.3-2.1-.1-.3-.4-.7-.3-.9.2-.3.6-.3 1-.4 1.3-.4 2.6-.7 3.9-1 2.35-.604 8.889-3.784 10.3-5.8.3-.5.9-1.1.6-1.6-.9-1.6-7.7-1.639-13.4-2.384-5.7-.745-12.918-2.915-21.5-2.915-1.4 0-2.9-.3-4.2.2-1.963.98 13.91 20.917 16.4 25.4z"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
      ></path>
    </svg>
  );
}

export default Vector28Icon;
/* prettier-ignore-end */
