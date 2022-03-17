// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ProLayoutPanelsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ProLayoutPanelsvgIcon(props: ProLayoutPanelsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 128 128"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#fff"} d={"M0 0h128v128H0z"}></path>

      <rect
        x={"24"}
        y={"24"}
        width={"50"}
        height={"16"}
        rx={"4"}
        fill={"#000"}
      ></rect>

      <rect
        x={"24"}
        y={"52"}
        width={"80"}
        height={"16"}
        rx={"4"}
        fill={"#000"}
      ></rect>

      <rect
        x={"24"}
        y={"80"}
        width={"35"}
        height={"16"}
        rx={"4"}
        fill={"#000"}
      ></rect>
    </svg>
  );
}

export default ProLayoutPanelsvgIcon;
/* prettier-ignore-end */
