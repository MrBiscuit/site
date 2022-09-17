// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path2Icon(props: Path2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
          "M2.739.969C2.659.607 2.488.416 2.262.17c-.211-.226-.568-.216-.804-.035l-.08.035a.867.867 0 00-.306.312c-.146.21-.236.441-.347.672-.236.508-.532.99-.683 1.532-.296 1.07 1.035 1.787 1.813 1.054.532-.497.793-1.165.889-1.873.04-.3.06-.597-.005-.898z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path2Icon;
/* prettier-ignore-end */
