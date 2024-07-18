<script setup>

import HamburgerDesktopIc from "../UI/icons/HamburgerDesktopIc.vue";
import HamburgerMobileIc from "../UI/icons/HamburgerMobileIc.vue";
import Logo from "../UI/Logo.vue";
import TagsSlider from "../blocks/TagsSlider.vue";
import ToggleDarkThemeBtn from "../UI/buttons/ToggleDarkThemeBtn.vue";
import GetBrowserExtensionBtn from "../UI/buttons/GetBrowserExtensionBtn.vue";
import ToggleMenuBtn from "../UI/buttons/ToggleMenuBtn.vue";

</script>

<template>
  <header class="header">
    <div class="row align-vertical-center header__row row-nowrap align-horisontal-between">

      <div class="header-logo row align-vertical-center row-nowrap">
        <ToggleMenuBtn>
          <HamburgerDesktopIc />
          <HamburgerMobileIc />
        </ToggleMenuBtn>
        <Logo />
      </div>

      <TagsSlider />

      <div class="header-tools row align-vertical-center align-horisontal-end">
        <GetBrowserExtensionBtn />
        <ToggleDarkThemeBtn />
      </div>

    </div>
  </header>
</template>
