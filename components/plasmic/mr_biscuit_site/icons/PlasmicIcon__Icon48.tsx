// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon48IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon48Icon(props: Icon48IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.824 11.3l.34.766a1.29 1.29 0 002.36 0l.341-.766a1.415 1.415 0 011.44-.83l.835.088a1.29 1.29 0 001.18-2.043l-.494-.678A1.417 1.417 0 0110.557 7c0-.3.095-.591.271-.834l.494-.678a1.29 1.29 0 00-1.18-2.043l-.833.089a1.415 1.415 0 01-1.44-.834l-.345-.767a1.29 1.29 0 00-2.36 0l-.34.767a1.415 1.415 0 01-1.44.834l-.838-.09a1.29 1.29 0 00-1.18 2.044l.495.678a1.417 1.417 0 010 1.667l-.494.68a1.29 1.29 0 001.18 2.042l.834-.089a1.42 1.42 0 011.443.834z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6.343 8.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon48Icon;
/* prettier-ignore-end */
