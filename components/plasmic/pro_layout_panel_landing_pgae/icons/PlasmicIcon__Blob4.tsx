// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Blob4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Blob4Icon(props: Blob4IconProps) {
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
          "M183.925 18.942c23.28 10.526 38.435 23.453 27.394 31.446-11.093 7.994-48.435 11.075-80.413 15.704-31.978 4.63-58.59 10.81-80.1 8.75-21.51-2.06-37.967-12.378-45.883-23.736-7.917-11.357-7.344-23.792 9.582-33.789C31.432 7.32 64.712-.258 97.001.007c32.291.283 63.643 8.41 86.924 18.935z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Blob4Icon;
/* prettier-ignore-end */
