import { createTheme } from "@formkit/theme-creator";

export default createTheme({
  meta: {
    name: "Regenisis",
    description: "The official Regenisis theme from FormKit.",
    formKitVersion: "^1.0.0",
    authorName: "FormKit Inc",
    authorWebsite: "https://formkit.com",
    supportedInputs: [
      "autocomplete",
      "button",
      "checkbox",
      "color",
      "date",
      "datepicker",
      "datetime-local",
      "dropdown",
      "email",
      "file",
      "month",
      "number",
      "password",
      "radio",
      "range",
      "repeater",
      "search",
      "select",
      "taglist",
      "tel",
      "text",
      "textarea",
      "time",
      "url",
      "week",
    ],
    lightMode: true,
    darkMode: true,
  },
  variables: {
    borderRadius: {
      editor: "radius",
      value: "rounded",
      min: "rounded-none",
      max: "rounded-full",
    },
    primaryColor: {
      editor: "color",
      value: "fuchsia",
    },
    textColor: {
      editor: "color",
      value: "slate",
      scale: ["slate", "gray", "zinc", "neutral", "stone"],
    },
    spacing: {
      editor: "spacing",
      value: "2",
      min: "1",
      max: "2.5",
    },
    textSize: {
      editor: "fontSize",
      value: "base",
      min: "sm",
      max: "base",
    },
    inputShadow: {
      editor: "shadow",
      value: "shadow",
      min: "shadow-none",
      max: "shadow-lg",
    },
    borderColorStrength: {
      editor: "buttons",
      value: "400",
      scale: ["100", "200", "300", "400", "500", "600"],
    },
    inputMaxWidth: {
      editor: "select",
      value: "max-w-[20em]",
      scale: ["max-w-[15em]", "max-w-[17em]", "max-w-[20em]", "max-w-[24em]"],
    },
  },
  inputs: {
    /**
     * === Globals ===
     * These class lists apply to all inputs that have matching sections.
     * Use carefully.
     */
    __globals: {
      outer:
        "group mb-$spacing(5,*) data-[disabled]:select-none data-[disabled]:opacity-50 text-$textSize",
      label:
        "block text-$textColor-700 text-$textSize(-1,*) font-bold mb-$spacing(-2) dark:text-$textColor-300",
      legend:
        "block text-$textColor-700 text-$textSize(-1,*) font-bold dark:text-$textColor-300",
      input: "appearance-none [color-scheme:light] dark:[color-scheme:dark]",
      prefixIcon:
        "flex items-center mr-$spacing(0) text-$textSize h-[1em] w-[1em] shrink-0 [&>svg]:w-full",
      suffixIcon:
        "flex items-center ml-$spacing(0) text-$textSize h-[1em] w-[1em] shrink-0 [&>svg]:w-full",
      help: "text-$textColor-500 text-$textSize(-2,*) dark:text-$textColor-400",
      message:
        "text-red-500 mb-$spacing(-1) text-$textSize(-2,*) dark:text-red-400",
      overlayPlaceholder: "text-$textColor-400",
      overlayLiteral: "text-$textColor-700",
      overlayChar: "text-$textColor-700",
      overlayEnum: "text-$textColor-700",
    },

    /**
     * === Core family groupings ===
     * These class lists apply to all inputs that are part of the matching family.
     * There is a comment in each input class list that indicates which family it belongs to.
     */
    "family:button": {
      // button, submit
      outer: "data-[disabled]:opacity-100",
      input: `
        ${"" /* base styles */}
        bg-$primaryColor-500 $borderRadius !text-$textSize(-1,*) p-$spacing(3,1,5) outline-none flex items-center mb-$spacing(-1) text-white text-$textSize(-1,*) active:text-$primaryColor-100 active:bg-$primaryColor-700 hover:bg-$primaryColor-600 ring-offset-2 ring-$primaryColor-400 focus-visible:ring-2 disabled:border-$textColor-$borderColorStrength disabled:bg-$textColor-400 disabled:text-$textColor-100 group-data-[disabled]:!cursor-not-allowed $inputShadow

        ${"" /* dark mode styles */}
        dark:disabled:border-$textColor-100 dark:disabled:bg-$textColor-500 dark:disabled:text-$textColor-200 dark:ring-offset-$primaryColor-300
      `,
      prefixIcon: "text-$textColor-100",
      suffixIcon: "text-$textColor-100",
    },
    "family:box": {
      // checkbox, radio
      wrapper: "flex items-center mb-$spacing(-2) group-data-[multiple]:mb-0",
      legend: "mb-$spacing",
      input:
        "peer pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0",
      decorator: `
        ${"" /* base styles */}
        mr-1.5 bg-white ring-$primaryColor-400 peer-checked:border-$primaryColor-500 relative block w-$spacing(5,1,6) aspect-square border border-$textColor-$borderColorStrength text-transparent ring-offset-2 peer-checked:text-$primaryColor-500 peer-focus-visible:ring-2 select-none group-data-[disabled]:!cursor-not-allowed group-data-[disabled]:bg-$textColor-100 group-data-[disabled]:grayscale $inputShadow group-data-[disabled]/listoption:cursor-not-allowed

        ${"" /* dark mode styles */}
        dark:border-$textColor-$borderColorStrength(1) dark:bg-transparent dark:group-data-[disabled]:bg-$textColor-700 dark:ring-offset-$primaryColor-300 dark:peer-focus-visible:ring-1
      `,
      decoratorIcon:
        "absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2",
      options: "mb-$spacing",
      option:
        "group/listoption mb-$spacing last:mb-0 data-[disabled]:opacity-50 data-[disabled]:select-none group-data-[disabled]:data-[disabled]:opacity-100",
      label: `
        ${"" /* base styles */}
        !mb-0 !font-normal !text-$textSize(-1,*)

        ${"" /* dark mode styles */}
        dark:text-$textColor-300
      `,
      optionHelp: "text-$textColor-500 text-$textSize(-2,*) mt-$spacing(-3)",
      help: "mb-$spacing(-3) group-data-[multiple]:mb-$spacing group-data-[multiple]:-mt-$spacing",
    },
    "family:text": {
      // color, date, datetime-local, email, file, month, number, password, search, tel, text, time, url, week
      inner: `
        ${"" /* base styles */}
        text-$textSize $inputMaxWidth flex items-center w-full mb-$spacing(-1) py-$spacing px-$spacing(1) $borderRadius border border-$textColor-$borderColorStrength bg-white focus-within:ring-1 focus-within:!ring-$primaryColor-400 focus-within:!border-$primaryColor-400 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-$textColor-100 group-data-[disabled]:!cursor-not-allowed $inputShadow

        ${"" /* dark mode styles */}
        dark:bg-transparent dark:border-$textColor-$borderColorStrength(2) dark:group-data-[disabled]:bg-$textColor-800/5 dark:group-data-[invalid]:border-red-400 dark:group-data-[invalid]:ring-red-400
      `,
      input: `
        ${"" /* base styles */}
        text-$textSize text-$textColor-700 min-w-0 grow outline-none bg-transparent selection:bg-$primaryColor-100 placeholder:text-$textColor-400 group-data-[disabled]:!cursor-not-allowed

        ${"" /* dark mode styles */}
        dark:placeholder-$textColor-400/50 dark:text-$textColor-300

        ${"" /* Tailwind Forms overrides */}
        border-none p-0 focus:ring-0
      `,
      prefixIcon: "text-$textColor-600 dark:text-$textColor-300",
      suffixIcon: "text-$textColor-600 dark:text-$textColor-300",
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
      decorator: "$borderRadius(0,rounded-none,rounded-md)",
      decoratorIcon: "max-w-[66.66%]",
    },
    color: {
      // inherits family:text classes
      inner: `
        ${"" /* base styles */}
        !w-auto !p-$spacing(-2) !inline-flex group-data-[prefix-icon]:border group-data-[prefix-icon]:border-$textColor-$borderColorStrength group-data-[suffix-icon]:border group-data-[suffix-icon]:border-$textColor-$borderColorStrength

        ${"" /* dark mode styles */}
        dark:group-data-[prefix-icon]:border-$textColor-$borderColorStrength(2) dark:group-data-[suffix-icon]:border-$textColor-$borderColorStrength(2)
      `,
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
        "group/list peer w-full min-w-0 data-[has-multiple]:mb-$spacing(6,*)",
      fileItemIcon: "h-[1em] w-[1em] mr-$spacing shrink-0",
      fileItem:
        "flex min-w-0 items-center text-$textColor-700 mb-$spacing(-1) last:mb-0 dark:text-$textColor-300",
      fileName:
        "truncate min-w-0 w-full shrink leading-5 group-data-[has-multiple]/list:text-$textSize(-1,*)",
      fileRemove:
        "right-$spacing peer-data-[has-multiple]:text-$textSize(-1,*) peer-data-[has-multiple]:bottom-$spacing peer-data-[has-multiple]:left-$spacing group-data-[prefix-icon]:peer-data-[has-multiple]:left-$spacing(10,*) peer-data-[has-multiple]:text-$primaryColor-500 ring-$primaryColor-400 $borderRadius z-20 flex appearance-none items-center text-[0px] outline-none hover:!text-red-500 focus-visible:ring-2 group-data-[disabled]:pointer-events-none peer-data-[has-multiple]:absolute group-data-[disabled]:!text-$textColor-500 dark:hover:!text-red-400",
      fileRemoveIcon: "block text-base w-[0.75em] relative z-10",
      inner:
        "relative cursor-pointer group-data-[multiple]:$borderRadius(0,rounded-none,rounded-2xl)",
      input:
        "cursor-pointer text-transparent absolute inset-0 opacity-0 z-10 file:pointer-events-none file:w-0 file:h-0 file:overflow-hidden",
      noFiles:
        "flex w-full items-center text-$textColor-400 dark:text-$textColor-500",
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
        [&::-webkit-slider-runnable-track]:bg-$textColor-$borderColorStrength(-1) [&::-webkit-slider-runnable-track]:h-$spacing(-1,1,1.5) [&::-webkit-slider-runnable-track]:min-h-[0.25em] ::-webkit-slider-runnable-track]:max-h-[1em] [&::-webkit-slider-runnable-track]:$borderRadius

        dark:[&::-webkit-slider-runnable-track]:bg-$textColor-700

        ${"" /* webkit styles - thumb */}
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-$spacing(3,2,5) [&::-webkit-slider-thumb]:aspect-square [&::-webkit-slider-thumb]:bg-$primaryColor-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:top-1/2 [&::-webkit-slider-thumb]:-translate-y-1/2 [&::-webkit-slider-thumb]:group-data-[disabled]:bg-$textColor-500 [&::-webkit-slider-thumb]:group-data-[disabled]:!ring-$textColor-$borderColorStrength(-1) [&::-webkit-slider-thumb]:focus-visible:ring-2 [&::-webkit-slider-thumb]:focus:!ring-$primaryColor-400 [&::-webkit-slider-thumb]:focus:ring-offset-2 [&::-webkit-slider-thumb]:$inputShadow

        ${"" /* moz styles - track */}
        [&::-moz-range-track]:bg-$textColor-200 [&::-moz-range-track]:h-$spacing(-1,1,1.5) [&::-moz-range-track]:min-h-[0.25em] [&::-moz-range-track]:max-h-[1em] [&::-moz-range-track]:$borderRadius

        dark:[&::-moz-range-track]:bg-$textColor-700

        ${"" /* moz styles - thumb */}
        [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:w-$spacing(3,2,5) [&::-moz-range-thumb]:aspect-square [&::-moz-range-thumb]:bg-$primaryColor-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:group-data-[disabled]:bg-$textColor-500 [&::-moz-range-thumb]:group-data-[disabled]:!ring-$textColor-300 [&::-moz-range-thumb]:focus-visible:ring-2 [&::-moz-range-thumb]:focus:!ring-$primaryColor-400 [&::-moz-range-thumb]:focus:ring-offset-2 [&::-moz-range-thumb]:$inputShadow
      `,
    },
    select: {
      wrapper: "mb-$spacing(-1)",
      inner: `
        ${"" /* base styles */}
        relative flex items-center bg-white $inputMaxWidth border border-$textColor-$borderColorStrength $borderRadius focus-within:ring-1 focus-within:!ring-$primaryColor-400 focus-within:!border-$primaryColor-400 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-$textColor-100 group-data-[disabled]:!cursor-not-allowed $inputShadow group-data-[multiple]:$borderRadius(0,rounded-none,rounded-2xl)

        ${"" /* dark mode styles */}
        dark:bg-transparent dark:border-$textColor-$borderColorStrength(2) dark:group-data-[disabled]:bg-$textColor-800/5 dark:group-data-[invalid]:border-red-400 dark:group-data-[invalid]:ring-red-400
      `,
      input: `
        ${"" /* base styles */}
        grow p-$spacing pr-[2em] text-$textSize text-$textColor-700 text-ellipsis min-w-0 outline-none bg-transparent group-data-[disabled]:!cursor-not-allowed group-data-[prefix-icon]:!pl-0 group-data-[suffix-icon]:!pr-0 data-[placeholder]:text-$textColor-400 group-data-[multiple]:!p-0 selection:bg-$primaryColor-100

        ${"" /* dark mode styles */}
        dark:data-[placeholder]:text-$textColor-400/50 dark:text-$textColor-300

        ${"" /* Tailwind Forms overrides */}
        border-none focus:ring-0 bg-none
      `,
      selectIcon:
        "absolute w-[1em] text-$textColor-700 pointer-events-none right-$spacing group-data-[suffix-icon]:mr-[1.5em] dark:text-$textColor-300",
      optGroup:
        "group/optgroup group-data-[multiple]:px-$spacing(-2) pt-$spacing(-2) font-bold text-$textSize(-1,*)",
      option: `
        ${"" /* base styles */}
        group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-$primaryColor-100 group-data-[multiple]:focus:bg-$primaryColor-100 group-data-[multiple]:text-$textSize(-1,*) group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-$spacing(-1) group-data-[multiple]:px-$spacing

        ${"" /* dark mode styles */}
        dark:group-data-[multiple]:focus:bg-$primaryColor-700 dark:group-data-[multiple]:checked:bg-$primaryColor-700
      `,
      prefixIcon: "ml-$spacing text-$textColor-600 dark:text-$textColor-300",
      suffixIcon: "mr-$spacing text-$textColor-600 dark:text-$textColor-300",
    },
    submit: {
      // inherits family:button classes
    },
    textarea: {
      inner:
        "flex $inputMaxWidth items-center mb-$spacing(-1) bg-white border border-$textColor-$borderColorStrength $borderRadius(0,rounded-none,rounded-2xl) focus-within:ring-1 focus-within:!ring-$primaryColor-400 focus-within:!border-$primaryColor-400 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-$textColor-100 $inputShadow dark:border-$textColor-$borderColorStrength(2) dark:group-data-[disabled]:bg-$textColor-800/5 dark:group-data-[invalid]:border-red-400 dark:group-data-[invalid]:ring-red-400 dark:bg-transparent",
      input: `
        ${"" /* base styles */}
        text-$textSize(-1,*) h-$spacing(16,*) text-$textColor-700 min-w-0 grow shrink !p-$spacing outline-none bg-transparent selection:bg-$primaryColor-100 placeholder:text-$textColor-400 group-data-[disabled]:!cursor-not-allowed

        ${"" /* dark mode styles */}
        dark:placeholder-$textColor-400/50 dark:text-$textColor-300

        ${"" /* Tailwind Forms overrides */}
        p-0 border-none focus:ring-0
      `,
      prefixIcon:
        "ml-$spacing mr-0 text-$textColor-600 dark:text-$textColor-300",
      suffixIcon:
        "mr-$spacing ml-0 text-$textColor-600 dark:text-$textColor-300",
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

    /**
     * === Pro family groupings ===
     * These class lists apply to all inputs that are part of the matching pro family.
     * There is a comment in each input class list that indicates which family it belongs to.
     */
    "family:dropdown": {
      // autocomplete, dropdown, taglist
      wrapper: "mb-$spacing(-1)",
      inner: `
        ${"" /* base styles */}
        relative flex items-center bg-white $inputMaxWidth border border-$textColor-$borderColorStrength $borderRadius focus-within:ring-1 focus-within:!ring-$primaryColor-400 focus-within:!border-$primaryColor-400 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-$textColor-100 group-data-[disabled]:!cursor-not-allowed $inputShadow

        ${"" /* dark mode styles */}
        dark:bg-transparent dark:border-$textColor-$borderColorStrength(2) dark:group-data-[disabled]:bg-$textColor-800/5 dark:group-data-[invalid]:border-red-400 dark:group-data-[invalid]:ring-red-400
      `,
      input: `
        ${"" /* base styles */}
        grow p-$spacing pr-0 text-$textSize text-$textColor-700 text-ellipsis min-w-0 outline-none bg-transparent group-data-[disabled]:!cursor-not-allowed group-data-[prefix-icon]:!pl-0 group-data-[suffix-icon]:!pr-0 data-[placeholder]:text-$textColor-400 selection:bg-$primaryColor-100

        ${"" /* dark mode styles */}
        dark:data-[placeholder]:text-$textColor-400/50 dark:text-$textColor-300

        ${"" /* Tailwind Forms overrides */}
        border-none focus:ring-0 bg-none
      `,
      listboxButton:
        "w-[2.5em] self-stretch text-$textSize flex items-center text-$textColor-700 z-10 dark:text-$textColor-300",
      removeSelection:
        "w-[2.5em] self-stretch text-$textSize flex items-center text-$textColor-700 hover:text-red-400 z-10 dark:text-$textColor-300",
      selectIcon:
        "text-$textSize inline w-[1em] relative m-auto [&>svg]:w-[1em]",
      closeIcon: "text-$textSize w-[0.75em] relative m-auto",
      prefixIcon:
        "ml-$spacing !mr-0 text-$textColor-600 dark:text-$textColor-300",
      suffixIcon:
        "mr-$spacing !ml-0 text-$textColor-600 dark:text-$textColor-300",
      dropdownWrapper:
        "hidden $borderRadius(0,rounded-none,rounded-2xl) $inputShadow(2,shadow-md,shadow-2xl) mt-$spacing(-1,1,2) group-data-[expanded]:block",
      listbox:
        "bg-white $borderRadius(0,rounded-none,rounded-2xl) $inputShadow(2,shadow-md,shadow-2xl) overflow-clip",
      listitem:
        "flex items-center px-$spacing py-$spacing(-1,1) first:pt-$spacing last:pb-$spacing text-$textColor-700 text-$textSize aria-selected:text-white aria-selected:bg-$primaryColor-500 hover:bg-$primaryColor-100",
      selectedIcon:
        "flex absolute items-center left-$spacing text-$textSize h-[1em] w-[1em] shrink-0 [&>svg]:w-full",
      option: "ml-[1.5em]",
      selectionWrapper: "grow flex items-center text-$textColor-700",
      selection: "grow text-$textColor-700 group-data-[multiple]:p-$spacing",
      tagsWrapper: "w-full",
      tags: "flex flex-wrap -mb-$spacing(-2) empty:mb-0",
      tag: "flex items-center cursor-default rounded-full text-$textSize(-1,xs,sm) px-$spacing(-1,1,2) py-$spacing(-2,0.5,1.5) mr-$spacing(-2,0.5,1.5) mb-$spacing(-2,0.5,1.5) bg-$primaryColor-500 text-white [&>.formkit-removeSelection]:!w-[0.5em] [&>.formkit-removeSelection]:aspect-square [&>.formkit-removeSelection]:!text-inherit [&>.formkit-removeSelection]:cursor-pointer",
      tagLabel: "mr-1",
      emptyMessage:
        "flex items-center px-$spacing py-$spacing(-1,1) first:pt-$spacing last:pb-$spacing text-$textColor-700 text-$textSize(-1,*) aria-selected:text-white aria-selected:bg-$primaryColor-500",
    },
    autocomplete: {
      // inherits family:dropdown classes
      selections:
        "flex absolute inset-0 group-data-[multiple]:static group-data-[multiple]:block group-data-[empty]:hidden $inputMaxWidth group-data-[multiple]:mt-$spacing(-1,0.5,2)",
      selectionWrapper:
        "bg-$textColor-100 $borderRadius group-data-[multiple]:border group-data-[multiple]:border-$textColor-$borderColorStrength(-1,200,600) group-data-[multiple]:mb-$spacing(-1,0.5,2)",
      selection: "$borderRadius just pl-$spacing [&>*]:ml-0",
    },
    datepicker: {
      inner: "relative pl-0",
      panelWrapper:
        "absolute min-w-[22em] top-[calc(100%_+_0.5em)] shadow-[0_0_1.25em_rgba(0,0,0,.25)] $borderRadius(0,rounded-none,rounded-2xl) p-$spacing(4,*) bg-white z-10",
      panelHeader:
        "grid grid-cols-[2.5em_1fr_2.5em] justify-center items-center border-b-2 border-$textColor-$borderColorStrength(-1,200,600) mb-$spacing pb-$spacing(1,*)",
      panel: "flex justify-center",
      input: "pl-$spacing placeholder:text-$textColor-400",
      monthsHeader: "flex items-center justify-center col-start-2 col-end-2",
      timeHeader: "flex items-center justify-center col-start-2 col-end-2",
      months: "grid grid-cols-3 w-full",
      month:
        "m-$spacing(-1) p-$spacing(-2) text-center text-$textColor-700 $borderRadius bg-$textColor-200 aria-selected:bg-$primaryColor-500 aria-selected:text-white focus:outline focus:outline-2 focus:outline-$primaryColor-500 focus:outline-offset-2 focus:bg-white focus:text-$textColor-700 data-[is-extra=true]:opacity-25 group-data-[disabled]:opacity-50 group-data-[disabled]:cursor-default group-data-[disabled]:pointer-events-none",
      yearsHeader:
        "flex items-center justify-center text-$textColor-700 col-start-2 col-end-2",
      years: "grid grid-cols-5 w-full",
      year: "text-$textSize text-center text-$textColor-700 items-center m-$spacing(-1) p-$spacing(-2) $borderRadius bg-$textColor-200 aria-selected:bg-$primaryColor-500 aria-selected:text-white focus:outline focus:outline-2 focus:outline-$primaryColor-500 focus:outline-offset-2 focus:bg-white data-[is-extra=true]:opacity-25 group-data-[disabled]:opacity-50 group-data-[disabled]:cursor-default group-data-[disabled]:pointer-events-none",
      weekDays: "grid grid-cols-7",
      weekDay:
        "w-[2.25em] text-$textColor-700 m-$spacing(-1) $borderRadius font-medium lowercase",
      calendarWeeks: "",
      week: "grid grid-cols-7 group-data-[disabled]:opacity-50 group-data-[disabled]:cursor-default group-data-[disabled]:pointer-events-none",
      dayCell:
        "flex items-center justify-center text-center text-$textColor-700 w-[2.25em] h-[2.25em] m-1 p-$spacing $borderRadius bg-$textColor-200 aria-selected:bg-$primaryColor-500 aria-selected:text-white focus:outline focus:outline-2 focus:outline-$primaryColor-500 focus:outline-offset-2 focus:bg-white data-[is-extra=true]:opacity-25 formkit-disabled:opacity-50 formkit-disabled:cursor-default formkit-disabled:pointer-events-none",
      timeInput:
        "w-full border-2 border-$textColor-$borderColorStrength(-1,200,600) $borderRadius p-$spacing my-$spacing(5,*) focus-visible:outline-$primaryColor-500",
      daysHeader: "flex items-center justify-center",
      prev: "mr-auto px-$spacing(1,*) py-$spacing(-3,*) hover:bg-$textColor-100 $borderRadius col-start-1 col-end-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-$primaryColor-400 focus-visible:ring-offset-2",
      prevLabel: "hidden",
      prevIcon:
        "flex w-[0.75em] select-none text-$textColor-700 [&>svg]:w-full",
      dayButton:
        "appearance-none text-$textColor-700 cursor-pointer px-$spacing(1,*) py-$spacing(-3,*) border-2 border-$textColor-$borderColorStrength(-1,200,600) $borderRadius mx-1 hover:border-$primaryColor-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-$primaryColor-400 focus-visible:ring-offset-2",
      monthButton:
        "appearance-none text-$textColor-700 cursor-pointer px-$spacing(1,*) py-$spacing(-3,*) border-2 border-$textColor-$borderColorStrength(-1,200,600) $borderRadius mx-1 hover:border-$primaryColor-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-$primaryColor-400 focus-visible:ring-offset-2",
      yearButton:
        "appearance-none text-$textColor-700 cursor-pointer px-$spacing(1,*) py-$spacing(-3,*) border-2 border-$textColor-$borderColorStrength(-1,200,600) $borderRadius mx-1 hover:border-$primaryColor-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-$primaryColor-400 focus-visible:ring-offset-2",
      next: "ml-auto px-$spacing(1,*) py-$spacing(-3,*) $borderRadius hover:bg-$textColor-100 hover:rounded col-start-3 col-end-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-$primaryColor-400 focus-visible:ring-offset-2",
      nextLabel: "hidden",
      nextIcon:
        "flex w-[0.75em] select-none text-$textColor-700 [&>svg]:w-full",
      openButton:
        "appearance-none border-0 bg-transparent flex p-0 self-stretch cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-$primaryColor-400 focus-visible:ring-offset-2 focus-visible:$borderRadius(0,rounded-none,rounded-2xl)",
      calendarIcon:
        "text-$textColor-600 focus-visible:text-$primaryColor-500 flex w-[1em] grow-0 shrink-0 self-stretch select-none [&>svg]:w-full [&>svg]:m-auto [&>svg]:max-h-[1em] [&>svg]:max-w-[1em]",
    },
    dropdown: {
      // inherits family:dropdown classes
      placeholder: "text-$textColor-400 grow",
      selector: `
        ${"" /* base styles */}
        flex grow justify-between w-full p-$spacing pr-0 text-$textSize text-$textColor-700 text-left group-data-[disabled]:!cursor-not-allowed group-data-[prefix-icon]:!pl-0 group-data-[suffix-icon]:!pr-0 data-[placeholder]:text-$textColor-400 selection:bg-$primaryColor-100

        ${"" /* dark mode styles */}
        dark:data-[placeholder]:text-$textColor-400/50 dark:text-$textColor-300
      `,
      selectIcon: "mx-$spacing shrink-0",
      selectionsWrapper: "w-[85%] overflow-hidden",
      selection: "[&>*]:ml-0",
      selections: "inline-flex items-center",
      selectionsItem: "whitespace-nowrap mr-1",
      truncationCount:
        "flex items-center justify-center h-[1.5em] $borderRadius bg-$textColor-400 text-white whitespace-nowrap text-$textSize(-3) tracking-tighter leading-0 py-$spacing(-4,1,1.5) px-$spacing(-2,1,1.5) shrink-0 my-auto",
    },
    mask: {
      // inherits family:text classes
      inner: "relative",
    },
    repeater: {
      outer: "group/repeater [&_.formkit-outer]:mb-0",
      fieldset:
        "p-$spacing(1) border border-$textColor-$borderColorStrength(-1,200,600) $borderRadius(0,rounded-none,rounded-2xl) group-data-[invalid]/repeater:border-red-500 group-data-[invalid]/repeater:border-2",
      legend: "px-$spacing(-2)",
      content: "grow p-$spacing(0,2,6) flex flex-col align-center",
      controlLabel: "absolute opacity-0 pointer-events-none text-[0px]",
      controls:
        "flex flex-col items-center justify-center bg-$textColor-100 p-$spacing [&>li]:aspect-square",
      downControl:
        "w-[1.5em] h-[1.5em] my-$spacing(-2) flex items-center appearance-none justify-center aspect-square text-$textColor-500 hover:text-$primaryColor-500 disabled:hover:text-inherit disabled:opacity-25 disabled:!text-$textColor-500",
      upControl:
        "w-[1.5em] h-[1.5em] my-$spacing(-2) flex items-center appearance-none justify-center aspect-square text-$textColor-500 hover:text-$primaryColor-500 disabled:hover:text-inherit disabled:opacity-25 disabled:!text-$textColor-500",
      removeControl:
        "w-[1.5em] h-[1.5em] my-$spacing(-2) flex items-center appearance-none justify-center aspect-square text-$textColor-500 hover:text-$primaryColor-500 disabled:hover:text-inherit disabled:opacity-25 disabled:!text-$textColor-500",
      insertControl:
        "w-[1.5em] h-[1.5em] my-$spacing(-2) flex items-center appearance-none justify-center aspect-square text-$textColor-500 hover:text-$primaryColor-500 disabled:hover:text-inherit disabled:opacity-25 disabled:!text-$textColor-500",
      help: "mb-$spacing",
      item: "flex w-full mb-$spacing bg-white rounded border border-$textColor-$borderColorStrength(-1,200,600) overflow-clip $borderRadius(0,rounded-none,rounded-2xl) $inputShadow [&_.formkit-outer_.formkit-inner]:!shadow-none",
      moveDownIcon: "block w-[0.75em] aspect-square",
      moveUpIcon: "block w-[0.75em] aspect-square",
      removeIcon: "block w-[1.25em] aspect-square",
      addIcon: "block w-[1.25em] aspect-square",
    },
    taglist: {
      // inherits family:dropdown classes
      inner: "py-$spacing pr-0 pl-0 $borderRadius(0,rounded-none,rounded-2xl)",
      tags: "px-$spacing",
      input: "!p-0 !w-[0%] min-w-[1em] inline-block mb-$spacing(-2)",
      listboxButton: "ml-auto shrink-0",
    },
    toggle: {
      altLabel:
        "block w-full mb-$spacing(-1) font-bold text-$textSize(-2) text-$textColor-700",
      inner: "inline-block mr-$spacing",
      input: "peer absolute opacity-0 w-0 h-0",
      innerLabel:
        "absolute text-$textColor-200 text-[10px] font-bold select-none left-full top-1/2 -translate-x-full -translate-y-1/2 px-1",
      thumb:
        "relative p-0.5 left-0 aspect-square rounded-full transition-all w-[1.25em] bg-$textColor-50 text-$textColor-600 shadow-base",
      track:
        "p-0.5 min-w-[3em] relative cursor-pointer select-none rounded-full transition-all bg-$textColor-400 peer-checked:bg-$primaryColor-500 peer-checked:[&>div:last-child]:left-full peer-checked:[&>div:last-child]:-translate-x-full peer-checked:[&>div:first-child:not(:last-child)]:left-0 peer-checked:[&>div:first-child:not(:last-child)]:translate-x-0 $inputShadow(-1,*) peer-focus-visible:ring-2 peer-focus-visible:ring-$primaryColor-400 peer-focus-visible:ring-offset-2",
      valueLabel: "font-bold text-$textSize(-2) text-$textColor-700",
      wrapper: "flex flex-wrap items-center mb-$spacing(-2)",
    },
  },
});
