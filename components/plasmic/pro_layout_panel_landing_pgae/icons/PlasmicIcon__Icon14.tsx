// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon14Icon(props: Icon14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 61 21"}
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
        opacity={".15"}
        d={
          "M.507 11.093c0-4.719 3.483-8.71 8.174-9.226C14.98 1.176 23.71.375 30.356.375c6.646 0 15.375.8 21.675 1.492 4.692.516 8.175 4.507 8.175 9.226 0 5.722-5.05 10.142-10.742 9.557-5.965-.613-13.325-1.22-19.108-1.22-5.782 0-13.143.607-19.108 1.22-5.69.585-10.74-3.835-10.74-9.557z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
