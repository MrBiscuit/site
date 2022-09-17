// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path4Icon(props: Path4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 7"}
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
          "M3.33.14c-.863.562-1.45 1.355-2.063 2.169-.683.918-1.546 2.043-1.18 3.243.181.593.804.984 1.421.809 1.075-.317 1.612-1.386 2.144-2.295.573-.974 1.13-1.878 1.25-3.028.08-.783-.948-1.3-1.571-.899z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path4Icon;
/* prettier-ignore-end */
