// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Union7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Union7Icon(props: Union7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 58 52"}
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
        clipRule={"evenodd"}
        d={
          "M29.698 1.274a1.25 1.25 0 00-1.562 0L1.469 22.607a1.25 1.25 0 001.562 1.952l4.636-3.708V50.25c0 .69.56 1.25 1.25 1.25h40c.69 0 1.25-.56 1.25-1.25v-29.4l4.636 3.71a1.25 1.25 0 101.561-1.953L29.698 1.274zM47.667 21.81l-18.75-15-18.75 15V49H21V30.917c0-.69.56-1.25 1.25-1.25h13.333c.69 0 1.25.56 1.25 1.25V49h10.834V21.811zM23.5 34.167V49h10.833V34.167H23.5z"
        }
        stroke={"currentColor"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Union7Icon;
/* prettier-ignore-end */
