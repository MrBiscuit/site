// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 56iVbBJXbx9hFxysoAGHJC
// Component: Q1TXM3JsHL
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_outline_to_single_stroke.module.css"; // plasmic-import: 56iVbBJXbx9hFxysoAGHJC/projectcss
import sty from "./PlasmicDocsNextButton.module.css"; // plasmic-import: Q1TXM3JsHL/css

export type PlasmicDocsNextButton__VariantMembers = {
  iconPosition: "left" | "right";
};

export type PlasmicDocsNextButton__VariantsArgs = {
  iconPosition?: SingleChoiceArg<"left" | "right">;
};

type VariantPropType = keyof PlasmicDocsNextButton__VariantsArgs;
export const PlasmicDocsNextButton__VariantProps = new Array<VariantPropType>(
  "iconPosition"
);

export type PlasmicDocsNextButton__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicDocsNextButton__ArgsType;
export const PlasmicDocsNextButton__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicDocsNextButton__OverridesType = {
  nextPage?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultDocsNextButtonProps {
  children?: React.ReactNode;
  iconPosition?: SingleChoiceArg<"left" | "right">;
  className?: string;
}

function PlasmicDocsNextButton__RenderFunc(props: {
  variants: PlasmicDocsNextButton__VariantsArgs;
  args: PlasmicDocsNextButton__ArgsType;
  overrides: PlasmicDocsNextButton__OverridesType;

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

  return (
    <div
      data-plasmic-name={"nextPage"}
      data-plasmic-override={overrides.nextPage}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.nextPage
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {(hasVariant(variants, "iconPosition", "left") ? true : true) ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__m65Es,
              {
                [sty.texticonPosition_left__m65Es0Z1Jo]: hasVariant(
                  variants,
                  "iconPosition",
                  "left"
                )
              }
            )}
          >
            {"←"}
          </div>
        ) : null}
        {p.renderPlasmicSlot({
          defaultContents: "Playground",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildreniconPosition_left]: hasVariant(
              variants,
              "iconPosition",
              "left"
            ),
            [sty.slotTargetChildreniconPosition_right]: hasVariant(
              variants,
              "iconPosition",
              "right"
            )
          })
        })}

        {(hasVariant(variants, "iconPosition", "left") ? true : true) ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bcyt6,
              {
                [sty.texticonPosition_left__bcyt60Z1Jo]: hasVariant(
                  variants,
                  "iconPosition",
                  "left"
                )
              }
            )}
          >
            {"→"}
          </div>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  nextPage: ["nextPage", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  nextPage: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDocsNextButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDocsNextButton__VariantsArgs;
    args?: PlasmicDocsNextButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDocsNextButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDocsNextButton__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicDocsNextButton__ArgProps,
          internalVariantPropNames: PlasmicDocsNextButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicDocsNextButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "nextPage") {
    func.displayName = "PlasmicDocsNextButton";
  } else {
    func.displayName = `PlasmicDocsNextButton.${nodeName}`;
  }
  return func;
}

export const PlasmicDocsNextButton = Object.assign(
  // Top-level PlasmicDocsNextButton renders the root element
  makeNodeComponent("nextPage"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicDocsNextButton
    internalVariantProps: PlasmicDocsNextButton__VariantProps,
    internalArgProps: PlasmicDocsNextButton__ArgProps
  }
);

export default PlasmicDocsNextButton;
/* prettier-ignore-end */
