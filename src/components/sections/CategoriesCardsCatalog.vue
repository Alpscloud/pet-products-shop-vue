<script setup>
import CategoriesCardsList from "../blocks/category/CategoriesCardsList.vue";
import CardsListHeading from "../blocks/CardsListHeading.vue";

const props = defineProps({
	title: String,
	permalinkHref: String
});
</script>

<template>
  <div class="games-catalog-block">
    <CardsListHeading
			:title="props.title"
			:permalinkHref="props.permalinkHref"
		/>
    <CategoriesCardsList />
  </div>
</template>
