// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Blob5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Blob5Icon(props: Blob5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 215 76"}
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
          "M172.153 10.428c25.416 7.765 47.811 21.447 41.886 32.834-5.924 11.387-40.228 20.477-75.36 26.23-35.133 5.752-71.095 8.166-94.023 2.65-22.928-5.539-32.704-19.008-39.22-32.241-6.459-13.233-9.658-26.23 4.976-33.024C25.045.107 57.512-.438 87.905.202c30.452.639 58.831 2.462 84.248 10.226z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Blob5Icon;
/* prettier-ignore-end */
