export default {
  inner: `
    relative
  `,
  removeSelection: `
    self-stretch
    text-$scale
    flex
    items-center
    ml-$spacing(-2,0,1.5)
    mr-$spacing
    text-$colorTemperature-700
    hover:text-red-400
    z-10
    dark:text-$colorTemperature-300
  `,
  clearIcon: `
    [&>svg]:w-[0.75em]
  `,
  panelWrapper: `
    group/panel
    absolute
    z-[99]
    min-w-[20em]
    top-[calc(100%_+_0.5em)]
    left-0
    shadow-[0_0_1.25em_rgba(0,0,0,.25)]
    $radius(0,rounded-none,rounded-2xl)
    p-$spacing(4,*)
    bg-white
    z-10
    dark:bg-$colorTemperature-800

    ${"" /* mobile touch styles */}
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:!fixed
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:top-auto
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:max-w-none
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:bottom-0
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:left-0
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:rounded-none
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:w-full
  `,
  panelHeader: `
    grid
    grid-cols-[2.5em_1fr_2.5em]
    justify-center
    items-center
    border-b-2
    border-$colorTemperature-$borderShadeLightMode(-1,200,600)
    mb-$spacing
    pb-$spacing(1,*)
    dark:border-$colorTemperature-$borderShadeDarkMode(1,400,700)

    ${"" /* mobile touch styles */}
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:grid-cols-[2.5em_1fr_2.5em_2.5em]
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:group-data-[panel=time]/panel:grid-cols-[2.5em_1fr_2.5em]
    [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:group-data-[panel=month]/panel:grid-cols-[2.5em_1fr_2.5em]
  `,
  panelClose: `
    aspect-[1/1]
    border
    border-$colorTemperature-$borderShadeLightMode(-1)
    $radius
    flex
    items-center
    justify-center
    text-$colorTemperature-700
    [&_svg]:w-[1.25em]
    dark:text-$colorTemperature-300
    dark:border-$colorTemperature-$borderShadeDarkMode(1)

    ${"" /* mobile touch styles */}
    [@media(max-width:431px)_and_(hover:none)]:group-data-[panel=time]/panel:col-start-3
    [@media(max-width:431px)_and_(hover:none)]:group-data-[panel=month]/panel:col-start-3
  `,
  panel: `
    flex
    justify-center
  `,
  input: `
    placeholder:text-$colorTemperature-400
  `,
  monthsHeader: `
    flex
    items-center
    justify-center
    col-start-2
    col-end-2
  `,
  timeHeader: `
    flex
    items-center
    justify-center
    col-start-2
    col-end-2
  `,
  months: `
    grid
    grid-cols-3
    w-full
  `,
  month: `
    m-$spacing(-1)
    p-$spacing(-2)
    text-center
    text-$colorTemperature-700
    $radius
    bg-$colorTemperature-200
    aria-selected:!bg-$accentColor-$baseColorShade
    aria-selected:!text-white
    focus:outline
    focus:outline-2
    focus:outline-$accentColor-$baseColorShade
    focus:outline-offset-2
    focus:bg-white
    focus:text-$colorTemperature-700
    data-[is-extra=true]:opacity-25
    group-data-[disabled=true]:opacity-50
    group-data-[disabled=true]:cursor-default
    group-data-[disabled=true]:pointer-events-none
    dark:bg-$colorTemperature-700
    dark:text-$colorTemperature-300
  `,
  yearsHeader: `
    flex
    items-center
    justify-center
    text-$colorTemperature-700
    col-start-2
    col-end-2
    dark:text-$colorTemperature-300
  `,
  years: `
    grid
    grid-cols-5
    w-full
  `,
  year: `
    text-$scale
    text-center
    text-$colorTemperature-700
    items-center
    m-$spacing(-1)
    p-$spacing(-2)
    $radius
    bg-$colorTemperature-200
    aria-selected:!bg-$accentColor-$baseColorShade
    aria-selected:!text-white
    focus:outline
    focus:outline-2
    focus:outline-$accentColor-$baseColorShade
    focus:outline-offset-2
    focus:bg-white
    data-[is-extra=true]:opacity-25
    group-data-[disabled=true]:opacity-50
    group-data-[disabled=true]:cursor-default
    group-data-[disabled=true]:pointer-events-none
    dark:bg-$colorTemperature-700
    dark:text-$colorTemperature-300
  `,
  weekDays: `
    grid
    grid-cols-7
  `,
  weekDay: `
    w-[2.25em]
    text-$colorTemperature-700
    m-$spacing(-1)
    $radius
    font-medium
    lowercase
    dark:text-$colorTemperature-500
  `,
  calendarWeeks: ``,
  week: `
    grid
    grid-cols-7
    group-data-[disabled=true]:opacity-50
    group-data-[disabled=true]:cursor-default
    group-data-[disabled=true]:pointer-events-none
  `,
  dayCell: `
    flex
    items-center
    justify-center
    text-center
    text-$colorTemperature-700
    w-[2.25em]
    h-[2.25em]
    m-1
    p-$spacing
    $radius
    bg-$colorTemperature-200
    aria-selected:bg-$accentColor-$baseColorShade
    aria-selected:text-white
    focus:outline
    focus:outline-2
    focus:outline-$accentColor-$baseColorShade
    focus:outline-offset-2
    focus:bg-white
    data-[is-extra=true]:opacity-25
    data-[disabled=true]:opacity-50
    data-[disabled=true]:cursor-default
    data-[disabled=true]:pointer-events-none

    ${"" /* dark mode styles */}
    dark:bg-$colorTemperature-600
    dark:text-$colorTemperature-300
    dark:aria-selected:bg-$accentColor-$baseColorShade
    dark:aria-selected:text-white
    dark:focus:outline-$accentColor-$baseColorShade
    dark:focus:bg-$colorTemperature-200
    dark:focus:text-$colorTemperature-700
  `,
  timeInput: `
    w-full
    border-2
    [color-scheme:light]
    dark:[color-scheme:dark]
    text-$colorTemperature-700
    border-$colorTemperature-$borderShadeLightMode(-1,200,600)
    $radius
    p-$spacing(-1)
    my-$spacing(1,*)
    focus-visible:outline-$accentColor-$baseColorShade
    dark:text-$colorTemperature-300
    dark:bg-transparent
    dark:border-$colorTemperature-$borderShadeDarkMode(1,300,700)
  `,
  daysHeader: `
    flex
    items-center
    justify-center
  `,
  prev: `
    mr-auto
    px-$spacing(1,*)
    py-$spacing(-3,*)
    hover:bg-$colorTemperature-100
    $radius
    col-start-1
    col-end-1
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-$accentColor-$baseColorShade(-1,*)
    focus-visible:ring-offset-2
  `,
  prevLabel: "hidden",
  prevIcon: `
    flex
    w-[0.75em]
    select-none
    text-$colorTemperature-700
    [&>svg]:w-full
    dark:text-$colorTemperature-300
  `,
  dayButton: `
    appearance-none
    text-$colorTemperature-700
    cursor-pointer
    px-$spacing(1,*)
    py-$spacing(-3,*)
    border-2
    border-$colorTemperature-$borderShadeLightMode(-1,200,600)
    $radius
    mx-1
    hover:border-$accentColor-$baseColorShade
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-$accentColor-$baseColorShade(-1,*)
    focus-visible:ring-offset-2
    dark:text-$colorTemperature-300
    dark:border-$colorTemperature-$borderShadeDarkMode(1,300,700)
    dark:hover:border-$accentColor-$baseColorShade(-1,*)
  `,

  monthButton: `
    appearance-none
    text-$colorTemperature-700
    cursor-pointer
    px-$spacing(1,*)
    py-$spacing(-3,*)
    border-2
    border-$colorTemperature-$borderShadeLightMode(-1,200,600)
    $radius
    mx-1
    hover:border-$accentColor-$baseColorShade
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-$accentColor-$baseColorShade(-1,*)
    focus-visible:ring-offset-2
    dark:text-$colorTemperature-300
    dark:border-$colorTemperature-$borderShadeDarkMode(1,300,700)
    dark:hover:border-$accentColor-$baseColorShade(-1,*)
  `,
  yearButton: `
    appearance-none
    text-$colorTemperature-700
    cursor-pointer
    px-$spacing(1,*)
    py-$spacing(-3,*)
    border-2
    border-$colorTemperature-$borderShadeLightMode(-1,200,600)
    $radius
    mx-1
    hover:border-$accentColor-$baseColorShade
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-$accentColor-$baseColorShade(-1,*)
    focus-visible:ring-offset-2
    dark:text-$colorTemperature-300
    dark:border-$colorTemperature-$borderShadeDarkMode(1,300,700)
    dark:hover:border-$accentColor-$baseColorShade(-1,*)
  `,
  next: `
    ml-auto
    px-$spacing(1,*)
    py-$spacing(-3,*)
    $radius
    hover:bg-$colorTemperature-100
    hover:rounded
    col-start-3
    col-end-3
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-$accentColor-$baseColorShade(-1,*)
    focus-visible:ring-offset-2
  `,
  nextLabel: `
    hidden
  `,
  nextIcon: `
    flex
    w-[0.75em]
    select-none
    text-$colorTemperature-700
    [&>svg]:w-full
    dark:text-$colorTemperature-300
  `,
  openButton: `
    appearance-none
    border-0
    bg-transparent
    flex
    p-0
    self-stretch
    cursor-pointer
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-$accentColor-$baseColorShade(-1,*)
    focus-visible:ring-offset-2
    focus-visible:$radius(0,rounded-none,rounded-2xl)
  `,
  calendarIcon: `
    text-$colorTemperature-600
    focus-visible:text-$accentColor-$baseColorShade
    flex
    w-[1em]
    grow-0
    shrink-0
    self-stretch
    select-none
    [&>svg]:w-full
    [&>svg]:m-auto
    [&>svg]:max-h-[1em]
    [&>svg]:max-w-[1em]
  `,
};
