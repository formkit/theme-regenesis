export default {
  outer: `
    max-w-none
  `,
  altLabel: `
    block
    w-full
    mb-$spacing(-1)
    font-bold
    text-$scale(-2,*)
    text-$colorTemperature-700
    dark:text-$colorTemperature-300
  `,
  inner: `
    peer
    inline-block
    mr-$spacing
  `,
  input: `
    peer
    absolute
    opacity-0
    w-0
    h-0
  `,
  label: `
    peer-first:font-normal
    peer-first:mb-0
  `,
  innerLabel: `
    absolute
    text-$colorTemperature-200
    text-[10px]
    font-bold
    select-none
    left-full
    top-1/2
    -translate-x-full
    -translate-y-1/2
    px-1
  `,
  thumb: `
    relative
    p-0.5
    left-0
    aspect-[1/1]
    rounded-full
    transition-all
    w-[1.25em]
    bg-$colorTemperature-50
    text-$colorTemperature-600
    shadow-base
  `,
  track: `
    p-0.5
    min-w-[3em]
    relative
    cursor-pointer
    select-none
    rounded-full
    transition-all
    bg-$colorTemperature-400
    peer-checked:bg-$accentColor-$baseColorShade
    peer-checked:[&>div:last-child]:left-full
    peer-checked:[&>div:last-child]:-translate-x-full
    peer-checked:[&>div:first-child:not(:last-child)]:left-0
    peer-checked:[&>div:first-child:not(:last-child)]:translate-x-0
    $inputShadow(-1,*)
    peer-focus-visible:ring-2
    peer-focus-visible:ring-$accentColor-$baseColorShade(-1,*)
    peer-focus-visible:ring-offset-2
    dark:bg-$colorTemperature-500
  `,
  valueLabel: `
    font-bold
    text-$scale(-2,*)
    text-$colorTemperature-700
    dark:text-$colorTemperature-300
  `,
  wrapper: `
    flex
    flex-wrap
    items-center
    mb-$spacing(-2)
  `,
};
