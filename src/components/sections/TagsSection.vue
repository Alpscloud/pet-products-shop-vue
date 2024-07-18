<script setup>
import TagsList from '../blocks/TagsList.vue';

const props = defineProps({
	title: String
});
</script>

<template>
  <section class="sect__tags gutter-bottom">
    <h2 class="block-title" v-if="props.title">{{ props.title }}</h2>
    <TagsList />
  </section>
</template>
