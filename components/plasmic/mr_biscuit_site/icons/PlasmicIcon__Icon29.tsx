// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon29Icon(props: Icon29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 127 126"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".4"}
        d={
          "M65.285 1.582l15.038 12.482c.716.594 1.61.925 2.538.936l19.427.245c1.338.017 2.489.99 2.741 2.34l3.611 19.368a4.146 4.146 0 001.346 2.363l14.727 12.857a2.912 2.912 0 01.623 3.593l-9.505 17.193a4.18 4.18 0 00-.467 2.683l3.136 19.454c.219 1.358-.537 2.675-1.791 3.156l-18.174 6.972a4.095 4.095 0 00-2.065 1.757l-9.923 16.948a2.803 2.803 0 01-3.357 1.243l-18.34-6.512a4.04 4.04 0 00-2.7 0l-18.34 6.512a2.803 2.803 0 01-3.357-1.243l-9.923-16.948a4.095 4.095 0 00-2.065-1.757l-18.174-6.972c-1.254-.481-2.01-1.798-1.791-3.156l3.136-19.454a4.175 4.175 0 00-.467-2.683L1.664 55.766a2.911 2.911 0 01.623-3.593l14.727-12.857a4.143 4.143 0 001.346-2.363l3.611-19.369c.252-1.35 1.403-2.322 2.74-2.339L44.14 15a4.052 4.052 0 002.538-.936L61.715 1.582a2.787 2.787 0 013.57 0z"
        }
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"1.257"}
      ></path>
    </svg>
  );
}

export default Icon29Icon;
/* prettier-ignore-end */
