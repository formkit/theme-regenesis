export default {
  // inherits family:dropdown classes
  inner: `
    py-$spacing
    pr-0
    pl-0
    $radius(0,rounded-none,rounded-2xl)
  `,
  tags: `
    pl-$spacing(2,2,4)
  `,
  input: `
    !p-0
    !w-[0%]
    min-w-[1em]
    inline-block
    mb-$spacing(-2)
  `,
  listboxButton: `
    ml-auto
    shrink-0
  `,
};
