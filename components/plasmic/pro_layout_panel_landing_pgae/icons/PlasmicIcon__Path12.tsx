// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path12Icon(props: Path12IconProps) {
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
          "M3.547.698C3.366-.171 2.186-.206 1.764.467c-.633 1-.969 2.2-1.406 3.294-.291.728-.783 2.355.367 2.671 1.205.331 1.888-1.075 2.254-1.948.507-1.205.839-2.486.568-3.786z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path12Icon;
/* prettier-ignore-end */
