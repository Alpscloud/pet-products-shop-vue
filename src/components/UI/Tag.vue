<script setup>
const props = defineProps({
  tag: Object,
  title: String,
  href: String,
});
</script>

<template>
  <a :href="props.href || `/${props.tag?.slug}`" class="tag">
    <slot></slot>
   {{ props.title || props.tag.title }}
  </a>
</template>
