// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon43IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon43Icon(props: Icon43IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.07 9.917h4.667M6.831 1.612L2.875 4.69c-.265.206-.397.309-.492.438a1.167 1.167 0 00-.186.38c-.043.153-.043.32-.043.656v4.22c0 .654 0 .98.127 1.23.112.22.29.398.51.51.25.127.576.127 1.23.127h6.766c.654 0 .98 0 1.23-.127.22-.112.398-.29.51-.51.127-.25.127-.576.127-1.23v-4.22c0-.335 0-.503-.043-.657a1.167 1.167 0 00-.186-.38c-.095-.128-.227-.23-.492-.437L7.977 1.612c-.205-.16-.307-.239-.42-.27a.583.583 0 00-.305 0c-.114.031-.216.11-.42.27z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon43Icon;
/* prettier-ignore-end */
