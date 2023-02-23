// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon50IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon50Icon(props: Icon50IconProps) {
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
          "M6.413 2.156h-2.45c-.98 0-1.47 0-1.845.19a1.75 1.75 0 00-.765.765c-.19.375-.19.865-.19 1.845v4.9c0 .98 0 1.47.19 1.844.168.33.436.597.765.765.374.19.864.19 1.845.19h4.9c.98 0 1.47 0 1.844-.19a1.75 1.75 0 00.765-.765c.19-.374.19-.864.19-1.844v-2.45"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4.663 8.179c0-.285 0-.428.032-.562.028-.12.075-.233.14-.338.072-.117.172-.218.374-.42l5.579-5.578a1.237 1.237 0 011.75 1.75l-5.58 5.578c-.202.202-.302.303-.42.375a1.167 1.167 0 01-.337.14c-.135.032-.277.032-.563.032h-.976v-.977z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon50Icon;
/* prettier-ignore-end */
