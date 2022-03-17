// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Union3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Union3Icon(props: Union3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 15"}
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
          "M4.218 3.816l.003-.002 9.51 7.389M4.219 3.816l9.514 7.387M4.218 3.816L2 5.632m2.218-1.816L6.435 2m7.297 9.203l-2.218 1.815m2.218-1.815l2.217-1.816"
        }
        stroke={"currentColor"}
        strokeWidth={"1.75"}
        strokeLinecap={"square"}
        strokeLinejoin={"round"}
        strokeDasharray={"2.62 2.62"}
      ></path>
    </svg>
  );
}

export default Union3Icon;
/* prettier-ignore-end */
