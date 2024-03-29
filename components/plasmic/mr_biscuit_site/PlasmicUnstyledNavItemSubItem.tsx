// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: c3-xwhQPkN8

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
import sty from "./PlasmicUnstyledNavItemSubItem.module.css"; // plasmic-import: c3-xwhQPkN8/css

import Icon41Icon from "./icons/PlasmicIcon__Icon41"; // plasmic-import: VpWG7TJuBB/icon

export type PlasmicUnstyledNavItemSubItem__VariantMembers = {};

export type PlasmicUnstyledNavItemSubItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicUnstyledNavItemSubItem__VariantsArgs;
export const PlasmicUnstyledNavItemSubItem__VariantProps =
  new Array<VariantPropType>();

export type PlasmicUnstyledNavItemSubItem__ArgsType = {
  icon2?: React.ReactNode;
  children2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicUnstyledNavItemSubItem__ArgsType;
export const PlasmicUnstyledNavItemSubItem__ArgProps = new Array<ArgPropType>(
  "icon2",
  "children2"
);

export type PlasmicUnstyledNavItemSubItem__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultUnstyledNavItemSubItemProps {
  icon2?: React.ReactNode;
  children2?: React.ReactNode;
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

function PlasmicUnstyledNavItemSubItem__RenderFunc(props: {
  variants: PlasmicUnstyledNavItemSubItem__VariantsArgs;
  args: PlasmicUnstyledNavItemSubItem__ArgsType;
  overrides: PlasmicUnstyledNavItemSubItem__OverridesType;
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
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <Icon41Icon
            className={classNames(projectcss.all, sty.svg__lpBrm)}
            role={"img"}
          />
        ),

        value: args.icon2,
        className: classNames(sty.slotTargetIcon2)
      })}

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Logoname",
          value: args.children2,
          className: classNames(sty.slotTargetChildren2)
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUnstyledNavItemSubItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUnstyledNavItemSubItem__VariantsArgs;
    args?: PlasmicUnstyledNavItemSubItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUnstyledNavItemSubItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUnstyledNavItemSubItem__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicUnstyledNavItemSubItem__ArgProps,
          internalVariantPropNames: PlasmicUnstyledNavItemSubItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUnstyledNavItemSubItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUnstyledNavItemSubItem";
  } else {
    func.displayName = `PlasmicUnstyledNavItemSubItem.${nodeName}`;
  }
  return func;
}

export const PlasmicUnstyledNavItemSubItem = Object.assign(
  // Top-level PlasmicUnstyledNavItemSubItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicUnstyledNavItemSubItem
    internalVariantProps: PlasmicUnstyledNavItemSubItem__VariantProps,
    internalArgProps: PlasmicUnstyledNavItemSubItem__ArgProps
  }
);

export default PlasmicUnstyledNavItemSubItem;
/* prettier-ignore-end */
