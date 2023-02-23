// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Wrapper18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Wrapper18Icon(props: Wrapper18IconProps) {
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
          "M7 2.5a1.875 1.875 0 100 3.75A1.875 1.875 0 007 2.5zM3.625 4.375a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zm1.799 3.917h3.152c.699 0 1.212 0 1.652.133a3.083 3.083 0 012.056 2.055c.133.44.133.954.133 1.652v.118a.75.75 0 01-1.5 0c0-.868-.008-1.137-.069-1.335A1.583 1.583 0 009.793 9.86c-.198-.06-.466-.068-1.335-.068H5.542c-.869 0-1.137.008-1.335.068-.506.154-.902.55-1.055 1.056-.06.197-.069.466-.069 1.334a.75.75 0 01-1.5 0v-.118c0-.698 0-1.212.133-1.652a3.083 3.083 0 012.056-2.055c.44-.134.953-.134 1.652-.133z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Wrapper18Icon;
/* prettier-ignore-end */
