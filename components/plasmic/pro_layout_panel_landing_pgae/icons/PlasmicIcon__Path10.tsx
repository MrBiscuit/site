// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path10Icon(props: Path10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 7"}
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
          "M2.649.322c-.196-.447-.94-.412-1.14 0C.937 1.492.56 2.677.18 3.932c-.196.643-.498 2.661.773 2.536 1.285-.12 1.652-1.496 1.903-2.58.306-1.311.321-2.34-.206-3.566z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path10Icon;
/* prettier-ignore-end */
