// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PathIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PathIcon(props: PathIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 7"}
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
          "M3.446.6C3.24-.163 2.316-.163 1.904.4c-.592.803-.889 1.887-1.326 2.781-.386.814-.738 1.682-.502 2.586a.616.616 0 00.749.427C1.849 5.933 2.436 5.009 2.838 4.1c.467-1.06.919-2.345.608-3.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PathIcon;
/* prettier-ignore-end */
