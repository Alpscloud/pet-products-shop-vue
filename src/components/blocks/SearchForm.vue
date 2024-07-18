<script setup>
	import HamburgerMobileIc from '../UI/icons/HamburgerMobileIc.vue';
</script>

<template>
  <div class="header-search">
    <div class="search-form__wrapper">
      <form action="" class="search-form">
        <fieldset class="search-form__group">
          <input
            type="text"
            placeholder="Search..."
            class="search-form__input js-search-input"
            required
          />
          <span class="search-form__ic">
            <!-- search.svg -->
            <SearchIc />
          </span>
          <button
            class="search-form__btn search-form__btn-submit"
            type="submit"
            aria-label="Search games"
          >
            <!-- search.svg -->
            <SearchIc />
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</template>
