// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FurIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FurIcon(props: FurIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 162 77"}
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
          "M4.648 35.24C2.605 23.726 1.76 14.065 0 0l161.263 17.683v14.872c0 1.33-1.241 2.334-2.51 1.938-2.441-.762-4.291-1.822-5.756-3.86-12.471 14.992-20.156 20.813-33.167 25.074-1.318.432-2.653-.566-2.653-1.952V49.92c-8.36 3.333-13.073 11.4-20.54 22.153-1.319 1.9-3.246 3.34-5.51 3.81-3.426.712-6.148.646-9.308-.403-.888-.295-1.701-.775-2.448-1.34-11.149-8.432-19.867-14.105-28.875-24.22v2.79c0 1.645-1.787 2.578-3.028 1.497-6.317-5.502-12.924-14.828-16.619-17.646l-1.075 3.995c-.263 1.928-.523 3.757-.924 3.432-6.414-5.195-8.1-10.76-12.63-17.001L8.212 36.21c-1.132 1.304-3.263.73-3.564-.97z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FurIcon;
/* prettier-ignore-end */
