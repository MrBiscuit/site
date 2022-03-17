// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path78StrokeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path78StrokeIcon(props: Path78StrokeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 22"}
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
          "M0 2a2 2 0 012-2h13.333a2 2 0 012 2v17.333a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 2v13.333h9.333V4H4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path78StrokeIcon;
/* prettier-ignore-end */
