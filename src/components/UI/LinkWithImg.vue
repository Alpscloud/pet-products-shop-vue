<script setup>
import { DOMAIN_URL } from '@/config/api.js';

const props = defineProps({
  category: {
    type: Object,
    required: false,
    default: null
  },
  href: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  imgSrc: {
    type: String,
    required: false,
  },
  class: String
});

</script>

<template>
  <a 
    :href="props.href || `${DOMAIN_URL}/category/${props.category?.id}/${props.category?.slug}/pages/1`" 
    :title="props.title"   
    :class="props.class" 
    class="link-with-ic">
    <span class="link-with-ic__img">
      <img 
        :src="props.imgSrc || `../../src/assets/img/menu/${props.category?.slug.toLowerCase()}.svg`" 
        :alt="props.title || props.category?.title" 
        loading="lazy" 
        width="40" 
        height="40" 
      />
    </span>
		<span class="link-with-ic__counter" v-if="false">0</span>
    <span class="link-with-ic__text">{{ props.title || props.category?.title }}</span>
  </a>
</template>
