// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
          "M2.396 4.395l.505.506-1.891 1.89 1.89 1.89-.505.506L0 6.79l2.396-2.396zm8.285.506l1.89 1.89-1.89 1.89.505.506 2.396-2.396-2.396-2.396-.505.506zm-6.286 6.285l.506-.505 1.89 1.891 1.89-1.89.506.505-2.396 2.395-2.396-2.396zm.506-8.285l1.89-1.89 1.89 1.89.506-.505L6.79 0 4.395 2.396l.506.505z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
