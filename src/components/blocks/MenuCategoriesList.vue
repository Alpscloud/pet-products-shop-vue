<script setup>
import {
  ref,
  onMounted
} from 'vue';

import { API } from '@/config/api.js';
import LinkWithImg from "../UI/LinkWithImg.vue";

let categoriesItems = ref([]);

const getCategories = async () => {
  let res = await fetch(API.getCategoriesURL, {
		method: 'GET',
		headers: {
			'SiteId': API.siteID
		}
	});
  try {
    let categories = await res.json();
    categoriesItems.value = categories;
  } catch (error) {
    throw new Error(error.message);
  } finally {

  }
};

onMounted(async () => {
  await getCategories();
});
</script>

<template>
  <ul>
    <li 
			v-for="(category, index) in categoriesItems"
			:key="Number(category.id)+Math.random()"
			>
      <LinkWithImg :category="category"/>
    </li>
    <!-- //menu li -->
  </ul>
</template>
