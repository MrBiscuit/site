// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path28Icon(props: Path28IconProps) {
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
          "M2.603 3.315C2.407 2.321 2.201.995 1.478.237 1.036-.229.323.047.133.594c-.317.899.015 2.099.15 3.008.166 1.104.286 2.26.974 3.178.282.377.764.397 1.04 0 .703-1.004.537-2.33.306-3.465z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path28Icon;
/* prettier-ignore-end */
