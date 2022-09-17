// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path22Icon(props: Path22IconProps) {
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
          "M3.269 4.247C2.952 2.787 2.174.682.688.045.387-.081-.005.06 0 .44c.03 1.175.643 2.355.869 3.52.256 1.346-.015 2.636.462 3.937.11.301.507.567.813.331C3.43 7.245 3.61 5.8 3.27 4.247z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path22Icon;
/* prettier-ignore-end */
