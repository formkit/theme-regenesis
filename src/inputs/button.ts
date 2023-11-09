export default {
  // inherits family:button classes
  input: `
    border
    border-$accentColor-$baseColorShade
    text-$accentColor-$baseColorShade
    hover:bg-$accentColor-50

    ${"" /* dark mode styles */}
    dark:border-$accentColor-500
    dark:text-$accentColor-500
    dark:hover:bg-$accentColor-900/20
  `,
};
