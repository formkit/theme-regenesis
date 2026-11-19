export default {
  // inherits family:dropdown classes
  inner: `
    py-$spacing
    pe-0
    ps-0
  `,
  tags: `
    ps-$spacing(2,2,4)
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
    ms-auto
    shrink-0
  `,
};
