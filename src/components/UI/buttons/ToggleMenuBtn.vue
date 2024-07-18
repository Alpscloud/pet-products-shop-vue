<script setup>
const props = defineProps({
  class: {
    type: String,
    default: 'btn-hamburger'
  }
});
</script>

<template>
  <button
    :class="props.class"
    class="btn-default js-toggle-menu-btn"
    type="button"
    aria-label="Open mobile menu"
  >
    <slot></slot>
  </button>
</template>
