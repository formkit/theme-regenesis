export default {
  // checkbox, radio
  wrapper: `
    inline-flex items-center
    mb-$spacing(-2,*)
    group-data-[multiple]:mb-0
  `,
  legend: `
    mb-$spacing(0,1,2.5)
  `,
  input: `
    peer pointer-events-none
    absolute h-0 w-0
    overflow-hidden
    opacity-0
  `,
  decorator: `
    ${"" /* base styles */}
    mr-$spacing(-1,1.5,2.5)
    bg-white
    ring-$accentColor-$baseColorShade(-1,*)
    peer-checked:border-$accentColor-$baseColorShade
    relative
    block
    text-$scale(1,*)
    w-[1em]
    aspect-[1/1]
    border
    border-$colorTemperature-$borderShadeLightMode
    text-transparent
    peer-checked:bg-$accentColor-50
    peer-checked:text-$accentColor-$baseColorShade
    peer-focus-visible:ring-2
    peer-focus-visible:ring-offset-1
    select-none
    group-data-[disabled]:!cursor-not-allowed
    peer-disabled:bg-$colorTemperature-100
    group-data-[disabled]:grayscale
    $inputShadow
    peer-disabled:cursor-not-allowed
    group-[]/repeater:shadow-none
    group-[]/multistep:shadow-none

    ${"" /* dark mode styles */}
    dark:border-$colorTemperature-$borderShadeDarkMode
    dark:bg-transparent
    dark:ring-offset-$accentColor-$baseColorShade(-1,*)
    dark:peer-focus-visible:ring-1
    dark:peer-disabled:bg-$colorTemperature-600/50
    dark:peer-checked:bg-$accentColor-$baseColorShade(3,*)
    dark:peer-checked:text-$accentColor-$baseColorShade(-2,*)
  `,
  decoratorIcon: `
    absolute
    left-1/2
    top-1/2
    flex
    h-full
    w-full
    -translate-x-1/2
    -translate-y-1/2
  `,
  option: `
    mb-$spacing(-1,0.5,1.5)
    last:mb-0
    data-[disabled]:opacity-50
    data-[disabled]:select-none
    group-data-[disabled]:data-[disabled]:opacity-100
  `,
  label: `
    ${"" /* base styles */}
    !mb-0
    !font-normal
    !text-$scale(-1,sm,lg)

    ${"" /* dark mode styles */}
    dark:text-$colorTemperature-300
  `,
  optionHelp: `
    text-$colorTemperature-500
    text-$scale(-2,*)
    -mt-1
    mb-$spacing(-2,1.5,3)
    ml-[min(2em,1.7rem)]
    relative
    left-$spacing(-4,*)
  `,
  help: `
    mb-$spacing(-2,0.5,2)
    group-data-[multiple]:mb-$spacing
    group-data-[multiple]:-mt-1.5
  `,
};
