export default {
  // https://formkit.com/inputs/form#sections
  form: `group/form`,
  actions: ``,
  summaryInner: `
    group/summary
    border
    border-$colorTemperature-$borderShadeLightMode
    bg-white
    $radius(0,rounded-none,rounded-2xl)
    py-$spacing
    px-$spacing(2,*)
    $inputShadow
    dark:bg-transparent
    dark:border-$colorTemperature-$borderShadeDarkMode
  `,
  summaryHeader: `
    text-$scale(1,*) 
    text-$colorTemperature-700
    font-bold
    mb-$spacing
    dark:text-$colorTemperature-300
  `,
  messages: ``,
  message: `
    group-[]/summary:text-$scale(-1,*)
  `,
  messageLink: `
    group-[]/summary:outline-none
    group-[]/summary:focus-visible:ring-2
    group-[]/summary:ring-$accentColor-$baseColorShade
  `,
};
