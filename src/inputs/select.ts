export default {
  wrapper: "mb-$spacing(-1)",
  inner: `
    ${"" /* base styles */}
    relative
    flex
    items-center
    bg-white
    border
    border-$colorTemperature-$borderShadeLightMode
    $radius
    focus-within:ring-1
    focus-within:!ring-$accentColor-$baseColorShade(-1,*)
    focus-within:!border-$accentColor-$baseColorShade(-1,*)
    group-data-[invalid]:border-red-$baseColorShade(-1,*)
    group-data-[invalid]:ring-1
    group-data-[invalid]:ring-red-$baseColorShade(-1,*)
    group-data-[disabled]:bg-$colorTemperature-100
    group-data-[disabled]:!cursor-not-allowed
    $inputShadow
    group-[]/repeater:shadow-none
    group-[]/multistep:shadow-none
    group-data-[multiple]:$radius(0,rounded-none,rounded-2xl)

    ${"" /* dark mode styles */}
    dark:bg-transparent
    dark:border-$colorTemperature-$borderShadeDarkMode
    dark:group-data-[disabled]:bg-$colorTemperature-800/5
    dark:group-data-[invalid]:border-red-$baseColorShade(-1,*)
    dark:group-data-[invalid]:ring-red-$baseColorShade(-1,*)
  `,
  input: `
    ${"" /* base styles */}
    grow
    p-$spacing
    py-$spacing
    px-$spacing(2,2,4)
    pr-[2em]
    text-$scale
    text-$colorTemperature-700
    text-ellipsis
    min-w-0
    outline-none
    bg-transparent
    group-data-[disabled]:!cursor-not-allowed
    group-data-[prefix-icon]:!pl-0
    group-data-[suffix-icon]:!pr-0
    data-[placeholder]:text-$colorTemperature-400
    group-data-[multiple]:!p-0
    selection:bg-$accentColor-100

    ${"" /* dark mode styles */}
    dark:data-[placeholder]:text-$colorTemperature-400/50
    dark:text-$colorTemperature-300

    ${"" /* Tailwind Forms overrides */}
    border-none
    focus:ring-0
    bg-none
  `,
  selectIcon:
    "absolute w-[1em] text-$colorTemperature-700 pointer-events-none right-$spacing group-data-[suffix-icon]:mr-[1.5em] dark:text-$colorTemperature-300",
  optGroup: `
    bg-white
    text-$colorTemperature-700
    group/optgroup 
    group-data-[multiple]:px-$spacing(-2) 
    pt-$spacing(-2) 
    font-bold 
    text-$scale(-1,*)

    dark:bg-$colorTemperature-800
    dark:text-$colorTemperature-300
  `,
  option: `
    ${"" /* base styles */}
    bg-white
    text-$colorTemperature-700
    group-data-[disabled]:opacity-50
    group-data-[disabled]:select-none
    group-data-[multiple]:checked:bg-$accentColor-100
    group-data-[multiple]:focus:bg-$accentColor-100
    group-data-[multiple]:text-$scale(-1,*)
    group-data-[multiple]:outline-none
    group-data-[multiple]:border-none
    group-data-[multiple]:py-$spacing(-1)
    group-data-[multiple]:px-$spacing

    ${"" /* dark mode styles */}
    dark:bg-$colorTemperature-800
    dark:text-$colorTemperature-300
    dark:group-data-[multiple]:focus:bg-$accentColor-$baseColorShade(2,*)
    dark:group-data-[multiple]:checked:bg-$accentColor-$baseColorShade(2,*)
  `,
  prefixIcon:
    "ml-$spacing text-$colorTemperature-600 dark:text-$colorTemperature-300",
  suffixIcon:
    "mr-$spacing text-$colorTemperature-600 dark:text-$colorTemperature-300",
};
