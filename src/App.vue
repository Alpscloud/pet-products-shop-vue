<script setup>
import {
  ref, 
  onMounted, 
  provide
} from 'vue';
import Header from './components/sections/Header.vue';
import Menu from './components/sections/Menu.vue';
import CategoriesCardsCatalog from './components/sections/CategoriesCardsCatalog.vue';
import GamesCardsCatalog from './components/sections/GamesCardsCatalog.vue';
import TagsSection from './components/sections/TagsSection.vue';
import TextContentSection from './components/sections/TextContentSection.vue';
import Footer from './components/sections/Footer.vue';

const isDarkThemeActive = ref(JSON.parse(localStorage.getItem('isDarkThemeActive')) || false);
const isMenuActive = ref(false);

const toggleDarkTheme = () => {
  isDarkThemeActive.value = !isDarkThemeActive.value;
  document.querySelector('body').classList.toggle('is-dark');
  localStorage.setItem('isDarkThemeActive', isDarkThemeActive.value);
};

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
  document.querySelector('body').classList.toggle('is-toggled');
};

onMounted(() => {
  if (isDarkThemeActive.value) {
    document.querySelector('body').classList.add('is-dark');
  } else {
    document.querySelector('body').classList.remove('is-dark');
  }

});

provide('toggleDarkThemeAction', toggleDarkTheme);
provide('isDarkThemeActive', isDarkThemeActive);
provide('toggleMenuAction', toggleMenu);
provide('isMenuActive', isMenuActive);

</script>

<template>
  <!-- CONTENT WRAPPER -->
  <div class="content__wrapper">
    <!-- Header -->
    <Header />
    <!-- //Header -->

    <!-- Main -->
    <section class="main">
      <div class="page-row row row-nowrap">
        <!-- Menu -->
        <Menu :isMenuActive="isMenuActive" />
        <!-- //Menu -->

        <section class="page-content">
          <section class="games-catalog gutter-bottom">
            <CategoriesCardsCatalog title="Categories" permalinkHref="http://twitch.com" />
            <GamesCardsCatalog title="All Games" permalinkHref="http://google.com" />
          </section>
          <!-- //catalog -->

          <TagsSection title="Popular Tags" />

          <TextContentSection />

          <Footer />
        </section>
      </div>
    </section>
    <!-- //Main -->
  </div>
  <!-- //CONTENT WRAPPER -->
</template>
