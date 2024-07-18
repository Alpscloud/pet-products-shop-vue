<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  class: String,
});
</script>

<template>
  <a :href="props.href" :title="props.title" :class="props.class" class="link-with-ic">
    <span class="link-with-ic__img">
      <img :src="props.imgSrc" loading="lazy" width="40" height="40" :alt="props.title" />
    </span>
		<span class="link-with-ic__counter" v-if="false">12</span>
    <span class="link-with-ic__text">{{ props.title }}</span>
  </a>
</template>
