// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path3Icon(props: Path3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 7"}
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
          "M4.991.177c-1.19-.602-2.4.457-3.183 1.286C.84 2.493.041 3.813.001 5.229c-.026.823.878 1.225 1.546.888 1.075-.542 1.557-1.511 2.19-2.495.552-.854 1.58-1.637 1.706-2.661.036-.292-.195-.653-.452-.784z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path3Icon;
/* prettier-ignore-end */
