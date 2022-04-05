// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon12Icon(props: Icon12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
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
        d={
          "M33.75 3.85H2.25a.322.322 0 00-.322.321v2.572c0 .176.145.321.322.321h31.5a.322.322 0 00.321-.321V4.17a.322.322 0 00-.322-.321zm0 25.071H2.25a.322.322 0 00-.322.322v2.571c0 .177.145.322.322.322h31.5a.322.322 0 00.321-.322v-2.571a.322.322 0 00-.322-.322zm0-12.535H2.25a.322.322 0 00-.322.321v2.571c0 .177.145.322.322.322h31.5a.322.322 0 00.321-.322v-2.571a.322.322 0 00-.322-.322z"
        }
        fill={"currentColor"}
        fillOpacity={".85"}
      ></path>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */
