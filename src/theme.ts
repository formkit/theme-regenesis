import { createTheme } from "@formkit/theme-creator";

export default createTheme({
  meta: {
    name: "Omni",
    description: "The official Omni theme from FormKit.",
    formKitVersion: "^1.0.0",
    authorName: "FormKit Inc",
    authorWebsite: "https://formkit.com",
    supportedInputs: ["button"],
    darkMode: false,
  },
  variables: {
    borderRadius: {
      editor: "radius",
      value: "radius-2",
    },
    primaryColor: {
      value: "slate",
    },
  },
  inputs: {
    button: {
      inner: "border border-$primaryColor()-500 $borderRadius",
      input: "bg-$primary-50",
    },
  },
});
