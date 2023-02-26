// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: CnyTEdcn7w
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
import UnstyledToggleItem from "../../UnstyledToggleItem"; // plasmic-import: vmiyWYH3JC/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_outline_to_single_stroke_css from "../outline_to_single_stroke/plasmic_outline_to_single_stroke.module.css"; // plasmic-import: 56iVbBJXbx9hFxysoAGHJC/projectcss
import projectcss from "../pro_layout_panel_landing_pgae/plasmic_pro_layout_panel_landing_pgae.module.css"; // plasmic-import: qDNA17RfdgsM73kkELPPxa/projectcss
import sty from "./PlasmicUnstyledSegemented.module.css"; // plasmic-import: CnyTEdcn7w/css

export type PlasmicUnstyledSegemented__VariantMembers = {};

export type PlasmicUnstyledSegemented__VariantsArgs = {};
type VariantPropType = keyof PlasmicUnstyledSegemented__VariantsArgs;
export const PlasmicUnstyledSegemented__VariantProps =
  new Array<VariantPropType>();

export type PlasmicUnstyledSegemented__ArgsType = {};
type ArgPropType = keyof PlasmicUnstyledSegemented__ArgsType;
export const PlasmicUnstyledSegemented__ArgProps = new Array<ArgPropType>();

export type PlasmicUnstyledSegemented__OverridesType = {
  root?: p.Flex<"div">;
  first?: p.Flex<typeof UnstyledToggleItem>;
  second?: p.Flex<typeof UnstyledToggleItem>;
  third?: p.Flex<typeof UnstyledToggleItem>;
};

export interface DefaultUnstyledSegementedProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicUnstyledSegemented__RenderFunc(props: {
  variants: PlasmicUnstyledSegemented__VariantsArgs;
  args: PlasmicUnstyledSegemented__ArgsType;
  overrides: PlasmicUnstyledSegemented__OverridesType;

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
      <UnstyledToggleItem
        data-plasmic-name={"first"}
        data-plasmic-override={overrides.first}
        className={classNames("__wab_instance", sty.first)}
        isCurrent={true}
        text={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__zCzx8
            )}
          >
            {"Make"}
          </div>
        }
      />

      <UnstyledToggleItem
        data-plasmic-name={"second"}
        data-plasmic-override={overrides.second}
        className={classNames("__wab_instance", sty.second)}
        text={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__htbwa
            )}
          >
            {"UnStyled"}
          </div>
        }
      />

      <UnstyledToggleItem
        data-plasmic-name={"third"}
        data-plasmic-override={overrides.third}
        className={classNames("__wab_instance", sty.third)}
        text={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___96Poc
            )}
          >
            {"Your own"}
          </div>
        }
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "first", "second", "third"],
  first: ["first"],
  second: ["second"],
  third: ["third"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  first: typeof UnstyledToggleItem;
  second: typeof UnstyledToggleItem;
  third: typeof UnstyledToggleItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUnstyledSegemented__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUnstyledSegemented__VariantsArgs;
    args?: PlasmicUnstyledSegemented__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUnstyledSegemented__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUnstyledSegemented__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicUnstyledSegemented__ArgProps,
          internalVariantPropNames: PlasmicUnstyledSegemented__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicUnstyledSegemented__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUnstyledSegemented";
  } else {
    func.displayName = `PlasmicUnstyledSegemented.${nodeName}`;
  }
  return func;
}

export const PlasmicUnstyledSegemented = Object.assign(
  // Top-level PlasmicUnstyledSegemented renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    first: makeNodeComponent("first"),
    second: makeNodeComponent("second"),
    third: makeNodeComponent("third"),

    // Metadata about props expected for PlasmicUnstyledSegemented
    internalVariantProps: PlasmicUnstyledSegemented__VariantProps,
    internalArgProps: PlasmicUnstyledSegemented__ArgProps
  }
);

export default PlasmicUnstyledSegemented;
/* prettier-ignore-end */
