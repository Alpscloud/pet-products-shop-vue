<script setup>
const props = defineProps({
  title: String,
  href: String,
});
</script>

<template>
  <a
    :href="props.href"
    :aria-label="props.title"
    :title="props.title"
    rel="nofollow noopener"
  >
    <slot></slot>
  </a>
</template>
