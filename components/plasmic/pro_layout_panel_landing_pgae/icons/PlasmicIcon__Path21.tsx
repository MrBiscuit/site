// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path21Icon(props: Path21IconProps) {
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
          "M.743.002c-.688-.05-.97.844-.537 1.29.743.769 1.596 1.286 2.204 2.205.577.873.904 1.933 1.592 2.721.306.352.793.106.938-.246C5.864 3.688 3.022.158.743.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path21Icon;
/* prettier-ignore-end */
