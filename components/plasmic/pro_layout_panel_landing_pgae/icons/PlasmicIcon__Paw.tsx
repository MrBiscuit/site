// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PawIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PawIcon(props: PawIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 24"}
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
          "M19.127 4.554c-.284 2.295-1.887 3.985-3.58 3.775-1.692-.21-2.834-2.24-2.549-4.536.285-2.295 1.888-3.985 3.58-3.775 1.693.21 2.834 2.24 2.55 4.536zm5.603 5.48c-.285 2.295-1.888 3.985-3.58 3.775-1.693-.21-2.834-2.24-2.55-4.536.285-2.295 1.888-3.985 3.58-3.775 1.693.21 2.834 2.24 2.55 4.536zM11.836 3.825c.28 2.296-.866 4.325-2.559 4.53-1.693.207-3.292-1.487-3.571-3.783-.28-2.296.866-4.324 2.559-4.53 1.693-.207 3.292 1.487 3.571 3.783zm-5.663 5.45c.28 2.295-.866 4.324-2.56 4.53-1.691.205-3.29-1.488-3.57-3.785-.28-2.296.866-4.324 2.56-4.53 1.692-.206 3.291 1.488 3.57 3.784zm16.347 9.922A4.803 4.803 0 0117.719 24c-2.653 0-3.176-1.029-5.319-1.029-2.142 0-2.666 1.029-5.318 1.029a4.803 4.803 0 01-4.804-4.803c0-2.653 2.454-4.945 4.645-6.118 2.191-1.173 2.705-3.31 5.477-3.31 2.773 0 3.286 2.137 5.477 3.31 2.191 1.173 4.645 3.465 4.645 6.118z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PawIcon;
/* prettier-ignore-end */
