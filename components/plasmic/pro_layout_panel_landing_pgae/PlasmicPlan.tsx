// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: IC0peUQeOrc-TC

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
import BaseCard from "../../BaseCard"; // plasmic-import: kB0nxxEQSAGjiC/component
import Bullet from "../../Bullet"; // plasmic-import: h8iasHjPSdhGL5/component
import Button from "../../Button"; // plasmic-import: s3E0QheUTMLIRg/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_outline_to_single_stroke_css from "../outline_to_single_stroke/plasmic_outline_to_single_stroke.module.css"; // plasmic-import: 56iVbBJXbx9hFxysoAGHJC/projectcss
import projectcss from "./plasmic_pro_layout_panel_landing_pgae.module.css"; // plasmic-import: qDNA17RfdgsM73kkELPPxa/projectcss
import sty from "./PlasmicPlan.module.css"; // plasmic-import: IC0peUQeOrc-TC/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: r_TPt86vHV4SXb/icon

export type PlasmicPlan__VariantMembers = {
  color: "blue" | "black" | "purle";
};

export type PlasmicPlan__VariantsArgs = {
  color?: SingleChoiceArg<"blue" | "black" | "purle">;
};

type VariantPropType = keyof PlasmicPlan__VariantsArgs;
export const PlasmicPlan__VariantProps = new Array<VariantPropType>("color");

export type PlasmicPlan__ArgsType = {
  price?: React.ReactNode;
  name?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  name2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPlan__ArgsType;
export const PlasmicPlan__ArgProps = new Array<ArgPropType>(
  "price",
  "name",
  "description",
  "children",
  "name2"
);

export type PlasmicPlan__OverridesType = {
  root?: p.Flex<typeof BaseCard>;
  svg?: p.Flex<"svg">;
};

export interface DefaultPlanProps {
  price?: React.ReactNode;
  name?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  name2?: React.ReactNode;
  color?: SingleChoiceArg<"blue" | "black" | "purle">;
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

function PlasmicPlan__RenderFunc(props: {
  variants: PlasmicPlan__VariantsArgs;
  args: PlasmicPlan__ArgsType;
  overrides: PlasmicPlan__OverridesType;
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
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <BaseCard
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root, {
        [sty.rootcolor_black]: hasVariant($state, "color", "black"),
        [sty.rootcolor_blue]: hasVariant($state, "color", "blue"),
        [sty.rootcolor_purle]: hasVariant($state, "color", "purle")
      })}
      color={
        hasVariant($state, "color", "purle")
          ? ("purple" as const)
          : hasVariant($state, "color", "black")
          ? ("black" as const)
          : hasVariant($state, "color", "blue")
          ? ("blue" as const)
          : undefined
      }
      iconBack={
        <svg
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      }
    >
      {true ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__zZJh, {
            [sty.freeBoxcolor_blue__zZJh3XiLz]: hasVariant(
              $state,
              "color",
              "blue"
            )
          })}
        />
      ) : null}
      <div className={classNames(projectcss.all, sty.freeBox__lHcut)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__k5FnP, {
            [sty.freeBoxcolor_black__k5FnPopnhd]: hasVariant(
              $state,
              "color",
              "black"
            )
          })}
        >
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__zlMuc)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Basic",
                value: args.name,
                className: classNames(sty.slotTargetName, {
                  [sty.slotTargetNamecolor_purle]: hasVariant(
                    $state,
                    "color",
                    "purle"
                  )
                })
              })}

              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__rGcPc)}>
                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mKhs
                        )}
                      >
                        {"$10"}
                      </div>
                    ),
                    value: args.price
                  })}

                  {p.renderPlasmicSlot({
                    defaultContents: "description",
                    value: args.name2,
                    className: classNames(sty.slotTargetName2)
                  })}
                </div>
              ) : null}
              {p.renderPlasmicSlot({
                defaultContents: (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__wgNzi)}
                  >
                    <Bullet
                      className={classNames("__wab_instance", sty.bullet__vjMg)}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__r3Q8I
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__rZeqf
                      )}
                    />
                  </p.Stack>
                ),
                value: args.description
              })}
            </p.Stack>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox___6Glu4)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <Button
                  className={classNames("__wab_instance", sty.button__pYicp)}
                  color={"outline" as const}
                  submitsForm={true}
                >
                  {"Get started"}
                </Button>
              ),
              value: args.children
            })}
          </div>
        </p.Stack>
      </div>
    </BaseCard>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof BaseCard;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlan__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlan__VariantsArgs;
    args?: PlasmicPlan__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlan__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPlan__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPlan__ArgProps,
          internalVariantPropNames: PlasmicPlan__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPlan__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlan";
  } else {
    func.displayName = `PlasmicPlan.${nodeName}`;
  }
  return func;
}

export const PlasmicPlan = Object.assign(
  // Top-level PlasmicPlan renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicPlan
    internalVariantProps: PlasmicPlan__VariantProps,
    internalArgProps: PlasmicPlan__ArgProps
  }
);

export default PlasmicPlan;
/* prettier-ignore-end */
