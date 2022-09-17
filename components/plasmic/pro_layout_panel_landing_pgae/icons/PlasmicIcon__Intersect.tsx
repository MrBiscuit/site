// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IntersectIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IntersectIcon(props: IntersectIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 68 92"}
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
          "M8.308 0c21.758 9.71 48.005 21.982 59.5 41.65-.682 25.66-15.478 68.285-16.593 40.709C76.572 41.65 26.893 16.365 0 5.033L8.308 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IntersectIcon;
/* prettier-ignore-end */
