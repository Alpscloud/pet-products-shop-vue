<script setup>
import Permalink from '../UI/Permalink.vue';

const props = defineProps({
	title: String,
	permalinkHref: String
});
</script>

<template>
	<div class="games-catalog-block__heading row row-nowrap align-vertical-center align-horisontal-start">
    <h2 class="block-title">{{ props.title }}</h2>
    <Permalink :permalinkHref="props.permalinkHref" />
  </div>
</template>