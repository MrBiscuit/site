// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: zQM7IHkPTi

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
import sty from "./PlasmicUnstyledDropdown.module.css"; // plasmic-import: zQM7IHkPTi/css

import Icon37Icon from "./icons/PlasmicIcon__Icon37"; // plasmic-import: WHV25Sv77u/icon

export type PlasmicUnstyledDropdown__VariantMembers = {};

export type PlasmicUnstyledDropdown__VariantsArgs = {};
type VariantPropType = keyof PlasmicUnstyledDropdown__VariantsArgs;
export const PlasmicUnstyledDropdown__VariantProps =
  new Array<VariantPropType>();

export type PlasmicUnstyledDropdown__ArgsType = {
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicUnstyledDropdown__ArgsType;
export const PlasmicUnstyledDropdown__ArgProps = new Array<ArgPropType>(
  "endIcon",
  "children"
);

export type PlasmicUnstyledDropdown__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  endIconContainer?: p.Flex<"div">;
};

export interface DefaultUnstyledDropdownProps {
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
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

function PlasmicUnstyledDropdown__RenderFunc(props: {
  variants: PlasmicUnstyledDropdown__VariantsArgs;
  args: PlasmicUnstyledDropdown__ArgsType;
  overrides: PlasmicUnstyledDropdown__OverridesType;
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
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Dropdown Select",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
      {true ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon37Icon
                className={classNames(projectcss.all, sty.svg__xVs8)}
                role={"img"}
              />
            ),

            value: args.endIcon
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "endIconContainer"],
  freeBox: ["freeBox"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUnstyledDropdown__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUnstyledDropdown__VariantsArgs;
    args?: PlasmicUnstyledDropdown__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUnstyledDropdown__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUnstyledDropdown__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicUnstyledDropdown__ArgProps,
          internalVariantPropNames: PlasmicUnstyledDropdown__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUnstyledDropdown__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUnstyledDropdown";
  } else {
    func.displayName = `PlasmicUnstyledDropdown.${nodeName}`;
  }
  return func;
}

export const PlasmicUnstyledDropdown = Object.assign(
  // Top-level PlasmicUnstyledDropdown renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicUnstyledDropdown
    internalVariantProps: PlasmicUnstyledDropdown__VariantProps,
    internalArgProps: PlasmicUnstyledDropdown__ArgProps
  }
);

export default PlasmicUnstyledDropdown;
/* prettier-ignore-end */
