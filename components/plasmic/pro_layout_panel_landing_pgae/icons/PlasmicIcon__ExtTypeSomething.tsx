// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExtTypeSomethingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExtTypeSomethingIcon(props: ExtTypeSomethingIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 27"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.06 7.677h8.043v.636h-7.305v4.788h6.87v.636h-6.87v5.256h7.389v.636H11.06V7.677zm8.763 0h.855l3.786 5.256 3.87-5.256L33.6 1l-8.65 12.486 4.457 6.143h-.888l-4.055-5.59-4.07 5.59h-.872l4.49-6.143-4.189-5.81zm9.902.636v-.636h9.165v.636h-4.222v11.316h-.737V8.313h-4.206zM1 7.677h.921L14.628 26.6l-5.25-6.97L1.77 8.58l-.034 11.05H1V7.676z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".4"}
      ></path>
    </svg>
  );
}

export default ExtTypeSomethingIcon;
/* prettier-ignore-end */
