// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Blob2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Blob2Icon(props: Blob2IconProps) {
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
          "M184.338 16.091c19.924 9.089 33.17 19.746 30.262 31.065-2.961 11.3-22.077 23.26-49.162 26.85-27.031 3.59-62.085-1.171-95.524-6.897C36.53 61.365 4.76 54.676.506 46.305c-4.254-8.39 19.062-18.423 42.054-27.757C65.606 9.194 88.33.578 112.992.03c24.715-.567 51.369 6.972 71.346 16.061z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Blob2Icon;
/* prettier-ignore-end */
