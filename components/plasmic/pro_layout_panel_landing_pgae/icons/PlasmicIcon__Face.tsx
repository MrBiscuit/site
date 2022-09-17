// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaceIcon(props: FaceIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 215 166"}
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
          "M.503 93.309c.909-6.708 6.243-11.553 11.806-15.41 4.9-3.398 10.448-8.653 13.264-16.162C31.285 46.505 67.64-19.7 139.44 5.769c65.059 23.078 66 74.426 64.502 90.92a17.068 17.068 0 002.009 9.736c6.976 12.717 22.071 48.485-22.128 58.347-35.554 7.934-30.707-37.217-76.92-45.906-54.233-10.198-51.027 30.844-85.68 15.231C.076 124.569-1.12 105.292.504 93.309z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FaceIcon;
/* prettier-ignore-end */
