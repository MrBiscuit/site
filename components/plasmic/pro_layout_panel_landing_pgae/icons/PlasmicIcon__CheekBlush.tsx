// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheekBlushIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheekBlushIcon(props: CheekBlushIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 164 40"}
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
          "M12.054 9.794c6.916.684 12.735-.919 12.998-3.58.264-2.66-5.13-5.372-12.045-6.056C6.092-.526.272 1.076.01 3.738c-.263 2.66 5.13 5.372 12.045 6.056zm138.589 28.868c6.816 1.358 12.764.332 13.286-2.29.523-2.623-4.579-5.849-11.394-7.206-6.816-1.358-12.764-.333-13.286 2.29-.523 2.622 4.579 5.848 11.394 7.206z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CheekBlushIcon;
/* prettier-ignore-end */
