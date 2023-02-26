// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon56IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon56Icon(props: Icon56IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 13"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.161 11.748c0-.814 0-1.22-.1-1.552A2.333 2.333 0 008.505 8.64c-.33-.1-.738-.1-1.552-.1H4.036c-.814 0-1.22 0-1.552.1-.746.227-1.33.81-1.556 1.556-.1.331-.1.738-.1 1.552M8.12 3.873a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon56Icon;
/* prettier-ignore-end */
