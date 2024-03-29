<script setup>
import DefaultTheme from "vitepress/theme";
import commentaries from "./commentaries.vue";
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-after>
      <commentaries />
    </template>
  </Layout>
</template>
