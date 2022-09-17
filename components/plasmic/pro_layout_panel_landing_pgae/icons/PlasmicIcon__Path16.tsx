// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path16Icon(props: Path16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 9"}
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
          "M3.236.233c-.045-.195-.296-.296-.462-.19C1.43.896.947 2.463.504 3.923.059 5.416-.343 7.118.465 8.539c.226.387.764.442 1.08.14 1.065-1.028 1.16-2.46 1.346-3.86.2-1.507.698-3.073.346-4.585z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path16Icon;
/* prettier-ignore-end */
