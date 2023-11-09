export default {
  outer: `
    data-[disabled]:opacity-100
  `,
  input: `
    ${"" /* base styles */}
    bg-$accentColor-$baseColorShade
    text-white
    active:text-$accentColor-100
    active:bg-$accentColor-$baseColorShade(1,*)
    hover:bg-$accentColor-$baseColorShade(1,*)
    disabled:border-$colorTemperature-$borderShadeLightMode
    disabled:bg-$colorTemperature-400
    disabled:text-$colorTemperature-100
    group-data-[disabled]:!cursor-not-allowed

    ${"" /* dark mode styles */}
    dark:disabled:border-$colorTemperature-100
    dark:disabled:bg-$colorTemperature-500
    dark:disabled:text-$colorTemperature-200
    dark:ring-offset-$accentColor-$baseColorShade(-1,*)
  `,
  prefixIcon: `
    text-$colorTemperature-100
  `,
  suffixIcon: `
    text-$colorTemperature-100
  `,
};
