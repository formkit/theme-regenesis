<script setup lang="ts">
import ThemeEditor from "./components/ThemeEditor.vue";
import { FormKitKitchenSink } from "@formkit/vue";
</script>

<template>
  <ThemeEditor />
  <Suspense>
    <FormKitKitchenSink />
  </Suspense>
</template>
