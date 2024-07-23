<script setup>
import CloseIc from "../UI/icons/CloseIc.vue";

import ToggleMenuBtn from "../UI/buttons/ToggleMenuBtn.vue";
import ToggleDarkThemeBtn from "../UI/buttons/ToggleDarkThemeBtn.vue";
import GetBrowserExtensionBtn from "../UI/buttons/GetBrowserExtensionBtn.vue";
import Logo from "../UI/Logo.vue";
import LinkWithImg from "../UI/LinkWithImg.vue";
import MenuCategoriesList from "../blocks/MenuCategoriesList.vue";

import Nav from "../blocks/Nav.vue";
import SocialsList from "../blocks/SocialsList.vue";

const props = defineProps({
  isMenuActive: Boolean
});

</script>

<template>
  <section 
    class="page-menu menu js-menu"
    :class="props.isMenuActive ? 'is-active': ''"
  >
    <h2 class="w3c">Menu</h2>

    <div class="menu-heading">
      <div class="row row-nowrap align-vertical-center">
        <ToggleMenuBtn class="menu-btn__toggler">
          <CloseIc />
        </ToggleMenuBtn>

        <Logo />

        <div class="menu-heading-btns row align-vertical-center row-nowrap">
          <GetBrowserExtensionBtn />
          <ToggleDarkThemeBtn />
        </div>
      </div>
    </div>
    <!-- menu-inner -->
    <div class="menu-inner styled-scroll">
      <div class="menu-inner-content">
        <div class="menu-center">
          <nav class="menu-center__nav menu-nav">
            <div class="menu-nav-top">
              <LinkWithImg
                href="/"
                title="Trending"
                imgSrc="../src/assets/img/menu/trending.svg"
                class="link-with-ic__trending"
              />

              <LinkWithImg
                href="/"
                title="Favorite"
                imgSrc="../src/assets/img/menu/favorite.svg"
                class="link-with-ic__favorite"
              />
            </div>

            <MenuCategoriesList />
          </nav>
        </div>

        <div class="menu-bottom">
          <Nav />
          <SocialsList />
        </div>
      </div>
    </div>
  </section>

  <div class="menu-overflow"></div>
</template>
