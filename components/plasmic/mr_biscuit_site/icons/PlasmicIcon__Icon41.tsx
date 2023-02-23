// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon41Icon(props: Icon41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 15"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.25 13.083V8.767c0-.327 0-.49.064-.615a.583.583 0 01.255-.255c.124-.064.288-.064.614-.064h1.634c.326 0 .49 0 .614.064.11.056.2.145.255.255.064.125.064.288.064.615v4.316M1.167 6.375L6.44 2.42c.2-.15.301-.226.411-.255a.583.583 0 01.297 0c.11.03.211.104.412.255l5.273 3.955M2.333 5.5v5.717c0 .653 0 .98.127 1.23.112.219.29.397.51.51.25.126.577.126 1.23.126h5.6c.653 0 .98 0 1.23-.127.22-.112.398-.29.51-.51.127-.25.127-.576.127-1.23V5.5L8.12 2.84c-.402-.301-.602-.452-.823-.51a1.167 1.167 0 00-.594 0c-.22.058-.421.209-.823.51L2.333 5.5z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon41Icon;
/* prettier-ignore-end */
