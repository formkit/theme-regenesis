export default {
  outer: `
    $remove:group
    $remove:data-[disabled]:select-none 
    $remove:data-[disabled]:opacity-50
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
    group-data-[disabled]/repeater:pointer-events-none
    group-data-[disabled]/repeater:opacity-50
    group-data-[disabled]/repeater:grayscale
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
    bg-$colorTemperature-50
    p-$spacing
    [&>li]:aspect-[1/1]
    dark:bg-$colorTemperature-800
    $radius(0,rounded-none,rounded-2xl)
    rounded-tl-none
    rounded-bl-none
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
    aspect-[1/1]
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
    aspect-[1/1]
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
    aspect-[1/1]
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
    aspect-[1/1]
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
    relative
    w-full
    mb-$spacing
    bg-white
    rounded
    border
    border-$colorTemperature-$borderShadeLightMode(-1,200,600)
    $radius(0,rounded-none,rounded-2xl)
    $inputShadow
    dark:border-$colorTemperature-$borderShadeDarkMode(1,300,700)
    dark:bg-transparent

    [&.formkit-dropZone]:opacity-30
    [&.formkit-dropZone]:pointer-events-none
    [&.formkit-dropZone]:blur-[2px]
  `,
  dragHandleWrapper: `
    relative
    w-8
    bg-$colorTemperature-50
    $radius(0,rounded-none,rounded-2xl)
    rounded-tr-none
    rounded-br-none

    dark:bg-$colorTemperature-800
  `,
  dragHandle: `
    w-full
    h-full
    flex
    absolute
    top-0
    left-0
    cursor-grab
    active:cursor-grabbing
  `,
  dragHandleIcon: `
    w-2
    m-auto
    text-$colorTemperature-$borderShadeLightMode(1)
    dark:text-$colorTemperature-$borderShadeDarkMode(-1)
    [&>svg>path]:fill-current
  `,
  moveDownIcon: `
    block
    w-[0.75em]
    aspect-[1/1]
  `,
  moveUpIcon: `
    block
    w-[0.75em]
    aspect-[1/1]
  `,
  removeIcon: `
    block
    w-[1.25em]
    aspect-[1/1]
  `,
  addIcon: `
    block
    w-[1.25em]
    aspect-[1/1]
  `,
};
