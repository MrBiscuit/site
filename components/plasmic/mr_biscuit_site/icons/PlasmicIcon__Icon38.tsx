// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon38Icon(props: Icon38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#lTrulL0a2a)"}>
        <path
          d={
            "M6.917 2.333h-2.45c-.98 0-1.47 0-1.845.191a1.75 1.75 0 00-.765.765c-.19.374-.19.864-.19 1.844v4.9c0 .98 0 1.47.19 1.845.168.33.436.597.765.765.375.19.865.19 1.845.19h4.9c.98 0 1.47 0 1.844-.19a1.75 1.75 0 00.765-.765c.19-.374.19-.864.19-1.845v-2.45m-7 1.75h.977c.286 0 .428 0 .563-.032.119-.028.233-.076.337-.14.118-.072.219-.173.42-.374l5.579-5.579a1.238 1.238 0 00-1.75-1.75L5.713 7.037c-.201.201-.302.302-.374.42a1.167 1.167 0 00-.14.337c-.032.135-.032.277-.032.563v.976z"
          }
          stroke={"#000"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
      </g>

      <defs>
        <clipPath id={"lTrulL0a2a"}>
          <path
            fill={"#fff"}
            transform={"translate(.5)"}
            d={"M0 0h14v14H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon38Icon;
/* prettier-ignore-end */
