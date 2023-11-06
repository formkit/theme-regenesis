export default {
  outer: `
    group/repeater
    max-w-full
  `,
  fieldset: `
    min-w-0
  `,
  legend: `
    mb-$spacing
  `,
  content: `
    min-w-0
    grow
    p-$spacing(5,2,10)
    flex
    flex-col
    align-center
    [&>div[data-type]]:max-w-none
    [&>div[data-type]:last-child]:mb-0
  `,
  addButton: `
    !mb-0
  `,
  controlLabel: `
    absolute
    opacity-0
    pointer-events-none
    text-[0px]
  `,
  controls: `
    flex
    flex-col
    items-center
    justify-center
    bg-$colorTemperature-100
    p-$spacing
    [&>li]:aspect-square
    dark:bg-$colorTemperature-800
  `,
  downControl: `
    w-[1.5em]
    h-[1.5em]
    my-$spacing(-2)
    mx-auto
    flex
    items-center
    appearance-none
    justify-center
    aspect-square
    text-$colorTemperature-500
    hover:text-$accentColor-$baseColorShade
    disabled:hover:text-inherit
    disabled:opacity-25
    disabled:!text-$colorTemperature-500
    dark:text-$colorTemperature-300
    dark:disabled:!text-$colorTemperature-300
    dark:hover:text-$accentColor-$baseColorShade(-1,*)
  `,
  upControl: `
    w-[1.5em]
    h-[1.5em]
    my-$spacing(-2)
    mx-auto
    flex
    items-center
    appearance-none
    justify-center
    aspect-square
    text-$colorTemperature-500
    hover:text-$accentColor-$baseColorShade
    disabled:hover:text-inherit
    disabled:opacity-25
    disabled:!text-$colorTemperature-500
    dark:text-$colorTemperature-300
    dark:disabled:!text-$colorTemperature-300
    dark:hover:text-$accentColor-$baseColorShade(-1,*)
  `,
  removeControl: `
    w-[1.5em]
    h-[1.5em]
    my-$spacing(-2)
    mx-auto
    flex
    items-center
    appearance-none
    justify-center
    aspect-square
    text-$colorTemperature-500
    hover:text-$accentColor-$baseColorShade
    disabled:hover:text-inherit
    disabled:opacity-25
    disabled:!text-$colorTemperature-500
    dark:text-$colorTemperature-300
    dark:disabled:!text-$colorTemperature-300
    dark:hover:text-$accentColor-$baseColorShade(-1,*)
  `,
  insertControl: `
    w-[1.5em]
    h-[1.5em]
    my-$spacing(-2)
    mx-auto
    flex
    items-center
    appearance-none
    justify-center
    aspect-square
    text-$colorTemperature-500
    hover:text-$accentColor-$baseColorShade
    disabled:hover:text-inherit
    disabled:opacity-25
    disabled:!text-$colorTemperature-500
    dark:text-$colorTemperature-300
    dark:disabled:!text-$colorTemperature-300
    dark:hover:text-$accentColor-$baseColorShade(-1,*)
  `,
  help: `
    mb-$spacing
    -mt-1
  `,
  item: `
    flex
    w-full
    mb-$spacing
    bg-transparent
    rounded
    border
    border-$colorTemperature-$borderShadeLightMode(-1,200,600)
    overflow-clip
    $radius(0,rounded-none,rounded-2xl)
    $inputShadow
    dark:border-$colorTemperature-$borderShadeDarkMode(1,300,700)
  `,
  moveDownIcon: `
    block
    w-[0.75em]
    aspect-square
  `,
  moveUpIcon: `
    block
    w-[0.75em]
    aspect-square
  `,
  removeIcon: `
    block
    w-[1.25em]
    aspect-square
  `,
  addIcon: `
    block
    w-[1.25em]
    aspect-square
  `,
};
