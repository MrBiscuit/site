// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon17Icon(props: Icon17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
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
          "M1.571 10.636v-6h.83v.708h.07c.05-.091.12-.196.214-.316.092-.119.221-.223.386-.312.165-.091.383-.136.653-.136.353 0 .667.089.944.267.276.178.493.434.65.77.16.335.239.738.239 1.21 0 .471-.079.876-.236 1.213a1.84 1.84 0 01-.648.775c-.274.18-.588.27-.94.27-.265 0-.482-.044-.65-.133a1.231 1.231 0 01-.393-.313 2.364 2.364 0 01-.218-.318H2.42v2.315h-.849zm.832-3.818c0 .307.045.576.134.807.089.231.218.412.386.543a.99.99 0 00.62.193.996.996 0 00.636-.202c.17-.136.3-.32.386-.554a2.19 2.19 0 00.134-.787 2.17 2.17 0 00-.13-.775 1.187 1.187 0 00-.387-.543 1.01 1.01 0 00-.64-.199 1.02 1.02 0 00-.624.19 1.169 1.169 0 00-.384.532c-.087.227-.13.492-.13.795zm4.644-2.182l.963 1.7.972-1.7h.929L8.55 6.818 9.922 9h-.929L8.01 7.37 7.03 9h-.932l1.358-2.182-1.34-2.182h.931z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */
