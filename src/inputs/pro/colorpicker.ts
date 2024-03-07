export default {
  // inherits from family:text classes
  outer: `
    data-[disabled]:cursor-not-allowed 
    data-[disabled]:pointer-events-none
  `,
  help: `
    group-data-[inline]:-mt-1 
    group-data-[inline]:mb-$spacing
  `,
  inner: `
    relative 
    inline-flex 
    !w-auto 
    pl-$spacing 
    group-data-[inline]:border-none 
    group-data-[inline]:shadow-none 
    group-data-[inline]:p-0 
    group-data-[inline]:bg-transparent 
    group-data-[inline]:outline-none 
    group-data-[inline]:!ring-0 
    group-data-[inline]:!w-full 
    group-data-[inline]:$radius(0,rounded-none,rounded-2xl)
  `,
  swatchPreview: `
    w-full 
    flex 
    justify-start 
    items-center 
    $radius 
    text-sm 
    cursor-pointer 
    outline-none
  `,
  canvasSwatchPreviewWrapper: `
    relative 
    before:content-[''] 
    before:absolute 
    before:inset-0 
    before:$radius 
    before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)] 
    before:z-[2]
  `,
  canvasSwatchPreview: `
    text-$scale 
    $radius 
    aspect-[1/1] 
    shrink-0 
    grow 
    !w-[1.5em]
  `,
  valueString: `
    text-$scale 
    text-$colorTemperature-700 
    selection:bg-$accentColor-100 
    font-mono 
    inline-block 
    ml-$spacing 
    mr-$spacing(-2) 
    dark:text-$colorTemperature-300 
    dark:selection:text-$colorTemperature-700
  `,
  panel: `
    absolute 
    left-0 
    top-full 
    z-[99]
    flex 
    w-[100vw] 
    max-w-[18.5em] 
    touch-manipulation 
    flex-col 
    $radius(0,rounded-none,rounded-2xl) 
    border 
    bg-white 
    p-$spacing(0,1,3) 
    $inputShadow(1,*) 
    group-data-[inline]:static 
    group-data-[inline]:max-w-none 
    border-$colorTemperature-$borderShadeLightMode 
    group-data-[inline]:z-auto 
    group-data-[inline]:w-full 
    group-data-[inline]:$inputShadow 
    group-data-[inline]:group-data-[disabled]:!cursor-not-allowed 
    group-data-[inline]:group-data-[disabled]:!pointer-events-none 
    group-data-[inline]:[&:has([id^=swatches]:first-child:last-child)]:w-auto 
    group-data-[inline]:[&:has([id^=swatches]:first-child:last-child)_[id^=swatches]>div]:w-[1.5em]
    dark:bg-$colorTemperature-800 
    dark:border-$colorTemperature-$borderShadeDarkMode
    dark:group-data-[inline]:bg-transparent 
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:!fixed
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:top-auto
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:max-w-none
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:bottom-0
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:left-0
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:rounded-none
  `,
  panelClose: `
    flex 
    justify-end 
    items-center 
    text-$colorTemperature-600 
    mb-$spacing(-1) 
    -mt-1 
    border-none 
    bg-none 
    border-b 
    border-$colorTemperature-$borderShadeLightMode(-1) 
    w-[calc(100%+1rem)] 
    -ml-2 
    pt-0 
    pr-$spacing 
    pb-$spacing(-2) 
    pl-$spacing 
    dark:border-$colorTemperature-$borderShadeDarkMode(1)
  `,
  closeIcon: `
    w-[2rem] 
    aspect-[1/1] 
    p-1 
    $radius 
    border 
    [&>svg]:w-full 
    [&>svg]:aspect-[1/1] 
    [&>svg]:max-w-none 
    [&>svg]:max-h-none
  `,
  controlGroup: `
    grid 
    [grid-template-areas:'a_a_a'_'b_c_e'_'b_d_e'] 
    mb-$spacing
  `,
  LS: `
    [grid-area:a] 
    relative 
    mb-$spacing
  `,
  canvas: `
    block 
    w-full
  `,
  canvasLS: `
    aspect-[2/1] 
    cursor-pointer 
    $radius(-1,rounded-none,rounded-xl)
  `,
  canvasHue: `
    $radius(-1,rounded-none,rounded-xl)
  `,
  canvasAlpha: `
    $radius(-1,rounded-none,rounded-xl)
  `,
  preview: `
    $radius 
    after:$radius 
    relative 
    inline-flex 
    aspect-[1/1] 
    overflow-hidden 
    [grid-area:b] 
    mr-$spacing
    after:absolute 
    after:left-0 
    after:top-0 
    after:h-full 
    after:w-full 
    after:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)] 
    after:content-[''] 
    w-[2em] 
    dark:after:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]
  `,
  hue: `
    [grid-area:c] 
    relative 
    inline-flex 
    h-3/4 
  `,
  alpha: `
    [grid-area:d] 
    relative 
    inline-flex 
    h-3/4 
  `,
  eyeDropper: `
    [grid-area:e] 
    w-[2em] 
    ml-$spacing 
    inline-flex 
    self-center 
    justify-center 
    justify-self-center 
    aspect-[1/1] 
    $radius(0,rounded-none,rounded-2xl) 
    border 
    border-$colorTemperature-$borderShadeLightMode(-1) 
    cursor-pointer 
    content-center 
    items-center 
    text-$colorTemperature-600 
    dark:border-$colorTemperature-$borderShadeDarkMode(1)
  `,
  eyeDropperIcon: `
    w-auto 
    [&>svg]:w-[1em] 
    dark:text-$colorTemperature-400
  `,
  control: `
    absolute 
    bg-white 
    shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2)] 
    -translate-y-1/2
    -translate-x-1/2
    pointer-events-none 
    data-[prevent-focus-style]:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2)] 
    focus-visible:outline-none 
    focus-visible:ring-2 
    focus-visible:ring-offset-2 
    focus-visible:ring-$accentColor-$baseColorShade(-1,*)
  `,
  controlLS: `
    w-[10px] 
    h-[10px] 
    rounded-full
  `,
  controlHue: `
    w-[4px] 
    h-[calc(100%-2px)] 
    top-1/2 
    $radius(0,rounded-none,rounded-2xl)
  `,
  controlAlpha: `
    w-[4px]
    h-[calc(100%-2px)]
    top-1/2
    $radius(0,rounded-none,rounded-2xl)
  `,
  formatField: `
    flex
    items-center
    justify-center
    grow
  `,
  colorField: `
    bg-transparent
    text-$colorTemperature-700
    border
    border-$colorTemperature-$borderShadeLightMode(-1)
    dark:border-$colorTemperature-$borderShadeDarkMode(1)
    dark:text-$colorTemperature-300
    dark:selection:text-$colorTemperature-700
  `,
  colorInputGroup: `
    flex
    items-center
    justify-center
    grow
  `,
  fieldGroup: `
    ${"" /* base styles */}
    flex
    flex-col
    items-center
    justify-center
    w-full
    mr-$spacing(-2,0.5,1.5)
    
    ${"" /* nested input styles */}
    [&>input]:p-1
    [&>input]:text-$scale(-1)
    [&>input]:text-$colorTemperature-700
    [&>input]:selection:bg-$accentColor-100
    [&>input]:m-0
    [&>input]:grow
    [&>input]:shrink
    [&>input]:w-full
    [&>input]:border
    [&>input]:border-$colorTemperature-$borderShadeLightMode(-1)
    [&>input]:$radius
    [&>input]:text-center
    [&>input]:appearance-none
    [&>input::-webkit-outer-spin-button]:appearance-none
    [&>input::-webkit-inner-spin-button]:appearance-none
    [&>input::-webkit-inner-spin-button]:m-0
    [&>input:focus]:outline-none
    [&>input:focus]:ring-1
    [&>input:focus]:ring-$accentColor-$baseColorShade
    [&>input:focus]:border-$accentColor-$baseColorShade
    max-[431px]:[&>input]:text-base
  `,
  fieldLabel: `
    text-$scale(-2,xs,sm)
    text-$colorTemperature-500
    mt-$spacing(-3)
    dark:text-$colorTemperature-400
  `,
  formatSwitcher: `
    flex
    justify-end
    self-start
    uppercase
    shrink-0
    p-1
    mt-0.5
    text-$colorTemperature-600
    $radius(0,rounded-none,rounded)
    select-none
    dark:text-$colorTemperature-400
  `,
  switchIcon: `
    [&>svg]:w-3
  `,
  swatches: `
    inline-flex
    flex-wrap
    w-full
    justify-self-center
    min-w-0
    mx-auto
    px-[1px]
    pt-$spacing
    pb-$spacing
    mt-$spacing
    -mb-$spacing
    border-t
    border-$colorTemperature-$borderShadeLightMode(-1)
    overflow-auto
    max-h-[200px]
    select-none
    first:-mt-[3px]
    first:last:-mb-[3px]
    first:last:pb-[2px]
    first:pt-px
    first:border-t-0
    dark:border-$colorTemperature-$borderShadeDarkMode(1)
  `,
  swatchGroup: `
    flex
    flex-wrap
    w-full
    mb-$spacing
    last:mb-0
  `,
  swatchGroupLabel: `
    ml-1
    block
    w-full
    text-$scale(-1,xs,sm)
    text-$colorTemperature-500
    dark:text-$colorTemperature-400
  `,
  swatch: `
    ${"" /* base styles */}
    relative
    text-$scale
    w-[calc((100%/10)-0.5em)]
    max-w-[22px]
    m-[0.16em]
    cursor-pointer
    
    ${"" /* decorator styles */}
    before:content-['']
    before:absolute
    before:inset-0
    before:$swatchRadius
    before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]
    before:pointer-events-none
    before:z-[2]
    dark:before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]
    
    ${"" /* active styles */}
    data-[active=true]:after:content-['']
    data-[active=true]:after:block
    data-[active=true]:after:absolute
    data-[active=true]:after:w-1.5
    data-[active=true]:after:h-1.5
    data-[active=true]:after:top-1/2
    data-[active=true]:after:left-1/2
    data-[active=true]:after:pointer-events-none
    data-[active=true]:after:rounded-full
    data-[active=true]:after:-translate-x-1/2
    data-[active=true]:after:-translate-y-1/2
    data-[active=true]:after:bg-white
    data-[active=true]:after:z-[2]
    data-[active=true]:after:ring-1
    data-[active=true]:after:ring-[rgba(0,0,0,0.33)]
    
    ${"" /* canvas styles */}
    [&>canvas]:block
    [&>canvas]:w-full
    [&>canvas]:aspect-[1/1]
    [&>canvas]:$swatchRadius
    [&>canvas:focus-visible]:outline-none
    [&>canvas:focus-visible]:ring-2
    [&>canvas:focus-visible]:ring-$accentColor-$baseColorShade(-1,*)
    [&>canvas:focus-visible]:ring-offset-2
    [&>canvas:focus-visible]:ring-offset-white
    dark:[&>canvas:focus-visible]:ring-offset-$colorTemperature-700
  `,
};
