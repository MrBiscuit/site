// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Blob3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Blob3Icon(props: Blob3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 215 76"}
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
          "M191.522 21.985c14.438 8.613 21.778 15.661 23.234 23.185 1.395 7.504-3.033 15.483-17.531 21.324-14.438 5.841-38.885 9.544-60.481 8.613-21.596-.93-40.34-6.494-66.122-12.335-25.782-5.84-58.6-11.959-67.821-21.087-9.22-9.127 5.156-21.264 30.938-29.877C59.52 3.195 96.707-1.893 126.128.661c29.361 2.534 50.957 12.711 65.394 21.324z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Blob3Icon;
/* prettier-ignore-end */
