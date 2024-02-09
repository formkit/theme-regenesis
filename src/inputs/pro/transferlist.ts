export default {
  outer: `
    max-w-none 
    [&_.dnd-placeholder]:bg-$accentColor-$baseColorShade 
    [&_.dnd-placeholder]:text-white
  `,
  wrapper: `
    flex 
    flex-col 
    sm:flex-row 
    justify-between 
    w-full 
    max-w-none
  `,
  help: `
    pb-$spacing
  `,
  transferlist: `
    grow 
    shrink 
    min-w-0 
    $inputShadow 
    group-[]/repeater:shadow-none 
    group-[]/multistep:shadow-none
    aspect-[4/5] 
    flex 
    flex-col 
    h-[350px] 
    border 
    border-$colorTemperature-$borderShadeLightMode(-1,200,900) 
    $radius(0,rounded-none,rounded-2xl) 
    overflow-hidden 
    select-none 
    [&:has(:focus-visible)]:ring-1
    [&:has(:focus-visible)]:ring-$accentColor-$baseColorShade(-1,*)
    dark:border-$colorTemperature-$borderShadeDarkMode(1,100,800) 
    dark:bg-$colorTemperature-900/50
  `,
  transferlistHeader: `
    flex 
    bg-$colorTemperature-100 
    text-$colorTemperature-600 
    text-$scale(-1,*) 
    justify-between 
    items-center 
    border-b 
    border-$colorTemperature-$borderShadeLightMode(-1,200,900) 
    py-$spacing 
    px-$spacing(1) 
    dark:bg-$colorTemperature-700 
    dark:border-$colorTemperature-$borderShadeDarkMode(1,100,800) 
    dark:text-$colorTemperature-400
  `,
  transferlistHeaderItemCount: `
    ml-auto 
    text-xs 
    min-w-[1.5em] 
    [line-height:1.5em] 
    px-$spacing 
    text-center 
    $radius(2) 
    bg-$colorTemperature-200 
    text-$colorTemperature-700 
    dark:bg-$colorTemperature-500 
    dark:text-$colorTemperature-300
  `,
  transferlistListItems: `
    list-none 
    bg-white 
    h-full 
    overflow-x-hidden 
    overflow-y-auto 
    dark:bg-transparent
    outline-none
  `,
  transferlistListItem: `
    py-$spacing 
    px-$spacing 
    text-$colorTemperature-700 
    ring-1 
    ring-$colorTemperature-$borderShadeLightMode(-2,200,600) 
    aria-selected:bg-$accentColor-100 
    data-[is-active=true]:bg-$accentColor-100 
    data-[is-active=true]:ring-$accentColor-$borderShadeLightMode(-2,200,600) 
    aria-selected:ring-$accentColor-$borderShadeLightMode(-2,200,600) 
    relative 
    flex 
    cursor-pointer 
    items-center 
    bg-white 
    pl-[1.5em] 
    first:-mt-px 
    first:border-t 
    aria-selected:z-[2] 
    aria-selected:border-transparent 
    aria-selected:ring-1 
    data-[is-active=true]:z-[2] 
    data-[is-active=true]:border-transparent 
    data-[is-active=true]:ring-1 
    group-data-[is-max=true]:cursor-not-allowed 
    
    dark:bg-$colorTemperature-800 
    dark:text-$colorTemperature-300 
    dark:data-[is-active=true]:bg-$accentColor-$baseColorShade(3,*) 
    dark:aria-selected:bg-$accentColor-$baseColorShade(3,*) 
    dark:ring-$colorTemperature-$borderShadeDarkMode(2,400,700) 
    dark:data-[is-active=true]:ring-$accentColor-$borderShadeDarkMode(2,300,600) 
    dark:aria-selected:ring-$accentColor-$borderShadeDarkMode(2,300,600)

    ${
      "" /** Drag and drop styles:
      - dropZone
      - selectionDropZone
      - touchDropZone
      - touchSelectionDropZone
      - longTouch .*/
    }
    [&.formkit-dropZone]:bg-$accentColor-100
    [&.formkit-selectionDropZone]:bg-$accentColor-100
    [&.formkit-touchDropZone]:bg-$accentColor-100
    [&.formkit-touchSelectionDropZone]:bg-$accentColor-100
    [&.formkit-longTouch]:bg-$accentColor-100
    dark:[&.formkit-dropZone]:bg-$accentColor-900
    dark:[&.formkit-selectionDropZone]:bg-$accentColor-900
    dark:[&.formkit-touchDropZone]:bg-$accentColor-900
    dark:[&.formkit-touchSelectionDropZone]:bg-$accentColor-900
    dark:[&.formkit-longTouch]:bg-$accentColor-900
  `,
  transferlistOption: `
    text-$scale(-1,*)
  `,
  transferControls: `
    inline-flex 
    grow-0 
    shrink 
    border 
    border-$colorTemperature-$borderShadeLightMode(-1,200,900) 
    flex-row 
    sm:flex-col 
    justify-center 
    my-$spacing 
    sm:my-auto 
    mx-auto 
    sm:mx-$spacing 
    $radius 
    overflow-clip 
    $inputShadow(-2) 
    group-[]/repeater:shadow-none 
    group-[]/multistep:shadow-none
    dark:border-$colorTemperature-$borderShadeDarkMode(3,100,800)
  `,
  sourceEmptyMessage: `
    appearance-none 
    border-none 
    w-full 
    my-$spacing 
    text-center 
    text-$colorTemperature-500 
    italic
  `,
  sourceListItems: `
    group-data-[is-max=true]:opacity-50
  `,
  targetEmptyMessage: `
    appearance-none 
    border-none 
    w-full 
    my-$spacing 
    text-center 
    text-$colorTemperature-500 
    italic
  `,
  emptyMessageInner: `
    flex 
    items-center 
    justify-center 
    p-$spacing 
    text-sm
  `,
  transferlistControls: `
    bg-white 
    p-$spacing 
    border-b 
    border-$colorTemperature-$borderShadeLightMode(-2,200,900) 
    dark:bg-$colorTemperature-700 
    dark:border-$colorTemperature-$borderShadeDarkMode(2,100,700)
  `,
  transferlistSearch: `
    flex 
    border 
    border-$colorTemperature-$borderShadeLightMode(-1,200,900) 
    $radius 
    items-center 
    text-$colorTemperature-700 
    selection:bg-$accentColor-100 
    dark:bg-$colorTemperature-700 
    dark:border-$colorTemperature-$borderShadeDarkMode(1,100,800) 
    dark:text-$colorTemperature-300 
    dark:selection:bg-$accentColor-100 
    dark:selection:text-$colorTemperature-700 
    dark:bg-$colorTemperature-800
  `,
  transferlistSearchInput: `
    border-none 
    px-$spacing 
    py-$spacing(-1) 
    w-full 
    bg-transparent 
    outline-none 
    text-$scale(-1,*)
  `,
  transferlistSearchClear: `
    flex
    w-[0.75em]
    mr-$spacing
    [&_svg]:w-full
  `,
  controlLabel: `
    absolute
    opacity-0
    pointer-events-none
    text-[0px]
  `,
  selectedIcon: `
    w-[0.75em] 
    absolute 
    left-[0.5em] 
    select-none 
    text-$accentColor-$baseColorShade 
    dark:text-$accentColor-$baseColorShade(-1,*)
  `,
  transferlistButton: `
    sm:w-5 
    relative
    flex 
    justify-center 
    text-$scale(-2) 
    shrink-0 
    box-content 
    text-$colorTemperature-700 
    disabled:bg-$colorTemperature-200 
    disabled:!text-$colorTemperature-400 
    bg-$colorTemperature-50 
    hover:text-$accentColor-$baseColorShade 
    cursor-pointer 
    appearance-none 
    border-none 
    p-$spacing(2) 
    hover:z-10 
    disabled:cursor-not-allowed 
    disabled:opacity-50 
    disabled:hover:text-current 
    disabled:hover:outline-none
    focus-visible:ring-1
    focus-visible:ring-$accentColor-$baseColorShade(-1,*)
    focus-visible:z-10

    dark:bg-$colorTemperature-800 
    dark:text-$colorTemperature-400 
    dark:hover:text-$accentColor-$baseColorShade(-1,*) 
    dark:disabled:!text-$colorTemperature-600 
    dark:disabled:bg-$colorTemperature-900 
    dark:disabled:hover:text-current 
    dark:disabled:hover:outline-none 
    dark:hover:text-$accentColor-$baseColorShade(-1,*)
  `,
  fastForwardIcon: `
    w-4 
    flex 
    select-none 
    [&>svg]:m-auto 
    [&>svg]:w-full 
    [&>svg]:max-w-[1rem] 
    [&>svg]:max-h-[1rem] 
    rotate-90 
    sm:rotate-0
  `,
  moveRightIcon: `
    w-4 
    flex 
    select-none 
    [&>svg]:m-auto 
    [&>svg]:w-full 
    [&>svg]:max-w-[1rem] 
    [&>svg]:max-h-[1rem] 
    rotate-90 
    sm:rotate-0
  `,
  moveLeftIcon: `
    w-4 
    flex 
    select-none 
    [&>svg]:m-auto 
    [&>svg]:w-full 
    [&>svg]:max-w-[1rem] 
    [&>svg]:max-h-[1rem] 
    rotate-90 
    sm:rotate-0
  `,
  rewindIcon: `
    w-4 
    flex 
    select-none 
    [&>svg]:m-auto 
    [&>svg]:w-full 
    [&>svg]:max-w-[1rem] 
    [&>svg]:max-h-[1rem] 
    rotate-90 
    sm:rotate-0
  `,
  messages: `
    mt-$spacing
  `,
};
