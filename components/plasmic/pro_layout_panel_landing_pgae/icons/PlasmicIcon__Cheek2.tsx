// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Cheek2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Cheek2Icon(props: Cheek2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 230 119"}
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
          "M4.923 27.14l1.323.538-1.323-.537zm222.62 44.148l1.426.074-1.426-.074zM53.701 113.296a1.428 1.428 0 002.533-1.322l-2.533 1.322zM35.544 96.442l-.856 1.143.856-1.143zm160.463 18.923a1.429 1.429 0 001.169 2.607l-1.169-2.607zM6.246 27.678c5.05-12.444 12.595-19.91 21.649-24.398L26.626.72C16.924 5.531 8.902 13.538 3.599 26.604l2.647 1.074zm215.325 21.036c3.293 6.66 4.977 14.124 4.546 22.5l2.852.148c.457-8.87-1.33-16.82-4.838-23.915l-2.56 1.267zm-165.337 63.26c-1.88-3.602-5.477-6.69-9.172-9.368-1.867-1.353-3.812-2.638-5.64-3.85-1.843-1.22-3.558-2.362-5.022-3.457l-1.712 2.286c1.541 1.154 3.328 2.341 5.155 3.552 1.841 1.22 3.733 2.47 5.543 3.782 3.657 2.651 6.767 5.41 8.315 8.377l2.533-1.322zM36.4 95.299C10.914 76.213-2.852 50.093 6.246 27.678l-2.647-1.074c-9.854 24.28 5.276 51.65 31.089 70.98L36.4 95.3zm189.717-24.085c-.591 11.46-3.84 20.552-9.039 27.732-5.205 7.188-12.422 12.54-21.071 16.419l1.169 2.607c9.004-4.039 16.659-9.676 22.215-17.35 5.562-7.68 8.963-17.32 9.578-29.26l-2.852-.147z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Cheek2Icon;
/* prettier-ignore-end */
