<script setup>
import Logo from "../UI/Logo.vue";
import SocialsList from "../blocks/SocialsList.vue";
import ScrollToTopBtn from "../UI/buttons/ScrollToTopBtn.vue";
</script>

<template>
  <footer class="footer">
    <div class="footer__row row align-vertical-center row-nowrap align-horisontal-between">
      <div class="footer-logo row align-vertical-center row-nowrap">
        <Logo />
        <SocialsList />
      </div>

      <ScrollToTopBtn />
    </div>
  </footer>
</template>
