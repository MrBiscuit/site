// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle24Icon(props: Rectangle24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 60 22"}
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
        opacity={".15"}
        d={
          "M0 2.482S18.152 0 29.85 0c11.697 0 29.849 2.482 29.849 2.482v19.055s-18.152-2.482-29.85-2.482C18.152 19.055 0 21.537 0 21.537V2.482z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle24Icon;
/* prettier-ignore-end */
