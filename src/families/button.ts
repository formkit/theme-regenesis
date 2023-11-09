export default {
  input: `
    ${"" /* base styles */}
    font-bold
    $radius
    outline-none
    flex
    !text-$scale(-1,*)
    px-$spacing(7,*)
    py-$spacing(2,3,10)
    items-center
    mb-$spacing(-1)
    text-$scale(-1,*)
    ring-offset-2
    ring-$accentColor-$baseColorShade(-1,*)
    focus-visible:ring-2
    group-data-[disabled]:!cursor-not-allowed
    $inputShadow
    group-data-[prefix-icon]:pl-$spacing(5,*)
    group-data-[suffix-icon]:pr-$spacing(5,*)
  `,
};
