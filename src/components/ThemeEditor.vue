<script setup lang="ts">
import { ref, computed, watch, inject, onMounted } from "vue";
import type { InputMap } from "@formkit/theme-creator";
import type { FormKitConfig, FormKitNode } from "@formkit/core";
import theme from "../theme";

const spacingScale = ["1", "1.5", "2", "2.5"];
const spacingValue = ref(2);
const textSizeScale = ["sm", "base", "lg"];
const textSizeValue = ref(1);
const colorScale = [
  "red",
  "orange",
  "yellow",
  "green",
  "emerald",
  "blue",
  "indigo",
  "violet",
];
const colorValue = ref(5);
const textColorScale = ["slate", "gray", "zinc", "neutral", "stone"];
const textColorValue = ref(0);
const shadowScale = [
  "shadow-none",
  "shadow",
  "shadow-sm",
  "shadow-md",
  "shadow-lg",
];
const shadowValue = ref(1);
const radiusScale = [
  "rounded-none",
  "rounded",
  "rounded-md",
  "rounded-lg",
  "rounded-full",
];
const radiusValue = ref(1);

const variables = computed(() => ({
  spacing: spacingScale[spacingValue.value],
  textSize: textSizeScale[textSizeValue.value],
  primaryColor: colorScale[colorValue.value],
  textColor: textColorScale[textColorValue.value],
  inputShadow: shadowScale[shadowValue.value],
  borderRadius: radiusScale[radiusValue.value],
}));

const darkMode = ref(false);

function toRootClasses(classes: InputMap): FormKitConfig["rootClasses"] {
  return (section: string, node: FormKitNode) => {
    const inputClasses = classes[node.props.type];
    const globalClasses = classes.__globals ?? {};
    const familyClasses = classes[`family:${node.props.family}`]
      ? classes[`family:${node.props.family}`][section]
      : "";
    let sectionClasses =
      inputClasses && section in inputClasses
        ? inputClasses[section]
        : globalClasses[section];

    sectionClasses = `formkit-${section}${
      familyClasses ? ` ${familyClasses}` : ""
    }${sectionClasses ? ` ${sectionClasses}` : ""}`;

    if (sectionClasses) {
      return sectionClasses.split(" ").reduce(
        (acc, className) => {
          acc[className] = true;
          return acc;
        },
        {} as Record<string, boolean>,
      );
    }
    return {};
  };
}

const config = inject<FormKitConfig>(Symbol.for("FormKitConfig"));
watch(
  () => variables,
  () => {
    const classes = theme(variables.value).tailwind();
    if (config) {
      config.rootClasses = toRootClasses(classes);
    }
  },
  { immediate: true, deep: true },
);

watch(darkMode, () => {
  if (darkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
});

onMounted(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    darkMode.value = true;
  } else {
    document.documentElement.classList.remove("dark");
    darkMode.value = false;
  }
});
</script>

<template>
  <div class="theme-editor-panel">
    <div class="dark-mode-toggle">
      <input type="checkbox" id="dark-mode-toggle" v-model="darkMode" />
      <label for="dark-mode-toggle" class="dark-mode-toggle__label">
        <span class="dark-mode-toggle__text">Dark Mode</span>
        <span class="dark-mode-toggle__icon"></span>
      </label>

      <div class="controls">
        <div class="slider">
          <label for="color">Color</label>
          <input type="range" id="color" min="0" max="7" v-model="colorValue" />
          <span class="slider__value">{{ variables.primaryColor }}</span>
        </div>
        <div class="slider">
          <label for="text-color">Text Color</label>
          <input
            type="range"
            id="text-color"
            min="0"
            max="4"
            v-model="textColorValue"
          />
          <span class="slider__value">{{ variables.textColor }}</span>
        </div>
        <div class="slider">
          <label for="spacing">Spacing</label>
          <input
            type="range"
            id="spacing"
            min="0"
            max="3"
            v-model="spacingValue"
          />
          <span class="slider__value">{{ variables.spacing }}</span>
        </div>
        <div class="slider">
          <label for="text-size">Text Size</label>
          <input
            type="range"
            id="text-size"
            min="0"
            max="2"
            v-model="textSizeValue"
          />
          <span class="slider__value">{{ variables.textSize }}</span>
        </div>
        <div class="slider">
          <label for="radius">Radius</label>
          <input
            type="range"
            id="radius"
            min="0"
            max="4"
            v-model="radiusValue"
          />
          <span class="slider__value">{{ variables.borderRadius }}</span>
        </div>
        <div class="slider">
          <label for="shadow">Shadow</label>
          <input
            type="range"
            id="shadow"
            min="0"
            max="4"
            v-model="shadowValue"
          />
          <span class="slider__value">{{ variables.inputShadow }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.theme-editor-panel {
  position: fixed;
  top: 1em;
  right: 1em;
  color: #333;
  width: 340px;
}
html.dark .theme-editor-panel {
  color: #fff;
}
.theme-editor-panel .dark-mode-toggle {
  font-size: 0.85em;
}
.theme-editor-panel .dark-mode-toggle input {
  margin-right: 0.5em;
}
.theme-editor-panel label,
.theme-editor-panel .slider__value {
  display: inline-block;
  width: 100px;
}
</style>
