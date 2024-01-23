export default {
  outer: `
    data-[disabled]:opacity-100
  `,
  input: `
    ${"" /* base styles */}
    bg-$accentColor-$baseColorShade
    !text-white
    active:text-$accentColor-100
    active:bg-$accentColor-$baseColorShade(1,*)
    hover:bg-$accentColor-$baseColorShade(1,*)
    disabled:border-$colorTemperature-$borderShadeLightMode
    disabled:bg-$colorTemperature-400
    disabled:text-$colorTemperature-100
    group-data-[disabled]:!cursor-not-allowed

    ${"" /* dark mode styles */}
    dark:disabled:border-$colorTemperature-100
    dark:disabled:bg-$colorTemperature-500
    dark:disabled:text-$colorTemperature-200
    dark:text-white
    dark:ring-offset-$accentColor-$baseColorShade(-1,*)

    ${"" /* Styles for loading state — before element */}
    before:transition-all
    group-data-[loading=true]/form:before:content['']
    group-data-[loading=true]/form:before:block
    group-data-[loading=true]/form:before:animate-spin
    group-data-[loading=true]/form:before:w-5
    group-data-[loading=true]/form:before:h-5
    group-data-[loading=true]/form:before:rounded-full
    group-data-[loading=true]/form:before:mr-$spacing(2,*)
    group-data-[loading=true]/form:before:-ml-$spacing(-1,*)
    group-data-[loading=true]/form:before:border-2
    group-data-[loading=true]/form:before:border-solid
    group-data-[loading=true]/form:before:border-white
    group-data-[loading=true]/form:before:border-r-transparent
  `,
  prefixIcon: `
    text-$colorTemperature-100
  `,
  suffixIcon: `
    text-$colorTemperature-100
  `,
};
