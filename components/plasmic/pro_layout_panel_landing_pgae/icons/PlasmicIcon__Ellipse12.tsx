// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse12Icon(props: Ellipse12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 231 136"}
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

      <g filter={"url(#6JJyVEqlLNa)"}>
        <path
          d={
            "M228.543 79.038c-3.086 59.882-77.479 58.624-133.85 49.673-56.372-8.95-104.172-55.873-88.77-93.82C21.325-3.057 59.798 3.419 94.693 3.419c34.893 0 136.936 15.736 133.85 75.619z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"6JJyVEqlLNa"}
          x={".926"}
          y={".926"}
          width={"229.759"}
          height={"134.401"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"1.037"}
            result={"effect1_foregroundBlur_347_38610"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse12Icon;
/* prettier-ignore-end */
