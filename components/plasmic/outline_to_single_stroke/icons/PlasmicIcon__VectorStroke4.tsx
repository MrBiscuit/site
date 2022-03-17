// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorStroke4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorStroke4Icon(props: VectorStroke4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 58 52"}
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
          "M27.417.438a2 2 0 012.5 0l26.666 21.334a2 2 0 11-2.499 3.123l-3.417-2.734V50a2 2 0 01-2 2h-40a2 2 0 01-2-2V22.161l-3.418 2.734a2 2 0 01-2.498-3.123l6.666-5.334h.001l20-16zm-16.75 18.523l18-14.4 18 14.4V48h-36V18.961z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorStroke4Icon;
/* prettier-ignore-end */
