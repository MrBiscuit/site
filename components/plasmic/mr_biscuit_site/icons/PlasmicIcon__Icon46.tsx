// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon46IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon46Icon(props: Icon46IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M11.5 3.207l-4.79 4.79 1.458 3.75 3.333-8.54zM6.002 7.29l4.791-4.792-8.54 3.334L6.001 7.29zM12.067.94a.837.837 0 01.503-.01.792.792 0 01.5.5.837.837 0 01-.01.502c-.033.113-.086.249-.14.39l-3.86 9.887a5.662 5.662 0 01-.174.418c-.05.1-.15.291-.354.397a.792.792 0 01-.73 0c-.205-.106-.305-.298-.354-.397-.056-.113-.113-.261-.175-.419L5.738 8.261 1.791 6.726c-.157-.061-.305-.118-.418-.174-.1-.05-.29-.15-.397-.353a.792.792 0 010-.731c.106-.204.297-.305.396-.354.113-.056.26-.113.418-.175l.019-.007 9.87-3.851a5.01 5.01 0 01.388-.141z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon46Icon;
/* prettier-ignore-end */
