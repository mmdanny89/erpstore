<template>
    <SfButton type="button" class="w-full" @click="count++" > Hello {{ count }}</SfButton>
  </template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';
import { ref } from 'vue'
const count = ref(0)
</script>