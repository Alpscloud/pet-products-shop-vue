<script setup>
import { DOMAIN_URL } from '@/config/api.js';

const props = defineProps({
  categoryCard: {
    type: Object,
    required: true,
    default: []
  }
});
</script>

<template>
  <article class="category-card__wrapper">
    <a :href="`${DOMAIN_URL}/category/${props.categoryCard.id}/${props.categoryCard.slug}/pages/1`" class="category-card">
      <span class="category-card__thumbnail">
        <img
          :src="`../../src/assets/img/cats/${props.categoryCard.slug.toLowerCase()}.png`"
          :alt="`${props.categoryCard.title} games`"
          loading="lazy"
          width="290"
          height="110"
        />
      </span>
      <span class="category-card__content">
        <h3 class="category-card__title">{{ props.categoryCard.title }}</h3>
        <span class="category-card__counter">{{ props.categoryCard.gamesCount || 0 }}</span>
      </span>
    </a>
  </article>
  <!-- //card -->
</template>
