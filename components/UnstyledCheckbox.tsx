// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicUnstyledCheckbox,
  DefaultUnstyledCheckboxProps
} from "./plasmic/mr_biscuit_site/PlasmicUnstyledCheckbox";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface UnstyledCheckboxProps extends Omit<DefaultUnstyledCheckboxProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultUnstyledCheckboxProps altogether and have
// total control over the props for your component.
export interface UnstyledCheckboxProps extends DefaultUnstyledCheckboxProps {}

function UnstyledCheckbox_(
  props: UnstyledCheckboxProps,
  ref: HTMLElementRefOf<"div">
) {
  const [checked, setChecked] = React.useState(false);
  return <PlasmicUnstyledCheckbox checkbox={{ ref }} onClick={()=>{
    setChecked(!checked);
  }} isChecked={checked} {...props} />;
}

const UnstyledCheckbox = React.forwardRef(UnstyledCheckbox_);
export default UnstyledCheckbox;
