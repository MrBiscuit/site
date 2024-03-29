// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: vmiyWYH3JC

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
import sty from "./PlasmicUnstyledToggleItem.module.css"; // plasmic-import: vmiyWYH3JC/css

export type PlasmicUnstyledToggleItem__VariantMembers = {
  isCurrent: "isCurrent";
};

export type PlasmicUnstyledToggleItem__VariantsArgs = {
  isCurrent?: SingleBooleanChoiceArg<"isCurrent">;
};

type VariantPropType = keyof PlasmicUnstyledToggleItem__VariantsArgs;
export const PlasmicUnstyledToggleItem__VariantProps =
  new Array<VariantPropType>("isCurrent");

export type PlasmicUnstyledToggleItem__ArgsType = {
  text?: React.ReactNode;
};

type ArgPropType = keyof PlasmicUnstyledToggleItem__ArgsType;
export const PlasmicUnstyledToggleItem__ArgProps = new Array<ArgPropType>(
  "text"
);

export type PlasmicUnstyledToggleItem__OverridesType = {
  toggleItem?: p.Flex<"div">;
};

export interface DefaultUnstyledToggleItemProps {
  text?: React.ReactNode;
  isCurrent?: SingleBooleanChoiceArg<"isCurrent">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicUnstyledToggleItem__RenderFunc(props: {
  variants: PlasmicUnstyledToggleItem__VariantsArgs;
  args: PlasmicUnstyledToggleItem__ArgsType;
  overrides: PlasmicUnstyledToggleItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

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

  const [$queries, setDollarQueries] = React.useState({});

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "isCurrent",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isCurrent
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"toggleItem"}
      data-plasmic-override={overrides.toggleItem}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_outline_to_single_stroke_css.plasmic_tokens,
        sty.toggleItem,
        {
          [sty.toggleItemisCurrent]: hasVariant(
            $state,
            "isCurrent",
            "isCurrent"
          )
        }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__aesgq
            )}
          >
            {"Second"}
          </div>
        ),
        value: args.text,
        className: classNames(sty.slotTargetText)
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  toggleItem: ["toggleItem"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  toggleItem: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUnstyledToggleItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUnstyledToggleItem__VariantsArgs;
    args?: PlasmicUnstyledToggleItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUnstyledToggleItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUnstyledToggleItem__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicUnstyledToggleItem__ArgProps,
          internalVariantPropNames: PlasmicUnstyledToggleItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUnstyledToggleItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "toggleItem") {
    func.displayName = "PlasmicUnstyledToggleItem";
  } else {
    func.displayName = `PlasmicUnstyledToggleItem.${nodeName}`;
  }
  return func;
}

export const PlasmicUnstyledToggleItem = Object.assign(
  // Top-level PlasmicUnstyledToggleItem renders the root element
  makeNodeComponent("toggleItem"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicUnstyledToggleItem
    internalVariantProps: PlasmicUnstyledToggleItem__VariantProps,
    internalArgProps: PlasmicUnstyledToggleItem__ArgProps
  }
);

export default PlasmicUnstyledToggleItem;
/* prettier-ignore-end */
