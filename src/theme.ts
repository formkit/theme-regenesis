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
      value: "rounded",
    },
    primaryColor: {
      editor: "color",
      value: "blue",
    },
    textColor: {
      editor: "color",
      value: "slate",
    },
    spacing: {
      editor: "spacing",
      value: "2",
    },
    textSize: {
      editor: "fontSize",
      value: "base",
    },
    inputShadow: {
      editor: "shadow",
      value: "shadow",
    },
    borderColorStrength: {
      value: "400",
    },
    inputMaxWidth: {
      value: "max-w-[17em]",
    },
  },
  inputs: {
    /**
     * === Globals ===
     * These class lists apply to _all_ inputs that have matching sections.
     * Use carefully.
     */
    __globals: {
      outer:
        "group mb-$spacing(5) data-[disabled]:select-none data-[disabled]:opacity-50",
      prefixIcon:
        "flex items-center mr-$spacing(0) text-$textSize h-[1em] w-[1em] shrink-0 [&>svg]:w-full",
      suffixIcon:
        "flex items-center ml-$spacing(0) text-$textSize h-[1em] w-[1em] shrink-0 [&>svg]:w-full",
      label:
        "block text-$textColor-700 text-$textSize(-1) font-bold mb-$spacing(-2)",
      legend: "block text-$textColor-700 text-$textSize(-1) font-bold",
      input: "appearance-none",
      help: "text-$textColor-500 text-$textSize(-2)",
      message: "text-red-500 mb-$spacing(-1) text-$textSize(-2)",
    },

    /**
     * === Family groupings ===
     * These class lists apply to all inputs that are part of the matching family.
     * There is a comment in each input class list that indicates which family it belongs to.
     */
    "family:button": {
      // button, submit
      outer: "data-[disabled]:opacity-100",
      input:
        "bg-$primaryColor-500 $borderRadius !text-$textSize(-1) outline-none flex items-center p-3 mb-$spacing(-1) text-white text-$textSize(-1) active:text-$primaryColor-100 active:bg-$primaryColor-700 hover:bg-$primaryColor-600 ring-offset-2 ring-$primaryColor-400 focus-visible:ring-2 disabled:border-$textColor-$borderColorStrength disabled:bg-$textColor-400 disabled:text-$textColor-100 group-data-[disabled]:!cursor-not-allowed $inputShadow",
      prefixIcon: "text-$textColor-100",
      suffixIcon: "text-$textColor-100",
    },
    "family:box": {
      // checkbox, radio
      wrapper: "flex items-center mb-$spacing(-2) group-data-[multiple]:mb-0",
      legend: "mb-$spacing",
      input:
        "peer pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0",
      decorator:
        "mr-1.5 ring-$primaryColor-400 peer-checked:border-$primaryColor-500 relative block h-$spacing(5) w-$spacing(5) border border-$textColor-$borderColorStrength text-transparent ring-offset-2 peer-checked:text-$primaryColor-500 peer-focus-visible:ring-2 select-none group-data-[disabled]:!cursor-not-allowed group-data-[disabled]:bg-$textColor-100 $inputShadow",
      decoratorIcon:
        "absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2",
      options: "mb-$spacing",
      option:
        "mb-$spacing last:mb-0 data-[disabled]:opacity-50 data-[disabled]:select-none group-data-[disabled]:data-[disabled]:opacity-100",
      label: "!mb-0 !font-normal !text-$textSize(-1)",
      optionHelp: "text-$textColor-500 text-$textSize(-2) mt-$spacing(-3)",
      help: "mb-$spacing(-3) group-data-[multiple]:mb-$spacing group-data-[multiple]:-mt-$spacing",
    },
    "family:text": {
      // color, date, datetime-local, email, file, month, number, password, search, tel, text, time, url, week
      inner:
        "text-$textSize $inputMaxWidth flex items-center w-full mb-$spacing(-1) py-$spacing px-$spacing(1) $borderRadius border border-$textColor-$borderColorStrength bg-white focus-within:ring-1 focus-within:!ring-$primaryColor-400 focus-within:!border-$primaryColor-400 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-$textColor-100 group-data-[disabled]:!cursor-not-allowed $inputShadow",
      input: `
        ${"" /* base styles */}
        text-$textSize text-$textColor-700 min-w-0 grow outline-none bg-transparent selection:bg-$primaryColor-100 placeholder:text-$textColor-400 group-data-[disabled]:!cursor-not-allowed

        ${"" /* Tailwind Forms overrides */}
        border-none p-0 focus:ring-0
      `,
      prefixIcon: "text-$textColor-600",
      suffixIcon: "text-$textColor-600",
    },

    /**
     * === Core Inputs ===
     * These are the core inputs that ship with the open-source version of FormKit.
     */
    button: {
      // inherits family:button classes
    },
    checkbox: {
      // inherits family:box classes
      decorator: "$borderRadius",
      decoratorIcon: "max-w-[66.66%]",
    },
    color: {
      // inherits family:text classes
      inner:
        "!w-auto !p-$spacing(-2) !inline-flex group-data-[prefix-icon]:border group-data-[prefix-icon]:border-$textColor-$borderColorStrength group-data-[suffix-icon]:border group-data-[suffix-icon]:border-$textColor-$borderColorStrength",
      input:
        "!w-14 bg-transparent cursor-pointer $borderRadius overflow-clip [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none [&::-moz-color-swatch]:border-none group-data-[prefix-icon]:mx-$spacing group-data-[suffix-icon]:mx-$spacing",
      prefixIcon:
        "group-data-[prefix-icon]:m-$spacing(-2) group-data-[prefix-icon]:mr-0",
      suffixIcon:
        "group-data-[suffix-icon]:m-$spacing(-2) group-data-[prefix-icon]:ml-0",
    },
    date: {
      // inherits family:text classes
      input:
        "focus:[&::-webkit-datetime-edit-day-field]:bg-$primaryColor-100 focus:[&::-webkit-datetime-edit-month-field]:bg-$primaryColor-100 focus:[&::-webkit-datetime-edit-year-field]:bg-$primaryColor-100",
    },
    "datetime-local": {
      // inherits family:text classes
      input:
        "focus:[&::-webkit-datetime-edit-day-field]:bg-$primaryColor-100 focus:[&::-webkit-datetime-edit-month-field]:bg-$primaryColor-100 focus:[&::-webkit-datetime-edit-year-field]:bg-$primaryColor-100 focus:[&::-webkit-datetime-edit-hour-field]:bg-$primaryColor-100 focus:[&::-webkit-datetime-edit-minute-field]:bg-$primaryColor-100 focus:[&::-webkit-datetime-edit-ampm-field]:bg-$primaryColor-100",
    },
    file: {
      // inherits family:text classes
      fileList:
        "group/list peer w-full min-w-0 data-[has-multiple]:mb-$spacing(6)",
      fileItemIcon: "h-[1em] w-[1em] mr-$spacing shrink-0",
      fileItem:
        "flex min-w-0 items-center text-$textColor-700 mb-$spacing(-1) last:mb-0",
      fileName:
        "truncate min-w-0 w-full shrink leading-5 group-data-[has-multiple]/list:text-$textSize(-1)",
      fileRemove:
        "right-$spacing peer-data-[has-multiple]:text-$textSize(-1) peer-data-[has-multiple]:bottom-$spacing peer-data-[has-multiple]:left-$spacing group-data-[prefix-icon]:peer-data-[has-multiple]:left-$spacing(10) peer-data-[has-multiple]:text-$primaryColor-600 ring-$primaryColor-400 $borderRadius z-20 flex appearance-none items-center text-[0px] outline-none hover:!text-red-500 focus-visible:ring-2 group-data-[disabled]:pointer-events-none peer-data-[has-multiple]:absolute group-data-[disabled]:!text-$textColor-500",
      fileRemoveIcon: "block text-base w-[0.75em] relative z-10",
      inner: "relative cursor-pointer",
      input:
        "cursor-pointer text-transparent absolute inset-0 opacity-0 z-10 file:pointer-events-none file:w-0 file:h-0 file:overflow-hidden",
      noFiles: "flex w-full items-center text-$textColor-400",
      noFilesIcon: "w-[1em] mr-$spacing",
    },
    month: {
      // inherits family:text classes
      input:
        "focus:[&::-webkit-datetime-edit-month-field]:bg-$primaryColor-100 focus:[&::-webkit-datetime-edit-year-field]:bg-$primaryColor-100",
    },
    radio: {
      // inherits family:box classes
      decorator: "rounded-full",
      decoratorIcon: "max-w-[55%]",
    },
    range: {
      // inherits family:text classes
      inner: "relative !border-none !ring-0 !px-0 !bg-transparent !shadow-none",
      input: `
        group/input cursor-pointer
        
        ${"" /* webkit styles - track */}
        [&::-webkit-slider-runnable-track]:bg-$textColor-300 [&::-webkit-slider-runnable-track]:h-$spacing(-1) [&::-webkit-slider-runnable-track]:min-h-[0.25em] ::-webkit-slider-runnable-track]:max-h-[1em] [&::-webkit-slider-runnable-track]:$borderRadius

        ${"" /* webkit styles - thumb */}
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-$spacing(3) [&::-webkit-slider-thumb]:w-$spacing(3) [&::-webkit-slider-thumb]:bg-$primaryColor-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:top-1/2 [&::-webkit-slider-thumb]:-translate-y-1/2 [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-$primaryColor-300 [&::-webkit-slider-thumb]:ring-offset-2 [&::-webkit-slider-thumb]:group-data-[disabled]:bg-$textColor-500 [&::-webkit-slider-thumb]:group-data-[disabled]:!ring-$textColor-300 [&::-webkit-slider-thumb]:focus-visible:ring-2 [&::-webkit-slider-thumb]:focus:!ring-$primaryColor-600 
      
        ${"" /* moz styles - track */}
        [&::-moz-range-track]:bg-$textColor-200 [&::-moz-range-track]:h-$spacing(-1) [&::-moz-range-track]:min-h-[0.25em] [&::-moz-range-track]:max-h-[1em] [&::-moz-range-track]:$borderRadius

        ${"" /* moz styles - thumb */}
        [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:h-$spacing(3) [&::-moz-range-thumb]:w-$spacing(3) [&::-moz-range-thumb]:bg-$primaryColor-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:ring-2 [&::-moz-range-thumb]:ring-$primaryColor-300 [&::-moz-range-thumb]:ring-offset-2 [&::-moz-range-thumb]:group-data-[disabled]:bg-$textColor-500 [&::-moz-range-thumb]:group-data-[disabled]:!ring-$textColor-300 [&::-moz-range-thumb]:focus-visible:ring-2 [&::-moz-range-thumb]:focus:!ring-$primaryColor-600
      `,
    },
    select: {
      wrapper: "mb-$spacing(-1)",
      inner:
        "relative flex items-center $inputMaxWidth border border-$textColor-$borderColorStrength $borderRadius focus-within:ring-1 focus-within:!ring-$primaryColor-400 focus-within:!border-$primaryColor-400 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-$textColor-100 group-data-[disabled]:!cursor-not-allowed $inputShadow",
      input: `
        ${"" /* base styles */}
        flex-grow p-$spacing pr-[2em] text-ellipsis min-w-0 outline-none bg-transparent group-data-[disabled]:!cursor-not-allowed group-data-[prefix-icon]:!pl-0 group-data-[suffix-icon]:!pr-0 data-[placeholder]:text-$textColor-400 group-data-[multiple]:!p-0 group-data-[multiple]:!overflow-hidden selection:bg-$primaryColor-100

        ${"" /* Tailwind Forms overrides */}
        border-none focus:ring-0 bg-none
      `,
      selectIcon:
        "absolute w-[1em] pointer-events-none right-$spacing group-data-[suffix-icon]:mr-[1.5em]",
      optGroup:
        "group/optgroup group-data-[multiple]:px-$spacing(-2) pt-$spacing(-2) font-bold text-$textSize(-1)",
      option:
        "group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-$primaryColor-100 group-data-[multiple]:focus:bg-$primaryColor-100 group-data-[multiple]:text-$textSize(-1) group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-$spacing(-1) group-data-[multiple]:px-$spacing",
      prefixIcon: "ml-$spacing",
      suffixIcon: "mr-$spacing",
    },
    textarea: {
      inner:
        "flex $inputMaxWidth items-center mb-$spacing(-1) border border-$textColor-$borderColorStrength $borderRadius focus-within:ring-1 focus-within:!ring-$primaryColor-400 focus-within:!border-$primaryColor-400 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-$textColor-100 $inputShadow",
      input: `
        ${"" /* base styles */}
        text-$textSize(-1) h-$spacing(16) text-$textColor-700 min-w-0 grow shrink !p-$spacing outline-none bg-transparent selection:bg-$primaryColor-100 placeholder:text-$textColor-400 group-data-[disabled]:!cursor-not-allowed

        ${"" /* Tailwind Forms overrides */}
        p-0 border-none focus:ring-0
      `,
      prefixIcon: "ml-$spacing mr-0",
      suffixIcon: "mr-$spacing ml-0",
    },
    time: {
      // inherits family:text classes
      input:
        "focus:[&::-webkit-datetime-edit-hour-field]:bg-$primaryColor-100 focus:[&::-webkit-datetime-edit-minute-field]:bg-$primaryColor-100 focus:[&::-webkit-datetime-edit-ampm-field]:bg-$primaryColor-100",
    },
    week: {
      // inherits family:text classes
      input:
        "focus:[&::-webkit-datetime-edit-week-field]:bg-$primaryColor-100 focus:[&::-webkit-datetime-edit-year-field]:bg-$primaryColor-100",
    },
  },
});
