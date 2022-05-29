// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon24Icon(props: Icon24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 18"}
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
          "M7.613.21l.094.083L11 3.585 14.293.293a1 1 0 011.32-.083l.094.083 6 6a1 1 0 01.083 1.32l-.083.094-10 10a.996.996 0 01-.53.277l-.118.014h-.118a.997.997 0 01-.648-.29l-10-10a1 1 0 01-.083-1.32l.083-.095 6-6A1 1 0 017.51.14l.102.07zM7 2.415L2.415 7 11 15.585l.585-.585-.792-.793a1 1 0 011.32-1.497l.094.083.793.792.585-.585-.792-.793a1 1 0 011.32-1.497l.094.083.793.792.585-.585L13 8.415l-2.293 2.292a1 1 0 01-1.112.207l-.11-.056-2.5-1.5-.097-.067-.095-.084a1.007 1.007 0 01-.101-.118l-.081-.131-.05-.112-.023-.074-.022-.094-.013-.105-.003-.084.003-.062.011-.098.03-.126.019-.052a.992.992 0 01.147-.264l.083-.094L9.585 5 7 2.415zm8 0L9.113 8.301l.731.439 2.449-2.447a1 1 0 011.32-.083l.094.083L17 9.585 19.585 7 15 2.415z"
        }
        fill={"currentColor"}
        fillOpacity={".85"}
      ></path>
    </svg>
  );
}

export default Icon24Icon;
/* prettier-ignore-end */
