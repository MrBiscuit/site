// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquircleIcon(props: SquircleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.5 13.85c0-2.84.153-5.088.548-6.867C1.442 5.209 2.071 3.932 3.001 3c.93-.93 2.208-1.559 3.982-1.953C8.762.653 11.01.5 13.85.5h4.3c2.84 0 5.088.153 6.867.548 1.774.394 3.051 1.023 3.982 1.953.93.93 1.559 2.208 1.953 3.982.395 1.779.548 4.027.548 6.867v4.3c0 2.84-.153 5.088-.548 6.867-.394 1.774-1.023 3.051-1.953 3.982-.93.93-2.208 1.559-3.982 1.953-1.779.395-4.027.548-6.867.548h-4.3c-2.84 0-5.088-.153-6.867-.548-1.774-.394-3.051-1.023-3.982-1.953-.93-.93-1.559-2.208-1.953-3.982C.653 23.238.5 20.99.5 18.15v-4.3z"
        }
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquircleIcon;
/* prettier-ignore-end */
