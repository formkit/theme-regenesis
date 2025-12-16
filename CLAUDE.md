# @formkit/theme-regenesis

The official reference theme for FormKit. A fully-styled, production-ready theme demonstrating best practices for FormKit theming with Tailwind CSS.

## Architecture

```
src/
├── theme.ts          # Main theme definition (createTheme call)
├── globals.ts        # Global styles for all inputs
├── main.ts           # Dev server entry point
├── App.vue           # Kitchen sink demo
├── style.css         # Dev UI variables
├── families/         # Shared style groups
│   ├── button.ts     # button, submit
│   ├── box.ts        # checkbox, radio
│   ├── text.ts       # text, email, number, date...
│   └── dropdown.ts   # autocomplete, dropdown, taglist
└── inputs/           # Input-specific styles
    ├── [21 core inputs]
    ├── pro/          # 12 premium inputs
    └── addon/        # barcode, multi-step
```

## Theme Variables

| Variable | Editor | Default | Description |
|----------|--------|---------|-------------|
| `radius` | radius | rounded-md | Border radius |
| `accentColor` | color | blue | Primary accent |
| `colorTemperature` | color | neutral | Gray palette |
| `spacing` | spacing | 2 | Base spacing unit |
| `scale` | fontSize | base | Text scale |
| `inputShadow` | shadow | shadow-sm | Input shadows |
| `baseColorShade` | buttons | 600 | Color intensity |
| `borderShadeLightMode` | buttons | 400 | Light borders |
| `borderShadeDarkMode` | buttons | 500 | Dark borders |

Advanced variables: `inputMaxWidth`, `tagRadius`, `swatchRadius`

## Style Inheritance

```
__globals (globals.ts)
    ↓ base styles for all inputs
family:text/box/button/dropdown
    ↓ shared styles for input groups
input-specific (inputs/*.ts)
    ↓ final overrides
```

## Input Coverage

**Core (21):** button, checkbox, color, date, datetime-local, email, file, form, month, number, password, radio, range, search, select, submit, tel, text, textarea, time, url, week

**Pro (12):** autocomplete, colorpicker, datepicker, dropdown, mask, rating, repeater, slider, taglist, toggle, togglebuttons, transferlist

**Addon (2):** barcode, multi-step

## Development

```bash
pnpm dev      # Vite dev server with theme editor
pnpm build    # tsup → dist/theme.{js,cjs,d.ts}
pnpm test     # vitest
```

Dev server uses:
- `@formkit/theme-editor` for live variable editing
- `FormKitKitchenSink` for all-inputs demo
- Tailwind CDN for instant class updates

## Key Patterns

### Variable usage in classes

```typescript
// Simple substitution
input: 'p-$spacing rounded-$radius'

// With scale shifting
outer: 'mb-$spacing(-2)'  // -2 from current value

// Color with shade
border: 'border-$accentColor-$baseColorShade'

// Dark mode variant
text: 'text-$colorTemperature-700 dark:text-$colorTemperature-300'
```

### Family inheritance

Most inputs export empty objects and inherit from families:
```typescript
// text.ts - inherits everything from family:text
export default {}
```

Override specific sections as needed:
```typescript
// checkbox.ts - only override decorator
export default {
  decorator: '$radius(0,rounded-none,rounded-sm)',
}
```

## Interconnections

```
@formkit/theme-creator
    ↓ provides createTheme(), rootClasses()
theme-regenesis (this package)
    ↓ exports theme function
├── themes.formkit.com (displays/edits theme)
├── theme-editor (previews with this theme)
└── User projects (import and use)
```

## Build Output

- `dist/theme.js` - ESM
- `dist/theme.cjs` - CommonJS
- `dist/theme.d.ts` - TypeScript declarations

External dependency: `@formkit/theme-creator` (not bundled)

## Common Tasks

### Adding styles for a new input

1. Create `src/inputs/[name].ts` or `src/inputs/pro/[name].ts`
2. Export section classes (or empty object for family inheritance)
3. Import and add to `inputs` object in `theme.ts`
4. Add to `meta.supportedInputs` array

### Modifying a family style

Edit the appropriate file in `src/families/`:
- Changes apply to all inputs in that family
- Individual inputs can still override

### Testing style changes

1. Run `pnpm dev`
2. Theme editor appears in corner
3. Adjust variables to test different configurations
4. All inputs visible in FormKitKitchenSink
