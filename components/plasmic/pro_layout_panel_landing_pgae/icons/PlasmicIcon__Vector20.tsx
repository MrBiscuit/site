// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector20Icon(props: Vector20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 18"}
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
          "M21.985 2.116c-.808.358-1.677.6-2.59.71A4.522 4.522 0 0021.378.328a9.005 9.005 0 01-2.864 1.094 4.511 4.511 0 00-7.686 4.115A12.809 12.809 0 011.531.825a4.509 4.509 0 00-.61 2.268c0 1.564.797 2.946 2.006 3.755a4.5 4.5 0 01-2.043-.565v.058a4.513 4.513 0 003.618 4.423 4.545 4.545 0 01-2.037.078 4.513 4.513 0 004.214 3.131 9.051 9.051 0 01-5.602 1.932A9.34 9.34 0 010 15.842a12.757 12.757 0 006.913 2.026c8.298 0 12.835-6.872 12.835-12.833 0-.194-.005-.39-.014-.583a9.17 9.17 0 002.25-2.333l.001-.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector20Icon;
/* prettier-ignore-end */
