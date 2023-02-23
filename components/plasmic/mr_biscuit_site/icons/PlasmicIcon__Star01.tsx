// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Star01IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Star01Icon(props: Star01IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.298 3.422h0c.108-.218.19-.384.264-.503.075-.124.143-.203.223-.24a.5.5 0 01.43 0c.08.037.148.116.223.24l.848-.52-.848.52c.073.119.156.285.264.503h0l2.156 4.367a1 1 0 00.752.547l4.822.705h0c.24.035.424.063.56.095.14.034.236.075.297.138a.5.5 0 01.133.41c-.012.087-.066.176-.16.286l.76.65-.76-.65c-.09.106-.223.236-.397.406h0l-3.488 3.397a1 1 0 00-.288.885l.823 4.799h0c.041.24.072.423.083.562.011.144.002.248-.04.326a.5.5 0 01-.348.253c-.087.015-.188-.008-.322-.064l-.383.924.383-.924a6.976 6.976 0 01-.509-.252h0l-4.31-2.267a1 1 0 00-.931 0l-4.311 2.267h0c-.216.113-.38.199-.509.252-.134.056-.235.08-.322.064a.5.5 0 01-.348-.253c-.042-.078-.051-.182-.04-.326a7.01 7.01 0 01.083-.562h0l.823-4.799a1 1 0 00-.288-.885l-3.488-3.397h0c-.174-.17-.306-.3-.397-.406l-.758.65.758-.65c-.094-.11-.148-.199-.16-.286a.5.5 0 01.133-.41c.06-.063.157-.104.298-.138h0c.135-.032.319-.06.56-.095h0l4.821-.705a1 1 0 00.752-.547l2.156-4.367z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Star01Icon;
/* prettier-ignore-end */
