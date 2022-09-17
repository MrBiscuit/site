// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector12Icon(props: Vector12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 114 166"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M88.839 96.72a.09.09 0 00.11-.05.09.09 0 01-.107.051h-.003z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M82.982 164.772c44.198-9.862 29.103-45.63 22.128-58.347a17.06 17.06 0 01-2.01-9.735c1.498-16.495.557-67.843-64.502-90.92C24.348.714 11.495-.73 0 .322l.187.052c7.576.669 20.692 2.863 29.421 5.447C80.67 20.934 96.624 78.414 88.948 96.67a.09.09 0 01-.106.051h-.003a.093.093 0 00-.118.08 17.06 17.06 0 002.02 9.624c6.975 12.717 22.07 48.485-22.129 58.347l-.18.04c4.042 1.136 8.76 1.252 14.55-.04z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
