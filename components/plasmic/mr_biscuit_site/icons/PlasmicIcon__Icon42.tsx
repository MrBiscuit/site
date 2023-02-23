// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon42Icon(props: Icon42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.427 11.5v-1.167c0-1.087-.744-2-1.75-2.26M8.635 1.17a2.334 2.334 0 010 4.327M9.51 11.5c0-1.087 0-1.63-.177-2.06A2.333 2.333 0 008.07 8.178C7.64 8 7.097 8 6.01 8H4.26c-1.087 0-1.63 0-2.06.178A2.333 2.333 0 00.939 9.44C.76 9.87.76 10.413.76 11.5m6.708-8.167a2.333 2.333 0 11-4.666 0 2.333 2.333 0 014.666 0z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon42Icon;
/* prettier-ignore-end */
