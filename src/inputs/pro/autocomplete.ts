export default {
  selections: `
    flex
    absolute
    inset-0
    group-data-[multiple]:static
    group-data-[multiple]:block
    group-data-[empty]:hidden
    group-data-[multiple]:mt-$spacing(-1,0.5,2)
  `,
  selectionWrapper: `
    bg-$colorTemperature-100
    $radius
    group-data-[multiple]:border
    group-data-[multiple]:border-$colorTemperature-$borderShadeLightMode(-1,200,600)
    group-data-[multiple]:mb-$spacing(-1,0.5,2)
    outline-none
    data-[active-selection=true]:ring-2
    data-[active-selection=true]:ring-$accentColor-$baseColorShade(-1,*)
    dark:bg-$colorTemperature-600
    dark:group-data-[multiple]:border-$colorTemperature-$borderShadeDarkMode(0,300,700)

    ${
      "" /** Drag and drop styles:
      - dropZone
      - touchDropZone
      - touchDragging
      - longTouch .*/
    }
    [&.formkit-dropZone]:opacity-25
    [&.formkit-touchDropZone]:opacity-25
    [&.formkit-touchDragging]:!flex
    [&.formkit-longTouch]:opacity-25
  `,
  selection: `
    $radius
    just
    pl-$spacing
    [&>*]:ml-0
    dark:text-$colorTemperature-200
  `,
};
