// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector29Icon(props: Vector29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 12"}
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
          "M8.731 4.159c.773.699 1.996 1.114 2.309 2.108.03.097-.156-.134-.249-.176-.548-.244-1.119-.434-1.667-.68-1.19-.533-2.28-1.53-3.584-1.572-.19-.006.29.25.454.345.354.207.756.33 1.094.561.499.343.955.744 1.401 1.153.2.183.357.41.532.618.042.05.182.158.117.155-1.385-.056-2.488-.385-3.767-.977-.627-.29-2.318-1.47-1.815-.997.912.857 1.3 1.019 2.316 1.764.256.187.497.394.748.588.247.19.499.372.746.56.05.038.204.126.143.118-1.068-.136-2.102-.493-3.116-.856-.547-.195-1.046-.503-1.567-.76m-.025.667c1.56 1.41 3.043 2.027 5.167 1.888 2.358-.154 4.166-2.653 2.865-4.808-1.9-3.146-8.477-1.875-8.65 1.964-.055 1.23.868 2.285 1.588 3.161"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector29Icon;
/* prettier-ignore-end */
