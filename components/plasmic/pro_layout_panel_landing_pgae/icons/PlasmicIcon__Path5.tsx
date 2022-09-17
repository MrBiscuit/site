// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path5Icon(props: Path5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
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
          "M1.581.464C1.044 1.372.226 2.357.02 3.406c-.13.648.406 1.326 1.11 1.115C2.615 4.069 3.262 2.36 3.448.97c.14-1.04-1.4-1.3-1.868-.507z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path5Icon;
/* prettier-ignore-end */
