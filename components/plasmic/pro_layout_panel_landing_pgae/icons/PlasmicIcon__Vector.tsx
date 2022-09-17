// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 754 781"}
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
        d={
          "M450.572 1.313c134.231 8.405 233.663 110.491 276.763 237.892 45.1 133.316 37.079 283.344-69.23 375.57C514.214 739.603 313.058 842.32 155.458 735.322-12.516 621.281-34.052 384.648 41.685 196.275 103.96 41.388 283.962-9.119 450.572 1.313z"
        }
        fill={"currentColor"}
        style={{
          mixBlendMode: 'multiply"',
        }}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
