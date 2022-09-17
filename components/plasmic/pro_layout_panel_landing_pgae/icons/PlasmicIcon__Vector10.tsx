// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector10Icon(props: Vector10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 225 145"}
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
          "M24.918 136.894C15.698 106.574 5.755 25.562 0 0l156.612 24.69.042.02c35.172 15.656 84.73 37.718 62.608 87.805-11.81 26.741-29.668 31.574-64.09 29.496-7.477-10.02-9.318-37.818-.68-57.01a2.844 2.844 0 00-.22-2.77c-1.452-2.135-4.779-1.28-5.021 1.29l-5.527 58.693a2.14 2.14 0 01-2.131 1.94h-39.854c-5.549 0-10.122-4.374-10.333-9.918-.598-15.722-.716-27.449-.038-43.315.211-4.932-3.704-9.082-8.64-9.082-5.005 0-8.947 4.257-8.612 9.25.84 12.509 1.336 23.644 1.786 39.763.2 7.194-5.759 13.038-12.949 12.728l-30.88-1.335c-3.29-.142-6.197-2.2-7.155-5.351z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
