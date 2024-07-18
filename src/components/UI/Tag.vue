<script setup>
const props = defineProps({
  title: String,
  href: String,
});
</script>

<template>
  <a :href="props.href" class="tag">
    <slot></slot>
   {{ props.title }}
  </a>
</template>
