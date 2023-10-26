<script setup lang="ts">
import { FormKitKitchenSink } from "@formkit/vue";

const asyncFields = [
  {
    $formkit: "autocomplete",
    loadOnCreated: true,
    options: "$asyncLoader",
  },
  {
    $formkit: "autocomplete",
    loadOnCreated: true,
    options: "$paginatedLoader",
  },
  {
    $formkit: "dropdown",
    loadOnCreated: true,
    options: "$asyncLoader",
  },
  {
    $formkit: "dropdown",
    loadOnCreated: true,
    options: "$paginatedLoader",
  },
  {
    $formkit: "taglist",
    loadOnCreated: true,
    options: "$asyncLoader",
  },
  {
    $formkit: "taglist",
    loadOnCreated: true,
    options: "$paginatedLoader",
  },
  {
    $formkit: "transferlist",
    options: "$asyncLoader",
  },
  {
    $formkit: "transferlist",
    options: "$paginatedLoader",
  },
];
</script>

<template>
  <div>
    <Suspense>
      <FormKitKitchenSink :schemas="['form/login']" />
    </Suspense>
    <Suspense>
      <FormKitKitchenSink :schemas="['form/tshirt']" />
    </Suspense>
    <Suspense>
      <FormKitKitchenSink :schemas="['form/survey']" />
    </Suspense>
    <Suspense>
      <FormKitKitchenSink :schemas="['form/registration']" />
    </Suspense>
    <Suspense>
      <FormKitKitchenSink :schemas="['form/application']" />
    </Suspense>
    <Suspense>
      <FormKitKitchenSink :pro="true" />
    </Suspense>
  </div>
</template>
