export default {
  // color, date, datetime-local, email, file, month, number, password, search, tel, text, time, url, week
  wrapper: `
    flex
    flex-col
    items-start
    justify-start
    mb-$spacing(-1,0.5,2)
    last:mb-0
  `,
  label: `
    !inline-flex
    mb-$spacing(-2,1,1.5)
  `,
  inner: `
    ${"" /* base styles */}
    text-$scale
    flex
    items-center
    w-full
    py-$spacing
    px-$spacing(2,2,4)
    $radius
    border
    border-$colorTemperature-$borderShadeLightMode
    bg-white
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

    ${"" /* dark mode styles */}
    dark:bg-transparent
    dark:border-$colorTemperature-$borderShadeDarkMode
    dark:group-data-[disabled]:bg-$colorTemperature-800/5
    dark:group-data-[invalid]:border-red-$baseColorShade(-1,*)
    dark:group-data-[invalid]:ring-red-$baseColorShade(-1,*)
  `,
  input: `
    ${"" /* base styles */}
    text-$scale
    text-$colorTemperature-700
    min-w-0
    min-h-[1.5em] ${"" /* fix for iOS which collapses empty date-style inputs (date, month, week, etc) */}
    grow
    outline-none
    bg-transparent
    selection:bg-$accentColor-100
    placeholder:text-$colorTemperature-400
    group-data-[disabled]:!cursor-not-allowed

    ${"" /* dark mode styles */}
    dark:placeholder-$colorTemperature-400/50
    dark:text-$colorTemperature-300

    ${"" /* Tailwind Forms overrides */}
    border-none
    p-0
    focus:ring-0
  `,
  prefixIcon: `
    text-$colorTemperature-600
    dark:text-$colorTemperature-300
  `,
  suffixIcon: `
    text-$colorTemperature-600
    dark:text-$colorTemperature-300
  `,
};
