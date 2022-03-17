// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 13"}
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
          "M.49 7.875v-.87L4.325.937h.63v1.347H4.53L1.632 6.869v.068h5.165v.938H.49zm4.108 1.79V.937h1.006v8.728H4.598zm3.813 2.454v-9h.971v1.04h.12a8.96 8.96 0 01.306-.435c.134-.179.324-.338.571-.477.25-.142.588-.213 1.015-.213.55 0 1.037.138 1.457.413.42.276.749.666.984 1.172.236.506.354 1.102.354 1.79 0 .693-.118 1.294-.354 1.802-.235.506-.562.898-.98 1.177a2.565 2.565 0 01-1.444.413c-.42 0-.757-.07-1.01-.209a1.872 1.872 0 01-.584-.481 6.448 6.448 0 01-.315-.452h-.086v3.46H8.411zm.988-5.727c0 .494.073.93.218 1.308.145.375.356.67.635.882.278.21.619.316 1.022.316.42 0 .772-.111 1.053-.333.284-.224.497-.525.64-.903.144-.38.216-.804.216-1.27 0-.46-.07-.875-.213-1.244a1.923 1.923 0 00-.635-.883c-.28-.218-.635-.328-1.06-.328-.41 0-.754.104-1.032.311a1.867 1.867 0 00-.63.861c-.143.367-.214.794-.214 1.283zm6.805-3.273l1.568 2.676L19.34 3.12h1.16l-2.114 3.273 2.113 3.273H19.34l-1.568-2.54-1.568 2.54h-1.16l2.08-3.273-2.08-3.273h1.16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
