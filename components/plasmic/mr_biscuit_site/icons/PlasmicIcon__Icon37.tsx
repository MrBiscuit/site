// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon37Icon(props: Icon37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 8"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M5 8L.67 2h8.66L5 8z"}
        fill={"#FF0D0D"}
        style={{
          mixBlendMode: 'saturation"',
        }}
      ></path>

      <path
        d={"M5 8L.67 2h8.66L5 8z"}
        fill={"#fff"}
        style={{
          mixBlendMode: 'difference"',
        }}
      ></path>

      <path
        d={"M5 8L.67 2h8.66L5 8z"}
        fill={"#fff"}
        style={{
          mixBlendMode: 'saturation"',
        }}
      ></path>

      <path
        d={"M5 8L.67 2h8.66L5 8z"}
        fill={"#fff"}
        style={{
          mixBlendMode: 'overlay"',
        }}
      ></path>

      <path
        d={"M5 8L.67 2h8.66L5 8z"}
        fill={"#000"}
        style={{
          mixBlendMode: 'overlay"',
        }}
      ></path>

      <path
        d={"M5 8L.67 2h8.66L5 8z"}
        fill={"#fff"}
        style={{
          mixBlendMode: 'overlay"',
        }}
      ></path>

      <path
        d={"M5 8L.67 2h8.66L5 8z"}
        fill={"#000"}
        style={{
          mixBlendMode: 'overlay"',
        }}
      ></path>
    </svg>
  );
}

export default Icon37Icon;
/* prettier-ignore-end */
