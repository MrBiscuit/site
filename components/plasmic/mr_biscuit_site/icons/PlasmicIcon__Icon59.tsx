// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon59IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon59Icon(props: Icon59IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 10"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.022 5.085C.942 4.96.903 4.897.881 4.8a.684.684 0 010-.26c.022-.098.062-.16.141-.287C1.68 3.213 3.632.586 6.611.586c2.978 0 4.932 2.628 5.588 3.667.08.126.12.19.142.286a.684.684 0 010 .26c-.022.098-.062.16-.142.286-.656 1.04-2.61 3.668-5.588 3.668S1.679 6.125 1.022 5.085z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6.61 6.42a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon59Icon;
/* prettier-ignore-end */
