// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import GlobalContextsProvider from "../components/plasmic/mr_biscuit_site/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/pro_layout_panel_landing_pgae/PlasmicGlobalVariant__Screen";
import { PlasmicAbout } from "../components/plasmic/mr_biscuit_site/PlasmicAbout";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";

function About() {
  // Use PlasmicAbout to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicAbout are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicAbout is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        params={useRouter().query}
        query={useRouter().query}
      >
        
        <ChakraProvider><PlasmicAbout /></ChakraProvider>
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  );
}

export default About;
