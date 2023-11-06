export default {
  outer: `
    data-[disabled]:opacity-100
  `,
  input: `
    ${"" /* base styles */}
    font-bold
    bg-$accentColor-$baseColorShade
    $radius
    !text-$scale(-1,*)
    px-$spacing(7,*)
    py-$spacing(2,3,10)
    outline-none
    flex
    items-center
    mb-$spacing(-1)
    text-white
    text-$scale(-1,*)
    active:text-$accentColor-100
    active:bg-$accentColor-$baseColorShade(1,*)
    hover:bg-$accentColor-$baseColorShade(1,*)
    ring-offset-2
    ring-$accentColor-$baseColorShade(-1,*)
    focus-visible:ring-2
    disabled:border-$colorTemperature-$borderShadeLightMode
    disabled:bg-$colorTemperature-400
    disabled:text-$colorTemperature-100
    group-data-[disabled]:!cursor-not-allowed
    $inputShadow
    group-data-[prefix-icon]:pl-$spacing(5,*)
    group-data-[suffix-icon]:pr-$spacing(5,*)

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
