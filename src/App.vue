<script setup>
import Header from './components/sections/Header.vue';
import Menu from './components/sections/Menu.vue';
import CategoriesCardsCatalog from './components/sections/CategoriesCardsCatalog.vue';
import GamesCardsCatalog from './components/sections/GamesCardsCatalog.vue';
import TagsSection from './components/sections/TagsSection.vue';
import TextContentSection from './components/sections/TextContentSection.vue';
import Footer from './components/sections/Footer.vue';
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
        <Menu />
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
