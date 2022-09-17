// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 86"}
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
          "M27.044 28.61c-.82-.72-1.79-1.232-2.768-1.714C14.728 22.185 3.266 12.444 0 2.78L6.395 0c12.093 3.905 24.126 6.968 28.647 20.482 3.15 6.879 3.068 14.71 2.173 22.222-2.129 13.432-6.74 38.921-6.687 41.562a.679.679 0 01-.089.364c-2.97 4.58-.95-21.113 1.87-43.147.102-.805.163-1.615.087-2.423a15.893 15.893 0 00-5.352-10.45z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
