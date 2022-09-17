// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path7Icon(props: Path7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 6"}
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
          "M5.445 0C3.265.102 1 2.13.102 4.029c-.457.959.718 2.018 1.532 1.18.698-.714 1.39-1.416 2.164-2.054.798-.663 1.692-1.32 2.149-2.28.176-.371-.03-.894-.502-.873z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path7Icon;
/* prettier-ignore-end */
