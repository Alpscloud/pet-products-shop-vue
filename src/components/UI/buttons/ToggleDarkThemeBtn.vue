<script setup>
import MoonIc from "../icons/MoonIc.vue";
import SunIc from "../icons/SunIc.vue";

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
});

</script>
<template>

  <button
    class="btn-theme-toggler btn-default js-toggle-darkmode-btn"
    aria-label="Toggle site theme"
    type="button"
  >
    <!-- moon.svg -->
		<MoonIc v-if="!props.isActive" />
    <!-- sun.svg -->
    <SunIc v-else />
  </button>
</template>
