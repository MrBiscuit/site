// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: d4weC4A-AC
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
import UnstyledTabItem from "../../UnstyledTabItem"; // plasmic-import: TGc64044qj/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_outline_to_single_stroke_css from "../outline_to_single_stroke/plasmic_outline_to_single_stroke.module.css"; // plasmic-import: 56iVbBJXbx9hFxysoAGHJC/projectcss
import projectcss from "../pro_layout_panel_landing_pgae/plasmic_pro_layout_panel_landing_pgae.module.css"; // plasmic-import: qDNA17RfdgsM73kkELPPxa/projectcss
import sty from "./PlasmicUnstyledTabs.module.css"; // plasmic-import: d4weC4A-AC/css

export type PlasmicUnstyledTabs__VariantMembers = {};

export type PlasmicUnstyledTabs__VariantsArgs = {};
type VariantPropType = keyof PlasmicUnstyledTabs__VariantsArgs;
export const PlasmicUnstyledTabs__VariantProps = new Array<VariantPropType>();

export type PlasmicUnstyledTabs__ArgsType = {};
type ArgPropType = keyof PlasmicUnstyledTabs__ArgsType;
export const PlasmicUnstyledTabs__ArgProps = new Array<ArgPropType>();

export type PlasmicUnstyledTabs__OverridesType = {
  root?: p.Flex<"div">;
  first?: p.Flex<typeof UnstyledTabItem>;
  text2?: p.Flex<"div">;
  second?: p.Flex<typeof UnstyledTabItem>;
  text3?: p.Flex<"div">;
  third?: p.Flex<typeof UnstyledTabItem>;
  text4?: p.Flex<"div">;
};

export interface DefaultUnstyledTabsProps {
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

function PlasmicUnstyledTabs__RenderFunc(props: {
  variants: PlasmicUnstyledTabs__VariantsArgs;
  args: PlasmicUnstyledTabs__ArgsType;
  overrides: PlasmicUnstyledTabs__OverridesType;

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

  return (
    <div
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
    >
      <UnstyledTabItem
        data-plasmic-name={"first"}
        data-plasmic-override={overrides.first}
        className={classNames("__wab_instance", sty.first)}
        isCurrent={true}
        text={
          <div
            data-plasmic-name={"text2"}
            data-plasmic-override={overrides.text2}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text2
            )}
          >
            {"Tab 1"}
          </div>
        }
      />

      <UnstyledTabItem
        data-plasmic-name={"second"}
        data-plasmic-override={overrides.second}
        className={classNames("__wab_instance", sty.second)}
        text={
          <div
            data-plasmic-name={"text3"}
            data-plasmic-override={overrides.text3}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text3
            )}
          >
            {"Tab 2"}
          </div>
        }
      />

      <UnstyledTabItem
        data-plasmic-name={"third"}
        data-plasmic-override={overrides.third}
        className={classNames("__wab_instance", sty.third)}
        text={
          <div
            data-plasmic-name={"text4"}
            data-plasmic-override={overrides.text4}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text4
            )}
          >
            {"Tab 3"}
          </div>
        }
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "first", "text2", "second", "text3", "third", "text4"],
  first: ["first", "text2"],
  text2: ["text2"],
  second: ["second", "text3"],
  text3: ["text3"],
  third: ["third", "text4"],
  text4: ["text4"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  first: typeof UnstyledTabItem;
  text2: "div";
  second: typeof UnstyledTabItem;
  text3: "div";
  third: typeof UnstyledTabItem;
  text4: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUnstyledTabs__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUnstyledTabs__VariantsArgs;
    args?: PlasmicUnstyledTabs__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUnstyledTabs__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUnstyledTabs__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicUnstyledTabs__ArgProps,
          internalVariantPropNames: PlasmicUnstyledTabs__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicUnstyledTabs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUnstyledTabs";
  } else {
    func.displayName = `PlasmicUnstyledTabs.${nodeName}`;
  }
  return func;
}

export const PlasmicUnstyledTabs = Object.assign(
  // Top-level PlasmicUnstyledTabs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    first: makeNodeComponent("first"),
    text2: makeNodeComponent("text2"),
    second: makeNodeComponent("second"),
    text3: makeNodeComponent("text3"),
    third: makeNodeComponent("third"),
    text4: makeNodeComponent("text4"),

    // Metadata about props expected for PlasmicUnstyledTabs
    internalVariantProps: PlasmicUnstyledTabs__VariantProps,
    internalArgProps: PlasmicUnstyledTabs__ArgProps
  }
);

export default PlasmicUnstyledTabs;
/* prettier-ignore-end */
