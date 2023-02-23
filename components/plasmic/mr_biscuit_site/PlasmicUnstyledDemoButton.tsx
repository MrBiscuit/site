// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: PZC_D0OEbs
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

import plasmic_outline_to_single_stroke_css from "../outline_to_single_stroke/plasmic_outline_to_single_stroke.module.css"; // plasmic-import: 56iVbBJXbx9hFxysoAGHJC/projectcss
import projectcss from "../pro_layout_panel_landing_pgae/plasmic_pro_layout_panel_landing_pgae.module.css"; // plasmic-import: qDNA17RfdgsM73kkELPPxa/projectcss
import sty from "./PlasmicUnstyledDemoButton.module.css"; // plasmic-import: PZC_D0OEbs/css

import Icon19Icon from "./icons/PlasmicIcon__Icon19"; // plasmic-import: T0dSDQfvxR/icon

export type PlasmicUnstyledDemoButton__VariantMembers = {
  hasSplit: "hasSplit";
  isIcon: "isIcon";
  isPrimary: "isPrimary";
};

export type PlasmicUnstyledDemoButton__VariantsArgs = {
  hasSplit?: SingleBooleanChoiceArg<"hasSplit">;
  isIcon?: SingleBooleanChoiceArg<"isIcon">;
  isPrimary?: SingleBooleanChoiceArg<"isPrimary">;
};

type VariantPropType = keyof PlasmicUnstyledDemoButton__VariantsArgs;
export const PlasmicUnstyledDemoButton__VariantProps =
  new Array<VariantPropType>("hasSplit", "isIcon", "isPrimary");

export type PlasmicUnstyledDemoButton__ArgsType = {
  text?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicUnstyledDemoButton__ArgsType;
export const PlasmicUnstyledDemoButton__ArgProps = new Array<ArgPropType>(
  "text",
  "children"
);

export type PlasmicUnstyledDemoButton__OverridesType = {
  unstyledDemoButton?: p.Flex<"div">;
  button2?: p.Flex<"div">;
  split?: p.Flex<"div">;
};

export interface DefaultUnstyledDemoButtonProps {
  text?: React.ReactNode;
  children?: React.ReactNode;
  hasSplit?: SingleBooleanChoiceArg<"hasSplit">;
  isIcon?: SingleBooleanChoiceArg<"isIcon">;
  isPrimary?: SingleBooleanChoiceArg<"isPrimary">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicUnstyledDemoButton__RenderFunc(props: {
  variants: PlasmicUnstyledDemoButton__VariantsArgs;
  args: PlasmicUnstyledDemoButton__ArgsType;
  overrides: PlasmicUnstyledDemoButton__OverridesType;

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

  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "hasSplit",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.hasSplit : undefined
      },

      {
        path: "isIcon",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.isIcon : undefined
      },

      {
        path: "isPrimary",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.isPrimary : undefined
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"unstyledDemoButton"}
      data-plasmic-override={overrides.unstyledDemoButton}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_outline_to_single_stroke_css.plasmic_tokens,
        sty.unstyledDemoButton,
        {
          [sty.unstyledDemoButtonisIcon]: hasVariant(
            $state,
            "isIcon",
            "isIcon"
          ),
          [sty.unstyledDemoButtonisIcon_isPrimary]:
            hasVariant($state, "isPrimary", "isPrimary") &&
            hasVariant($state, "isIcon", "isIcon")
        }
      )}
    >
      {(hasVariant($state, "isIcon", "isIcon") ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"button2"}
          data-plasmic-override={overrides.button2}
          hasGap={true}
          className={classNames(projectcss.all, sty.button2, {
            [sty.button2hasSplit]: hasVariant($state, "hasSplit", "hasSplit"),
            [sty.button2isIcon]: hasVariant($state, "isIcon", "isIcon"),
            [sty.button2isIcon_isPrimary]:
              hasVariant($state, "isPrimary", "isPrimary") &&
              hasVariant($state, "isIcon", "isIcon"),
            [sty.button2isPrimary]: hasVariant($state, "isPrimary", "isPrimary")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rEpcu
                )}
              >
                {"Split Button"}
              </div>
            ),

            value: args.text,
            className: classNames(sty.slotTargetText, {
              [sty.slotTargetTexthasSplit]: hasVariant(
                $state,
                "hasSplit",
                "hasSplit"
              ),
              [sty.slotTargetTextisIcon]: hasVariant(
                $state,
                "isIcon",
                "isIcon"
              ),
              [sty.slotTargetTextisPrimary]: hasVariant(
                $state,
                "isPrimary",
                "isPrimary"
              )
            })
          })}
        </p.Stack>
      ) : null}
      {(
        hasVariant($state, "isIcon", "isIcon")
          ? true
          : hasVariant($state, "hasSplit", "hasSplit")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"split"}
          data-plasmic-override={overrides.split}
          className={classNames(projectcss.all, sty.split, {
            [sty.splithasSplit]: hasVariant($state, "hasSplit", "hasSplit"),
            [sty.splitisIcon]: hasVariant($state, "isIcon", "isIcon"),
            [sty.splitisIcon_isPrimary]:
              hasVariant($state, "isPrimary", "isPrimary") &&
              hasVariant($state, "isIcon", "isIcon"),
            [sty.splitisPrimary]: hasVariant($state, "isPrimary", "isPrimary")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon19Icon
                className={classNames(projectcss.all, sty.svg___6T1Xx)}
                role={"img"}
              />
            ),

            value: args.children
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  unstyledDemoButton: ["unstyledDemoButton", "button2", "split"],
  button2: ["button2"],
  split: ["split"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  unstyledDemoButton: "div";
  button2: "div";
  split: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUnstyledDemoButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUnstyledDemoButton__VariantsArgs;
    args?: PlasmicUnstyledDemoButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUnstyledDemoButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUnstyledDemoButton__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicUnstyledDemoButton__ArgProps,
          internalVariantPropNames: PlasmicUnstyledDemoButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicUnstyledDemoButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "unstyledDemoButton") {
    func.displayName = "PlasmicUnstyledDemoButton";
  } else {
    func.displayName = `PlasmicUnstyledDemoButton.${nodeName}`;
  }
  return func;
}

export const PlasmicUnstyledDemoButton = Object.assign(
  // Top-level PlasmicUnstyledDemoButton renders the root element
  makeNodeComponent("unstyledDemoButton"),
  {
    // Helper components rendering sub-elements
    button2: makeNodeComponent("button2"),
    split: makeNodeComponent("split"),

    // Metadata about props expected for PlasmicUnstyledDemoButton
    internalVariantProps: PlasmicUnstyledDemoButton__VariantProps,
    internalArgProps: PlasmicUnstyledDemoButton__ArgProps
  }
);

export default PlasmicUnstyledDemoButton;
/* prettier-ignore-end */
