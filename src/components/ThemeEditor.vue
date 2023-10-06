<script setup lang="ts">
import { ref, watch, inject } from 'vue'
import type { InputMap } from '@formkit/theme-creator'
import type { FormKitConfig, FormKitNode } from '@formkit/core'
import theme from '../theme'

const variables = ref({
  borderRadius: 'rounded-md',
})

function toRootClasses(classes: InputMap): FormKitConfig['rootClasses'] {
  return (section: string, node: FormKitNode) => {
    const inputClasses = classes[node.props.type]
    const sectionClasses = inputClasses ? inputClasses[section] : undefined
    if (sectionClasses) {
      return sectionClasses.split(' ').reduce((acc, className) => {
        acc[className] = true
        return acc
      }, {} as Record<string, boolean>)
    }
    return {}
  }
}


const config = inject<FormKitConfig>(Symbol.for('FormKitConfig'))
watch(variables, () => {
  console.log('effect')
  const classes = theme(variables.value).tailwind()
  if (config) {
    config.rootClasses = toRootClasses(classes)
  }
}, { immediate: true})
</script>

<template>
  <div>
    
  </div>
</template>
