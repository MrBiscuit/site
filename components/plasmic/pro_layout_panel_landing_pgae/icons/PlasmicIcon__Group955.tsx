// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group955IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group955Icon(props: Group955IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1327 615"}
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

      <g
        style={{
          mixBlendMode: 'multiply"',
        }}
        stroke={"currentColor"}
        strokeWidth={"3"}
      >
        <path
          d={
            "M125.811 55.746c3.06 46.123 43.379 146.277 180.178 177.907 170.999 39.537 311.288-59.924 479.692-49.063 124.295 8.016 418.879 90.537 504.469 267.655"
          }
        ></path>

        <path
          d={
            "M74.475 120.102c3.06 46.123 43.379 146.276 180.178 177.906 170.999 39.538 311.289-59.923 479.693-49.062 124.295 8.016 418.874 90.537 504.464 267.655"
          }
        ></path>

        <path
          d={
            "M32.458 175.768c3.06 46.123 43.379 146.276 180.178 177.906 170.999 39.538 311.288-59.923 479.692-49.063 124.295 8.017 418.872 90.538 504.472 267.656"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Group955Icon;
/* prettier-ignore-end */
