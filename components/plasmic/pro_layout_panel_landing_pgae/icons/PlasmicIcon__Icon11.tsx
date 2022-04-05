// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon11Icon(props: Icon11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 7"}
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
          "M3.597 4.91v-.308c0-.22.045-.42.136-.602.093-.184.227-.33.403-.44.178-.112.393-.168.645-.168.258 0 .474.055.648.165.174.11.306.256.395.44.09.184.136.386.136.605v.307c0 .22-.045.421-.136.605a1.093 1.093 0 01-.4.44c-.175.11-.389.165-.643.165-.255 0-.471-.055-.647-.164a1.093 1.093 0 01-.401-.44 1.345 1.345 0 01-.136-.606zm.662-.308v.307c0 .163.038.31.116.443.078.133.213.2.406.2.192 0 .325-.067.4-.2a.877.877 0 00.114-.443v-.307a.895.895 0 00-.11-.443c-.072-.132-.207-.199-.404-.199-.19 0-.324.067-.403.2a.845.845 0 00-.12.442zM.67 1.58v-.307c0-.22.046-.422.137-.605.093-.184.227-.33.403-.44.178-.11.393-.166.645-.166.258 0 .474.055.648.165.174.11.306.257.395.44.089.184.133.386.133.606v.307c0 .22-.045.42-.136.605a1.072 1.072 0 01-.398.44 1.18 1.18 0 01-.642.165c-.257 0-.474-.055-.65-.165a1.099 1.099 0 01-.398-.44A1.345 1.345 0 01.67 1.58zm.665-.307v.307c0 .162.038.31.114.443.078.132.213.199.406.199.19 0 .322-.067.398-.2a.86.86 0 00.116-.442v-.307A.895.895 0 002.26.83c-.074-.133-.209-.2-.404-.2-.19 0-.324.067-.403.2a.86.86 0 00-.117.443zM.94 6l4-5.818h.68L1.62 6H.94zm6.19-3.412v-.744h3.64v.744H7.13zm0 1.75v-.744h3.64v.744H7.13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon11Icon;
/* prettier-ignore-end */
