// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Wrapper19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Wrapper19Icon(props: Wrapper19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M3.18 4.122A7.865 7.865 0 001.577 6 7.865 7.865 0 003.18 7.879C3.931 8.507 4.88 9 6 9c1.122 0 2.07-.494 2.821-1.121A7.864 7.864 0 0010.422 6a7.864 7.864 0 00-1.601-1.878C8.07 3.494 7.121 3 6.001 3c-1.122 0-2.07.494-2.822 1.122zm-.641-.768C3.403 2.632 4.569 2 6 2s2.598.632 3.462 1.354a8.863 8.863 0 011.763 2.042c.059.092.135.212.174.38a1.09 1.09 0 010 .448 1.164 1.164 0 01-.174.38 8.863 8.863 0 01-1.763 2.042C8.598 9.368 7.43 10 6 10c-1.43 0-2.597-.632-3.461-1.354A8.863 8.863 0 01.775 6.605a1.17 1.17 0 01-.173-.381 1.08 1.08 0 010-.447 1.17 1.17 0 01.173-.381l.012-.02A8.863 8.863 0 012.54 3.355zM6 5a1 1 0 100 2 1 1 0 000-2zM4 6a2 2 0 114 0 2 2 0 01-4 0z"
        }
        fill={"currentColor"}
        fillOpacity={".1"}
      ></path>
    </svg>
  );
}

export default Wrapper19Icon;
/* prettier-ignore-end */
