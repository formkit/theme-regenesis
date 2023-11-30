import { createTheme } from "@formkit/theme-creator";
import globals from "./globals";
// Core input imports
import familyButton from "./families/button";
import familyBox from "./families/box";
import familyText from "./families/text";
import button from "./inputs/button";
import checkbox from "./inputs/checkbox";
import color from "./inputs/color";
import date from "./inputs/date";
import datetimeLocal from "./inputs/datetime-local";
import email from "./inputs/email";
import file from "./inputs/file";
import form from "./inputs/form";
import month from "./inputs/month";
import number from "./inputs/number";
import password from "./inputs/password";
import radio from "./inputs/radio";
import range from "./inputs/range";
import search from "./inputs/search";
import select from "./inputs/select";
import submit from "./inputs/submit";
import tel from "./inputs/tel";
import text from "./inputs/text";
import textarea from "./inputs/textarea";
import time from "./inputs/time";
import url from "./inputs/url";
import week from "./inputs/week";
// Pro input imports
import familyDropdown from "./families/dropdown";
import autocomplete from "./inputs/pro/autocomplete";
import colorpicker from "./inputs/pro/colorpicker";
import datepicker from "./inputs/pro/datepicker";
import dropdown from "./inputs/pro/dropdown";
import mask from "./inputs/pro/mask";
import rating from "./inputs/pro/rating";
import repeater from "./inputs/pro/repeater";
import slider from "./inputs/pro/slider";
import taglist from "./inputs/pro/taglist";
import toggle from "./inputs/pro/toggle";
import togglebuttons from "./inputs/pro/togglebuttons";
import transferlist from "./inputs/pro/transferlist";
// Addon input imports
import barcode from "./inputs/addon/barcode";
import { multiStep, step } from "./inputs/addon/multi-step";

export default createTheme({
  meta: {
    name: "Regenesis",
    description: "The official Regenesis theme from FormKit.",
    formKitVersion: "^1.0.0",
    authorName: "FormKit Inc",
    authorWebsite: "https://formkit.com",
    supportedInputs: [
      // Core inputs
      "button",
      "checkbox",
      "color",
      "date",
      "datetime-local",
      "email",
      "file",
      "month",
      "number",
      "password",
      "radio",
      "range",
      "search",
      "select",
      "submit",
      "tel",
      "text",
      "textarea",
      "time",
      "url",
      "week",
      // Pro inputs
      "autocomplete",
      "colorpicker",
      "datepicker",
      "dropdown",
      "mask",
      "rating",
      "repeater",
      "slider",
      "taglist",
      "toggle",
      "togglebuttons",
      "transferlist",
      // Addon inputs
      "barcode",
      "multi-step",
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
      value: "neutral",
      scale: ["slate", "gray", "zinc", "neutral", "stone"],
    },
    spacing: {
      editor: "spacing",
      value: "2",
      min: "1.5",
      max: "2.5",
    },
    scale: {
      editor: "fontSize",
      value: "base",
      scale: [
        "[11px] [line-height:1em]",
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
        "2xl",
      ],
      min: "sm",
      max: "lg",
    },
    inputShadow: {
      editor: "shadow",
      value: "shadow",
      min: "shadow-none",
      max: "shadow-lg",
    },
    baseColorShade: {
      advanced: true,
      editor: "buttons",
      value: "600",
      scale: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      min: "500",
      max: "600",
    },
    borderShadeLightMode: {
      advanced: true,
      editor: "buttons",
      value: "400",
      scale: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      min: "100",
      max: "700",
    },
    borderShadeDarkMode: {
      advanced: true,
      editor: "buttons",
      value: "500",
      scale: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      min: "200",
      max: "800",
    },
    inputMaxWidth: {
      advanced: true,
      editor: "select",
      value: "max-w-[20em]",
      scale: [
        "max-w-[15em]",
        "max-w-[17em]",
        "max-w-[20em]",
        "max-w-[24em]",
        "max-w-none",
      ],
    },
    tagRadius: {
      advanced: true,
      editor: "radius",
      value: "rounded",
      scale: ["rounded-none", "rounded", "rounded-full"],
    },
    swatchRadius: {
      advanced: true,
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
    __globals: globals,

    /**
     * === Core family groupings ===
     * These class lists apply to all inputs that are part of the matching family.
     * There is a comment in each input class list that indicates which family it belongs to.
     */
    "family:button": familyButton,
    "family:box": familyBox,
    "family:text": familyText,
    "family:dropdown": familyDropdown,

    /**
     * === Core Inputs ===
     * These are the core inputs that ship with the open-source version of FormKit.
     */
    button: button,
    checkbox: checkbox,
    color: color,
    date: date,
    email: email,
    "datetime-local": datetimeLocal,
    file: file,
    form: form,
    month: month,
    number: number,
    password: password,
    radio: radio,
    range: range,
    search: search,
    select: select,
    submit: submit,
    tel: tel,
    text: text,
    textarea: textarea,
    time: time,
    url: url,
    week: week,

    /**
     * === Pro Inputs ===
     * These are the Pro inputs that ship with @formkit/pro.
     */
    autocomplete: autocomplete,
    colorpicker: colorpicker,
    datepicker: datepicker,
    dropdown: dropdown,
    mask: mask,
    rating: rating,
    repeater: repeater,
    slider: slider,
    taglist: taglist,
    toggle: toggle,
    togglebuttons: togglebuttons,
    transferlist: transferlist,

    /**
     * === Addon Inputs ===
     * These are additional optional add-on inputs for FormKit
     * that are supported by our theme.
     */
    barcode: barcode,
    "multi-step": multiStep,
    step: step,
  },
});
