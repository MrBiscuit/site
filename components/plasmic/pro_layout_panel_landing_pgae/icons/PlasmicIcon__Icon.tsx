// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 16 17"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "plasmic-default__svg Vm1iHWC7_twQio7DI_hv _his6Gg9R4zf0IuKzWoj"
      )}
      role={"img"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M13 3.448H3v10h10v-10zm-10-1H2v12h12v-12H3z"}
        fill={"currentColor"}
        fillOpacity={".8"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
