export default {
  // inherits family:text classes
  inner: `
    ${"" /* base styles */}
    !w-auto
    !p-$spacing(-2)
    !inline-flex
    group-data-[prefix-icon]:border
    group-data-[prefix-icon]:border-$colorTemperature-$borderShadeLightMode
    group-data-[suffix-icon]:border
    group-data-[suffix-icon]:border-$colorTemperature-$borderShadeLightMode

    ${"" /* dark mode styles */}
    dark:group-data-[prefix-icon]:border-$colorTemperature-$borderShadeDarkMode
    dark:group-data-[suffix-icon]:border-$colorTemperature-$borderShadeDarkMode
  `,
  input: `
    !w-14
    bg-transparent
    cursor-pointer
    $radius
    overflow-clip
    [&::-webkit-color-swatch-wrapper]:p-0
    [&::-webkit-color-swatch]:border-none
    [&::-moz-color-swatch]:border-none
    group-data-[prefix-icon]:mx-$spacing
    group-data-[suffix-icon]:mx-$spacing
  `,
  prefixIcon: `
    group-data-[prefix-icon]:m-$spacing(-2)
    group-data-[prefix-icon]:mr-0
  `,
  suffixIcon: `
    group-data-[suffix-icon]:m-$spacing(-2)
    group-data-[prefix-icon]:ml-0
  `,
};
