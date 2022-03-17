// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
          "M4 0v3h1V0H4zm9.103.896a2.975 2.975 0 00-4.207 0l-2.75 2.75.707.708 2.75-2.75a1.975 1.975 0 112.793 2.792l-2.75 2.75.707.708 2.75-2.75a2.975 2.975 0 000-4.208zM.896 13.104a2.975 2.975 0 010-4.208l2.75-2.75.707.708-2.75 2.75a1.975 1.975 0 102.793 2.792l2.75-2.75.707.707-2.75 2.75a2.975 2.975 0 01-4.207 0zM14 10h-3V9h3v1zm-4 1v3H9v-3h1zM3 4H0v1h3V4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
