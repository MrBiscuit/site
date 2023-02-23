// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon49IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon49Icon(props: Icon49IconProps) {
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
          "M4.281 4.938L2.22 2.875m0 8.25l2.06-2.063m4.125 0l2.062 2.063m0-8.25L8.406 4.938M12.176 7A5.833 5.833 0 11.51 7a5.833 5.833 0 0111.667 0zM9.26 7a2.917 2.917 0 11-5.833 0A2.917 2.917 0 019.26 7z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon49Icon;
/* prettier-ignore-end */
