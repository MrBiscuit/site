// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fur3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fur3Icon(props: Fur3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 162 77"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M28.462 41.614l-.032.13c-2.139-1.958-3.677-3.978-5.062-6.108a104.052 104.052 0 01-2.09-3.404l-.346-.58c-.824-1.377-1.696-2.813-2.705-4.293-.959-1.405-2.952-1.461-4.029-.222l-7.064 8.137a.615.615 0 01-1.08-.283c-1.442-8.13-2.282-15.31-3.278-23.833-.349-2.983-.716-6.131-1.136-9.541l158.195 17.346v13.592a.618.618 0 01-.233.492.443.443 0 01-.424.083c-2.25-.703-3.793-1.62-5.022-3.33l-1.077-1.5-1.18 1.42c-6.209 7.464-11.167 12.57-16.145 16.335-4.956 3.749-9.982 6.203-16.368 8.295a.604.604 0 01-.781-.595v-5.941l-1.957.78c-4.482 1.787-7.932 4.828-11.172 8.705-2.465 2.95-4.869 6.463-7.523 10.342a637.371 637.371 0 01-2.49 3.618c-1.146 1.653-2.78 2.843-4.626 3.227-3.218.668-5.681.598-8.568-.36-.698-.232-1.373-.622-2.036-1.123-2.09-1.58-4.087-3.06-6.01-4.483-7.635-5.655-14.11-10.45-20.659-17.369-1.573-1.662-4.496-.623-4.496 1.771v.78C43.22 48.94 35.356 39.735 32.775 36.647c-1.114-1.334-3.26-.71-3.534.972-.183 1.123-.468 2.737-.779 3.994zm-.46 1.443a.062.062 0 010 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.856"}
      ></path>
    </svg>
  );
}

export default Fur3Icon;
/* prettier-ignore-end */
