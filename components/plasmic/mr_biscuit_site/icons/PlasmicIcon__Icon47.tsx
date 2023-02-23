// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon47IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon47Icon(props: Icon47IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.594 3.917V6.25m0 2.333h.005m-5.255-4.7v4.735c0 .2 0 .3.029.388a.583.583 0 00.125.213c.063.069.15.117.326.214l4.316 2.399c.166.091.248.137.336.155a.581.581 0 00.235 0c.088-.018.17-.063.336-.155l4.316-2.399c.175-.097.263-.145.326-.214a.584.584 0 00.125-.213c.03-.089.03-.189.03-.388V3.883c0-.2 0-.3-.03-.39a.584.584 0 00-.125-.212c-.063-.069-.15-.117-.326-.214L7.047.669C6.88.577 6.799.53 6.71.513a.583.583 0 00-.235 0c-.088.018-.17.064-.336.156L1.824 3.067c-.175.097-.263.145-.326.214a.583.583 0 00-.125.213c-.03.089-.03.189-.03.389z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon47Icon;
/* prettier-ignore-end */
