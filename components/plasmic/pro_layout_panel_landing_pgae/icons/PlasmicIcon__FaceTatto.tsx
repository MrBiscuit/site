// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaceTattoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaceTattoIcon(props: FaceTattoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 92 42"}
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
          "M1.365 4.009c13.12-4.434 27.032-5.195 42.807-2.257l2.844 3.39 4.936-1.585C66.409 6.903 82.299 15.993 91.26 27.695c.694.906-.353 1.852-1.259 1.157C74.988 17.33 65.345 11.797 49.111 8.977l-4.296 1.902 1.231 7.402c9.543 2.105 19.229 7.306 27.113 16.316.768.879-.284 1.976-1.256 1.329-9.42-6.272-17.973-10.448-27.293-13.004l-2.459 3.668a2.074 2.074 0 01-.88.74l-.71.317a2.074 2.074 0 01-2.735-1.045l-.162-.36a2.072 2.072 0 01-.176-.687l-.34-4.309c-8.12-1.441-17.05-1.863-27.714-1.532-1.254.039-1.523-1.766-.298-2.035 10.506-2.31 16.905-2.477 29.537-1.583l6.142-5.216-3.107-3.963C28.55 4.014 17.603 3.62 1.838 5.732.634 5.893.215 4.397 1.364 4.009zM55.73 40.33c-3.27-3.404-6.71-5.566-10.04-7.016-2.004-.873-4.198-1.168-6.384-1.168h-2.159c-2.042-1.524-4.522-2.374-7.069-2.319-3.25.07-6.47.316-10.247 1.181-1.21.277-.843 1.852.393 1.76 6.55-.492 12.132-.206 16.014.71 4.628 1.092 11.126 3.803 18.306 8.172.987.6 1.987-.487 1.187-1.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FaceTattoIcon;
/* prettier-ignore-end */
