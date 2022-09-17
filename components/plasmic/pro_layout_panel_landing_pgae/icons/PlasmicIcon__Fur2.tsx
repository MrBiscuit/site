// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fur2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fur2Icon(props: Fur2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 89 59"}
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
          "M88.05 0L75.567 2.011l-10.293 8.034-14.813 11.548s-1.54-5.245-3.264-4.126c-13.305 8.645-25.83 29.734-29.875 32.747C13.733 52.887 7.28 44.69 7.28 44.69l1.004 6.778-1.004 5.843c2.45.98 4.572 1.405 6.833 1.356 1.204-.026 2.447-.185 3.8-.466l.005-.002c2.262-.471 4.187-1.911 5.504-3.81a651.86 651.86 0 002.524-3.668c6.099-8.911 10.636-15.541 18.016-18.484v3.834c0 1.386 1.334 2.384 2.651 1.953h.002c13.01-4.261 20.697-10.083 33.167-25.075 1.465 2.039 3.315 3.098 5.756 3.86 1.27.396 2.51-.608 2.51-1.937V0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M7.281 57.312l1.004-5.843C5.253 51.072 2.276 49.614 0 48.456l2.26 3.013 5.021 5.843z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fur2Icon;
/* prettier-ignore-end */
