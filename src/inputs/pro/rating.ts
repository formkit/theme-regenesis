export default {
  inner: `
    text-neutral-400
  `,
  itemsWrapper: `
    relative
    inline-flex
    focus:border-neutral-400
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
  text-$colorTemperature-400
    w-full
    h-full
    [&>*]:w-full
    [&>*]:h-full
  `,
  ratingItem: `
    relative
    focus-within:outline
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
};
