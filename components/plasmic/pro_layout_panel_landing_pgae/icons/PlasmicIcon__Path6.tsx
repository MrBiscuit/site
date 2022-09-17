// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path6Icon(props: Path6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
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
          "M2.275.266C1.517.91.542 1.597.135 2.536c-.2.462-.205.949.171 1.33.432.432 1.12.407 1.552 0 .351-.33.618-.733.899-1.104.286-.382.597-.738.904-1.105.823-.969-.417-2.21-1.386-1.39z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path6Icon;
/* prettier-ignore-end */
