// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path31Icon(props: Path31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
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
          "M2.028 1.701C1.686 1.04 1.184.371.502.04.23-.09-.056.12.009.416c.141.698.498 1.356.799 1.998.266.568.467 1.256 1.104 1.497.171.065.372-.04.462-.186.387-.628-.04-1.446-.346-2.024z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path31Icon;
/* prettier-ignore-end */
