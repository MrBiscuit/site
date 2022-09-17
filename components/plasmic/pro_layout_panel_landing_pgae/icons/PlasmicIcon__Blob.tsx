// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BlobIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BlobIcon(props: BlobIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 215 76"}
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
          "M176.439 14.404c21.548 8.17 40.63 17.792 38.38 26.498-2.25 8.724-25.789 16.532-47.38 22.094-21.548 5.545-41.106 8.844-65.64 10.831-24.534 1.97-54 2.626-74.121-2.937C7.558 65.328-3.217 53.564.85 43.424s23.02-18.638 43.14-26.826C64.11 8.427 85.4.584 108.115.032c22.673-.553 46.775 6.201 68.323 14.372z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BlobIcon;
/* prettier-ignore-end */
