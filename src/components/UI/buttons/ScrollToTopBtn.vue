<script setup>
import ArrowUpIc from '../icons/ArrowUpIc.vue'

const onScrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
	<button @click="onScrollToTop" type="button" class="scroll-up js-scroll-up-btn" aria-label="Scroll up">
		<span class="scroll-up-text">Scroll</span>
		<!-- arrows-up.svg -->
		<ArrowUpIc />
	</button>
</template>