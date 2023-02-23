// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon19Icon(props: Icon19IconProps) {
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
        d={
          "M7.583 1.75a.583.583 0 10-1.166 0v6.758L3.913 6.004a.583.583 0 10-.825.825l3.5 3.5a.583.583 0 00.824 0l3.5-3.5a.583.583 0 10-.825-.825L7.584 8.508V1.75zm-6.416 10.5c0-.322.26-.583.583-.583h10.5a.583.583 0 110 1.166H1.75a.583.583 0 01-.583-.583z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */
