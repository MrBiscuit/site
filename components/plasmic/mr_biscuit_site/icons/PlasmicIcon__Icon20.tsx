// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
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

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.667 1.167A4.667 4.667 0 109.528 9.52l3.143 3.143a.583.583 0 00.825-.825l-3.143-3.143a4.667 4.667 0 00-3.687-7.528zm-3.5 4.666a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
