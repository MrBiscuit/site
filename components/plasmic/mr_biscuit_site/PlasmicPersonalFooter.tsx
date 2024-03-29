// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: gYEMnmmnyX8

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
import SuperEllipseButton from "../../SuperEllipseButton"; // plasmic-import: BydexUicCD/component

import { useScreenVariants as useScreenVariants_3KhhFf1Cq1Qfos } from "../pro_layout_panel_landing_pgae/PlasmicGlobalVariant__Screen"; // plasmic-import: 3KhhFf1CQ1QFOS/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_outline_to_single_stroke_css from "../outline_to_single_stroke/plasmic_outline_to_single_stroke.module.css"; // plasmic-import: 56iVbBJXbx9hFxysoAGHJC/projectcss
import projectcss from "../pro_layout_panel_landing_pgae/plasmic_pro_layout_panel_landing_pgae.module.css"; // plasmic-import: qDNA17RfdgsM73kkELPPxa/projectcss
import sty from "./PlasmicPersonalFooter.module.css"; // plasmic-import: gYEMnmmnyX8/css

import Vector22Icon from "../pro_layout_panel_landing_pgae/icons/PlasmicIcon__Vector22"; // plasmic-import: 2iBZsGs4KF/icon

export type PlasmicPersonalFooter__VariantMembers = {};

export type PlasmicPersonalFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicPersonalFooter__VariantsArgs;
export const PlasmicPersonalFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicPersonalFooter__ArgsType = {};
type ArgPropType = keyof PlasmicPersonalFooter__ArgsType;
export const PlasmicPersonalFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicPersonalFooter__OverridesType = {
  root?: p.Flex<"div">;
  frame1253?: p.Flex<"div">;
  frame1254?: p.Flex<"div">;
  frame1255?: p.Flex<"div">;
  frame1256?: p.Flex<"div">;
  frame1257?: p.Flex<"div">;
  frame1258?: p.Flex<"div">;
  frame1259?: p.Flex<"div">;
  frame1260?: p.Flex<"div">;
  superEllipseButton?: p.Flex<typeof SuperEllipseButton>;
  freeBox?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultPersonalFooterProps {
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

function PlasmicPersonalFooter__RenderFunc(props: {
  variants: PlasmicPersonalFooter__VariantsArgs;
  args: PlasmicPersonalFooter__ArgsType;
  overrides: PlasmicPersonalFooter__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_3KhhFf1Cq1Qfos()
  });

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
      <p.Stack
        as={"div"}
        data-plasmic-name={"frame1253"}
        data-plasmic-override={overrides.frame1253}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame1253)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"frame1254"}
          data-plasmic-override={overrides.frame1254}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame1254)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cq5Xf
            )}
          >
            {"About Me"}
          </div>
          <div
            data-plasmic-name={"frame1255"}
            data-plasmic-override={overrides.frame1255}
            className={classNames(projectcss.all, sty.frame1255)}
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__r7DmQ
              )}
              component={Link}
              href={`/about`}
              platform={"nextjs"}
            >
              {"My Story"}
            </p.PlasmicLink>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__hVwmr
              )}
              component={Link}
              href={
                "https://www.figma.com/preload-editor?fuid=405240457298389341" as const
              }
              platform={"nextjs"}
            >
              {"My Works"}
            </p.PlasmicLink>
          </div>
        </p.Stack>
        <p.Stack
          as={"div"}
          data-plasmic-name={"frame1256"}
          data-plasmic-override={overrides.frame1256}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame1256)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__w66O
            )}
          >
            {"Shop"}
          </div>
          <div
            data-plasmic-name={"frame1257"}
            data-plasmic-override={overrides.frame1257}
            className={classNames(projectcss.all, sty.frame1257)}
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__dwjfg
              )}
              component={Link}
              href={`/plp_cn`}
              platform={"nextjs"}
            >
              {"Pro Layout Panel"}
            </p.PlasmicLink>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__xhWuT
              )}
              component={Link}
              href={`/figmasection`}
              platform={"nextjs"}
            >
              {"Figma Section"}
            </p.PlasmicLink>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___8Sgq6
              )}
              component={Link}
              href={
                "https://www.figma.com/community/plugin/913055393462842774/Instance-Utils" as const
              }
              platform={"nextjs"}
            >
              {"Instance Utils"}
            </p.PlasmicLink>
          </div>
        </p.Stack>
        <p.Stack
          as={"div"}
          data-plasmic-name={"frame1258"}
          data-plasmic-override={overrides.frame1258}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame1258)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__xdNx
            )}
          >
            {"Collaborate"}
          </div>
          <div
            data-plasmic-name={"frame1259"}
            data-plasmic-override={overrides.frame1259}
            className={classNames(projectcss.all, sty.frame1259)}
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__snYy3
              )}
              component={Link}
              href={"https://twitter.com/SShuaiqi" as const}
              platform={"nextjs"}
            >
              {"Invite me to Speak"}
            </p.PlasmicLink>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__ddeU
              )}
              component={Link}
              href={
                "https://www.linkedin.com/in/shuaiqi-sun-bb3a2a12b" as const
              }
              platform={"nextjs"}
            >
              {"Hire me for Freelance"}
            </p.PlasmicLink>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__wnyKe
              )}
              component={Link}
              href={"https://twitter.com/SShuaiqi" as const}
              platform={"nextjs"}
            >
              {"Private Teaching"}
            </p.PlasmicLink>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__cCyvZ
              )}
              component={Link}
              href={"https://mrbiscuit.gumroad.com/" as const}
              platform={"nextjs"}
            >
              {"Become An Affiliate"}
            </p.PlasmicLink>
          </div>
        </p.Stack>
      </p.Stack>
      <p.Stack
        as={"div"}
        data-plasmic-name={"frame1260"}
        data-plasmic-override={overrides.frame1260}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame1260)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___3F0VA
          )}
        >
          {"Be the first to know"}
        </div>
        <p.PlasmicLink
          className={classNames(projectcss.all, projectcss.a, sty.link__s3V7N)}
          component={Link}
          href={"https://twitter.com/SShuaiqi" as const}
          platform={"nextjs"}
        >
          <SuperEllipseButton
            data-plasmic-name={"superEllipseButton"}
            data-plasmic-override={overrides.superEllipseButton}
            className={classNames("__wab_instance", sty.superEllipseButton)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6Rm43
                )}
              >
                {"Follow me on Twitter"}
              </div>
              <Vector22Icon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            </p.Stack>
          </SuperEllipseButton>
        </p.PlasmicLink>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "frame1253",
    "frame1254",
    "frame1255",
    "frame1256",
    "frame1257",
    "frame1258",
    "frame1259",
    "frame1260",
    "superEllipseButton",
    "freeBox",
    "svg"
  ],
  frame1253: [
    "frame1253",
    "frame1254",
    "frame1255",
    "frame1256",
    "frame1257",
    "frame1258",
    "frame1259"
  ],
  frame1254: ["frame1254", "frame1255"],
  frame1255: ["frame1255"],
  frame1256: ["frame1256", "frame1257"],
  frame1257: ["frame1257"],
  frame1258: ["frame1258", "frame1259"],
  frame1259: ["frame1259"],
  frame1260: ["frame1260", "superEllipseButton", "freeBox", "svg"],
  superEllipseButton: ["superEllipseButton", "freeBox", "svg"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  frame1253: "div";
  frame1254: "div";
  frame1255: "div";
  frame1256: "div";
  frame1257: "div";
  frame1258: "div";
  frame1259: "div";
  frame1260: "div";
  superEllipseButton: typeof SuperEllipseButton;
  freeBox: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPersonalFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPersonalFooter__VariantsArgs;
    args?: PlasmicPersonalFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPersonalFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPersonalFooter__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPersonalFooter__ArgProps,
          internalVariantPropNames: PlasmicPersonalFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPersonalFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPersonalFooter";
  } else {
    func.displayName = `PlasmicPersonalFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicPersonalFooter = Object.assign(
  // Top-level PlasmicPersonalFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    frame1253: makeNodeComponent("frame1253"),
    frame1254: makeNodeComponent("frame1254"),
    frame1255: makeNodeComponent("frame1255"),
    frame1256: makeNodeComponent("frame1256"),
    frame1257: makeNodeComponent("frame1257"),
    frame1258: makeNodeComponent("frame1258"),
    frame1259: makeNodeComponent("frame1259"),
    frame1260: makeNodeComponent("frame1260"),
    superEllipseButton: makeNodeComponent("superEllipseButton"),
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicPersonalFooter
    internalVariantProps: PlasmicPersonalFooter__VariantProps,
    internalArgProps: PlasmicPersonalFooter__ArgProps
  }
);

export default PlasmicPersonalFooter;
/* prettier-ignore-end */
