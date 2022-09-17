// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 46"}
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
          "M41.585 44.734c-.115-.203-.152-.442-.158-.676-.137-5.24-.745-7.885-2.49-10.91-.577-1.002-2.2-3.02-3.358-4.124C25.113 19.045 10.536 16.577 0 10.376L15.753 0l7.323 9.164c3.233 4.045 6.722 7.027 11.077 9.828l5.996 3.856c3.917 2.52 6.037 7.776 6.037 12.161 0 4.07-.642 8.227-.734 8.804-.008.048-.013.093-.02.14-.253 2.005-2.906 2.447-3.847.781z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
