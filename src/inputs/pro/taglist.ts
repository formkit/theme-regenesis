export default {
  // inherits family:dropdown classes
  inner: `
    py-$spacing
    pr-0
    pl-0
  `,
  tags: `
    pl-$spacing(2,2,4)
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
  input: `
    !p-0
    !w-[0%]
    min-w-[1em]
    inline-block
    -mt-$spacing(-2,0.5,1.5)
    first:mt-0
    first:mb-$spacing(-2,0.5,1.5)
  `,
  listboxButton: `
    ml-auto
    shrink-0
  `,
};
