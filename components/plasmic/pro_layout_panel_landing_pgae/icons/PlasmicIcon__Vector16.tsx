// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector16Icon(props: Vector16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 114 166"}
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
          "M82.982 164.757c44.198-9.863 29.103-45.63 22.128-58.347a16.94 16.94 0 01-1.971-6.235c-.258-2.278-.61-4.569-1.186-6.789-4.42-17.032-2.527-66.838-63.355-87.632C24.291.864 11.495-.745 0 .307c7.576.67 20.692 2.863 29.42 5.447 49.512 14.654 66.015 69.14 59.975 89.078-.377 1.243-.76 2.502-.73 3.8a17.002 17.002 0 002.075 7.778c6.976 12.717 22.071 48.484-22.128 58.347l-.18.04c4.042 1.136 8.76 1.252 14.55-.04z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector16Icon;
/* prettier-ignore-end */
