// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: z9E_OoSoFq

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
import { AspectRatio } from "@chakra-ui/react"; // plasmic-import: haXMqUgpyx/codeComponent
import { Loop } from "../../Loop"; // plasmic-import: IeAlCi-lqq/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_outline_to_single_stroke_css from "../outline_to_single_stroke/plasmic_outline_to_single_stroke.module.css"; // plasmic-import: 56iVbBJXbx9hFxysoAGHJC/projectcss
import projectcss from "./plasmic_pro_layout_panel_landing_pgae.module.css"; // plasmic-import: qDNA17RfdgsM73kkELPPxa/projectcss
import sty from "./PlasmicPlugin.module.css"; // plasmic-import: z9E_OoSoFq/css

import Vector29Icon from "./icons/PlasmicIcon__Vector29"; // plasmic-import: aOaPmAzV3E/icon
import Vector30Icon from "./icons/PlasmicIcon__Vector30"; // plasmic-import: rZqnz2TPLr/icon
import Vector31Icon from "./icons/PlasmicIcon__Vector31"; // plasmic-import: CPUa3iJHbg/icon

export type PlasmicPlugin__VariantMembers = {};

export type PlasmicPlugin__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlugin__VariantsArgs;
export const PlasmicPlugin__VariantProps = new Array<VariantPropType>();

export type PlasmicPlugin__ArgsType = {
  destination?: string;
  imgSrc?: string;
  startIndex?: number;
  upload?: React.ComponentProps<typeof p.PlasmicImg>["src"];
};

type ArgPropType = keyof PlasmicPlugin__ArgsType;
export const PlasmicPlugin__ArgProps = new Array<ArgPropType>(
  "destination",
  "imgSrc",
  "startIndex",
  "upload"
);

export type PlasmicPlugin__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  aspectRatio?: p.Flex<typeof AspectRatio>;
  img?: p.Flex<typeof p.PlasmicImg>;
  loop?: p.Flex<typeof Loop>;
};

export interface DefaultPluginProps {
  destination?: string;
  imgSrc?: string;
  startIndex?: number;
  upload?: React.ComponentProps<typeof p.PlasmicImg>["src"];
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

function PlasmicPlugin__RenderFunc(props: {
  variants: PlasmicPlugin__VariantsArgs;
  args: PlasmicPlugin__ArgsType;
  overrides: PlasmicPlugin__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          imgSrc:
            "https://s3-alpha-sig.figma.com/plugins/1000208017155888036/20599/4554b100-03c1-49c2-8350-38b802bf5b18-icon?Expires=1664150400&Signature=SUoZ8JYzyZiedI53GvRJqV-pG58LMpFv-VWhlPN61w61lnO1ln-FoN5VNLCZWEO46I0SDXui5yYDdUm7W4Ml91yzJc542yjraqlWDZzaYXuaBl0wDA8Lil1shaIi0eKsx43hSkAydbjdzPKeFdyno89~wUhvWSrWFxuzScyHp~GodB4aknfc4kDo5M7LPo30yA8w6aTYkodLR6xmK8FwfUGMre8dPZ~pz5nyKI9MnhPmCFlaix84VtQ5f7nIjh-GtZIk-9z-w7hJ-MCTRPlDwuEuHFsFTEmXeeHwpMA5kL3SYxa2OeM9SyrzR~2L3Ttp562gLKtUw4lJsyZ71uge6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" as const,
          startIndex: 2 as const
        },
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

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_outline_to_single_stroke_css.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={args.destination}
      id={"" as const}
      platform={"nextjs"}
      target={"_blank" as const}
      title={"Instance Utils" as const}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <AspectRatio
        data-plasmic-name={"aspectRatio"}
        data-plasmic-override={overrides.aspectRatio}
        className={classNames("__wab_instance", sty.aspectRatio)}
        ratio={1 as const}
      >
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          loading={"lazy" as const}
          src={args.upload}
        />
      </AspectRatio>
      {(triggers.hover_root ? true : false) ? (
        <Loop
          data-plasmic-name={"loop"}
          data-plasmic-override={overrides.loop}
          className={classNames("__wab_instance", sty.loop)}
          interval={500 as const}
          startIndex={args.startIndex}
        >
          <Vector29Icon
            className={classNames(projectcss.all, sty.svg___8YeXp)}
            role={"img"}
          />

          <Vector30Icon
            className={classNames(projectcss.all, sty.svg__kLc7J)}
            role={"img"}
          />

          <Vector31Icon
            className={classNames(projectcss.all, sty.svg__aBvuc)}
            role={"img"}
          />
        </Loop>
      ) : null}
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "aspectRatio", "img", "loop"],
  aspectRatio: ["aspectRatio", "img"],
  img: ["img"],
  loop: ["loop"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  aspectRatio: typeof AspectRatio;
  img: typeof p.PlasmicImg;
  loop: typeof Loop;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlugin__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlugin__VariantsArgs;
    args?: PlasmicPlugin__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlugin__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPlugin__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPlugin__ArgProps,
          internalVariantPropNames: PlasmicPlugin__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPlugin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlugin";
  } else {
    func.displayName = `PlasmicPlugin.${nodeName}`;
  }
  return func;
}

export const PlasmicPlugin = Object.assign(
  // Top-level PlasmicPlugin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    aspectRatio: makeNodeComponent("aspectRatio"),
    img: makeNodeComponent("img"),
    loop: makeNodeComponent("loop"),

    // Metadata about props expected for PlasmicPlugin
    internalVariantProps: PlasmicPlugin__VariantProps,
    internalArgProps: PlasmicPlugin__ArgProps
  }
);

export default PlasmicPlugin;
/* prettier-ignore-end */
