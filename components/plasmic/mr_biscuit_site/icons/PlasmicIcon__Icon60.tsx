// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon60IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon60Icon(props: Icon60IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 9h.01M15 15a6 6 0 10-5.946-5.193c.058.434.087.651.068.789a.853.853 0 01-.117.346c-.068.121-.187.24-.426.479l-5.11 5.11c-.173.173-.26.26-.322.36a1 1 0 00-.12.29C3 17.296 3 17.418 3 17.663V19.4c0 .56 0 .84.109 1.054a1 1 0 00.437.437C3.76 21 4.04 21 4.6 21h1.737c.245 0 .367 0 .482-.028a.998.998 0 00.29-.12c.1-.061.187-.148.36-.32l5.11-5.111c.239-.239.358-.358.48-.426a.852.852 0 01.345-.117c.138-.02.355.01.789.068.264.036.533.054.807.054z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon60Icon;
/* prettier-ignore-end */
