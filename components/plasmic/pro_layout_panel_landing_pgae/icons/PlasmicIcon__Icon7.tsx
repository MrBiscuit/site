// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 7"}
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
          "M.036 5.039v-.71L2.55.357h.56v1.045h-.355L.957 4.25v.045h3.446v.745H.036zm2.759 1.136V4.823l.005-.324V.357h.833v5.818h-.838zm2.99.054a.551.551 0 01-.4-.165.55.55 0 01-.168-.403.54.54 0 01.167-.398.547.547 0 01.4-.167c.156 0 .29.056.401.167.112.11.168.243.168.398a.588.588 0 01-.284.491.542.542 0 01-.284.077zm3.55.043c-.45-.002-.833-.12-1.151-.355-.319-.235-.562-.577-.73-1.026-.17-.449-.253-.99-.253-1.622 0-.63.084-1.17.252-1.617.17-.447.415-.787.733-1.022.32-.235.703-.353 1.148-.353.445 0 .827.119 1.145.356.318.234.562.575.73 1.022.17.445.256.983.256 1.614 0 .634-.084 1.176-.253 1.625-.169.447-.412.789-.73 1.025-.318.235-.7.353-1.148.353zm0-.759c.393 0 .7-.192.922-.576.224-.385.336-.94.336-1.668 0-.483-.052-.891-.154-1.225-.1-.335-.245-.589-.434-.76a.951.951 0 00-.67-.262c-.393 0-.7.193-.924.58-.224.386-.336.942-.338 1.667 0 .485.05.895.15 1.23.103.333.248.586.435.759a.97.97 0 00.676.255z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
