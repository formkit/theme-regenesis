export default {
  placeholder: `
    text-$colorTemperature-400
    grow
    dark:text-$colorTemperature-400/50
  `,
  selector: `
    ${"" /* base styles */}
    flex
    grow
    justify-between
    w-full
    py-$spacing
    ps-$spacing(2,2,4)
    pe-0
    text-$scale
    text-$colorTemperature-700
    text-start
    group-data-[disabled]:!cursor-not-allowed
    group-data-[prefix-icon]:!ps-0
    group-data-[suffix-icon]:!pe-0
    data-[placeholder]:text-$colorTemperature-400
    selection:bg-$accentColor-100
    ${"" /* dark mode styles */}
    dark:data-[placeholder]:text-$colorTemperature-400/50
    dark:text-$colorTemperature-300
  `,
  selectIcon: `
    shrink-0
  `,
  selectionsWrapper: `
    w-[85%]
    overflow-hidden
  `,
  selection: `
    [&>*]:ms-0
  `,
  selections: `
    inline-flex
    items-center
  `,
  selectionsItem: `
    whitespace-nowrap
    me-1
  `,
  tagWrapper: `
    ${
      "" /** Drag and drop styles:
      - dropZone
      - touchDropZone
      .*/
    }
    [&.formkit-dropZone_.formkit-tag]:opacity-25
    [&.formkit-touchDropZone_.formkit-tag]:opacity-25
  `,
  truncationCount: `
    flex
    items-center
    justify-center
    h-[1.5em]
    $radius
    bg-$colorTemperature-400
    text-white
    whitespace-nowrap
    text-$scale(-3,*)
    tracking-tighter
    leading-0
    py-$spacing(-4,1,1.5)
    px-$spacing(-2,1,1.5)
    shrink-0
    my-auto
  `,
};
