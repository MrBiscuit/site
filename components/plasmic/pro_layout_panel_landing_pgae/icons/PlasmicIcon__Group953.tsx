// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group953IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group953Icon(props: Group953IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 25"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26.6 12.354c0 2.699-5.73 4.887-12.8 4.887S1 15.053 1 12.354c0-2.7 5.73-4.888 12.8-4.888s12.8 2.189 12.8 4.888zm-6.4 11.085c-2.337 1.35-7.098-2.52-10.632-8.642C6.033 8.675 5.062 2.618 7.4 1.27c2.338-1.35 7.098 2.519 10.632 8.641 3.535 6.122 4.506 12.18 2.168 13.529zm-12.8 0c-2.338-1.35-1.367-7.407 2.168-13.529C13.102 3.788 17.863-.08 20.2 1.269c2.338 1.35 1.367 7.406-2.168 13.528C14.498 20.92 9.738 24.788 7.4 23.44z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
      ></path>

      <path
        d={"M16.185 12.354a2.385 2.385 0 11-4.77 0 2.385 2.385 0 014.77 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group953Icon;
/* prettier-ignore-end */
