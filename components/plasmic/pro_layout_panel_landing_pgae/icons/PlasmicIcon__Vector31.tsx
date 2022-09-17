// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector31Icon(props: Vector31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 12"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.374 6.82c1.1.5 2.3 1.5 3.4 1.9.4.1-.2-.9-.4-1.2-.8-1.1-1.9-2-2.6-3.2-.3-.5.9.7 1.5 1 1.2.7 2.6 1.3 3.8 1.9.6.3-.9-1.1-1.3-1.6-.6-.7-1.2-1.4-1.7-2.1-.1-.2-.7-.7-.4-.6 1.5.8 3 1.4 4.4 2.4m-2.6-3.4c1.4.1 2.8.3 3.7 1.6.64.944.88 2.11.558 3.214m0 0c-.48 1.637-2.077 2.925-4.058 2.987-1 0-1.822-.27-2.822-.57-.8-.2-1.678-.63-2.278-1.13-.9-.7-.6-1.7-.4-2.6.4-2.1 2.5-3.3 4.6-3.3 1.9.1 2 1.2 3 2.3.6.8 1.9 2.2 1.9 2.2l.058.113z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector31Icon;
/* prettier-ignore-end */
