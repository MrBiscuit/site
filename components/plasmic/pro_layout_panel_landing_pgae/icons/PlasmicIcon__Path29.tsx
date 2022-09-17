// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path29Icon(props: Path29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 11"}
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
          "M1.663.398C1.467-.195.538-.11.548.548a75.203 75.203 0 01-.115 4.76C.353 6.89-.125 8.331.03 9.923c.045.462.527.678.889.371 2.756-2.38 1.722-6.899.743-9.896z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path29Icon;
/* prettier-ignore-end */
