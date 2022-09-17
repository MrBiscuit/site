// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JsIcon(props: JsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 3"}
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
          "M.264 2.671a.259.259 0 00.263-.266.259.259 0 00-.263-.266.26.26 0 00-.264.266c0 .15.113.266.264.266zm.724-.7c0 .443.32.732.789.732.498 0 .8-.298.8-.816V.063h-.402v1.822c0 .288-.145.441-.402.441-.23 0-.385-.143-.39-.355H.987zm2.114-.023c.029.46.414.755.988.755.613 0 .997-.309.997-.802 0-.388-.219-.602-.75-.725l-.285-.07C3.715 1.027 3.58.922 3.58.738c0-.232.211-.384.529-.384.301 0 .509.148.547.386h.39C5.023.306 4.64 0 4.114 0c-.565 0-.941.306-.941.765 0 .379.213.604.681.713l.334.08c.342.08.493.198.493.395 0 .229-.237.395-.56.395-.346 0-.586-.156-.62-.4h-.398z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default JsIcon;
/* prettier-ignore-end */
