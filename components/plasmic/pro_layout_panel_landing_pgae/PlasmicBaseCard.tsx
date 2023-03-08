// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: kB0nxxEQSAGjiC
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
import projectcss from "./plasmic_pro_layout_panel_landing_pgae.module.css"; // plasmic-import: qDNA17RfdgsM73kkELPPxa/projectcss
import sty from "./PlasmicBaseCard.module.css"; // plasmic-import: kB0nxxEQSAGjiC/css

export type PlasmicBaseCard__VariantMembers = {
  color: "grey" | "blue" | "black" | "purple";
};

export type PlasmicBaseCard__VariantsArgs = {
  color?: SingleChoiceArg<"grey" | "blue" | "black" | "purple">;
};

type VariantPropType = keyof PlasmicBaseCard__VariantsArgs;
export const PlasmicBaseCard__VariantProps = new Array<VariantPropType>(
  "color"
);

export type PlasmicBaseCard__ArgsType = {
  children?: React.ReactNode;
  iconBack?: React.ReactNode;
};

type ArgPropType = keyof PlasmicBaseCard__ArgsType;
export const PlasmicBaseCard__ArgProps = new Array<ArgPropType>(
  "children",
  "iconBack"
);

export type PlasmicBaseCard__OverridesType = {
  root?: p.Flex<"div">;
  color?: p.Flex<"div">;
};

export interface DefaultBaseCardProps {
  children?: React.ReactNode;
  iconBack?: React.ReactNode;
  color?: SingleChoiceArg<"grey" | "blue" | "black" | "purple">;
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

function PlasmicBaseCard__RenderFunc(props: {
  variants: PlasmicBaseCard__VariantsArgs;
  args: PlasmicBaseCard__ArgsType;
  overrides: PlasmicBaseCard__OverridesType;

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
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.color
          : undefined
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

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
        sty.root,
        {
          [sty.rootcolor_black]: hasVariant($state, "color", "black"),
          [sty.rootcolor_blue]: hasVariant($state, "color", "blue")
        }
      )}
    >
      <div
        data-plasmic-name={"color"}
        data-plasmic-override={overrides.color}
        className={classNames(projectcss.all, sty.color, {
          [sty.colorcolor_black]: hasVariant($state, "color", "black"),
          [sty.colorcolor_blue]: hasVariant($state, "color", "blue"),
          [sty.colorcolor_purple]: hasVariant($state, "color", "purple")
        })}
      />

      <div
        className={classNames(projectcss.all, sty.freeBox__dRDu, {
          [sty.freeBoxcolor_black__dRDuWuOza]: hasVariant(
            $state,
            "color",
            "black"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrencolor_black]: hasVariant(
              $state,
              "color",
              "black"
            ),
            [sty.slotTargetChildrencolor_blue]: hasVariant(
              $state,
              "color",
              "blue"
            ),
            [sty.slotTargetChildrencolor_grey]: hasVariant(
              $state,
              "color",
              "grey"
            )
          })
        })}
      </div>

      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__zHlux)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg___0HUfD)}
                role={"img"}
              />
            ),

            value: args.iconBack
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "color"],
  color: ["color"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  color: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBaseCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBaseCard__VariantsArgs;
    args?: PlasmicBaseCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBaseCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBaseCard__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicBaseCard__ArgProps,
          internalVariantPropNames: PlasmicBaseCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBaseCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBaseCard";
  } else {
    func.displayName = `PlasmicBaseCard.${nodeName}`;
  }
  return func;
}

export const PlasmicBaseCard = Object.assign(
  // Top-level PlasmicBaseCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    color: makeNodeComponent("color"),

    // Metadata about props expected for PlasmicBaseCard
    internalVariantProps: PlasmicBaseCard__VariantProps,
    internalArgProps: PlasmicBaseCard__ArgProps
  }
);

export default PlasmicBaseCard;
/* prettier-ignore-end */
