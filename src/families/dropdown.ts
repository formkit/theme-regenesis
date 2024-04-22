export default {
  // autocomplete, dropdown, taglist
  wrapper: `
    mb-$spacing(-1)
  `,
  inner: `
    ${"" /* base styles */}
    relative
    flex
    items-center
    bg-white
    border
    border-$colorTemperature-$borderShadeLightMode
    $radius
    group-data-[is-multiline]:!$radius(0,rounded-none,rounded-2xl)
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
    dark:group-data-[disabled]:bg-$colorTemperature-700/40
    dark:group-data-[invalid]:border-red-$baseColorShade(-1,*)
    dark:group-data-[invalid]:ring-red-$baseColorShade(-1,*)
  `,
  input: `
    ${"" /* base styles */}
    grow
    p-$spacing
    pr-0
    pl-$spacing(2,2,4)
    text-$scale
    text-$colorTemperature-700
    text-ellipsis
    min-w-0
    outline-none
    bg-transparent
    group-data-[disabled]:!cursor-not-allowed
    group-data-[prefix-icon]:!pl-0
    group-data-[suffix-icon]:!pr-0
    placeholder:text-$colorTemperature-400
    selection:bg-$accentColor-100
    ${"" /* dark mode styles */}
    dark:placeholder:text-$colorTemperature-500
    dark:text-$colorTemperature-300
    ${"" /* Tailwind Forms overrides */}
    border-none
    focus:ring-0
    bg-none
  `,
  listboxButton: `
    w-[2.5em]
    self-stretch
    text-$scale
    flex
    items-center
    text-$colorTemperature-700
    z-10
    dark:text-$colorTemperature-300
    data-[disabled]:cursor-not-allowed
  `,
  removeSelection: `
    w-[2.5em]
    self-stretch
    text-$scale
    flex
    items-center
    text-$colorTemperature-700
    hover:text-red-400
    z-10
    dark:text-$colorTemperature-300
  `,
  controlLabel: `
    absolute
    opacity-0
    pointer-events-none
    text-[0px]
  `,
  selectIcon: `
    text-$scale
    inline-flex
    justify-center
    w-[2.5em]
    relative
    my-auto
    [&>svg]:w-[1em]
    [&>svg]:mx-auto
  `,
  closeIcon: `
    text-$scale
    w-[0.75em]
    relative
    m-auto
  `,
  prefixIcon: `
    !ml-$spacing
    !mr-0
    text-$colorTemperature-600
    dark:text-$colorTemperature-300
  `,
  suffixIcon: `
    !mr-$spacing
    !ml-0
    text-$colorTemperature-600
    dark:text-$colorTemperature-300
  `,
  dropdownWrapper: `
    $radius(0,rounded-none,rounded-2xl)
    $inputShadow(2,shadow-md,shadow-2xl)
    mt-$spacing(-2,0.5,2)
    overflow-clip
    empty:hidden
    border
    border-$colorTemperature-$borderShadeLightMode(-1,200,700)
    dark:border-$colorTemperature-$borderShadeDarkMode(1,200,700)
    group-data-[expanded]:opacity-100
    group-data-[overscroll]:m-0
    group-data-[overscroll]:shadow-none
    group-data-[overscroll]:border-none
  `,
  listitemGroup: `
    group/optgroup
    last:pb-0
    border-t
    border-b
    -mb-px
    border-$colorTemperature-$borderShadeLightMode(-1,200,700)
    dark:border-$colorTemperature-$borderShadeDarkMode(1,200,700)
  `,
  groupLabel: `
    block
    pt-$spacing(-1,*)
    pb-$spacing(-2,*)
    px-$spacing(1,*)
    font-bold
    pointer-events-none
    text-$colorTemperature-$borderShadeLightMode(2,400,800)
    dark:text-$colorTemperature-$borderShadeDarkMode(-2,100,500)
  `,
  listbox: `
    bg-white
    $radius(0,rounded-none,rounded-2xl)
    empty:hidden
    dark:bg-$colorTemperature-800
    
    group-data-[overscroll]:$inputShadow(2,shadow-md,shadow-2xl)
    group-data-[overscroll]:border
    group-data-[overscroll]:border-$colorTemperature-$borderShadeLightMode(-1,200,700)
    group-data-[overscroll]:dark:border-$colorTemperature-$borderShadeDarkMode(1,200,700)
  `,
  listitem: `
    relative
    flex
    items-center
    px-$spacing
    py-$spacing(-1,1)
    first:pt-$spacing
    last:pb-$spacing
    text-$colorTemperature-700
    text-$scale
    data-[is-active]:bg-$accentColor-100
    dark:text-$colorTemperature-200
    dark:data-[is-active]:text-$colorTemperature-700
    ${"" /* keyboard focus on active items */}
    before:content-['']
    before:absolute
    before:inset-0
    data-[is-active]:first:before:$radius(0,rounded-none,rounded-2xl)
    data-[is-active]:first:before:rounded-b-none
    data-[is-active]:last:before:$radius(0,rounded-none,rounded-2xl)
    data-[is-active]:last:before:rounded-t-none
    data-[is-active]:first:last:before:$radius(0,rounded-none,rounded-2xl)
    data-[is-active]:before:ring-1
    data-[is-active]:before:ring-$accentColor-$baseColorShade(-1,*)
    data-[is-active]:before:ring-inset
    data-[is-active]:before:ring-offset-$accentColor-100

    group-[]/optgroup:first:before:!rounded-none
    group-[]/optgroup:last:before:!rounded-none
  `,
  selectedIcon: `
    flex
    absolute
    items-center
    text-$accentColor-$baseColorShade
    left-$spacing
    text-$scale
    h-[1em]
    w-[1em]
    shrink-0
    [&>svg]:w-full
  `,
  option: `
    ml-[1.5em]
  `,
  loadMore: `
    data-[is-active]:bg-$accentColor-100
  `,
  loadMoreInner: `
    cursor-pointer
    dark:text-$colorTemperature-200
    dark:hover:text-$accentColor-$baseColorShade(-1,*)
  `,
  selectionWrapper: `
    grow
    flex
    items-center
    text-$colorTemperature-700
  `,
  selection: `
    grow
    text-$colorTemperature-700
    group-data-[multiple]:p-$spacing
    dark:text-$colorTemperature-300
  `,
  tagsWrapper: `
    w-full
  `,
  tagWrapper: `
    group/tag
    $tagRadius
    mr-$spacing(-2,0.5,1.5)
    mb-$spacing(-2,0.5,1.5)
    outline-none
    data-[active-selection=true]:ring-2
    data-[active-selection=true]:ring-$accentColor-$baseColorShade(-1,*)
  `,
  tags: `
    inline-flex
    flex-wrap
    items-center
    w-full
    -mb-$spacing(-2,0.5,1.5)
    empty:mb-0
  `,
  tag: `
    flex
    items-center
    cursor-default
    $tagRadius
    text-$scale(-1,xs,sm)
    px-$spacing(-1,1,2)
    py-$spacing(-3,0.5,1.5)
    bg-$accentColor-$baseColorShade
    text-white
    [&>[type=button]]:!w-[0.5em]
    [&>[type=button]]:aspect-[1/1]
    [&>[type=button]]:!text-inherit
    [&>[type=button]]:cursor-pointer
    group-data-[active-selection=true]/tag:bg-$accentColor-$baseColorShade(-2,*)
    group-data-[active-selection=true]/tag:text-$colorTemperature-700
  `,
  tagLabel: `
    mr-1
  `,
  emptyMessage: `
    flex
    items-center
    px-$spacing
    py-$spacing(-1,1)
    first:pt-$spacing
    last:pb-$spacing
    text-$colorTemperature-700
    text-$scale(-1,*)
    aria-selected:text-white
    aria-selected:bg-$accentColor-$baseColorShade
  `,
};
