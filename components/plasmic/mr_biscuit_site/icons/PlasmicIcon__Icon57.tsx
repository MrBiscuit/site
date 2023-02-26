// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon57IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon57Icon(props: Icon57IconProps) {
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
          "M10.11 5.503L7.777 3.169M1.07 12.211l1.974-.22c.241-.026.362-.04.475-.076.1-.032.195-.078.283-.136.098-.065.184-.151.356-.323l7.704-7.703a1.65 1.65 0 10-2.334-2.334L1.824 9.123c-.172.172-.258.257-.323.356a1.166 1.166 0 00-.136.283c-.037.113-.05.234-.077.475l-.22 1.974z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon57Icon;
/* prettier-ignore-end */
