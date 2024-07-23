<script setup>
import {
  ref, 
  inject, 
  watch
} from 'vue';
import MoonIc from "../icons/MoonIc.vue";
import SunIc from "../icons/SunIc.vue";

const toggleDarkThemeAction = inject('toggleDarkThemeAction');
const isDarkThemeActive = ref(JSON.parse(localStorage.getItem('isDarkThemeActive')) || false);

watch(inject('isDarkThemeActive'), (val) => {
  isDarkThemeActive.value = val;
});

if (!toggleDarkThemeAction || !isDarkThemeActive) {
  throw new Error('Failed to inject provide values');
}

</script>

<template>

  <button
    @click="toggleDarkThemeAction"
    class="btn-theme-toggler btn-default js-toggle-darkmode-btn"
    :class="isDarkThemeActive ? 'is-active' : ''"
    aria-label="Toggle site theme"
    type="button"
  >
    <MoonIc v-if="!isDarkThemeActive" />
    <SunIc v-else />
  </button>
</template>
