// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path14Icon(props: Path14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 9"}
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
          "M2.537.603c-.23-.814-1.39-.794-1.632 0C.514 1.903.463 3.319.232 4.66.037 5.82-.194 6.814.278 7.928c.19.442.783.392 1.09.136.933-.778 1.104-1.923 1.244-3.083.171-1.446.322-2.957-.075-4.378z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path14Icon;
/* prettier-ignore-end */
