<script setup>
import GamesCardsList from "../blocks/game/GamesCardsList.vue";
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
    <GamesCardsList />
  </div>
</template>
