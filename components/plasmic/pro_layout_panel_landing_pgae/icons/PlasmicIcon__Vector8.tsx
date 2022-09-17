// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector8Icon(props: Vector8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 94 63"}
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
          "M19.79 49.033c-.48-17.209-1.012-28.737-1.96-42.32A6.257 6.257 0 0122.904.124a6.307 6.307 0 00-.615-.03h-5.08c-3.62 0-6.473 3.082-6.221 6.693.948 13.583 1.48 25.111 1.96 42.32.172 6.149-4.157 11.312-9.908 12.488l3.802.164c7.19.311 13.149-5.533 12.948-12.727zm66.132 13.301c.855 0 1.57-.65 1.65-1.5l.557-5.926c-1.896-7.892-1.149-23.368 2.465-52.456a2.208 2.208 0 00-.194-1.216c-.95-1.987-3.914-1.46-4.12.733l-5.55 58.94a1.657 1.657 0 01-1.155 1.425h6.347z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
