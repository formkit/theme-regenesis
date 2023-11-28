export default {
  inner: `
    flex
    items-center
    mb-$spacing(-1)
    bg-white
    border
    border-$colorTemperature-$borderShadeLightMode
    $radius(0,rounded-none,rounded-2xl)
    focus-within:ring-1
    focus-within:!ring-$accentColor-$baseColorShade(-1,*)
    focus-within:!border-$accentColor-$baseColorShade(-1,*)
    group-data-[invalid]:border-red-$baseColorShade(-1,*)
    group-data-[invalid]:ring-1
    group-data-[invalid]:ring-red-$baseColorShade(-1,*)
    group-data-[disabled]:bg-$colorTemperature-100
    $inputShadow
    group-[]/repeater:shadow-none
    group-[]/multistep:shadow-none
    dark:border-$colorTemperature-$borderShadeDarkMode
    dark:group-data-[disabled]:bg-$colorTemperature-800/5
    dark:group-data-[invalid]:border-red-$baseColorShade(-1,*)
    dark:group-data-[invalid]:ring-red-$baseColorShade(-1,*)
    dark:bg-transparent
  `,
  input: `
    ${"" /* base styles */}
    text-$scale
    h-$spacing(16,*)
    text-$colorTemperature-700
    min-w-0
    grow
    shrink
    !py-$spacing
    !px-$spacing(2,2,4)
    outline-none
    bg-transparent
    selection:bg-$accentColor-100
    placeholder:text-$colorTemperature-400
    group-data-[disabled]:!cursor-not-allowed

    ${"" /* dark mode styles */}
    dark:placeholder-$colorTemperature-400/50
    dark:text-$colorTemperature-300

    ${"" /* Tailwind Forms overrides */}
    p-0
    border-none
    focus:ring-0
  `,
  prefixIcon:
    "!ml-$spacing !mr-0 text-$colorTemperature-600 dark:text-$colorTemperature-300",
  suffixIcon:
    "!mr-$spacing !ml-0 text-$colorTemperature-600 dark:text-$colorTemperature-300",
};
