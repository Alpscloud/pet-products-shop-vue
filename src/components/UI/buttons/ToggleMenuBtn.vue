<script setup>
import { 
  ref, 
  watch, 
  inject 
} from 'vue';

const props = defineProps({
  class: {
    type: String,
    default: 'btn-hamburger'
  }
});

const toggleMenuAction = inject('toggleMenuAction');
const isMenuActive = ref(false);

watch(inject('isMenuActive'), (val) => {
  isMenuActive.value = val;
});

</script>

<template>
  <button
    @click="toggleMenuAction"
    :class="[
      props.class,
      isMenuActive ? 'is-active' : '',
      'btn-default',
      'js-toggle-menu-btn'
    ]"
    type="button"
    aria-label="Open mobile menu"
  >
    <slot></slot>
  </button>
</template>
