export default {
  // inherits family:text classes
  barcodeIcon: `
    w-[1.5em]
    text-$colorTemperature-700
    cursor-pointer

    dark:text-$colorTemperature-300
  `,
  dialog: `
    border-none
    outline-hidden
    overflow-clip
    p-0
    bg-black
    $radius(0,rounded-none,rounded-xl)
    w-[100%-2rem]
    max-w-[30rem]
    [&::backdrop]:bg-$colorTemperature-800/50
  `,
  video: `
    w-full
    aspect-[1/1]
    object-cover
    block
    pointer-events-none
  `,
  closeIcon: `
    cursor-pointer
    absolute
    bg-white
    color-$colorTemperature-700
    w-[1.5em]
    h-[1.5em]
    $radius
    flex
    top-$spacing
    end-$spacing
    z-20

    [&>svg]:w-[1.25em]
    [&>svg]:h-[1.25em]
    [&>svg]:m-auto
  `,
  overlay: `
    absolute
    top-1/2
    left-1/2
    w-[min(20em,75%)]
    aspect-[1/1]
    -translate-x-1/2
    -translate-y-1/2
    $radius(0,rounded-none,rounded-xl)
    pointer-events-none
    shadow-[0_0_0_999em_rgba(0,0,0,0.5)]
  `,
  overlayDecorators: `
    absolute
    inset-0
    z-10
  `,
  overlayDecoratorTopLeft: `
    absolute
    w-[1.5rem]
    h-[1.5rem]
    $radius(0,rounded-none,rounded-xl)
    top-0
    start-0
    border-s-4
    border-t-4
    rounded-se-none
    rounded-es-none
  `,
  overlayDecoratorTopRight: `
    absolute
    w-[1.5rem]
    h-[1.5rem]
    $radius(0,rounded-none,rounded-xl)
    top-0
    end-0
    border-e-4
    border-t-4
    rounded-ss-none
    rounded-ee-none
  `,
  overlayDecoratorBottomRight: `
    absolute
    w-[1.5rem]
    h-[1.5rem]
    $radius(0,rounded-none,rounded-xl)
    bottom-0
    end-0
    border-e-4
    border-b-4
    rounded-se-none
    rounded-es-none
  `,
  overlayDecoratorBottomLeft: `
    absolute
    w-[1.5rem]
    h-[1.5rem]
    $radius(0,rounded-none,rounded-xl)
    bottom-0
    start-0
    border-s-4
    border-b-4
    rounded-ss-none
    rounded-ee-none
  `,
};
