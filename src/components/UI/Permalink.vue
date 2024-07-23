<script setup>
const props = defineProps({
	permalinkHref: {
		type: String
	}
});
</script>

<template>
	<a v-if="props.permalinkHref" :href="props.permalinkHref" class="permalink">More</a>
</template>