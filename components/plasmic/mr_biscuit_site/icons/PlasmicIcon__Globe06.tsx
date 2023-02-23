// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Globe06IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Globe06Icon(props: Globe06IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M9.592 3.326A9.008 9.008 0 0112 3a8.96 8.96 0 015.256 1.693c-.787.52-1.374 1.085-1.78 1.689-.622.922-.781 1.876-.653 2.747.125.845.514 1.567.922 2.101.395.518.88.951 1.308 1.165 1.076.538 2.318.807 3.247.946.84.126 2.62.546 2.686-.792.01-.182.014-.365.014-.549 0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11c.184 0 .367-.005.55-.014a1 1 0 10-.1-1.997 9 9 0 01-8.485-4.928l.97-.559 3.572.669a1.5 1.5 0 001.776-1.481l-.014-3.153 1.826-3.126a1.5 1.5 0 00-.068-1.62L9.592 3.327z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.946 12.656a1 1 0 00-1.29 1.29l3.167 8.348a1 1 0 001.863.017l1.321-3.304 3.304-1.32a1 1 0 00-.017-1.864l-8.348-3.167z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Globe06Icon;
/* prettier-ignore-end */
