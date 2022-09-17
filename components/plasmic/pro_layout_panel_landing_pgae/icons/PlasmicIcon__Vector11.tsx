// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector11Icon(props: Vector11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 90 76"}
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
          "M8.212 36.21l8.008-9.222c1.495 2.061 2.681 4.048 3.83 5.973 2.329 3.903 4.504 7.548 8.8 11.028l.924-3.432.019-.14c.283-2.081.575-4.222 1.056-3.855 1.747 1.332 4.143 4.117 6.852 7.266 3.023 3.513 6.435 7.478 9.767 10.38 1.241 1.081 3.028.148 3.028-1.498v-2.789c7.341 8.243 14.49 13.537 22.92 19.778a738.224 738.224 0 015.955 4.443c.747.565 1.56 1.044 2.448 1.34-8.43-6.242-23.167-22.772-27.937-31.493-.05-.21-.842-.282-.962-.103-1.418 2.108-4.905 5.107-5.816 4.177-5.774-5.889-11.298-15.314-11.65-20.45-.264 1.929-7.53 4.206-7.933 3.88-2.51-2.51-3.74-3.88-5.02-6.025-1.15-1.924-2.451-3.17-2.451-5.45h-3.885c-.6 0-1.148.32-1.702.554-1.138.483-2.565-.156-2.808-1.524C10.347 11.67 8.202 8.304 7.321.803L0 0c.51 4.08.944 7.791 1.353 11.283.998 8.544 1.845 15.784 3.295 23.958.301 1.7 2.432 2.274 3.564.97z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
