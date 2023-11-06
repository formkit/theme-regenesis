export default {
  inner: `
    flex
    w-[130px]
    items-center
    relative
  `,
  itemsWrapper: `
    w-full
  `,
  onItems: `
    text-yellow-400
  `,
  offItems: `
    text-$colorTemperature-400
  `,
  onItemWrapper: `
    [&>*]:w-full
    [&>*]:h-auto
    [&>*]:max-w-none
    [&>*]:max-h-none
  `,
  offItemWrapper: `
    [&>*]:w-full
    [&>*]:h-auto
    [&>*]:max-w-none
    [&>*]:max-h-none
  `,
  ratingIcon: `
    w-full
  `,
};
