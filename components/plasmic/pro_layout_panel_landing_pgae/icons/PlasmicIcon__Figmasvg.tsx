// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FigmasvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FigmasvgIcon(props: FigmasvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fillRule={"evenodd"}
      strokeLinejoin={"round"}
      strokeMiterlimit={"2"}
      clipRule={"evenodd"}
      viewBox={"0 0 24 24"}
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

      <path fill={"none"} d={"M0 0h24v24H0z"}></path>

      <path
        fill={"currentColor"}
        d={
          "M8.49 1.147h7.02c2.42 0 4.39 1.915 4.39 4.214 0 1.344-.674 2.558-1.718 3.333 1.044.776 1.718 1.989 1.718 3.334 0 2.298-1.97 4.213-4.39 4.213a4.467 4.467 0 01-2.63-.849v3.302c0 2.299-1.969 4.214-4.39 4.214-2.42 0-4.39-1.915-4.39-4.214 0-1.344.674-2.557 1.718-3.333-1.044-.776-1.718-1.989-1.718-3.333 0-1.345.674-2.558 1.718-3.334C4.774 7.919 4.1 6.705 4.1 5.361c0-2.299 1.97-4.214 4.39-4.214zm2.63 15.094H8.49c-1.43 0-2.63 1.095-2.63 2.453 0 1.359 1.2 2.453 2.63 2.453 1.431 0 2.63-1.094 2.63-2.453v-2.453zm1.76-4.213c0-1.359 1.199-2.454 2.63-2.454 1.43 0 2.63 1.095 2.63 2.454 0 1.358-1.2 2.453-2.63 2.453-1.431 0-2.63-1.095-2.63-2.453zM8.457 9.575c-1.416.016-2.597 1.105-2.597 2.453 0 1.358 1.2 2.453 2.63 2.453h2.63V9.574H8.49l-.033.001zm2.663-1.761V2.908H8.49c-1.43 0-2.63 1.094-2.63 2.453 0 1.359 1.2 2.453 2.63 2.453h2.63zm1.76 0h2.63c1.43 0 2.63-1.094 2.63-2.453 0-1.359-1.2-2.453-2.63-2.453h-2.63v4.906z"
        }
      ></path>
    </svg>
  );
}

export default FigmasvgIcon;
/* prettier-ignore-end */
