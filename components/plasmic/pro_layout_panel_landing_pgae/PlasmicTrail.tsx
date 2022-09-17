// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: hU9Uon0D8O
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariants_3KhhFf1Cq1Qfos } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 3KhhFf1CQ1QFOS/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_outline_to_single_stroke_css from "../outline_to_single_stroke/plasmic_outline_to_single_stroke.module.css"; // plasmic-import: 56iVbBJXbx9hFxysoAGHJC/projectcss
import projectcss from "./plasmic_pro_layout_panel_landing_pgae.module.css"; // plasmic-import: qDNA17RfdgsM73kkELPPxa/projectcss
import sty from "./PlasmicTrail.module.css"; // plasmic-import: hU9Uon0D8O/css

import Vector18Icon from "./icons/PlasmicIcon__Vector18"; // plasmic-import: 0aX0bdmSzNx/icon

export type PlasmicTrail__VariantMembers = {};

export type PlasmicTrail__VariantsArgs = {};
type VariantPropType = keyof PlasmicTrail__VariantsArgs;
export const PlasmicTrail__VariantProps = new Array<VariantPropType>();

export type PlasmicTrail__ArgsType = {};
type ArgPropType = keyof PlasmicTrail__ArgsType;
export const PlasmicTrail__ArgProps = new Array<ArgPropType>();

export type PlasmicTrail__OverridesType = {
  root?: p.Flex<"svg">;
};

export interface DefaultTrailProps {
  className?: string;
}

function PlasmicTrail__RenderFunc(props: {
  variants: PlasmicTrail__VariantsArgs;
  args: PlasmicTrail__ArgsType;
  overrides: PlasmicTrail__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_3KhhFf1Cq1Qfos()
  });

  return (
    (hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
      <Vector18Icon
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_outline_to_single_stroke_css.plasmic_tokens,
          sty.root
        )}
        role={"img"}
      />
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTrail__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTrail__VariantsArgs;
    args?: PlasmicTrail__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTrail__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTrail__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTrail__ArgProps,
          internalVariantPropNames: PlasmicTrail__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTrail__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTrail";
  } else {
    func.displayName = `PlasmicTrail.${nodeName}`;
  }
  return func;
}

export const PlasmicTrail = Object.assign(
  // Top-level PlasmicTrail renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTrail
    internalVariantProps: PlasmicTrail__VariantProps,
    internalArgProps: PlasmicTrail__ArgProps
  }
);

export default PlasmicTrail;
/* prettier-ignore-end */
