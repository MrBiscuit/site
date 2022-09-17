// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
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
          "M22.143 126.414C13.756 90.965 5.18 23.013 0 0l156.612 24.69.042.02c35.172 15.656 84.73 37.718 62.608 87.805-2.322 5.258-4.878 9.668-7.747 13.346-1.18 1.512-13.075 14.596-17.558 6.855-5.052-8.724-4.89-30.149-10.3-26.288l1.035 15.266c1.21 8.373 2.529 17.165 1.202 17.742-10.317 4.48-14.776 3.631-32.266 2.575-4.629-4.91-4.823-19.639-.08-57.815a2.212 2.212 0 00-.195-1.216c-.95-1.987-3.913-1.46-4.12.733l-5.55 58.939a1.657 1.657 0 01-1.649 1.502h-34.343c-8.877 0-16.213-6.993-16.493-15.866-.432-13.666-.42-24.834.283-39.883.167-3.567-2.667-6.566-6.238-6.566h-5.081c-3.62 0-6.473 3.081-6.22 6.693.947 13.583 1.48 25.111 1.96 42.32.2 7.194-5.759 13.038-12.949 12.728l-20.051-.867c-9.87-.426-18.485-6.685-20.76-16.299z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
