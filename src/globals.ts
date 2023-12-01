export default {
  outer: `
    group
    $inputMaxWidth
    min-w-0
    grow
    mb-$spacing(4,0.5,4)
    data-[disabled]:select-none
    data-[disabled]:opacity-50
    text-$scale`,
  label: `
    block
    text-$colorTemperature-700
    text-$scale(-1,*)
    font-bold
    mb-$spacing(-2,0.5,1.5)
    dark:text-$colorTemperature-300`,
  legend: `
    block
    text-$colorTemperature-700
    text-$scale(-1,*)
    font-bold
    dark:text-$colorTemperature-300`,
  input: `
    appearance-none
    [color-scheme:light]
    dark:[color-scheme:dark]
    selection:bg-$accentColor-100
    selection:text-$colorTemperature-700
    group-data-[has-overlay]:selection:!text-transparent`,
  prefixIcon: `
    flex
    items-center
    -ml-$spacing(-2,0,1)
    mr-$spacing
    text-$scale
    h-[1em]
    w-[1em]
    shrink-0
    [&>svg]:w-full`,
  suffixIcon: `
    flex
    items-center
    -mr-$spacing(-2,0,1.5)
    ml-$spacing
    text-$scale
    h-[1em]
    w-[1em]
    shrink-0
    [&>svg]:w-full`,
  loaderIcon: `
    animate-spin
    flex
    items-center
    my-auto
    ml-$spacing
    text-$scale
    text-$colorTemperature-500
    h-[1em]
    w-[1em]
    shrink-0
    [&>svg]:w-full`,
  loadMoreInner: `
    flex
    text-$scale(-1,*)
    text-$colorTemperature-500
    p-$spacing
    items-center
    justify-center
    [&>span]:mr-$spacing`,
  help: `
    text-$colorTemperature-500
    text-$scale(-2,*)
    dark:text-$colorTemperature-400`,
  message: `
    text-red-$baseColorShade
    mb-$spacing(-1)
    text-$scale(-2,*)
    dark:text-red-400`,
  overlay: `
    text-$colorTemperature-700
    dark:text-$colorTemperature-300`,
  overlayPlaceholder: `
    text-$colorTemperature-400
    dark:text-$colorTemperature-400/50`,
  overlayLiteral: `
    text-$colorTemperature-700
    dark:text-$colorTemperature-300`,
  overlayChar: `
    text-$colorTemperature-700
    dark:text-$colorTemperature-300`,
  overlayEnum: `
    text-$colorTemperature-700
    dark:text-$colorTemperature-300`,
};
