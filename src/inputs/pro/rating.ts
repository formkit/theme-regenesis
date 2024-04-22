export default {
  inner: `
    text-$colorTemperature-300
  `,
  itemsWrapper: `
    relative
    inline-flex
    focus:border-$accentColor-$baseColorShade
  `,
  onItemRow: `
    h-full
    w-full
  `,
  offItemRow: `
    h-full
    w-full
  `,
  onItemWrapper: `
    [&>*]:w-full
    [&>*]:h-full
    w-full
    h-full
    text-yellow-400
  `,
  offItemWrapper: `
    text-$colorTemperature-$borderShadeLightMode(0,300,500)
    w-full
    h-full
    [&>*]:w-full
    [&>*]:h-full
    dark:text-$colorTemperature-$borderShadeDarkMode(0,400,600)
  `,
  ratingItem: `
    relative
    focus-within:outline
    focus-within:outline-$accentColor-$baseColorShade
    w-[1.5em]
    h-[1.5em]
  `,
  itemLabelInner: `
    h-px
    w-px
    overflow-hidden
    absolute
    white-space-nowrap
  `,
  itemLabel: `
    absolute
    h-full
  `,
  ratingIcon: `
    w-[1.5em]
    h-[1.5em]
    flex
  `,
  input: `
    outline-none
  `,
  messages: `
    mt-$spacing(-1)
  `,
};
