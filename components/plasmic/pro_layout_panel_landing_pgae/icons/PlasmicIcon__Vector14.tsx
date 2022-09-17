// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector14Icon(props: Vector14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 226 111"}
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
          "M91.692 106.301c56.372 8.951 130.765 10.209 133.851-49.673.396-7.68-.938-14.635-3.637-20.923 0 24.565-7.127 31.106-29.302 38.742-18.05 4.027-25.687-5.627-34.879-17.246-8.914-11.267-19.29-24.383-42.042-28.661-28.372-5.335-41.024 3.354-51.6 10.619-9.64 6.62-17.555 12.057-34.079 4.613C8.856 34.243 7.661 14.966 9.284 2.982L9.904 0C7.237 3.505 4.891 7.63 2.923 12.48c-15.402 37.948 32.398 84.87 88.77 93.821z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector14Icon;
/* prettier-ignore-end */
