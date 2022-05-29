// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon23Icon(props: Icon23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
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

      <path
        d={
          "M8.613 3.21l.094.083L12 6.585l3.293-3.292a1 1 0 011.32-.083l.094.083 6 6a1 1 0 01.083 1.32l-.083.094-10 10a.996.996 0 01-.53.277l-.118.014h-.118a.997.997 0 01-.648-.29l-10-10a1 1 0 01-.083-1.32l.083-.095 6-6A1 1 0 018.51 3.14l.102.07zM8 5.415L3.415 10 12 18.585l.585-.585-.792-.793a1 1 0 011.32-1.497l.094.083.793.792.585-.585-.792-.793a1 1 0 011.32-1.497l.094.083.793.792.585-.585L14 11.415l-2.293 2.292a1 1 0 01-1.112.207l-.11-.056-2.5-1.5-.097-.067-.095-.084a1.006 1.006 0 01-.101-.118l-.081-.131-.05-.112-.023-.074-.022-.094-.013-.105-.003-.085.003-.061.011-.098.03-.126.019-.051a.991.991 0 01.147-.265l.083-.094L10.585 8 8 5.415zm8 0l-5.887 5.886.731.439 2.449-2.447a1 1 0 011.32-.083l.094.083L18 12.585 20.585 10 16 5.415z"
        }
        fill={"currentColor"}
        fillOpacity={".85"}
      ></path>
    </svg>
  );
}

export default Icon23Icon;
/* prettier-ignore-end */
