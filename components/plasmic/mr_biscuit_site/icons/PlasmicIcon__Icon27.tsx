// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon27Icon(props: Icon27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 126 126"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".4"}
        d={
          "M4.106 59.584l26.552-45.99C37.816 1.196 53.67-3.052 66.07 4.107c12.4 7.159 16.648 23.013 9.49 35.412l.543.315.544.314c7.159-12.4 23.014-16.648 35.413-9.49 12.399 7.16 16.647 23.014 9.489 35.413l-26.552 45.99c-7.16 12.399-23.014 16.647-35.413 9.489-12.4-7.159-16.647-23.014-9.489-35.413l-.544-.314-.544-.314c-7.158 12.399-23.013 16.647-35.412 9.489-12.4-7.16-16.648-23.014-9.49-35.413z"
        }
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"1.257"}
      ></path>
    </svg>
  );
}

export default Icon27Icon;
/* prettier-ignore-end */
