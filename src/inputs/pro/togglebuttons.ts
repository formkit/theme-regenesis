export default {
  // inherits family:button classes
  // https://formkit.com/inputs/togglebuttons#sections
  wrapper: `
    mb-$spacing(-1)
  `,
  options: `
    group/options
    inline-flex
    data-[vertical=true]:flex-col
  `,
  option: `
    group/option
  `,
  input: `
    !px-$spacing(4,*)
    !mb-0
    relative
    focus:z-10
    group-data-[vertical=true]/options:w-full
    justify-center
    bg-$accentColor-50
    disabled:opacity-50
    disabled:cursor-not-allowed
    group-data-[disabled]:disabled:opacity-100

    dark:bg-transparent
    dark:disabled:bg-transparent
    dark:disabled:text-$accentColor-500
    dark:text-$accentColor-500

    aria-[pressed=true]:bg-$accentColor-$baseColorShade
    aria-[pressed=true]:text-white
    dark:aria-[pressed=true]:bg-$accentColor-$baseColorShade
    dark:aria-[pressed=true]:text-white
    
    ${
      "" /** 
      if our button is part of an option group
      then by default, turn off all rounding.
      We will need to selectively re-enable based
      on they layout of the group and a given 
      buttons position within the group.
    */
    }
    group-[]/option:!rounded-none

    ${"" /** selectively add back and override rounding for first child */}
    group-data-[vertical=false]/options:group-first/option:!$radius
    group-data-[vertical=true]/options:group-first/option:!$radius(0,rounded-none,rounded-2xl)

    group-data-[vertical=false]/options:group-first/option:!rounded-tr-none
    group-data-[vertical=false]/options:group-first/option:!rounded-br-none
    group-data-[vertical=true]/options:group-first/option:!rounded-bl-none
    group-data-[vertical=true]/options:group-first/option:!rounded-br-none

    ${"" /** selectively add back and override rounding for last child */}
    group-data-[vertical=false]/options:group-last/option:!$radius
    group-data-[vertical=true]/options:group-last/option:!$radius(0,rounded-none,rounded-2xl)

    group-data-[vertical=false]/options:group-last/option:!rounded-tl-none
    group-data-[vertical=false]/options:group-last/option:!rounded-bl-none
    group-data-[vertical=true]/options:group-last/option:!rounded-tl-none
    group-data-[vertical=true]/options:group-last/option:!rounded-tr-none

    ${
      "" /** 
      if our button is part of an option group
      then we need to selectively manage borders.
    */
    }
    group-data-[vertical=false]/options:group-[]/option:!border-r-0
    group-data-[vertical=false]/options:group-last/option:!border-r

    group-data-[vertical=false]/options:group-[]/option:aria-[pressed=true]:border-x-$accentColor-500
    group-data-[vertical=false]/options:group-first/option:aria-[pressed=true]:border-l-$accentColor-$baseColorShade
    group-data-[vertical=false]/options:group-last/option:aria-[pressed=true]:border-r-$accentColor-$baseColorShade

    dark:group-data-[vertical=false]/options:group-[]/option:aria-[pressed=true]:border-x-$accentColor-$baseColorShade
    dark:group-data-[vertical=false]/options:group-first/option:aria-[pressed=true]:border-l-$accentColor-$baseColorShade
    dark:group-data-[vertical=false]/options:group-last/option:aria-[pressed=true]:border-r-$accentColor-$baseColorShade
    
    group-data-[vertical=true]/options:group-[]/option:!border-b-0
    group-data-[vertical=true]/options:group-last/option:!border-b

    group-data-[vertical=true]/options:group-[]/option:aria-[pressed=true]:border-y-$accentColor-500
    group-data-[vertical=true]/options:group-first/option:aria-[pressed=true]:border-t-$accentColor-$baseColorShade
    group-data-[vertical=true]/options:group-last/option:aria-[pressed=true]:border-b-$accentColor-$baseColorShade

    dark:group-data-[vertical=true]/options:group-[]/option:aria-[pressed=true]:border-y-$accentColor-$baseColorShade
    dark:group-data-[vertical=true]/options:group-first/option:aria-[pressed=true]:border-t-$accentColor-$baseColorShade
    dark:group-data-[vertical=true]/options:group-last/option:aria-[pressed=true]:border-b-$accentColor-$baseColorShade
  `,
};
