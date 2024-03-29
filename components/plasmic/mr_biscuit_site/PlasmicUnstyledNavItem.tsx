// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: oTpWPg9u2R

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
import UnstyledNavItemSubItem from "../../UnstyledNavItemSubItem"; // plasmic-import: c3-xwhQPkN8/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_outline_to_single_stroke_css from "../outline_to_single_stroke/plasmic_outline_to_single_stroke.module.css"; // plasmic-import: 56iVbBJXbx9hFxysoAGHJC/projectcss
import projectcss from "../pro_layout_panel_landing_pgae/plasmic_pro_layout_panel_landing_pgae.module.css"; // plasmic-import: qDNA17RfdgsM73kkELPPxa/projectcss
import sty from "./PlasmicUnstyledNavItem.module.css"; // plasmic-import: oTpWPg9u2R/css

import Icon41Icon from "./icons/PlasmicIcon__Icon41"; // plasmic-import: VpWG7TJuBB/icon
import Icon40Icon from "./icons/PlasmicIcon__Icon40"; // plasmic-import: lMOinApUC7/icon

export type PlasmicUnstyledNavItem__VariantMembers = {
  isGroup: "isGroup";
  expanded: "expanded";
};

export type PlasmicUnstyledNavItem__VariantsArgs = {
  isGroup?: SingleBooleanChoiceArg<"isGroup">;
  expanded?: SingleBooleanChoiceArg<"expanded">;
};

type VariantPropType = keyof PlasmicUnstyledNavItem__VariantsArgs;
export const PlasmicUnstyledNavItem__VariantProps = new Array<VariantPropType>(
  "isGroup",
  "expanded"
);

export type PlasmicUnstyledNavItem__ArgsType = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicUnstyledNavItem__ArgsType;
export const PlasmicUnstyledNavItem__ArgProps = new Array<ArgPropType>(
  "children",
  "icon",
  "slot"
);

export type PlasmicUnstyledNavItem__OverridesType = {
  root?: p.Flex<"div">;
  par?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultUnstyledNavItemProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  slot?: React.ReactNode;
  isGroup?: SingleBooleanChoiceArg<"isGroup">;
  expanded?: SingleBooleanChoiceArg<"expanded">;
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

function PlasmicUnstyledNavItem__RenderFunc(props: {
  variants: PlasmicUnstyledNavItem__VariantsArgs;
  args: PlasmicUnstyledNavItem__ArgsType;
  overrides: PlasmicUnstyledNavItem__OverridesType;
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
        path: "isGroup",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isGroup
      },

      {
        path: "expanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.expanded
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

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
        sty.root,
        {
          [sty.rootexpanded]: hasVariant($state, "expanded", "expanded"),
          [sty.rootisGroup]: hasVariant($state, "isGroup", "isGroup"),
          [sty.rootisGroup_expanded]:
            hasVariant($state, "isGroup", "isGroup") &&
            hasVariant($state, "expanded", "expanded")
        }
      )}
    >
      {(hasVariant($state, "expanded", "expanded") ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"par"}
          data-plasmic-override={overrides.par}
          hasGap={true}
          className={classNames(projectcss.all, sty.par, {
            [sty.parexpanded]: hasVariant($state, "expanded", "expanded"),
            [sty.parisGroup]: hasVariant($state, "isGroup", "isGroup"),
            [sty.parisGroup_expanded]:
              hasVariant($state, "isGroup", "isGroup") &&
              hasVariant($state, "expanded", "expanded")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon41Icon
                className={classNames(projectcss.all, sty.svg__ooSu0)}
                role={"img"}
              />
            ),

            value: args.icon,
            className: classNames(sty.slotTargetIcon, {
              [sty.slotTargetIconexpanded]: hasVariant(
                $state,
                "expanded",
                "expanded"
              ),
              [sty.slotTargetIconisGroup]: hasVariant(
                $state,
                "isGroup",
                "isGroup"
              ),
              [sty.slotTargetIconisGroup_expanded]:
                hasVariant($state, "isGroup", "isGroup") &&
                hasVariant($state, "expanded", "expanded")
            })
          })}

          <div
            className={classNames(projectcss.all, sty.freeBox__vcwFh, {
              [sty.freeBoxexpanded__vcwFhlG8TP]: hasVariant(
                $state,
                "expanded",
                "expanded"
              ),
              [sty.freeBoxisGroup__vcwFhHRdtf]: hasVariant(
                $state,
                "isGroup",
                "isGroup"
              ),
              [sty.freeBoxisGroup_expanded__vcwFhHRdtfLG8TP]:
                hasVariant($state, "isGroup", "isGroup") &&
                hasVariant($state, "expanded", "expanded")
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Logoname",
              value: args.children,
              className: classNames(sty.slotTargetChildren, {
                [sty.slotTargetChildrenexpanded]: hasVariant(
                  $state,
                  "expanded",
                  "expanded"
                ),
                [sty.slotTargetChildrenisGroup]: hasVariant(
                  $state,
                  "isGroup",
                  "isGroup"
                ),
                [sty.slotTargetChildrenisGroup_expanded]:
                  hasVariant($state, "isGroup", "isGroup") &&
                  hasVariant($state, "expanded", "expanded")
              })
            })}
          </div>
          {(
            hasVariant($state, "expanded", "expanded")
              ? true
              : hasVariant($state, "isGroup", "isGroup")
              ? true
              : true
          ) ? (
            <Icon40Icon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg, {
                [sty.svgexpanded]: hasVariant($state, "expanded", "expanded"),
                [sty.svgisGroup]: hasVariant($state, "isGroup", "isGroup"),
                [sty.svgisGroup_expanded]:
                  hasVariant($state, "isGroup", "isGroup") &&
                  hasVariant($state, "expanded", "expanded")
              })}
              role={"img"}
            />
          ) : null}
        </p.Stack>
      ) : null}
      {(hasVariant($state, "expanded", "expanded") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__rpVij, {
            [sty.freeBoxexpanded__rpVijlG8TP]: hasVariant(
              $state,
              "expanded",
              "expanded"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <UnstyledNavItemSubItem
                  className={classNames(
                    "__wab_instance",
                    sty.unstyledNavItemSubItem__vnCLy
                  )}
                />

                <UnstyledNavItemSubItem
                  className={classNames(
                    "__wab_instance",
                    sty.unstyledNavItemSubItem___1BAgt
                  )}
                />

                <UnstyledNavItemSubItem
                  className={classNames(
                    "__wab_instance",
                    sty.unstyledNavItemSubItem__vK9Ql
                  )}
                />
              </React.Fragment>
            ),
            value: args.slot
          })}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "par", "svg"],
  par: ["par", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  par: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUnstyledNavItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUnstyledNavItem__VariantsArgs;
    args?: PlasmicUnstyledNavItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUnstyledNavItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUnstyledNavItem__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicUnstyledNavItem__ArgProps,
          internalVariantPropNames: PlasmicUnstyledNavItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUnstyledNavItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUnstyledNavItem";
  } else {
    func.displayName = `PlasmicUnstyledNavItem.${nodeName}`;
  }
  return func;
}

export const PlasmicUnstyledNavItem = Object.assign(
  // Top-level PlasmicUnstyledNavItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    par: makeNodeComponent("par"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicUnstyledNavItem
    internalVariantProps: PlasmicUnstyledNavItem__VariantProps,
    internalArgProps: PlasmicUnstyledNavItem__ArgProps
  }
);

export default PlasmicUnstyledNavItem;
/* prettier-ignore-end */
