// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon53IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon53Icon(props: Icon53IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 25"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.646 2.477a1.5 1.5 0 00-1.292 0c-.353.168-.547.46-.645.62a7.731 7.731 0 00-.307.583L8.245 8.047l-4.822.705a7.57 7.57 0 00-.65.113c-.182.044-.52.139-.789.423a1.5 1.5 0 00-.398 1.228c.051.387.27.662.391.805.127.148.295.312.46.472l3.488 3.397-.823 4.799a7.752 7.752 0 00-.095.652c-.014.187-.029.538.158.882a1.5 1.5 0 001.045.759c.384.07.714-.051.887-.123a7.79 7.79 0 00.591-.291L12 19.6l4.31 2.267c.204.107.412.216.592.29.174.073.503.195.887.124a1.5 1.5 0 001.045-.76c.187-.343.172-.694.158-.881a7.757 7.757 0 00-.095-.652l-.822-4.799 3.487-3.397c.165-.16.333-.324.46-.472.122-.143.34-.418.39-.805a1.5 1.5 0 00-.397-1.228c-.27-.284-.607-.38-.79-.423a7.477 7.477 0 00-.649-.113l-4.822-.705L13.6 3.68a7.734 7.734 0 00-.308-.583c-.098-.16-.292-.452-.645-.62z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon53Icon;
/* prettier-ignore-end */
