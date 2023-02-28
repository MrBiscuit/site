// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: BydexUicCD
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
import SuperEllipse from "react-superellipse"; // plasmic-import: tA0fNNo2idi/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_outline_to_single_stroke_css from "../outline_to_single_stroke/plasmic_outline_to_single_stroke.module.css"; // plasmic-import: 56iVbBJXbx9hFxysoAGHJC/projectcss
import projectcss from "./plasmic_pro_layout_panel_landing_pgae.module.css"; // plasmic-import: qDNA17RfdgsM73kkELPPxa/projectcss
import sty from "./PlasmicSuperEllipseButton.module.css"; // plasmic-import: BydexUicCD/css

import Vector22Icon from "./icons/PlasmicIcon__Vector22"; // plasmic-import: 2iBZsGs4KF/icon

export type PlasmicSuperEllipseButton__VariantMembers = {};

export type PlasmicSuperEllipseButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicSuperEllipseButton__VariantsArgs;
export const PlasmicSuperEllipseButton__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSuperEllipseButton__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSuperEllipseButton__ArgsType;
export const PlasmicSuperEllipseButton__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicSuperEllipseButton__OverridesType = {
  root?: p.Flex<typeof SuperEllipse>;
  superEllipse?: p.Flex<typeof SuperEllipse>;
};

export interface DefaultSuperEllipseButtonProps {
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

function PlasmicSuperEllipseButton__RenderFunc(props: {
  variants: PlasmicSuperEllipseButton__VariantsArgs;
  args: PlasmicSuperEllipseButton__ArgsType;
  overrides: PlasmicSuperEllipseButton__OverridesType;

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
    true ? (
      <SuperEllipse
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          "__wab_instance",
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_outline_to_single_stroke_css.plasmic_tokens,
          sty.root
        )}
        r1={0.12 as const}
        r2={0.5 as const}
      >
        <SuperEllipse
          data-plasmic-name={"superEllipse"}
          data-plasmic-override={overrides.superEllipse}
          className={classNames("__wab_instance", sty.superEllipse)}
          r1={0.12 as const}
          r2={0.5 as const}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__pgCiL)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__yAtEx
                  )}
                >
                  {"Follow me on Twitter"}
                </div>

                <Vector22Icon
                  className={classNames(projectcss.all, sty.svg___36Itn)}
                  role={"img"}
                />
              </p.Stack>
            ),

            value: args.children
          })}
        </SuperEllipse>
      </SuperEllipse>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "superEllipse"],
  superEllipse: ["superEllipse"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof SuperEllipse;
  superEllipse: typeof SuperEllipse;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSuperEllipseButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSuperEllipseButton__VariantsArgs;
    args?: PlasmicSuperEllipseButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSuperEllipseButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSuperEllipseButton__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSuperEllipseButton__ArgProps,
          internalVariantPropNames: PlasmicSuperEllipseButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSuperEllipseButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSuperEllipseButton";
  } else {
    func.displayName = `PlasmicSuperEllipseButton.${nodeName}`;
  }
  return func;
}

export const PlasmicSuperEllipseButton = Object.assign(
  // Top-level PlasmicSuperEllipseButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    superEllipse: makeNodeComponent("superEllipse"),

    // Metadata about props expected for PlasmicSuperEllipseButton
    internalVariantProps: PlasmicSuperEllipseButton__VariantProps,
    internalArgProps: PlasmicSuperEllipseButton__ArgProps
  }
);

export default PlasmicSuperEllipseButton;
/* prettier-ignore-end */
