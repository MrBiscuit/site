// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon36Icon(props: Icon36IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.667 12.25c0-.814 0-1.221-.1-1.552a2.333 2.333 0 00-1.556-1.556c-.332-.1-.739-.1-1.553-.1H5.542c-.814 0-1.221 0-1.553.1a2.333 2.333 0 00-1.555 1.556c-.1.33-.1.738-.1 1.552m7.291-7.875a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon36Icon;
/* prettier-ignore-end */
