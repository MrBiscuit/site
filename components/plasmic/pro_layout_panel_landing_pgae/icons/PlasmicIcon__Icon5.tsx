// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 12"}
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
          "M.418 6.403v-.639c.48 0 .815-.098 1.005-.294.19-.199.286-.527.286-.984V3.263c0-.435.048-.8.145-1.095.1-.299.25-.537.451-.716.202-.18.458-.309.767-.388.31-.08.675-.12 1.096-.12v1.01c-.33 0-.587.049-.772.145a.794.794 0 00-.387.452c-.071.202-.107.46-.107.776v1.55c0 .22-.033.423-.098.61a1.05 1.05 0 01-.362.482c-.176.136-.428.243-.755.32-.326.076-.75.114-1.27.114zm3.75 5.412c-.42 0-.786-.04-1.096-.119a1.814 1.814 0 01-.767-.388 1.617 1.617 0 01-.451-.716c-.097-.295-.145-.66-.145-1.095V8.27c0-.455-.095-.781-.286-.98-.19-.2-.525-.299-1.005-.299v-.634c.52 0 .943.038 1.27.115.326.073.578.18.754.32.176.136.297.298.362.485.065.185.098.386.098.605v1.551c0 .313.035.57.107.772a.794.794 0 00.387.451c.185.1.442.15.772.15v1.01zM.418 6.991V5.764h1.18v1.227H.418zM9.854.864L7.042 11.312H5.904L8.716.864h1.138zm5.481 5.493v.634c-.48 0-.815.1-1.006.299-.19.199-.285.525-.285.98v1.227c0 .435-.05.8-.15 1.095a1.586 1.586 0 01-.447.716 1.814 1.814 0 01-.767.388c-.31.08-.675.12-1.095.12v-1.01c.33 0 .587-.05.771-.15a.777.777 0 00.384-.451c.074-.202.11-.46.11-.772v-1.55c0-.22.033-.421.099-.606.065-.188.186-.35.362-.486.176-.139.428-.246.754-.32.327-.076.75-.114 1.27-.114zM11.585.945c.42 0 .786.04 1.095.119.31.08.566.209.767.388.202.179.351.417.448.716.1.295.149.66.149 1.095v1.223c0 .457.095.785.285.984.19.196.526.294 1.006.294v.64c-.52 0-.943-.039-1.27-.116-.326-.076-.578-.183-.754-.32a1.05 1.05 0 01-.362-.48 1.84 1.84 0 01-.098-.61V3.327c0-.316-.037-.574-.111-.776a.777.777 0 00-.384-.452c-.184-.096-.441-.144-.77-.144V.945zm3.75 4.82V6.99h-1.18V5.764h1.18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
