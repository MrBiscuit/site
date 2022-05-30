// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon8Icon(props: Icon8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M5 8a7 7 0 1113.818 1.59A7 7 0 1112 21.745 7 7 0 115.181 9.591 7.02 7.02 0 015 8zm.911 3.456A5.002 5.002 0 008 21a5 5 0 004.889-6.056 6.998 6.998 0 01-6.978-3.489zm8.907 2.954a7.02 7.02 0 01-1.318 5.92 5 5 0 104.59-8.875 7.028 7.028 0 01-3.272 2.954zM12 3a5 5 0 100 10 5 5 0 000-10z"
        }
        fill={"currentColor"}
        fillOpacity={".85"}
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
