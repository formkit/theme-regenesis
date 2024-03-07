export default {
  // inherits family:text classes
  inner: `
    relative
    !border-none
    !ring-0
    !px-0
    !bg-transparent
    !shadow-none
  `,
  input: `
    group/input
    cursor-pointer

    ${"" /* webkit styles - track */}
    [&::-webkit-slider-runnable-track]:bg-$colorTemperature-$borderShadeLightMode(0,300,500)/50
    [&::-webkit-slider-runnable-track]:h-[0.25em]
    [&::-webkit-slider-runnable-track]:$radius

    dark:[&::-webkit-slider-runnable-track]:bg-$colorTemperature-$borderShadeDarkMode(0,400,600)/50

    ${"" /* webkit styles - thumb */}
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-[0.85em]
    [&::-webkit-slider-thumb]:aspect-[1/1]
    [&::-webkit-slider-thumb]:bg-$accentColor-$baseColorShade
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:relative
    [&::-webkit-slider-thumb]:top-1/2
    [&::-webkit-slider-thumb]:-translate-y-1/2
    [&::-webkit-slider-thumb]:group-data-[disabled]:bg-$colorTemperature-500
    [&::-webkit-slider-thumb]:group-data-[disabled]:!ring-$colorTemperature-$borderShadeLightMode(-1,200,400)
    [&::-webkit-slider-thumb]:focus-visible:ring-2
    [&::-webkit-slider-thumb]:focus:!ring-$accentColor-$baseColorShade(-1,*)
    [&::-webkit-slider-thumb]:focus:ring-offset-2
    [&::-webkit-slider-thumb]:$inputShadow
    dark:[&::-webkit-slider-thumb]:group-data-[disabled]:!ring-$colorTemperature-$borderShadeDarkMode(1,500,700)
    dark:[&::-webkit-slider-thumb]:focus:ring-offset-$colorTemperature-700

    ${"" /* moz styles - track */}
    [&::-moz-range-track]:bg-$colorTemperature-$borderShadeLightMode(0,300,500)/50
    [&::-moz-range-track]:h-[0.25]
    [&::-moz-range-track]:$radius

    dark:[&::-moz-range-track]:bg-$colorTemperature-$borderShadeDarkMode(0,400,600)/50

    ${"" /* moz styles - thumb */}
    [&::-moz-range-thumb]:appearance-none
    [&::-moz-range-thumb]:border-none
    [&::-moz-range-thumb]:w-[0.85em]
    [&::-moz-range-thumb]:h-[0.85em]
    [&::-moz-range-thumb]:bg-$accentColor-$baseColorShade
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:group-data-[disabled]:bg-$colorTemperature-500
    [&::-moz-range-thumb]:group-data-[disabled]:!ring-$colorTemperature-300
    [&::-moz-range-thumb]:focus-visible:ring-2
    [&::-moz-range-thumb]:focus:!ring-$accentColor-$baseColorShade(-1,*)
    [&::-moz-range-thumb]:focus:ring-offset-2
    [&::-moz-range-thumb]:$inputShadow
    dark:[&::-moz-range-thumb]:group-data-[disabled]:!ring-$colorTemperature-500
    dark:[&::-moz-range-thumb]:focus:ring-offset-$colorTemperature-700
  `,
};
