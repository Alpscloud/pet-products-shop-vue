<script setup>
import {
  ref, 
  onMounted
} from 'vue';

import { API } from '@/config/api.js';
import Tag from '../UI/Tag.vue';

const tagsForPage = ref([]);

const getTagsForPage = async () => {
  let res = await fetch(API.getTagsForPageURL, {
		method: 'GET',
		headers: {
			'SiteId': API.siteID
		}
	});

  try {
    let tags = await res.json();
    tagsForPage.value = tags;
    console.log(tags);

  } catch (error) {
    throw new Error(error.message);
  }
}

onMounted(async () => {
  await getTagsForPage();
});
</script>

<template>
  <nav class="tags">
    <ul>
      <li 
        v-for="(tag, index) in tagsForPage" 
        :key="Number(tag.id)+Math.random()">
        <Tag :tag="tag" />
      </li>
    </ul>
  </nav>
</template>
