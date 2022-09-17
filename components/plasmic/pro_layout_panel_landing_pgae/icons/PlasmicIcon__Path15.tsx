// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path15Icon(props: Path15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 12"}
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
          "M6.19.043C3.54 2.895.747 5.908.034 9.874c-.125.713.09 1.306.698 1.713 2.144 1.446 2.49-2.516 2.782-3.65C4.197 5.25 5.633 2.834 6.421.173c.04-.13-.135-.236-.23-.13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path15Icon;
/* prettier-ignore-end */
