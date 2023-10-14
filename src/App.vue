<script setup lang="ts">
import { FormKitKitchenSink } from "@formkit/vue";
</script>

<template>
  <div>
    <Suspense>
      <FormKitKitchenSink :pro="true" />
    </Suspense>
  </div>
</template>
