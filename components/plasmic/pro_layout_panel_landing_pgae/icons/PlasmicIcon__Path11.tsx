// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path11Icon(props: Path11IconProps) {
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
          "M2.15.587C1.833-.196.864-.196.548.587.086 1.742.151 3.178.061 4.41c-.06.803-.321 2.726 1.004 2.726 1.18 0 1.336-1.466 1.401-2.33.1-1.32.18-2.967-.316-4.218z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path11Icon;
/* prettier-ignore-end */
