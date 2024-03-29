// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: fYHVVFh75H

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
import sty from "./PlasmicUnstyledCheckbox.module.css"; // plasmic-import: fYHVVFh75H/css

import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: RXgPKtbZi/icon
import Icon35Icon from "./icons/PlasmicIcon__Icon35"; // plasmic-import: _Eaxzl60GB/icon

export type PlasmicUnstyledCheckbox__VariantMembers = {
  isMixed: "isMixed";
  isChecked: "isChecked";
};

export type PlasmicUnstyledCheckbox__VariantsArgs = {
  isMixed?: SingleBooleanChoiceArg<"isMixed">;
  isChecked?: SingleBooleanChoiceArg<"isChecked">;
};

type VariantPropType = keyof PlasmicUnstyledCheckbox__VariantsArgs;
export const PlasmicUnstyledCheckbox__VariantProps = new Array<VariantPropType>(
  "isMixed",
  "isChecked"
);

export type PlasmicUnstyledCheckbox__ArgsType = {
  text7?: React.ReactNode;
};

type ArgPropType = keyof PlasmicUnstyledCheckbox__ArgsType;
export const PlasmicUnstyledCheckbox__ArgProps = new Array<ArgPropType>(
  "text7"
);

export type PlasmicUnstyledCheckbox__OverridesType = {
  checkbox?: p.Flex<"div">;
  checkbox2?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultUnstyledCheckboxProps {
  text7?: React.ReactNode;
  isMixed?: SingleBooleanChoiceArg<"isMixed">;
  isChecked?: SingleBooleanChoiceArg<"isChecked">;
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

function PlasmicUnstyledCheckbox__RenderFunc(props: {
  variants: PlasmicUnstyledCheckbox__VariantsArgs;
  args: PlasmicUnstyledCheckbox__ArgsType;
  overrides: PlasmicUnstyledCheckbox__OverridesType;
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
        path: "isMixed",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isMixed
      },

      {
        path: "isChecked",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isChecked
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"checkbox"}
      data-plasmic-override={overrides.checkbox}
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
        sty.checkbox,
        { [sty.checkboxisMixed]: hasVariant($state, "isMixed", "isMixed") }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"checkbox2"}
        data-plasmic-override={overrides.checkbox2}
        hasGap={true}
        className={classNames(projectcss.all, sty.checkbox2, {
          [sty.checkbox2isChecked]: hasVariant(
            $state,
            "isChecked",
            "isChecked"
          ),
          [sty.checkbox2isMixed]: hasVariant($state, "isMixed", "isMixed")
        })}
      >
        {(hasVariant($state, "isMixed", "isMixed") ? true : true) ? (
          <CheckIcon
            className={classNames(projectcss.all, sty.svg__ms0Qx, {
              [sty.svgisChecked__ms0QxGXirl]: hasVariant(
                $state,
                "isChecked",
                "isChecked"
              ),
              [sty.svgisMixed__ms0Qxkat0]: hasVariant(
                $state,
                "isMixed",
                "isMixed"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(hasVariant($state, "isMixed", "isMixed") ? true : true) ? (
          <Icon35Icon
            className={classNames(projectcss.all, sty.svg__cdjM, {
              [sty.svgisChecked__cdjMGXirl]: hasVariant(
                $state,
                "isChecked",
                "isChecked"
              ),
              [sty.svgisMixed__cdjMkat0]: hasVariant(
                $state,
                "isMixed",
                "isMixed"
              )
            })}
            role={"img"}
          />
        ) : null}
      </p.Stack>
      <p.Stack
        as={"div"}
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        hasGap={true}
        className={classNames(projectcss.all, sty.text, {
          [sty.textisMixed]: hasVariant($state, "isMixed", "isMixed")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wuF3
              )}
            >
              {"Checkbox"}
            </div>
          ),
          value: args.text7,
          className: classNames(sty.slotTargetText7, {
            [sty.slotTargetText7isChecked]: hasVariant(
              $state,
              "isChecked",
              "isChecked"
            ),
            [sty.slotTargetText7isMixed]: hasVariant(
              $state,
              "isMixed",
              "isMixed"
            )
          })
        })}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  checkbox: ["checkbox", "checkbox2", "text"],
  checkbox2: ["checkbox2"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  checkbox: "div";
  checkbox2: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUnstyledCheckbox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUnstyledCheckbox__VariantsArgs;
    args?: PlasmicUnstyledCheckbox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUnstyledCheckbox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUnstyledCheckbox__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicUnstyledCheckbox__ArgProps,
          internalVariantPropNames: PlasmicUnstyledCheckbox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUnstyledCheckbox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "checkbox") {
    func.displayName = "PlasmicUnstyledCheckbox";
  } else {
    func.displayName = `PlasmicUnstyledCheckbox.${nodeName}`;
  }
  return func;
}

export const PlasmicUnstyledCheckbox = Object.assign(
  // Top-level PlasmicUnstyledCheckbox renders the root element
  makeNodeComponent("checkbox"),
  {
    // Helper components rendering sub-elements
    checkbox2: makeNodeComponent("checkbox2"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicUnstyledCheckbox
    internalVariantProps: PlasmicUnstyledCheckbox__VariantProps,
    internalArgProps: PlasmicUnstyledCheckbox__ArgProps
  }
);

export default PlasmicUnstyledCheckbox;
/* prettier-ignore-end */
