// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheekIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheekIcon(props: CheekIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 226 131"}
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
          "M225.543 76.038c-3.086 59.882-77.479 58.624-133.85 49.673-56.372-8.95-104.172-55.873-88.77-93.82C18.325-6.057 56.798.419 91.693.419c34.893 0 136.936 15.736 133.85 75.619z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CheekIcon;
/* prettier-ignore-end */
