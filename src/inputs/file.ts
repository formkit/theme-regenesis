export default {
  // inherits family:text classes
  fileList: `
    group/list
    peer
    w-full
    min-w-0
    data-[has-multiple]:mb-[1.25em]
  `,
  fileItemIcon: `
    h-[1em]
    w-[1em]
    mr-$spacing
    shrink-0
  `,
  fileItem: `
    flex
    min-w-0
    items-center
    text-$colorTemperature-700
    mb-$spacing(-1)
    last:mb-0
    dark:text-$colorTemperature-300
  `,
  fileName: `
    truncate
    min-w-0
    w-full
    shrink
    leading-5
    group-data-[has-multiple]/list:text-$scale(-1,*)
  `,
  fileRemove: `
    right-$spacing
    ring-$accentColor-$baseColorShade(-1,*)
    $radius
    z-20
    flex
    appearance-none
    items-center
    text-[0px]
    outline-none
    hover:!text-red-$baseColorShade(-1,*)
    focus-visible:ring-2
    group-data-[disabled]:pointer-events-none
    group-data-[disabled]:!text-$colorTemperature-500
    
    peer-data-[has-multiple]:absolute
    peer-data-[has-multiple]:bottom-[max(0.5em,8px)]
    peer-data-[has-multiple]:left-$spacing(2,*)
    peer-data-[has-multiple]:text-$accentColor-$baseColorShade
    peer-data-[has-multiple]:text-$scale(-2,*)
    peer-data-[has-multiple]:whitespace-nowrap

    group-data-[prefix-icon]:peer-data-[has-multiple]:left-$spacing

    dark:hover:!text-red-400
  `,
  fileRemoveIcon: `
    block
    text-base
    w-[0.75em]
    relative
    z-10
  `,
  inner: `
    relative
    cursor-pointer
    group-data-[has-multiple]:$radius(0,rounded-none,rounded-2xl)
  `,
  input: `
    cursor-pointer
    text-transparent
    absolute
    inset-0
    opacity-0
    z-10
    file:pointer-events-none
    file:w-0
    file:h-0
    file:overflow-hidden
  `,
  noFiles: `
    flex
    w-full
    items-center
    text-$colorTemperature-400
    dark:text-$colorTemperature-500
  `,
  noFilesIcon: `
    w-[1em]
    mr-$spacing
  `,
};
