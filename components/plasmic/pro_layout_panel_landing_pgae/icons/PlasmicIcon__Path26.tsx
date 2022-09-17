// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path26Icon(props: Path26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 7"}
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
          "M3.312.685C3.006-.063 1.615-.38 1.47.685c-.116.843-.287 1.712-.648 2.49-.316.683-.899 1.482-.814 2.26.04.401.287.678.698.703 1.11.065 1.959-1.09 2.385-1.979.528-1.094.693-2.33.221-3.474z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path26Icon;
/* prettier-ignore-end */
