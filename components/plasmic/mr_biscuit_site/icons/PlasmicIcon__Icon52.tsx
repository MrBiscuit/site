// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon52IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon52Icon(props: Icon52IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.37 3.917V8.7c0 .98 0 1.47-.19 1.845a1.75 1.75 0 01-.765.764c-.375.191-.865.191-1.845.191H4.253c-.98 0-1.47 0-1.844-.19a1.75 1.75 0 01-.765-.766c-.19-.374-.19-.864-.19-1.844V3.917M1.511 1h9.8c.327 0 .49 0 .615.064.11.056.199.145.255.255.063.124.063.288.063.614v1.05c0 .327 0 .49-.063.615a.583.583 0 01-.255.255c-.125.064-.288.064-.615.064h-9.8c-.327 0-.49 0-.615-.064a.583.583 0 01-.255-.255C.578 3.473.578 3.31.578 2.983v-1.05c0-.326 0-.49.064-.614a.583.583 0 01.255-.255C1.022 1 1.185 1 1.512 1zm3.5 4.958h2.8c.327 0 .49 0 .615.064.11.056.199.145.255.255.063.125.063.288.063.615v.466c0 .327 0 .49-.063.615a.583.583 0 01-.255.255c-.125.064-.288.064-.615.064h-2.8c-.327 0-.49 0-.615-.064a.583.583 0 01-.255-.255c-.064-.125-.064-.288-.064-.615v-.466c0-.327 0-.49.064-.615a.583.583 0 01.255-.255c.125-.064.288-.064.615-.064z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon52Icon;
/* prettier-ignore-end */
