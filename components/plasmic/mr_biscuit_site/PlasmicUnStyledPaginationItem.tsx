// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: chyRgv30hi
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

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
import sty from "./PlasmicUnStyledPaginationItem.module.css"; // plasmic-import: chyRgv30hi/css

import Icon40Icon from "./icons/PlasmicIcon__Icon40"; // plasmic-import: lMOinApUC7/icon

export type PlasmicUnStyledPaginationItem__VariantMembers = {
  isCurrent: "isCurrent";
  isDisabled: "isDisabled";
};

export type PlasmicUnStyledPaginationItem__VariantsArgs = {
  isCurrent?: SingleBooleanChoiceArg<"isCurrent">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};

type VariantPropType = keyof PlasmicUnStyledPaginationItem__VariantsArgs;
export const PlasmicUnStyledPaginationItem__VariantProps =
  new Array<VariantPropType>("isCurrent", "isDisabled");

export type PlasmicUnStyledPaginationItem__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicUnStyledPaginationItem__ArgsType;
export const PlasmicUnStyledPaginationItem__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicUnStyledPaginationItem__OverridesType = {
  prev?: p.Flex<"div">;
};

export interface DefaultUnStyledPaginationItemProps {
  children?: React.ReactNode;
  isCurrent?: SingleBooleanChoiceArg<"isCurrent">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicUnStyledPaginationItem__RenderFunc(props: {
  variants: PlasmicUnStyledPaginationItem__VariantsArgs;
  args: PlasmicUnStyledPaginationItem__ArgsType;
  overrides: PlasmicUnStyledPaginationItem__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useRouter();

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
        path: "isCurrent",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.isCurrent : undefined
      },

      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.isDisabled : undefined
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  return (
    true ? (
      <div
        data-plasmic-name={"prev"}
        data-plasmic-override={overrides.prev}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_outline_to_single_stroke_css.plasmic_tokens,
          sty.prev,
          {
            [sty.previsCurrent]: hasVariant($state, "isCurrent", "isCurrent"),
            [sty.previsDisabled]: hasVariant($state, "isDisabled", "isDisabled")
          }
        )}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Icon40Icon
              className={classNames(projectcss.all, sty.svg__fimDp)}
              role={"img"}
            />
          ),

          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenisCurrent]: hasVariant(
              $state,
              "isCurrent",
              "isCurrent"
            ),
            [sty.slotTargetChildrenisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            )
          })
        })}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  prev: ["prev"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  prev: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUnStyledPaginationItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUnStyledPaginationItem__VariantsArgs;
    args?: PlasmicUnStyledPaginationItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUnStyledPaginationItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUnStyledPaginationItem__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicUnStyledPaginationItem__ArgProps,
          internalVariantPropNames: PlasmicUnStyledPaginationItem__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicUnStyledPaginationItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "prev") {
    func.displayName = "PlasmicUnStyledPaginationItem";
  } else {
    func.displayName = `PlasmicUnStyledPaginationItem.${nodeName}`;
  }
  return func;
}

export const PlasmicUnStyledPaginationItem = Object.assign(
  // Top-level PlasmicUnStyledPaginationItem renders the root element
  makeNodeComponent("prev"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicUnStyledPaginationItem
    internalVariantProps: PlasmicUnStyledPaginationItem__VariantProps,
    internalArgProps: PlasmicUnStyledPaginationItem__ArgProps
  }
);

export default PlasmicUnStyledPaginationItem;
/* prettier-ignore-end */
