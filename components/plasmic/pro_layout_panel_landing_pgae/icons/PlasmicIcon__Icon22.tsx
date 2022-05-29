// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon22Icon(props: Icon22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M17.742 1a1 1 0 01.708.293l4.25 4.25a1 1 0 010 1.414L14.657 15H22a1 1 0 011 1v6a1 1 0 01-1 1H5a4 4 0 01-4-4V2a1 1 0 011-1h6a1 1 0 011 1v7.34l8.035-8.047A1 1 0 0117.742 1zM9 17.828v-5.657l8.743-8.756 2.835 2.835L9 17.828zM8.657 21H21v-4h-8.343l-4 4z"
        }
        fill={"currentColor"}
        fillOpacity={".85"}
      ></path>
    </svg>
  );
}

export default Icon22Icon;
/* prettier-ignore-end */
