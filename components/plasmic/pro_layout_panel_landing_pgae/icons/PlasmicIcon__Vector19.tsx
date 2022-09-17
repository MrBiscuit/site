// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector19Icon(props: Vector19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 19"}
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
          "M20.77 1.59A19.97 19.97 0 0015.71 0c-.218.394-.472.924-.648 1.345a18.573 18.573 0 00-5.606 0A14.38 14.38 0 008.802 0a19.903 19.903 0 00-5.063 1.593C.538 6.431-.33 11.148.104 15.8c2.123 1.585 4.181 2.549 6.204 3.179.5-.688.945-1.418 1.329-2.189a13.06 13.06 0 01-2.093-1.018c.176-.13.347-.266.513-.406 4.035 1.887 8.418 1.887 12.404 0 .168.14.34.276.513.406-.663.4-1.365.743-2.096 1.02.384.769.827 1.501 1.329 2.189a20.184 20.184 0 006.207-3.181c.51-5.391-.87-10.065-3.644-14.21zM8.186 12.939c-1.21 0-2.204-1.13-2.204-2.508 0-1.376.972-2.509 2.204-2.509 1.233 0 2.226 1.13 2.205 2.51.002 1.376-.972 2.507-2.205 2.507zm8.146 0c-1.21 0-2.204-1.13-2.204-2.508 0-1.376.972-2.509 2.204-2.509 1.232 0 2.226 1.13 2.204 2.51 0 1.376-.972 2.507-2.204 2.507z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector19Icon;
/* prettier-ignore-end */
