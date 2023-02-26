// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon58IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon58Icon(props: Icon58IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.944 3.17v-.467c0-.654 0-.98-.127-1.23a1.167 1.167 0 00-.51-.51C8.057.836 7.73.836 7.077.836h-.933c-.653 0-.98 0-1.23.127-.22.112-.398.29-.51.51-.127.25-.127.576-.127 1.23v.466m1.167 3.209v2.916m2.333-2.916v2.916M1.361 3.17h10.5m-1.167 0v6.534c0 .98 0 1.47-.19 1.844a1.75 1.75 0 01-.766.765c-.374.19-.864.19-1.844.19H5.327c-.98 0-1.47 0-1.844-.19a1.75 1.75 0 01-.765-.765c-.19-.374-.19-.864-.19-1.844V3.169"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon58Icon;
/* prettier-ignore-end */
