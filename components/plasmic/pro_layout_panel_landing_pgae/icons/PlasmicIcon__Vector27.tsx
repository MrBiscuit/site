// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector27Icon(props: Vector27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 55"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26.362 37.466c2.774-2.98 2.877-7.81 2.569-11.51-.103-1.644-1.336-3.39-.617-4.83.822-1.643 2.98-2.363 4.625-3.185 4.007-1.952 8.529-2.98 12.434-5.138.514-.308.411-1.233.308-1.747-.102-.411-.72-.514-1.13-.72-1.028-.41-1.953-.821-2.98-1.027-2.878-.308-5.755-.308-8.632-.411a198.303 198.303 0 01-20.656-2.26c-.822-.104-1.747-.104-2.569-.31-1.541-.307-2.98-1.13-4.624-1.335-.308 0 .205.617.41.925 4.934 7.604 10.175 15.003 14.902 22.71 1.644 2.775 2.363 6.063 4.213 8.838.53.707 1.48.287 1.747 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
      ></path>
    </svg>
  );
}

export default Vector27Icon;
/* prettier-ignore-end */
