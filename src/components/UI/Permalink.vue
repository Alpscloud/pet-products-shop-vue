<script setup>
const props = defineProps({
	permalinkHref: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true,
		default: 'More'
	}
});
</script>

<template>
	<a :href="props.permalinkHref" class="permalink">{{ props.title }}</a>
</template>