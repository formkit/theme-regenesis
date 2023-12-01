export default {
  outer: `
    data-[disabled]:pointer-events-none
  `,
  help: `
    -mt-0.5
    mb-$spacing(-2)
  `,
  sliderInner: `
    flex
    items-center
    [&>[data-type=number]]:mb-0
    [&>[data-type=number]]:ml-$spacing(2)
    [&>[data-type=number]]:shrink
    [&>[data-type=number]]:grow-0
    [&[data-has-mark-labels=true]_[id^=track]]:mb-$spacing(5,3,6)
  `,
  track: `
    grow
    relative
    z-20
    py-$spacing(1)
    select-none
  `,
  trackWrapper: `
    px-[2px]
    rounded-full
    bg-$colorTemperature-300
    dark:bg-$colorTemperature-500
  `,
  trackInner: `
    h-$spacing(-1,1,1.5)
    mx-0.5
    relative
  `,
  prefixIcon: `
    text-$colorTemperature-600
    dark:text-$colorTemperature-300
  `,
  suffixIcon: `
    text-$colorTemperature-600
    dark:text-$colorTemperature-300
  `,
  fill: `
    h-full
    rounded-full
    absolute
    top-0
    -mx-1
    bg-$accentColor-$baseColorShade
    group-data-[disabled]:bg-$colorTemperature-500
  `,
  marks: `
    absolute
    pointer-events-none
    inset-0
  `,
  mark: `
    absolute
    top-1/2
    w-[3px]
    h-[3px]
    rounded-full
    -translate-x-1/2
    -translate-y-1/2
    bg-$colorTemperature-400
    data-[active=true]:bg-white
  `,
  markLabel: `
    absolute
    top-[calc(100%+0.5em)]
    left-1/2
    text-$colorTemperature-400
    text-$scale(-2,[11px] [line-height:1em],xs)
    -translate-x-1/2
  `,
  handles: `
    m-0
    p-0
    list-none
  `,
  handle: `
    group
    select-none
    w-4
    h-4
    rounded-full
    bg-white
    absolute
    top-1/2
    left-0
    z-30
    -translate-x-1/2
    -translate-y-1/2
    shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.5)]
    focus-visible:outline-0
    focus-visible:ring-2
    ring-$accentColor-$baseColorShade
    data-[is-target=true]:z-20
    dark:bg-$colorTemperature-200
  `,
  tooltip: `
    absolute
    bottom-full
    left-1/2
    -translate-x-1/2
    -translate-y-[4px]
    bg-$accentColor-$baseColorShade
    text-white
    py-$spacing(-2,1,3)
    px-$spacing(-1,1,3)
    text-xs
    leading-none
    whitespace-nowrap
    $radius(0,rounded-none,rounded)
    opacity-0
    pointer-events-none
    transition-opacity
    after:content-[""]
    after:absolute
    after:top-full
    after:left-1/2
    after:-translate-x-1/2
    after:-translate-y-[1px]
    after:border-4
    after:border-transparent
    after:border-t-$accentColor-$baseColorShade
    group-hover:opacity-100
    group-focus-visible:opacity-100
    group-data-[show-tooltip=true]:opacity-100
  `,
  linkedValues: `
    flex
    items-start
    justify-between
  `,
  minValue: `
    grow
    !max-w-[45%]
    mb-0
    
    [&>div>div]:relative
    [&>div>div::after]:content-[""]
    [&>div>div::after]:absolute
    [&>div>div::after]:top-1/2
    [&>div>div::after]:left-[105.5%]
    [&>div>div::after]:w-[12%]
    [&>div>div::after]:h-[1px]
    [&>div>div::after]:bg-$colorTemperature-$borderShadeLightMode
    dark:[&>div>div::after]:bg-$colorTemperature-$borderShadeDarkMode
  `,
  maxValue: `
    grow
    !max-w-[45%]
    mb-0
    relative
  `,
  chart: `
    relative
    z-20
    mb-2
    flex
    justify-between
    items-center
    w-full
    aspect-[3/1]
  `,
  chartBar: `
    absolute
    bottom-0
    h-full
    bg-$colorTemperature-400
    data-[active=false]:bg-$colorTemperature-300
    dark:bg-$colorTemperature-500
    dark:data-[active=false]:bg-$colorTemperature-600
  `,
};
