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
      "colorpicker",
      "date",
      "datepicker",
      "datetime-local",
      "dropdown",
      "email",
      "file",
      "mask",
      "month",
      "number",
      "password",
      "radio",
      "range",
      "rating",
      "repeater",
      "search",
      "select",
      "slider",
      "submit",
      "taglist",
      "tel",
      "text",
      "textarea",
      "time",
      "toggle",
      "transferlist",
      "url",
      "week",
    ],
    lightMode: true,
    darkMode: true,
  },
  variables: {
    radius: {
      editor: "radius",
      value: "rounded",
      scale: [
        "rounded-none",
        "rounded",
        "rounded-lg",
        "rounded-xl",
        "rounded-2xl",
        "rounded-full",
      ],
    },
    accentColor: {
      editor: "color",
      value: "blue",
      scale: [
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
      ],
    },
    colorTemperature: {
      editor: "color",
      value: "gray",
      scale: ["slate", "gray", "zinc", "neutral", "stone"],
    },
    spacing: {
      editor: "spacing",
      value: "2",
      min: "1.5",
      max: "2",
    },
    scale: {
      editor: "fontSize",
      value: "base",
      min: "sm",
      max: "lg",
    },
    inputShadow: {
      editor: "shadow",
      value: "shadow",
      min: "shadow-none",
      max: "shadow-lg",
    },
    borderShadeLightMode: {
      editor: "buttons",
      value: "400",
      scale: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      min: "100",
      max: "700",
    },
    borderShadeDarkMode: {
      editor: "buttons",
      value: "500",
      scale: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      min: "100",
      max: "700",
    },
    inputMaxWidth: {
      editor: "select",
      value: "max-w-[20em]",
      scale: ["max-w-[15em]", "max-w-[17em]", "max-w-[20em]", "max-w-[24em]"],
    },
    tagRadius: {
      editor: "radius",
      value: "rounded",
      scale: ["rounded-none", "rounded", "rounded-full"],
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
        "group $inputMaxWidth mb-$spacing(5,*) data-[disabled]:select-none data-[disabled]:opacity-50 text-$scale",
      label:
        "block text-$colorTemperature-700 text-$scale(-1,*) font-bold mb-$spacing(-2) dark:text-$colorTemperature-300",
      legend:
        "block text-$colorTemperature-700 text-$scale(-1,*) font-bold dark:text-$colorTemperature-300",
      input:
        "appearance-none [color-scheme:light] dark:[color-scheme:dark] selection:bg-$accentColor-100 selection:text-$colorTemperature-700 group-data-[has-overlay]:selection:!text-transparent",
      prefixIcon:
        "flex items-center mr-$spacing(0) text-$scale h-[1em] w-[1em] shrink-0 [&>svg]:w-full",
      suffixIcon:
        "flex items-center ml-$spacing(0) text-$scale h-[1em] w-[1em] shrink-0 [&>svg]:w-full",
      help: "text-$colorTemperature-500 text-$scale(-2,*) dark:text-$colorTemperature-400",
      message:
        "text-red-500 mb-$spacing(-1) text-$scale(-2,*) dark:text-red-400",
      overlay: "text-$colorTemperature-700 dark:text-$colorTemperature-300",
      overlayPlaceholder:
        "text-$colorTemperature-400 dark:text-$colorTemperature-400/50",
      overlayLiteral:
        "text-$colorTemperature-700 dark:text-$colorTemperature-300",
      overlayChar: "text-$colorTemperature-700 dark:text-$colorTemperature-300",
      overlayEnum: "text-$colorTemperature-700 dark:text-$colorTemperature-300",
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
        bg-$accentColor-500 $radius !text-$scale(-1,*) p-$spacing(3,1,5) outline-none flex items-center mb-$spacing(-1) text-white text-$scale(-1,*) active:text-$accentColor-100 active:bg-$accentColor-700 hover:bg-$accentColor-600 ring-offset-2 ring-$accentColor-400 focus-visible:ring-2 disabled:border-$colorTemperature-$borderShadeLightMode disabled:bg-$colorTemperature-400 disabled:text-$colorTemperature-100 group-data-[disabled]:!cursor-not-allowed $inputShadow

        ${"" /* dark mode styles */}
        dark:disabled:border-$colorTemperature-100 dark:disabled:bg-$colorTemperature-500 dark:disabled:text-$colorTemperature-200 dark:ring-offset-$accentColor-300
      `,
      prefixIcon: "text-$colorTemperature-100",
      suffixIcon: "text-$colorTemperature-100",
    },
    "family:box": {
      // checkbox, radio
      wrapper:
        "inline-flex items-center mb-$spacing(-2) group-data-[multiple]:mb-0",
      legend: "mb-$spacing",
      input:
        "peer pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0",
      decorator: `
        ${"" /* base styles */}
        mr-1.5 bg-white ring-$accentColor-400 peer-checked:border-$accentColor-500 relative block w-$spacing(5,1,6) aspect-square border border-$colorTemperature-$borderShadeLightMode text-transparent ring-offset-2 peer-checked:text-$accentColor-500 peer-focus-visible:ring-2 select-none group-data-[disabled]:!cursor-not-allowed group-data-[disabled]:bg-$colorTemperature-100 group-data-[disabled]:grayscale $inputShadow group-data-[disabled]/listoption:cursor-not-allowed

        ${"" /* dark mode styles */}
        dark:border-$colorTemperature-$borderShadeDarkMode dark:bg-transparent dark:group-data-[disabled]:bg-$colorTemperature-700 dark:ring-offset-$accentColor-300 dark:peer-focus-visible:ring-1
      `,
      decoratorIcon:
        "absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2",
      options: "mb-$spacing",
      option:
        "group/listoption mb-$spacing last:mb-0 data-[disabled]:opacity-50 data-[disabled]:select-none group-data-[disabled]:data-[disabled]:opacity-100",
      label: `
        ${"" /* base styles */}
        !mb-0 !font-normal !text-$scale(-1,*)

        ${"" /* dark mode styles */}
        dark:text-$colorTemperature-300
      `,
      optionHelp:
        "text-$colorTemperature-500 text-$scale(-2,*) mt-$spacing(-3)",
      help: "mb-$spacing(-3) group-data-[multiple]:mb-$spacing group-data-[multiple]:-mt-$spacing",
    },
    "family:text": {
      // color, date, datetime-local, email, file, month, number, password, search, tel, text, time, url, week
      wrapper: "flex flex-col items-start justify-start",
      label: "!inline-flex",
      inner: `
        ${"" /* base styles */}
        text-$scale flex items-center w-full mb-$spacing(-1) py-$spacing px-$spacing(1) $radius border border-$colorTemperature-$borderShadeLightMode bg-white focus-within:ring-1 focus-within:!ring-$accentColor-400 focus-within:!border-$accentColor-400 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-$colorTemperature-100 group-data-[disabled]:!cursor-not-allowed $inputShadow

        ${"" /* dark mode styles */}
        dark:bg-transparent dark:border-$colorTemperature-$borderShadeDarkMode dark:group-data-[disabled]:bg-$colorTemperature-800/5 dark:group-data-[invalid]:border-red-400 dark:group-data-[invalid]:ring-red-400
      `,
      input: `
        ${"" /* base styles */}
        text-$scale text-$colorTemperature-700 min-w-0 grow outline-none bg-transparent selection:bg-$accentColor-100 placeholder:text-$colorTemperature-400 group-data-[disabled]:!cursor-not-allowed

        ${"" /* dark mode styles */}
        dark:placeholder-$colorTemperature-400/50 dark:text-$colorTemperature-300

        ${"" /* Tailwind Forms overrides */}
        border-none p-0 focus:ring-0
      `,
      prefixIcon: "text-$colorTemperature-600 dark:text-$colorTemperature-300",
      suffixIcon: "text-$colorTemperature-600 dark:text-$colorTemperature-300",
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
      decorator: "$radius(0,rounded-none,rounded-lg)",
      decoratorIcon: "max-w-[66.66%]",
    },
    color: {
      // inherits family:text classes
      inner: `
        ${"" /* base styles */}
        !w-auto !p-$spacing(-2) !inline-flex group-data-[prefix-icon]:border group-data-[prefix-icon]:border-$colorTemperature-$borderShadeLightMode group-data-[suffix-icon]:border group-data-[suffix-icon]:border-$colorTemperature-$borderShadeLightMode

        ${"" /* dark mode styles */}
        dark:group-data-[prefix-icon]:border-$colorTemperature-$borderShadeDarkMode dark:group-data-[suffix-icon]:border-$colorTemperature-$borderShadeDarkMode
      `,
      input:
        "!w-14 bg-transparent cursor-pointer $radius overflow-clip [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none [&::-moz-color-swatch]:border-none group-data-[prefix-icon]:mx-$spacing group-data-[suffix-icon]:mx-$spacing",
      prefixIcon:
        "group-data-[prefix-icon]:m-$spacing(-2) group-data-[prefix-icon]:mr-0",
      suffixIcon:
        "group-data-[suffix-icon]:m-$spacing(-2) group-data-[prefix-icon]:ml-0",
    },
    date: {
      // inherits family:text classes
      input:
        "focus:[&::-webkit-datetime-edit-day-field]:bg-$accentColor-100 focus:[&::-webkit-datetime-edit-month-field]:bg-$accentColor-100 focus:[&::-webkit-datetime-edit-year-field]:bg-$accentColor-100",
    },
    "datetime-local": {
      // inherits family:text classes
      input:
        "focus:[&::-webkit-datetime-edit-day-field]:bg-$accentColor-100 focus:[&::-webkit-datetime-edit-month-field]:bg-$accentColor-100 focus:[&::-webkit-datetime-edit-year-field]:bg-$accentColor-100 focus:[&::-webkit-datetime-edit-hour-field]:bg-$accentColor-100 focus:[&::-webkit-datetime-edit-minute-field]:bg-$accentColor-100 focus:[&::-webkit-datetime-edit-ampm-field]:bg-$accentColor-100",
    },
    file: {
      // inherits family:text classes
      fileList:
        "group/list peer w-full min-w-0 data-[has-multiple]:mb-$spacing(6,*)",
      fileItemIcon: "h-[1em] w-[1em] mr-$spacing shrink-0",
      fileItem:
        "flex min-w-0 items-center text-$colorTemperature-700 mb-$spacing(-1) last:mb-0 dark:text-$colorTemperature-300",
      fileName:
        "truncate min-w-0 w-full shrink leading-5 group-data-[has-multiple]/list:text-$scale(-1,*)",
      fileRemove:
        "right-$spacing peer-data-[has-multiple]:text-$scale(-1,*) peer-data-[has-multiple]:bottom-$spacing peer-data-[has-multiple]:left-$spacing group-data-[prefix-icon]:peer-data-[has-multiple]:left-$spacing(10,*) peer-data-[has-multiple]:text-$accentColor-500 ring-$accentColor-400 $radius z-20 flex appearance-none items-center text-[0px] outline-none hover:!text-red-500 focus-visible:ring-2 group-data-[disabled]:pointer-events-none peer-data-[has-multiple]:absolute group-data-[disabled]:!text-$colorTemperature-500 dark:hover:!text-red-400",
      fileRemoveIcon: "block text-base w-[0.75em] relative z-10",
      inner:
        "relative cursor-pointer group-data-[multiple]:$radius(0,rounded-none,rounded-2xl)",
      input:
        "cursor-pointer text-transparent absolute inset-0 opacity-0 z-10 file:pointer-events-none file:w-0 file:h-0 file:overflow-hidden",
      noFiles:
        "flex w-full items-center text-$colorTemperature-400 dark:text-$colorTemperature-500",
      noFilesIcon: "w-[1em] mr-$spacing",
    },
    month: {
      // inherits family:text classes
      input:
        "focus:[&::-webkit-datetime-edit-month-field]:bg-$accentColor-100 focus:[&::-webkit-datetime-edit-year-field]:bg-$accentColor-100",
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
        [&::-webkit-slider-runnable-track]:bg-$colorTemperature-$borderShadeLightMode(0,300,500)/50 [&::-webkit-slider-runnable-track]:h-$spacing(-1,1,1.5) [&::-webkit-slider-runnable-track]:min-h-[0.25em] ::-webkit-slider-runnable-track]:max-h-[1em] [&::-webkit-slider-runnable-track]:$radius

        dark:[&::-webkit-slider-runnable-track]:bg-$colorTemperature-$borderShadeDarkMode(0,400,600)/50

        ${"" /* webkit styles - thumb */}
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-$spacing(3,2,5) [&::-webkit-slider-thumb]:aspect-square [&::-webkit-slider-thumb]:bg-$accentColor-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:top-1/2 [&::-webkit-slider-thumb]:-translate-y-1/2 [&::-webkit-slider-thumb]:group-data-[disabled]:bg-$colorTemperature-500 [&::-webkit-slider-thumb]:group-data-[disabled]:!ring-$colorTemperature-$borderShadeLightMode(-1,200,400) [&::-webkit-slider-thumb]:focus-visible:ring-2 [&::-webkit-slider-thumb]:focus:!ring-$accentColor-400 [&::-webkit-slider-thumb]:focus:ring-offset-2 [&::-webkit-slider-thumb]:$inputShadow dark:[&::-webkit-slider-thumb]:group-data-[disabled]:!ring-$colorTemperature-$borderShadeDarkMode(1,500,700) dark:[&::-webkit-slider-thumb]:focus:ring-offset-$colorTemperature-700

        ${"" /* moz styles - track */}
        [&::-moz-range-track]:bg-$colorTemperature-$borderShadeLightMode(0,300,500)/50 [&::-moz-range-track]:h-$spacing(-1,1,1.5) [&::-moz-range-track]:min-h-[0.25em] [&::-moz-range-track]:max-h-[1em] [&::-moz-range-track]:$radius

        dark:[&::-moz-range-track]:bg-$colorTemperature-$borderShadeDarkMode(0,400,600)/50

        ${"" /* moz styles - thumb */}
        [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:w-$spacing(3,2,5) [&::-moz-range-thumb]:h-$spacing(3,2,5) [&::-moz-range-thumb]:bg-$accentColor-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:group-data-[disabled]:bg-$colorTemperature-500 [&::-moz-range-thumb]:group-data-[disabled]:!ring-$colorTemperature-300 [&::-moz-range-thumb]:focus-visible:ring-2 [&::-moz-range-thumb]:focus:!ring-$accentColor-400 [&::-moz-range-thumb]:focus:ring-offset-2 [&::-moz-range-thumb]:$inputShadow dark:[&::-moz-range-thumb]:group-data-[disabled]:!ring-$colorTemperature-500 dark:[&::-moz-range-thumb]:focus:ring-offset-$colorTemperature-700
      `,
    },
    select: {
      wrapper: "mb-$spacing(-1)",
      inner: `
        ${"" /* base styles */}
        relative flex items-center bg-white border border-$colorTemperature-$borderShadeLightMode $radius focus-within:ring-1 focus-within:!ring-$accentColor-400 focus-within:!border-$accentColor-400 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-$colorTemperature-100 group-data-[disabled]:!cursor-not-allowed $inputShadow group-data-[multiple]:$radius(0,rounded-none,rounded-2xl)

        ${"" /* dark mode styles */}
        dark:bg-transparent dark:border-$colorTemperature-$borderShadeDarkMode dark:group-data-[disabled]:bg-$colorTemperature-800/5 dark:group-data-[invalid]:border-red-400 dark:group-data-[invalid]:ring-red-400
      `,
      input: `
        ${"" /* base styles */}
        grow p-$spacing pr-[2em] text-$scale text-$colorTemperature-700 text-ellipsis min-w-0 outline-none bg-transparent group-data-[disabled]:!cursor-not-allowed group-data-[prefix-icon]:!pl-0 group-data-[suffix-icon]:!pr-0 data-[placeholder]:text-$colorTemperature-400 group-data-[multiple]:!p-0 selection:bg-$accentColor-100

        ${"" /* dark mode styles */}
        dark:data-[placeholder]:text-$colorTemperature-400/50 dark:text-$colorTemperature-300

        ${"" /* Tailwind Forms overrides */}
        border-none focus:ring-0 bg-none
      `,
      selectIcon:
        "absolute w-[1em] text-$colorTemperature-700 pointer-events-none right-$spacing group-data-[suffix-icon]:mr-[1.5em] dark:text-$colorTemperature-300",
      optGroup:
        "group/optgroup group-data-[multiple]:px-$spacing(-2) pt-$spacing(-2) font-bold text-$scale(-1,*)",
      option: `
        ${"" /* base styles */}
        group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-$accentColor-100 group-data-[multiple]:focus:bg-$accentColor-100 group-data-[multiple]:text-$scale(-1,*) group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-$spacing(-1) group-data-[multiple]:px-$spacing

        ${"" /* dark mode styles */}
        dark:group-data-[multiple]:focus:bg-$accentColor-700 dark:group-data-[multiple]:checked:bg-$accentColor-700
      `,
      prefixIcon:
        "ml-$spacing text-$colorTemperature-600 dark:text-$colorTemperature-300",
      suffixIcon:
        "mr-$spacing text-$colorTemperature-600 dark:text-$colorTemperature-300",
    },
    submit: {
      // inherits family:button classes
    },
    textarea: {
      inner:
        "flex items-center mb-$spacing(-1) bg-white border border-$colorTemperature-$borderShadeLightMode $radius(0,rounded-none,rounded-2xl) focus-within:ring-1 focus-within:!ring-$accentColor-400 focus-within:!border-$accentColor-400 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-$colorTemperature-100 $inputShadow dark:border-$colorTemperature-$borderShadeDarkMode dark:group-data-[disabled]:bg-$colorTemperature-800/5 dark:group-data-[invalid]:border-red-400 dark:group-data-[invalid]:ring-red-400 dark:bg-transparent",
      input: `
        ${"" /* base styles */}
        text-$scale(-1,*) h-$spacing(16,*) text-$colorTemperature-700 min-w-0 grow shrink !p-$spacing outline-none bg-transparent selection:bg-$accentColor-100 placeholder:text-$colorTemperature-400 group-data-[disabled]:!cursor-not-allowed

        ${"" /* dark mode styles */}
        dark:placeholder-$colorTemperature-400/50 dark:text-$colorTemperature-300

        ${"" /* Tailwind Forms overrides */}
        p-0 border-none focus:ring-0
      `,
      prefixIcon:
        "ml-$spacing mr-0 text-$colorTemperature-600 dark:text-$colorTemperature-300",
      suffixIcon:
        "mr-$spacing ml-0 text-$colorTemperature-600 dark:text-$colorTemperature-300",
    },
    time: {
      // inherits family:text classes
      input:
        "focus:[&::-webkit-datetime-edit-hour-field]:bg-$accentColor-100 focus:[&::-webkit-datetime-edit-minute-field]:bg-$accentColor-100 focus:[&::-webkit-datetime-edit-ampm-field]:bg-$accentColor-100",
    },
    week: {
      // inherits family:text classes
      input:
        "focus:[&::-webkit-datetime-edit-week-field]:bg-$accentColor-100 focus:[&::-webkit-datetime-edit-year-field]:bg-$accentColor-100",
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
        relative flex items-center bg-white border border-$colorTemperature-$borderShadeLightMode $radius focus-within:ring-1 focus-within:!ring-$accentColor-400 focus-within:!border-$accentColor-400 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-$colorTemperature-100 group-data-[disabled]:!cursor-not-allowed $inputShadow

        ${"" /* dark mode styles */}
        dark:bg-transparent dark:border-$colorTemperature-$borderShadeDarkMode dark:group-data-[disabled]:bg-$colorTemperature-700/40 dark:group-data-[invalid]:border-red-400 dark:group-data-[invalid]:ring-red-400
      `,
      input: `
        ${"" /* base styles */}
        grow p-$spacing pr-0 text-$scale text-$colorTemperature-700 text-ellipsis min-w-0 outline-none bg-transparent group-data-[disabled]:!cursor-not-allowed group-data-[prefix-icon]:!pl-0 group-data-[suffix-icon]:!pr-0 placeholder:text-$colorTemperature-400 selection:bg-$accentColor-100

        ${"" /* dark mode styles */}
        dark:placeholder:text-$colorTemperature-500 dark:text-$colorTemperature-300

        ${"" /* Tailwind Forms overrides */}
        border-none focus:ring-0 bg-none
      `,
      listboxButton:
        "w-[2.5em] self-stretch text-$scale flex items-center text-$colorTemperature-700 z-10 dark:text-$colorTemperature-300",
      removeSelection:
        "w-[2.5em] self-stretch text-$scale flex items-center text-$colorTemperature-700 hover:text-red-400 z-10 dark:text-$colorTemperature-300",
      selectIcon: "text-$scale inline w-[1em] relative m-auto [&>svg]:w-[1em]",
      closeIcon: "text-$scale w-[0.75em] relative m-auto",
      prefixIcon:
        "ml-$spacing !mr-0 text-$colorTemperature-600 dark:text-$colorTemperature-300",
      suffixIcon:
        "mr-$spacing !ml-0 text-$colorTemperature-600 dark:text-$colorTemperature-300",
      dropdownWrapper:
        "hidden $radius(0,rounded-none,rounded-2xl) $inputShadow(2,shadow-md,shadow-2xl) mt-$spacing(-1,1,2) group-data-[expanded]:block",
      listbox:
        "bg-white $radius(0,rounded-none,rounded-2xl) $inputShadow(2,shadow-md,shadow-2xl) overflow-clip dark:bg-$colorTemperature-700",
      listitem: `
        relative flex items-center px-$spacing py-$spacing(-1,1) first:pt-$spacing last:pb-$spacing text-$colorTemperature-700 text-$scale aria-selected:!text-white aria-selected:!bg-$accentColor-500 data-[is-active]:bg-$accentColor-100 dark:text-$colorTemperature-200 dark:data-[is-active]:text-$colorTemperature-700 data-[is-active]:bg-$accentColor-100

        ${"" /* keyboard focus on active items */}
        before:content-['']
        before:absolute
        before:inset-0
        data-[is-active]:aria-selected:before:ring-2
        data-[is-active]:aria-selected:before:ring-white
        data-[is-active]:aria-selected:before:ring-inset
        data-[is-active]:aria-selected:before:ring-offset-2
        data-[is-active]:aria-selected:before:ring-offset-$accentColor-500
        data-[is-active]:aria-selected:before:$radius(0,rounded-none,rounded-2xl)
      `,
      selectedIcon:
        "flex absolute items-center left-$spacing text-$scale h-[1em] w-[1em] shrink-0 [&>svg]:w-full",
      option: "ml-[1.5em]",
      selectionWrapper: "grow flex items-center text-$colorTemperature-700",
      selection:
        "grow text-$colorTemperature-700 group-data-[multiple]:p-$spacing dark:text-$colorTemperature-300",
      tagsWrapper: "w-full",
      tagWrapper:
        "group/tag rounded-full mr-$spacing(-2,0.5,1.5) mb-$spacing(-2,0.5,1.5) outline-none data-[active-selection=true]:ring-2 data-[active-selection=true]:ring-$accentColor-400",
      tags: "inline-flex flex-wrap -mb-$spacing(-2,0.5,1.5) empty:mb-0",
      tag: "flex items-center cursor-default $tagRadius text-$scale(-1,xs,sm) px-$spacing(-1,1,2) py-$spacing(-2,0.5,1.5) bg-$accentColor-500 text-white [&>.formkit-removeSelection]:!w-[0.5em] [&>.formkit-removeSelection]:aspect-square [&>.formkit-removeSelection]:!text-inherit [&>.formkit-removeSelection]:cursor-pointer group-data-[active-selection=true]/tag:bg-$accentColor-200 group-data-[active-selection=true]/tag:text-$colorTemperature-700",
      tagLabel: "mr-1",
      emptyMessage:
        "flex items-center px-$spacing py-$spacing(-1,1) first:pt-$spacing last:pb-$spacing text-$colorTemperature-700 text-$scale(-1,*) aria-selected:text-white aria-selected:bg-$accentColor-500",
    },
    autocomplete: {
      // inherits family:dropdown classes
      selections:
        "flex absolute inset-0 group-data-[multiple]:static group-data-[multiple]:block group-data-[empty]:hidden group-data-[multiple]:mt-$spacing(-1,0.5,2)",
      selectionWrapper:
        "bg-$colorTemperature-100 $radius group-data-[multiple]:border group-data-[multiple]:border-$colorTemperature-$borderShadeLightMode(-1,200,600) group-data-[multiple]:mb-$spacing(-1,0.5,2) outline-none data-[active-selection=true]:ring-2 data-[active-selection=true]:ring-$accentColor-400  dark:bg-$colorTemperature-600 dark:group-data-[multiple]:border-$colorTemperature-$borderShadeDarkMode(0,300,700)",
      selection:
        "$radius just pl-$spacing [&>*]:ml-0 dark:text-$colorTemperature-200",
    },
    colorpicker: {
      // inherits from family:text classes
      outer:
        "data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none",
      help: "group-data-[inline]:-mt-1 group-data-[inline]:mb-$spacing",
      inner:
        "relative inline-flex !w-auto group-data-[inline]:border-none group-data-[inline]:shadow-none group-data-[inline]:p-0 group-data-[inline]:bg-transparent group-data-[inline]:outline-none group-data-[inline]:ring-0 group-data-[inline]:!w-full",
      swatchPreview:
        "w-full flex justify-start items-center $radius text-sm cursor-pointer outline-none",
      canvasSwatchPreviewWrapper:
        "relative before:content-[''] before:absolute before:inset-0 before:$radius before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)] before:z-[2]",
      canvasSwatchPreview:
        "text-$scale $radius aspect-square shrink-0 grow !w-[1.5em]",
      valueString:
        "text-$scale text-$colorTemperature-700 selection:bg-$accentColor-100 font-mono inline-block ml-$spacing mr-$spacing(-2) dark:text-$colorTemperature-300 dark:selection:text-$colorTemperature-700",
      panel: `
        ${"" /* base styles */}
        absolute left-0 top-full z-10 flex w-[100vw] max-w-[18.5em] touch-manipulation flex-col $radius(0,rounded-none,rounded-2xl) border bg-white p-$spacing(0,1,3) $inputShadow(1,*) group-data-[inline]:static group-data-[inline]:max-w-none group-data-[inline]:border border-$colorTemperature-$borderShadeLightMode(-1) group-data-[inline]:z-auto group-data-[inline]:w-full group-data-[inline]:$inputShadow group-data-[inline]:group-data-[disabled]:!cursor-not-allowed group-data-[inline]:group-data-[disabled]:!pointer-events-none

        dark:bg-$colorTemperature-800 dark:border-$colorTemperature-$borderShadeDarkMode(1)

        ${"" /* mobile touch styles */}
        [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:!fixed
        [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:top-auto
        [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:max-w-none
        [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:bottom-0
        [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:left-0
        [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:rounded-none
      `,
      panelClose:
        "flex justify-end items-center text-$colorTemperature-600 mb-$spacing(-1) -mt-1 border-none bg-none border-b border-$colorTemperature-$borderShadeLightMode(-1) w-[calc(100%+1rem)] -ml-2 pt-0 pr-$spacing pb-$spacing(-2) pl-$spacing dark:border-$colorTemperature-$borderShadeDarkMode(1)",
      closeIcon:
        "w-[2rem] aspect-square p-1 $radius border [&>svg]:w-full [&>svg]:aspect-square [&>svg]:max-w-none [&>svg]:max-h-none",
      controlGroup:
        "grid [grid-template-areas:'a_a_a'_'b_c_e'_'b_d_e']  mb-$spacing",
      LS: "[grid-area:a] relative mb-$spacing",
      canvas: "block w-full",
      canvasLS:
        "aspect-[2/1] cursor-pointer $radius(-1,rounded-none,rounded-xl)",
      canvasHue: "$radius(-1,rounded-none,rounded-xl)",
      canvasAlpha: "$radius(-1,rounded-none,rounded-xl)",
      preview:
        "$radius after:$radius relative inline-flex aspect-square overflow-hidden [grid-area:b] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)] after:content-[''] w-[2em] dark:after:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]",
      hue: "[grid-area:c] relative inline-flex h-3/4 pl-$spacing",
      alpha: "[grid-area:d] relative inline-flex h-3/4 pl-$spacing",
      eyeDropper:
        "[grid-area:e] w-[2em] ml-$spacing inline-flex self-center justify-center justify-self-center aspect-square $radius(0,rounded-none,rounded-2xl) border border-$colorTemperature-$borderShadeLightMode(-1) cursor-pointer content-center items-center text-$colorTemperature-600 dark:border-$colorTemperature-$borderShadeDarkMode(1)",
      eyeDropperIcon: `w-auto [&>svg]:w-[1em] dark:text-$colorTemperature-400`,
      control:
        "absolute bg-white shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2)] -translate-x-1/2 -translate-y-1/2 pointer-events-none data-[prevent-focus-style]:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-$accentColor-400",
      controlLS: "w-[10px] h-[10px] rounded-full",
      controlHue:
        "w-[4px] h-[calc(100%-2px)] top-1/2 $radius(0,rounded-none,rounded-2xl)",
      controlAlpha:
        "w-[4px] h-[calc(100%-2px)] top-1/2 $radius(0,rounded-none,rounded-2xl)",
      formatField: "flex items-center justify-center grow",
      colorField:
        "bg-transparent text-$colorTemperature-700 border border-$colorTemperature-$borderShadeLightMode(-1) dark:border-$colorTemperature-$borderShadeDarkMode(1) dark:text-$colorTemperature-300 dark:selection:text-$colorTemperature-700",
      colorInputGroup: "flex items-center justify-center grow",
      fieldGroup: `
        ${"" /* base styles */}
        flex flex-col items-center justify-center w-full mr-$spacing(-2,0.5,1.5)

        ${"" /* nested input styles */}
        [&>input]:p-1 [&>input]:text-$scale(-1) [&>input]:text-$colorTemperature-700 [&>input]:selection:bg-$accentColor-100 [&>input]:m-0 [&>input]:grow [&>input]:shrink [&>input]:w-full [&>input]:border [&>input]:border-$colorTemperature-$borderShadeLightMode(-1) [&>input]:$radius [&>input]:text-center [&>input]:appearance-none [&>input::-webkit-outer-spin-button]:appearance-none  [&>input::-webkit-inner-spin-button]:appearance-none [&>input::-webkit-inner-spin-button]:m-0 [&>input:focus]:outline-none [&>input:focus]:ring-1 [&>input:focus]:ring-$accentColor-500 [&>input:focus]:border-$accentColor-500 max-[431px]:[&>input]:text-base
      `,
      fieldLabel:
        "text-$scale(-2,xs,sm) text-$colorTemperature-500 mt-$spacing(-3) dark:text-$colorTemperature-400",
      formatSwitcher:
        "flex justify-end self-start uppercase shrink-0 p-1 mt-0.5 text-$colorTemperature-600 $radius(0,rounded-none,rounded) select-none dark:text-$colorTemperature-400",
      switchIcon: "[&>svg]:w-3",
      swatches:
        "inline-flex flex-wrap justify-self-center w-auto min-w-0 mx-auto pt-$spacing pb-$spacing mt-$spacing -mb-$spacing border-t border-$colorTemperature-$borderShadeLightMode(-1) overflow-auto max-h-[200px] select-none first:mt-0 first:pt-0 first:border-t-0 dark:border-$colorTemperature-$borderShadeDarkMode(1)",
      swatchGroup: "flex flex-wrap w-full mb-$spacing last:mb-0",
      swatchGroupLabel:
        "ml-1 block w-full text-$scale(-1,xs,sm) text-$colorTemperature-500 dark:text-$colorTemperature-400",
      swatch: `
        ${"" /* base styles */} 
        relative min-w-[1rem] w-[calc((100%/10)-0.5rem)] aspect-square m-1 cursor-pointer

        ${"" /* decorator styles */} 
        before:content-[''] before:absolute before:inset-0 before:$radius before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)] before:pointer-events-none before:z-[2] dark:before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]

        ${"" /* active styles */}
        data-[active='true']:after:content-['']
        data-[active='true']:after:block
        data-[active='true']:after:absolute
        data-[active='true']:after:w-1.5
        data-[active='true']:after:h-1.5
        data-[active='true']:after:top-1/2
        data-[active='true']:after:left-1/2
        data-[active='true']:after:pointer-events-none
        data-[active='true']:after:rounded-full
        data-[active='true']:after:-translate-x-1/2
        data-[active='true']:after:-translate-y-1/2
        data-[active='true']:after:bg-white
        data-[active='true']:after:z-[2]
        data-[active='true']:after:ring-1
        data-[active='true']:after:ring-[rgba(0,0,0,0.33)]

        ${"" /* canvas styles */}
        [&>canvas]:block [&>canvas]:w-full [&>canvas]:aspect-square [&>canvas]:$radius [&>canvas:focus-visible]:outline-none [&>canvas:focus-visible]:ring-2 [&>canvas:focus-visible]:ring-$accentColor-400 [&>canvas:focus-visible]:ring-offset-2 [&>canvas:focus-visible]:ring-offset-white dark:[&>canvas:focus-visible]:ring-offset-$colorTemperature-700
      `,
    },
    datepicker: {
      inner: "relative pl-0",
      panelWrapper:
        "absolute min-w-[22em] top-[calc(100%_+_0.5em)] shadow-[0_0_1.25em_rgba(0,0,0,.25)] $radius(0,rounded-none,rounded-2xl) p-$spacing(4,*) bg-white z-10 dark:bg-$colorTemperature-800",
      panelHeader:
        "grid grid-cols-[2.5em_1fr_2.5em] justify-center items-center border-b-2 border-$colorTemperature-$borderShadeLightMode(-1,200,600) mb-$spacing pb-$spacing(1,*) dark:border-$colorTemperature-$borderShadeDarkMode(1,400,700)",
      panel: "flex justify-center",
      input: "pl-$spacing placeholder:text-$colorTemperature-400",
      monthsHeader: "flex items-center justify-center col-start-2 col-end-2",
      timeHeader: "flex items-center justify-center col-start-2 col-end-2",
      months: "grid grid-cols-3 w-full",
      month:
        "m-$spacing(-1) p-$spacing(-2) text-center text-$colorTemperature-700 $radius bg-$colorTemperature-200 aria-selected:!bg-$accentColor-500 aria-selected:!text-white focus:outline focus:outline-2 focus:outline-$accentColor-500 focus:outline-offset-2 focus:bg-white focus:text-$colorTemperature-700 data-[is-extra=true]:opacity-25 group-data-[disabled]:opacity-50 group-data-[disabled]:cursor-default group-data-[disabled]:pointer-events-none dark:bg-$colorTemperature-700 dark:text-$colorTemperature-300",
      yearsHeader:
        "flex items-center justify-center text-$colorTemperature-700 col-start-2 col-end-2 dark:text-$colorTemperature-300",
      years: "grid grid-cols-5 w-full",
      year: "text-$scale text-center text-$colorTemperature-700 items-center m-$spacing(-1) p-$spacing(-2) $radius bg-$colorTemperature-200 aria-selected:!bg-$accentColor-500 aria-selected:!text-white focus:outline focus:outline-2 focus:outline-$accentColor-500 focus:outline-offset-2 focus:bg-white data-[is-extra=true]:opacity-25 group-data-[disabled]:opacity-50 group-data-[disabled]:cursor-default group-data-[disabled]:pointer-events-none dark:bg-$colorTemperature-700 dark:text-$colorTemperature-300",
      weekDays: "grid grid-cols-7",
      weekDay:
        "w-[2.25em] text-$colorTemperature-700 m-$spacing(-1) $radius font-medium lowercase",
      calendarWeeks: "",
      week: "grid grid-cols-7 group-data-[disabled]:opacity-50 group-data-[disabled]:cursor-default group-data-[disabled]:pointer-events-none",
      dayCell: `
        flex items-center justify-center text-center text-$colorTemperature-700 w-[2.25em] h-[2.25em] m-1 p-$spacing $radius bg-$colorTemperature-200 aria-selected:bg-$accentColor-500 aria-selected:text-white focus:outline focus:outline-2 focus:outline-$accentColor-500 focus:outline-offset-2 focus:bg-white data-[is-extra=true]:opacity-25 data-[disabled]:opacity-50 data-[disabled]:cursor-default data-[disabled]:pointer-events-none

        ${"" /* dark mode styles */}
        dark:bg-$colorTemperature-600 dark:text-$colorTemperature-300 dark:aria-selected:bg-$accentColor-500 dark:aria-selected:text-white dark:focus:outline-$accentColor-500 dark:focus:bg-$colorTemperature-200 dark:focus:text-$colorTemperature-700
      `,
      timeInput:
        "w-full border-2 [color-scheme:light] dark:[color-scheme:dark] text-$colorTemperature-700 border-$colorTemperature-$borderShadeLightMode(-1,200,600) $radius p-$spacing(-1) my-$spacing(1,*) focus-visible:outline-$accentColor-500 dark:text-$colorTemperature-300 dark:bg-transparent dark:border-$colorTemperature-$borderShadeDarkMode(1,300,700)",
      daysHeader: "flex items-center justify-center",
      prev: "mr-auto px-$spacing(1,*) py-$spacing(-3,*) hover:bg-$colorTemperature-100 $radius col-start-1 col-end-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-$accentColor-400 focus-visible:ring-offset-2",
      prevLabel: "hidden",
      prevIcon:
        "flex w-[0.75em] select-none text-$colorTemperature-700 [&>svg]:w-full dark:text-$colorTemperature-300",
      dayButton:
        "appearance-none text-$colorTemperature-700 cursor-pointer px-$spacing(1,*) py-$spacing(-3,*) border-2 border-$colorTemperature-$borderShadeLightMode(-1,200,600) $radius mx-1 hover:border-$accentColor-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-$accentColor-400 focus-visible:ring-offset-2 dark:text-$colorTemperature-300 dark:border-$colorTemperature-$borderShadeDarkMode(1,300,700) dark:hover:border-$accentColor-400",
      monthButton:
        "appearance-none text-$colorTemperature-700 cursor-pointer px-$spacing(1,*) py-$spacing(-3,*) border-2 border-$colorTemperature-$borderShadeLightMode(-1,200,600) $radius mx-1 hover:border-$accentColor-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-$accentColor-400 focus-visible:ring-offset-2 dark:text-$colorTemperature-300 dark:border-$colorTemperature-$borderShadeDarkMode(1,300,700) dark:hover:border-$accentColor-400 ",
      yearButton:
        "appearance-none text-$colorTemperature-700 cursor-pointer px-$spacing(1,*) py-$spacing(-3,*) border-2 border-$colorTemperature-$borderShadeLightMode(-1,200,600) $radius mx-1 hover:border-$accentColor-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-$accentColor-400 focus-visible:ring-offset-2 dark:text-$colorTemperature-300 dark:border-$colorTemperature-$borderShadeDarkMode(1,300,700) dark:hover:border-$accentColor-400",
      next: "ml-auto px-$spacing(1,*) py-$spacing(-3,*) $radius hover:bg-$colorTemperature-100 hover:rounded col-start-3 col-end-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-$accentColor-400 focus-visible:ring-offset-2",
      nextLabel: "hidden",
      nextIcon:
        "flex w-[0.75em] select-none text-$colorTemperature-700 [&>svg]:w-full dark:text-$colorTemperature-300",
      openButton:
        "appearance-none border-0 bg-transparent flex p-0 self-stretch cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-$accentColor-400 focus-visible:ring-offset-2 focus-visible:$radius(0,rounded-none,rounded-2xl)",
      calendarIcon:
        "text-$colorTemperature-600 focus-visible:text-$accentColor-500 flex w-[1em] grow-0 shrink-0 self-stretch select-none [&>svg]:w-full [&>svg]:m-auto [&>svg]:max-h-[1em] [&>svg]:max-w-[1em]",
    },
    dropdown: {
      // inherits family:dropdown classes
      placeholder:
        "text-$colorTemperature-400 grow dark:text-$colorTemperature-400/50",
      selector: `
        ${"" /* base styles */}
        flex grow justify-between w-full p-$spacing pr-0 text-$scale text-$colorTemperature-700 text-left group-data-[disabled]:!cursor-not-allowed group-data-[prefix-icon]:!pl-0 group-data-[suffix-icon]:!pr-0 data-[placeholder]:text-$colorTemperature-400 selection:bg-$accentColor-100

        ${"" /* dark mode styles */}
        dark:data-[placeholder]:text-$colorTemperature-400/50 dark:text-$colorTemperature-300
      `,
      selectIcon: "mx-$spacing shrink-0",
      selectionsWrapper: "w-[85%] overflow-hidden",
      selection: "[&>*]:ml-0",
      selections: "inline-flex items-center",
      selectionsItem: "whitespace-nowrap mr-1",
      truncationCount:
        "flex items-center justify-center h-[1.5em] $radius bg-$colorTemperature-400 text-white whitespace-nowrap text-$scale(-3,*) tracking-tighter leading-0 py-$spacing(-4,1,1.5) px-$spacing(-2,1,1.5) shrink-0 my-auto",
    },
    mask: {
      // inherits family:text classes
      inner: "relative",
      input:
        "group-data-[has-overlay]:!caret-$colorTemperature-700 dark:group-data-[has-overlay]:!caret-$colorTemperature-300",
    },
    rating: {
      inner: "flex w-[130px] items-center relative",
      itemsWrapper: "w-full",
      onItems: "text-yellow-400",
      offItems: "text-$colorTemperature-400",
      onItemWrapper:
        "[&>*]:w-full [&>*]:h-auto [&>*]:max-w-none [&>*]:max-h-none",
      offItemWrapper:
        "[&>*]:w-full [&>*]:h-auto [&>*]:max-w-none [&>*]:max-h-none",
      ratingIcon: "w-full",
    },
    repeater: {
      outer: "group/repeater [&_.formkit-outer]:mb-0 max-w-none",
      fieldset:
        "p-$spacing(1) border border-$colorTemperature-$borderShadeLightMode(-1,200,600) $radius(0,rounded-none,rounded-2xl) group-data-[invalid]/repeater:border-red-500 group-data-[invalid]/repeater:border-2 dark:border-$colorTemperature-$borderShadeDarkMode(1,300,700)",
      legend: "px-$spacing(-2)",
      content: "grow p-$spacing(0,2,6) flex flex-col align-center",
      controlLabel: "absolute opacity-0 pointer-events-none text-[0px]",
      controls:
        "flex flex-col items-center justify-center bg-$colorTemperature-100 p-$spacing [&>li]:aspect-square dark:bg-$colorTemperature-800",
      downControl:
        "w-[1.5em] h-[1.5em] my-$spacing(-2) flex items-center appearance-none justify-center aspect-square text-$colorTemperature-500 hover:text-$accentColor-500 disabled:hover:text-inherit disabled:opacity-25 disabled:!text-$colorTemperature-500 dark:text-$colorTemperature-300 dark:disabled:!text-$colorTemperature-300 dark:hover:text-$accentColor-400",
      upControl:
        "w-[1.5em] h-[1.5em] my-$spacing(-2) flex items-center appearance-none justify-center aspect-square text-$colorTemperature-500 hover:text-$accentColor-500 disabled:hover:text-inherit disabled:opacity-25 disabled:!text-$colorTemperature-500 dark:text-$colorTemperature-300 dark:disabled:!text-$colorTemperature-300 dark:hover:text-$accentColor-400",
      removeControl:
        "w-[1.5em] h-[1.5em] my-$spacing(-2) flex items-center appearance-none justify-center aspect-square text-$colorTemperature-500 hover:text-$accentColor-500 disabled:hover:text-inherit disabled:opacity-25 disabled:!text-$colorTemperature-500 dark:text-$colorTemperature-300 dark:disabled:!text-$colorTemperature-300 dark:hover:text-$accentColor-400",
      insertControl:
        "w-[1.5em] h-[1.5em] my-$spacing(-2) flex items-center appearance-none justify-center aspect-square text-$colorTemperature-500 hover:text-$accentColor-500 disabled:hover:text-inherit disabled:opacity-25 disabled:!text-$colorTemperature-500 dark:text-$colorTemperature-300 dark:disabled:!text-$colorTemperature-300 dark:hover:text-$accentColor-400",
      help: "mb-$spacing -mt-1",
      item: "flex w-full mb-$spacing bg-transparent rounded border border-$colorTemperature-$borderShadeLightMode(-1,200,600) overflow-clip $radius(0,rounded-none,rounded-2xl) $inputShadow [&_.formkit-outer_.formkit-inner]:!shadow-none dark:border-$colorTemperature-$borderShadeDarkMode(1,300,700)",
      moveDownIcon: "block w-[0.75em] aspect-square",
      moveUpIcon: "block w-[0.75em] aspect-square",
      removeIcon: "block w-[1.25em] aspect-square",
      addIcon: "block w-[1.25em] aspect-square",
    },
    slider: {
      outer: "data-[disabled]:pointer-events-none",
      help: "-mt-0.5 mb-$spacing(-2)",
      sliderInner:
        'flex items-center [&>.formkit-maxValue]:mb-0 [&>.formkit-maxValue]:ml-$spacing(2) [&>.formkit-maxValue]:shrink [&>.formkit-maxValue]:grow-0 [&>.formkit-icon]:bg-none [&>.formkit-icon]:border-none [&>.formkit-icon]:p-0 [&[data-has-mark-labels="true"]_.formkit-track]:mb-$spacing(5,3,6)',
      track: "grow relative z-20 py-$spacing(1) select-none",
      trackWrapper:
        "px-[2px] rounded-full bg-$colorTemperature-300 dark:bg-$colorTemperature-500",
      trackInner: "h-$spacing(-1,1,1.5) mx-0.5 relative",
      fill: "h-full rounded-full absolute top-0 -mx-1 bg-$accentColor-500 group-data-[disabled]:bg-$colorTemperature-500",
      marks: "absolute pointer-events-none inset-0",
      mark: 'absolute top-1/2 w-[3px] h-[3px] rounded-full -translate-x-1/2 -translate-y-1/2 bg-$colorTemperature-400 data-[active="true"]:bg-white',
      markLabel:
        "absolute top-[calc(100%+0.5em)] left-1/2 text-$colorTemperature-400 text-xs -translate-x-1/2",
      handles: "m-0 p-0 list-none",
      handle:
        'group select-none w-4 h-4 rounded-full bg-white absolute top-1/2 left-0 z-30 -translate-x-1/2 -translate-y-1/2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.5)] focus-visible:outline-0 focus-visible:ring-2 ring-$accentColor-500 data-[is-target="true"]:z-20 dark:bg-$colorTemperature-200',
      tooltip:
        'absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-[4px] bg-$accentColor-500 text-white py-$spacing(-2,1,3) px-$spacing(-1,1,3) text-xs leading-none whitespace-nowrap $radius(0,rounded-none,rounded) opacity-0 pointer-events-none transition-opacity after:content-[""] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:-translate-y-[1px] after:border-4 after:border-transparent after:border-t-$accentColor-500 group-hover:opacity-100 group-focus-visible:opacity-100 group-data-[show-tooltip="true"]:opacity-100',
      linkedValues: "flex items-start justify-between",
      minValue:
        'grow max-w-[45%] mb-0 relative [&_.formkit-inner::after]:content-[""] [&_.formkit-inner::after]:absolute [&_.formkit-inner::after]:left-[105%] [&_.formkit-inner::after]:-translate-y-1/2 [&_.formkit-inner::after]:w-[10%] [&_.formkit-inner::after]:h-[1px] [&_.formkit-inner::after]:bg-$colorTemperature-500',
      maxValue: "grow max-w-[45%] mb-0 relative",
      chart:
        "relative z-20 mb-2 flex justify-between items-center w-full aspect-[3/1]",
      chartBar:
        'absolute bottom-0 h-full bg-$colorTemperature-400 data-[active="false"]:bg-$colorTemperature-300 dark:bg-$colorTemperature-500 dark:data-[active="false"]:bg-$colorTemperature-600',
    },
    taglist: {
      // inherits family:dropdown classes
      inner: "py-$spacing pr-0 pl-0 $radius(0,rounded-none,rounded-2xl)",
      tags: "px-$spacing",
      input: "!p-0 !w-[0%] min-w-[1em] inline-block mb-$spacing(-2)",
      listboxButton: "ml-auto shrink-0",
    },
    toggle: {
      outer: "max-w-none",
      altLabel:
        "block w-full mb-$spacing(-1) font-bold text-$scale(-2,*) text-$colorTemperature-700 dark:text-$colorTemperature-300",
      inner: "inline-block mr-$spacing",
      input: "peer absolute opacity-0 w-0 h-0",
      innerLabel:
        "absolute text-$colorTemperature-200 text-[10px] font-bold select-none left-full top-1/2 -translate-x-full -translate-y-1/2 px-1",
      thumb:
        "relative p-0.5 left-0 aspect-square rounded-full transition-all w-[1.25em] bg-$colorTemperature-50 text-$colorTemperature-600 shadow-base",
      track:
        "p-0.5 min-w-[3em] relative cursor-pointer select-none rounded-full transition-all bg-$colorTemperature-400 peer-checked:bg-$accentColor-500 peer-checked:[&>div:last-child]:left-full peer-checked:[&>div:last-child]:-translate-x-full peer-checked:[&>div:first-child:not(:last-child)]:left-0 peer-checked:[&>div:first-child:not(:last-child)]:translate-x-0 $inputShadow(-1,*) peer-focus-visible:ring-2 peer-focus-visible:ring-$accentColor-400 peer-focus-visible:ring-offset-2 dark:bg-$colorTemperature-500",
      valueLabel:
        "font-bold text-$scale(-2,*) text-$colorTemperature-700 dark:text-$colorTemperature-300",
      wrapper: "flex flex-wrap items-center mb-$spacing(-2)",
    },
    transferlist: {
      outer:
        "max-w-none [&_.dnd-placeholder]:bg-$accentColor-500 [&_.dnd-placeholder]:text-white",
      wrapper: "flex flex-col sm:flex-row justify-between w-full max-w-none",
      help: "pb-$spacing",
      transferlist:
        "grow shrink min-w-0 $inputShadow aspect-[4/5] flex flex-col min-h-[350px] border border-$colorTemperature-$borderShadeLightMode(-1,200,900) $radius(0,rounded-none,rounded-2xl) overflow-hidden select-none dark:border-$colorTemperature-$borderShadeDarkMode(1,100,800) dark:bg-$colorTemperature-900/50",
      transferlistHeader:
        "flex bg-$colorTemperature-100 text-$colorTemperature-600 text-$scale(-1,*) justify-between items-center border-b border-$colorTemperature-$borderShadeLightMode(-1,200,900) py-$spacing px-$spacing(1) dark:bg-$colorTemperature-700 dark:border-$colorTemperature-$borderShadeDarkMode(1,100,800) dark:text-$colorTemperature-400",
      transferlistHeaderItemCount:
        "ml-auto text-xs min-w-[1.5em] [line-height:1.5em] px-$spacing text-center $radius(2) bg-$colorTemperature-200 text-$colorTemperature-700 dark:bg-$colorTemperature-500 dark:text-$colorTemperature-300",
      transferlistListItems:
        "list-none bg-white h-full overflow-x-hidden overflow-y-auto dark:bg-transparent",
      transferlistListItem: `py-$spacing px-$spacing pl-[1.5em] relative text-$colorTemperature-700 aria-selected:!bg-$accentColor-600 border-$colorTemperature-$borderShadeLightMode(-2,200,400) aria-selected:!text-white first:-mt-px first:border-t flex border-b aria-selected:border-$accentColor-$borderShadeLightMode(-2,400,600) bg-white data-[is-active=true]:text-$accentColor-500 data-[is-active=true]:bg-$colorTemperature-100 cursor-pointer group-data-[is-max=true]:cursor-not-allowed items-center 
      
      dark:bg-$colorTemperature-800 dark:text-$colorTemperature-300 dark:border-$colorTemperature-$borderShadeDarkMode(2,400,600) dark:aria-selected:border-$accentColor-400`,
      transferlistOption: "text-$scale(-1,*)",
      transferControls:
        "inline-flex grow-0 shrink border border-$colorTemperature-$borderShadeLightMode(-1,200,900) flex-row sm:flex-col justify-center my-$spacing sm:my-auto mx-auto sm:mx-$spacing $radius overflow-clip $inputShadow(-2) dark:border-$colorTemperature-$borderShadeDarkMode(3,100,800)",
      sourceEmptyMessage:
        "appearance-none border-none w-full my-$spacing text-center text-$colorTemperature-500 italic",
      sourceListItems: "group-data-[is-max=true]:opacity-50",
      targetEmptyMessage:
        "appearance-none border-none w-full my-$spacing text-center text-$colorTemperature-500 italic",
      emptyMessageInner: "flex items-center justify-center p-$spacing text-sm",
      transferlistControls:
        "bg-white p-$spacing border-b border-$colorTemperature-$borderShadeLightMode(-2,200,900) dark:bg-$colorTemperature-700 dark:border-$colorTemperature-$borderShadeDarkMode(2,100,700)",
      transferlistSearch:
        "flex border border-$colorTemperature-$borderShadeLightMode(-1,200,900) $radius items-center text-$colorTemperature-700 selection:bg-$accentColor-100 dark:bg-$colorTemperature-700 dark:border-$colorTemperature-$borderShadeDarkMode(1,100,800) dark:text-$colorTemperature-300 dark:selection:bg-$accentColor-100 dark:selection:text-$colorTemperature-700 dark:bg-$colorTemperature-800",
      transferlistSearchInput:
        "border-none px-$spacing py-$spacing(-1) w-full bg-transparent outline-none text-$scale(-1,*)",
      controlLabel: "hidden",
      selectedIcon: "w-[0.75em] absolute left-[0.5em] select-none",
      transferlistButton: `
        sm:w-5 flex justify-center text-$scale(-2) shrink-0 box-content text-$colorTemperature-700 disabled:bg-$colorTemperature-200 disabled:!text-$colorTemperature-400 bg-$colorTemperature-50 hover:text-$accentColor-500 cursor-pointer appearance-none border-none p-$spacing(2) hover:z-10 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:text-current disabled:hover:outline-none

        dark:bg-$colorTemperature-800 dark:text-$colorTemperature-400 dark:hover:text-$accentColor-400 dark:disabled:!text-$colorTemperature-600 dark:disabled:bg-$colorTemperature-900 dark:disabled:hover:text-current dark:disabled:hover:outline-none dark:hover:text-$accentColor-400
      `,
      fastForwardIcon:
        "w-4 flex select-none [&>svg]:m-auto [&>svg]:w-full [&>svg]:max-w-[1rem] [&>svg]:max-h-[1rem] rotate-90 sm:rotate-0",
      moveRightIcon:
        "w-4 flex select-none [&>svg]:m-auto [&>svg]:w-full [&>svg]:max-w-[1rem] [&>svg]:max-h-[1rem] rotate-90 sm:rotate-0",
      moveLeftIcon:
        "w-4 flex select-none [&>svg]:m-auto [&>svg]:w-full [&>svg]:max-w-[1rem] [&>svg]:max-h-[1rem] rotate-90 sm:rotate-0",
      rewindIcon:
        "w-4 flex select-none [&>svg]:m-auto [&>svg]:w-full [&>svg]:max-w-[1rem] [&>svg]:max-h-[1rem] rotate-90 sm:rotate-0",
    },
  },
});
