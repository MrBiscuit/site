// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon44IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon44Icon(props: Icon44IconProps) {
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
          "M8.517 1.536l4.392 2.855c.155.1.232.15.289.218a.59.59 0 01.11.203c.025.084.025.176.025.361V9.45c0 .98 0 1.47-.19 1.845a1.75 1.75 0 01-.765.764c-.374.191-.865.191-1.845.191H4.467c-.98 0-1.47 0-1.845-.19a1.75 1.75 0 01-.765-.766c-.19-.374-.19-.864-.19-1.844V5.173c0-.185 0-.277.025-.361a.583.583 0 01.11-.203c.057-.067.134-.118.29-.218l4.39-2.855m2.035 0c-.368-.24-.552-.359-.75-.405a1.167 1.167 0 00-.534 0c-.198.046-.382.166-.75.405m2.034 0l4.214 2.74c.201.13.301.195.336.278.03.072.03.153 0 .226-.035.082-.135.148-.336.278l-4.214 2.74c-.368.238-.552.358-.75.405a1.167 1.167 0 01-.534 0c-.198-.047-.382-.167-.75-.406l-4.214-2.74c-.201-.13-.301-.195-.336-.277a.292.292 0 010-.226c.035-.083.135-.148.336-.279l4.214-2.739"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon44Icon;
/* prettier-ignore-end */
