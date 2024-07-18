<script setup>
import ArrowRightIc from "../UI/icons/ArrowRighIc.vue";
import SearchIc from "../UI/icons/SearchIc.vue";
import Tag from "../UI/Tag.vue";
</script>

<template>
  <div class="nav-categories__wrapper">
    <div class="nav-categories">
      <button
        class="nav-categories__btn nav-categories__btn-prev js-nav-cats-scroll-btn-prev"
        type="button"
        aria-label="Scroll categories left"
      >
        <!-- arrow-right.svg -->
        <ArrowRightIc />
      </button>
      <nav class="nav-categories__list js-scroll-nav-categories">
        <ul>
          <!-- search.svg -->
          <li>
            <Tag href="#" title="Unblocked">
              <SearchIc />
            </Tag>
          </li>
        </ul>
      </nav>
      <button
        class="nav-categories__btn nav-categories__btn-next js-nav-cats-scroll-btn-next"
        type="button"
        aria-label="Scroll categories right"
      >
        <!-- arrow-right.svg -->
        <ArrowRightIc />
      </button>
    </div>
  </div>
</template>
