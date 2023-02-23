// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon34Icon(props: Icon34IconProps) {
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
          "M4.883 12.083a2.328 2.328 0 003.087 0M9.927 4.5a3.5 3.5 0 10-7 0c0 1.803-.455 3.037-.963 3.853-.428.689-.643 1.033-.635 1.13.009.105.031.146.117.21.078.057.426.057 1.124.057h7.713c.698 0 1.047 0 1.124-.057.086-.064.109-.105.117-.21.008-.097-.206-.441-.634-1.13-.508-.816-.963-2.05-.963-3.853z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon34Icon;
/* prettier-ignore-end */
