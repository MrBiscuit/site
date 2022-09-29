import { RegisterChakra } from "../registerChakra";
import { ChakraProvider } from "@chakra-ui/react";
import { PlasmicCanvasHost } from "@plasmicapp/host";
import { registerComponent } from "@plasmicapp/host";
import { Typewriter } from "react-simple-typewriter";
import { Loop } from "../components/Loop";
import CountUp from "react-countup";

RegisterChakra();

registerComponent(CountUp, {
  name: "CountUp",
  importPath: "react-countup",
  isDefaultExport:true,
  props: {
    start: {
      type: "number",
      description: "The number to start counting from",
      defaultValue: 0,
    },
    end: {
      type: "number",
      description: "The number to count up to",
    },
    duration: {
      type: "number",
      description: "Duration in seconds",
      defaultValue: 2.75,
    },
    delay: {
      type: "number",
      description: "Number of seconds to delay before starting the animation",
      defaultValue: 0,
    },
    useEasing: {
      type: "boolean",
      description: "Whether to use easing functions or linear transition.",
      defaultValue: true,
    },
    decimals: {
      type: "number",
      defaultValue: 0,
    },
    separator: {
      type: "string",
      description: "The string used to separate the groups of thousands",
      defaultValue: ",",
    },
    decimal: {
      type: "string",
      description: "The string used to separate the decimal",
      defaultValue: ".",
    },
    prefix: {
      type: "string",
      description: "The string used as a prefix for the number",
      defaultValue: "",
    },
    suffix: {
      type: "string",
      description: "The string used as a suffix for the number",
      defaultValue: "",
    },
    enableScrollSpy: {
      type: "boolean",
      description: "Enables start animation when target is in view",
      defaultValue: false,
    },
  },
});



registerComponent(Typewriter, {
  name: "Typewriter",
  importPath: "react-simple-typewriter",
  props: {
    words: {
      type: "array",
      defaultValue: ["Hello World"],
    },
    loop: {
      type: "number",
      defaultValue: 1,
    },
    typeSpeed: {
      type: "number",
      defaultValue: 90,
    },
    deleteSpeed: {
      type: "number",
      defaultValue: 50,
    },
    delaySpeed: {
      type: "number",
      defaultValue: 1000,
    },
    cursor: {
      type: "boolean",
      defaultValue: true,
    },
    cursorStyle: {
      type: "string",
      defaultValue: "|",
    },
  },
});

registerComponent(Loop, {
  name: "Loop",
  importPath: "./components/Loop",
  defaultStyles:{
    width: "200px",
    height: "150px",
  },
  props: {
    interval: {
      type: "number",
      defaultValue: 200,
    },
    startIndex: {
      type: "number",
      defaultValue: 0,
    },
    children: {
      type: "slot",
    },
  },
});

export default function PlasmicHost() {
  return (
    <div>
      <ChakraProvider>
        <PlasmicCanvasHost />
      </ChakraProvider>
    </div>
  );
}
