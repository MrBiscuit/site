// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaceStrokeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaceStrokeIcon(props: FaceStrokeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 218 167"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M60.053 21.027c-18.535 15.074-28.924 35.198-31.715 42.64-2.955 7.882-8.753 13.344-13.787 16.835-5.539 3.84-10.385 8.376-11.204 14.427-.795 5.867-.884 13.425 1.747 20.634 3.49 9.567 11.424 14.412 18.86 20.55-10.145-3.691-17.605-8.776-21.544-19.571-2.848-7.807-2.723-15.879-1.894-21.996.998-7.365 6.82-12.518 12.408-16.392 4.767-3.305 10.063-8.352 12.74-15.49 2.92-7.79 13.565-28.383 32.587-43.853 19.1-15.534 46.652-25.886 83.094-12.959 32.882 11.664 48.455 31.481 56.802 49.626 8.323 18.094 9.407 34.385 8.645 42.77-.28 3.089.354 6.21 1.84 8.919 3.511 6.403 9.21 18.836 8.298 31.038-.46 6.153-2.604 12.275-7.558 17.491-6.853 7.214-15.809 10.276-25.514 10.816 5.08-2.297 10.48-4.14 15.386-6.775 3.337-1.793 5.982-3.825 8.057-6.009 4.428-4.661 6.361-10.126 6.781-15.736.846-11.327-4.491-23.136-7.955-29.451a18.493 18.493 0 01-2.179-10.551c.736-8.11-.359-23.845-8.396-41.318-8.014-17.422-22.983-36.714-55.161-48.128-35.358-12.542-61.883-2.526-80.338 12.483z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FaceStrokeIcon;
/* prettier-ignore-end */
