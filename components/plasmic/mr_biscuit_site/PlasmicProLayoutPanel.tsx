// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: PGLmNK8F9ob8KH
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

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
import Header from "../../Header"; // plasmic-import: gCP9N_nn5MCbJS/component
import Button from "../../Button"; // plasmic-import: s3E0QheUTMLIRg/component
import Section from "../../Section"; // plasmic-import: polj06cVBtzpxl/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import VideoExample from "../../VideoExample"; // plasmic-import: AuERE4DOLn/component
import YouTube from "@plasmicpkgs/react-youtube"; // plasmic-import: CHO21V9uYw/codeComponent
import FeatureCard from "../../FeatureCard"; // plasmic-import: 8J_TITQjji4-M9/component
import Plan from "../../Plan"; // plasmic-import: IC0peUQeOrc-TC/component
import Bullet from "../../Bullet"; // plasmic-import: h8iasHjPSdhGL5/component
import Footer from "../../Footer"; // plasmic-import: 48OR7NBtqAcun7/component

import { useScreenVariants as useScreenVariants_3KhhFf1Cq1Qfos } from "../pro_layout_panel_landing_pgae/PlasmicGlobalVariant__Screen"; // plasmic-import: 3KhhFf1CQ1QFOS/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_outline_to_single_stroke_css from "../outline_to_single_stroke/plasmic_outline_to_single_stroke.module.css"; // plasmic-import: 56iVbBJXbx9hFxysoAGHJC/projectcss
import projectcss from "../pro_layout_panel_landing_pgae/plasmic_pro_layout_panel_landing_pgae.module.css"; // plasmic-import: qDNA17RfdgsM73kkELPPxa/projectcss
import sty from "./PlasmicProLayoutPanel.module.css"; // plasmic-import: PGLmNK8F9ob8KH/css

import ProLayoutPanelsvgIcon from "../pro_layout_panel_landing_pgae/icons/PlasmicIcon__ProLayoutPanelsvg"; // plasmic-import: MsE1fZcL1_/icon
import ChecksvgIcon from "../pro_layout_panel_landing_pgae/icons/PlasmicIcon__Checksvg"; // plasmic-import: r_TPt86vHV4SXb/icon
import RightArrowIcon from "../pro_layout_panel_landing_pgae/icons/PlasmicIcon__RightArrow"; // plasmic-import: FfSoXEgUCW0G_l/icon
import Icon9Icon from "../pro_layout_panel_landing_pgae/icons/PlasmicIcon__Icon9"; // plasmic-import: 3iSPR8gr_8/icon
import Icon6Icon from "../pro_layout_panel_landing_pgae/icons/PlasmicIcon__Icon6"; // plasmic-import: J1YAUdPI6/icon
import Icon4Icon from "../pro_layout_panel_landing_pgae/icons/PlasmicIcon__Icon4"; // plasmic-import: V02xllXpr/icon
import Icon10Icon from "../pro_layout_panel_landing_pgae/icons/PlasmicIcon__Icon10"; // plasmic-import: VcNk7skQWd/icon
import Icon2Icon from "../pro_layout_panel_landing_pgae/icons/PlasmicIcon__Icon2"; // plasmic-import: JfzJrHKPBw/icon
import Icon11Icon from "../pro_layout_panel_landing_pgae/icons/PlasmicIcon__Icon11"; // plasmic-import: ZsRymmi19/icon
import Icon5Icon from "../pro_layout_panel_landing_pgae/icons/PlasmicIcon__Icon5"; // plasmic-import: ScoFh1W5NL/icon
import IconIcon from "../pro_layout_panel_landing_pgae/icons/PlasmicIcon__Icon"; // plasmic-import: cNxJEz4gEG/icon
import Icon15Icon from "../pro_layout_panel_landing_pgae/icons/PlasmicIcon__Icon15"; // plasmic-import: RQ7qx5lk9P/icon

export type PlasmicProLayoutPanel__VariantMembers = {};

export type PlasmicProLayoutPanel__VariantsArgs = {};
type VariantPropType = keyof PlasmicProLayoutPanel__VariantsArgs;
export const PlasmicProLayoutPanel__VariantProps = new Array<VariantPropType>();

export type PlasmicProLayoutPanel__ArgsType = {};
type ArgPropType = keyof PlasmicProLayoutPanel__ArgsType;
export const PlasmicProLayoutPanel__ArgProps = new Array<ArgPropType>();

export type PlasmicProLayoutPanel__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  topSection?: p.Flex<typeof Section>;
  img?: p.Flex<typeof p.PlasmicImg>;
  solutions?: p.Flex<typeof Section>;
  howItWorks?: p.Flex<typeof Section>;
  pricingSection?: p.Flex<typeof Section>;
  pricing?: p.Flex<"a"> & Partial<LinkProps>;
  columns?: p.Flex<"div">;
  howItWorks2?: p.Flex<typeof Section>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultProLayoutPanelProps {}

function PlasmicProLayoutPanel__RenderFunc(props: {
  variants: PlasmicProLayoutPanel__VariantsArgs;
  args: PlasmicProLayoutPanel__ArgsType;
  overrides: PlasmicProLayoutPanel__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_3KhhFf1Cq1Qfos()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
            slot={"Pro Layout Panel"}
            slot2={
              <React.Fragment>
                <Button
                  className={classNames("__wab_instance", sty.button__jtkLm)}
                  color={"clear" as const}
                  link={"#feature" as const}
                  size={"compact" as const}
                >
                  {"Features"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button___3RumU)}
                  color={"clear" as const}
                  link={"#price" as const}
                  size={"compact" as const}
                >
                  {"Pricing"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__cj25E)}
                  color={"clear" as const}
                  link={`/plp_cn`}
                  size={"compact" as const}
                >
                  {"中文"}
                </Button>
              </React.Fragment>
            }
          />

          <Section
            data-plasmic-name={"topSection"}
            data-plasmic-override={overrides.topSection}
            className={classNames("__wab_instance", sty.topSection)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__xWbuQ)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___5Xls0)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__ysHYz)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lPGs
                    )}
                  >
                    {"Make Autolayout"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sMMsP
                    )}
                  >
                    {"Easier, Faster, more Predictable"}
                  </div>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__v1Am8
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "All properties in one place, giving you unprecedented control and speed."
                    : "All properties in one place, giving you unprecedented control and speed."}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__h0Iqu)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__pjDz6)}
                  color={"figma" as const}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg___7I12J)}
                      role={"img"}
                    />
                  }
                  link={
                    "https://www.figma.com/community/plugin/1065130523685842895/Pro-Layout-Panel" as const
                  }
                  showEndIcon={true}
                >
                  {"Start free trial"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__rslrR)}
                  color={"clear" as const}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg__wKzd9)}
                      role={"img"}
                    />
                  }
                  link={
                    "https://www.figma.com/community/file/1089450392855659100/Pro-Layout-Panel-Playground" as const
                  }
                >
                  {"Open Playground"}
                </Button>
              </p.Stack>

              <div className={classNames(projectcss.all, sty.freeBox___5SHxj)}>
                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"100%" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={
                    hasVariant(globalVariants, "screen", "mobile")
                      ? ("100%" as const)
                      : ("1024px" as const)
                  }
                  src={{
                    src: "/plasmic/pro_layout_panel_landing_pgae/images/frame10Png2.png",
                    fullWidth: 1920,
                    fullHeight: 960,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"solutions"}
            data-plasmic-override={overrides.solutions}
            className={classNames("__wab_instance", sty.solutions)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___56TAq
                )}
              >
                {
                  "Pro layout panel brings deep improvements to Figma's layout workflow by overhauling the UI but maintaining the same intuitiveness."
                }
              </div>
            }
            title={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__voQbq
                )}
                id={"feature" as const}
              >
                {"What does it do?"}
              </div>
            }
          >
            <Reveal
              className={classNames("__wab_instance", sty.reveal__pE2Cf)}
              direction={"up" as const}
              duration={500 as const}
              effect={"fade" as const}
              triggerOnce={true}
            >
              <VideoExample
                className={classNames("__wab_instance", sty.videoExample__prGo)}
                slot={
                  <React.Fragment>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__aLzya
                      )}
                    >
                      {"Shortest Navigation"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nY1M
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "No flyout menus and dropdowns, everything stays where they appear."
                        : "No flyout menus and dropdowns, everything stays where they appear."}
                    </div>
                  </React.Fragment>
                }
              >
                <YouTube
                  autoplay={true}
                  className={classNames("__wab_instance", sty.youTube__szkYk)}
                  controls={false}
                  loop={true}
                  modestbranding={true}
                  rel={false}
                  videoId={"6ruue3efgSY" as const}
                />
              </VideoExample>
            </Reveal>

            <Reveal
              className={classNames("__wab_instance", sty.reveal___6TFx7)}
              direction={"up" as const}
              duration={500 as const}
              effect={"fade" as const}
              triggerOnce={true}
            >
              <VideoExample
                className={classNames("__wab_instance", sty.videoExample__wC)}
                reversedLayout={true}
                slot={
                  <React.Fragment>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__dxfxb
                      )}
                    >
                      {"Maximum Consistency"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__mdUty
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "Fixed a ton of quirky native behaviors to make things feel more natural."
                        : "Fixed a ton of quirky native behaviors to make things feel more natural."}
                    </div>
                  </React.Fragment>
                }
              >
                <YouTube
                  autoplay={true}
                  className={classNames("__wab_instance", sty.youTube__jCix7)}
                  controls={false}
                  loop={true}
                  modestbranding={true}
                  rel={false}
                  videoId={"X1PulDuvpEY" as const}
                />
              </VideoExample>
            </Reveal>

            <Reveal
              className={classNames("__wab_instance", sty.reveal__pg1G5)}
              direction={"up" as const}
              duration={500 as const}
              effect={"fade" as const}
              triggerOnce={true}
            >
              <VideoExample
                className={classNames(
                  "__wab_instance",
                  sty.videoExample___27Ua
                )}
                slot={
                  <React.Fragment>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___8YvkP
                      )}
                    >
                      {"Pushing every limit"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nY1M
                      )}
                    >
                      {
                        "Additional features that are supported natively in Figma but not possible in via native UI"
                      }
                    </div>
                  </React.Fragment>
                }
              >
                <YouTube
                  autoplay={true}
                  className={classNames("__wab_instance", sty.youTube__gNoGn)}
                  controls={false}
                  loop={true}
                  modestbranding={true}
                  rel={false}
                  videoId={"Dui6-rgK8BY" as const}
                />
              </VideoExample>
            </Reveal>
          </Section>

          <Section
            data-plasmic-name={"howItWorks"}
            data-plasmic-override={overrides.howItWorks}
            className={classNames("__wab_instance", sty.howItWorks)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kQawb
                )}
              >
                {
                  "Pro layout panel is built with efficiency at it's core, so it comes with a ton of detailed life quality features"
                }
              </div>
            }
            title={"Some other features"}
          >
            <Reveal
              cascade={true}
              className={classNames("__wab_instance", sty.reveal__neMan)}
              damping={0.5 as const}
              direction={"up" as const}
              duration={500 as const}
              triggerOnce={true}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__iwcDk)}
              >
                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__vCzF
                  )}
                  description={
                    "Shortcut like ⇧A, ⌘Z still functions when focused on the Plugin window"
                  }
                  iconFront={
                    <Icon9Icon
                      className={classNames(projectcss.all, sty.svg__zxSc7)}
                      role={"img"}
                    />
                  }
                  title={"Shortcut support"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard___0RcIc
                  )}
                  description={
                    "So you can do stuff like bidirectional hugging and hug-scaling easily"
                  }
                  iconFront={
                    <Icon6Icon
                      className={classNames(projectcss.all, sty.svg__cja2F)}
                      role={"img"}
                    />
                  }
                  title={"Independent property editing"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard___5RzuC
                  )}
                  description={
                    "All input fields default to the nearest multiple of 4, hold ⇧ to change to 8 "
                  }
                  iconFront={
                    <Icon4Icon
                      className={classNames(projectcss.all, sty.svg__p4FQ)}
                      role={"img"}
                    />
                  }
                  title={"4 Based Scrubbing"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard___3Vrh4
                  )}
                  description={
                    "Padding input fields supports values separated by space or comma"
                  }
                  iconFront={
                    <Icon10Icon
                      className={classNames(projectcss.all, sty.svg___39ZeB)}
                      role={"img"}
                    />
                  }
                  title={"Independent padding values"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__qWZxv
                  )}
                  description={
                    "The parent and children resizing modes tend to be more resilient"
                  }
                  iconFront={
                    <Icon2Icon
                      className={classNames(projectcss.all, sty.svg__be14N)}
                      role={"img"}
                    />
                  }
                  title={"Resizing mode inheritance"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__yhe8L
                  )}
                  description={
                    "Allows for complex arithmetic operations in input fields"
                  }
                  iconFront={
                    <Icon11Icon
                      className={classNames(projectcss.all, sty.svg__avwOu)}
                      role={"img"}
                    />
                  }
                  title={"Input math calc"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard___8QNlM
                  )}
                  description={"Free direction retains gap and padding values"}
                  iconFront={
                    <Icon5Icon
                      className={classNames(projectcss.all, sty.svg___3A3LY)}
                      role={"img"}
                    />
                  }
                  title={"Figma Tokens integration"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__pT6Oa
                  )}
                  description={"Free direction retains gap and padding values"}
                  iconFront={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__lip9B)}
                      role={"img"}
                    />
                  }
                  title={"Free Direction"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard___9Wski
                  )}
                  description={"Free direction retains gap and padding values"}
                  iconFront={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__bz7Q8)}
                      role={"img"}
                    />
                  }
                  title={"AL v4.0 & Dark Theme"}
                />
              </p.Stack>
            </Reveal>
          </Section>

          <Section
            data-plasmic-name={"pricingSection"}
            data-plasmic-override={overrides.pricingSection}
            className={classNames("__wab_instance", sty.pricingSection)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__opFs3
                )}
              >
                {
                  "The plugin comes with a 14 day unlimited free trial, after which a license key will be required for activation, one time purchase for life-time usage and free updates."
                }
              </div>
            }
            title={
              <p.PlasmicLink
                data-plasmic-name={"pricing"}
                data-plasmic-override={overrides.pricing}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.pricing
                )}
                component={Link}
                id={"price" as const}
                platform={"nextjs"}
              >
                {"Buy Once, User Forever"}
              </p.PlasmicLink>
            }
          >
            <Reveal
              cascade={true}
              className={classNames("__wab_instance", sty.reveal__c0Rt9)}
              direction={"up" as const}
              duration={500 as const}
              triggerOnce={true}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__ohl6R)}>
                  <Plan
                    className={classNames("__wab_instance", sty.plan__tcon4)}
                    description={
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__pd3Dy
                        )}
                      >
                        <Bullet
                          className={classNames(
                            "__wab_instance",
                            sty.bullet__ak5He
                          )}
                        >
                          {"Full features"}
                        </Bullet>

                        <Bullet
                          className={classNames(
                            "__wab_instance",
                            sty.bullet__q6Vp2
                          )}
                        >
                          {"Free updates"}
                        </Bullet>
                      </p.Stack>
                    }
                    name={"Starter"}
                    name2={"14 days trial period"}
                    price={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__b2FJh
                        )}
                      >
                        {"$0"}
                      </div>
                    }
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___0YoGk
                      )}
                      color={"outline" as const}
                      link={
                        "https://www.figma.com/community/plugin/1065130523685842895/Pro-Layout-Panel" as const
                      }
                    >
                      {"Get Started"}
                    </Button>
                  </Plan>
                </div>

                <div className={classNames(projectcss.all, sty.column__m2NuJ)}>
                  <Plan
                    className={classNames("__wab_instance", sty.plan__wv2Mf)}
                    color={"blue" as const}
                    description={
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__uQfsI
                        )}
                      >
                        <Bullet
                          className={classNames(
                            "__wab_instance",
                            sty.bullet__aD0Yd
                          )}
                        >
                          {"Full features"}
                        </Bullet>

                        <Bullet
                          className={classNames(
                            "__wab_instance",
                            sty.bullet__vwmeF
                          )}
                        >
                          {"Free updates"}
                        </Bullet>

                        <Bullet
                          className={classNames(
                            "__wab_instance",
                            sty.bullet__bvKOm
                          )}
                        >
                          {"Technical Support"}
                        </Bullet>
                      </p.Stack>
                    }
                    name={"Professional"}
                    name2={"One account"}
                    price={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__vsGer
                        )}
                      >
                        {"$20"}
                      </div>
                    }
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__c01Ak
                      )}
                      color={"figma" as const}
                      link={
                        "https://mrbiscuit.gumroad.com/l/prolayoutpanel?variant=Single%20User" as const
                      }
                    >
                      {"Buy Now"}
                    </Button>
                  </Plan>
                </div>

                <div className={classNames(projectcss.all, sty.column___2GGdf)}>
                  <Plan
                    className={classNames("__wab_instance", sty.plan__rYndX)}
                    color={"purle" as const}
                    description={
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___6AkVp
                        )}
                      >
                        <Bullet
                          className={classNames(
                            "__wab_instance",
                            sty.bullet__wFllC
                          )}
                        >
                          {"Full features"}
                        </Bullet>

                        <Bullet
                          className={classNames(
                            "__wab_instance",
                            sty.bullet__mZFs
                          )}
                        >
                          {"Free updates"}
                        </Bullet>

                        <Bullet
                          className={classNames(
                            "__wab_instance",
                            sty.bullet___449C8
                          )}
                        >
                          {"Technical Support"}
                        </Bullet>
                      </p.Stack>
                    }
                    name={"Team"}
                    name2={"Everyone in your team"}
                    price={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mF7Dq
                        )}
                      >
                        {"$45"}
                      </div>
                    }
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__oJhIp
                      )}
                      color={"purple" as const}
                      link={
                        "https://mrbiscuit.gumroad.com/l/prolayoutpanel?variant=Team" as const
                      }
                    >
                      {"Buy Now"}
                    </Button>
                  </Plan>
                </div>
              </p.Stack>
            </Reveal>
          </Section>

          <Section
            data-plasmic-name={"howItWorks2"}
            data-plasmic-override={overrides.howItWorks2}
            className={classNames("__wab_instance", sty.howItWorks2)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lAnlA
                )}
              >
                {
                  "Pro layout panel will continue to grow and receive updates to further enhance your workflow, below are features that are planned to come in future version, let me know your thoughts :) "
                }
              </div>
            }
            title={"Planned Features..."}
          >
            <Reveal
              cascade={true}
              className={classNames("__wab_instance", sty.reveal__dwO7S)}
              damping={0.5 as const}
              direction={"up" as const}
              duration={500 as const}
              triggerOnce={true}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__m8Tv2)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__yXfjl)}
                >
                  <Icon15Icon
                    className={classNames(projectcss.all, sty.svg__wr3Q)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__psFuo
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Menu items for shortcuts"
                      : "Save and apply Auto layout styles"}
                  </div>
                </p.Stack>
              </p.Stack>
            </Reveal>
          </Section>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "topSection",
    "img",
    "solutions",
    "howItWorks",
    "pricingSection",
    "pricing",
    "columns",
    "howItWorks2",
    "footer"
  ],
  header: ["header"],
  topSection: ["topSection", "img"],
  img: ["img"],
  solutions: ["solutions"],
  howItWorks: ["howItWorks"],
  pricingSection: ["pricingSection", "pricing", "columns"],
  pricing: ["pricing"],
  columns: ["columns"],
  howItWorks2: ["howItWorks2"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  topSection: typeof Section;
  img: typeof p.PlasmicImg;
  solutions: typeof Section;
  howItWorks: typeof Section;
  pricingSection: typeof Section;
  pricing: "a";
  columns: "div";
  howItWorks2: typeof Section;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProLayoutPanel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProLayoutPanel__VariantsArgs;
    args?: PlasmicProLayoutPanel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProLayoutPanel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProLayoutPanel__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicProLayoutPanel__ArgProps,
          internalVariantPropNames: PlasmicProLayoutPanel__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicProLayoutPanel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProLayoutPanel";
  } else {
    func.displayName = `PlasmicProLayoutPanel.${nodeName}`;
  }
  return func;
}

export const PlasmicProLayoutPanel = Object.assign(
  // Top-level PlasmicProLayoutPanel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    img: makeNodeComponent("img"),
    solutions: makeNodeComponent("solutions"),
    howItWorks: makeNodeComponent("howItWorks"),
    pricingSection: makeNodeComponent("pricingSection"),
    pricing: makeNodeComponent("pricing"),
    columns: makeNodeComponent("columns"),
    howItWorks2: makeNodeComponent("howItWorks2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicProLayoutPanel
    internalVariantProps: PlasmicProLayoutPanel__VariantProps,
    internalArgProps: PlasmicProLayoutPanel__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProLayoutPanel;
/* prettier-ignore-end */
