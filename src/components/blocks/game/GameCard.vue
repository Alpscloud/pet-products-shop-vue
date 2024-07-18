<script setup>
import StarIc from '../../UI/icons/StarIc.vue';
import HeartIc from '../../UI/icons/HeartIc.vue';
</script>

<template>
  <article class="game-card__wrapper">
    <a href="page-game.html" class="game-card" title="Pixel Gun">
      <span
        class="game-card__thumbnail thumbnail bg"
        style="background-image: url('../../../src/assets/img/thumbnail.png')"
      >
        <!-- INSERT VIDEO IF NEEDED -->
      </span>

      <span class="game-card__content">
        <h3 class="game-card__title">
          <span
            >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun</span
          >
        </h3>

        <span class="game-rating">
          <span class="game-rating-value">
            7.3
            <!-- star.svg -->
            <StarIc />
          </span>
          <span class="game-rating-feedbacks">324,321</span>
        </span>
      </span>
    </a>

    <!-- Add 'is-active' class when the game is selected by user -->
    <button
      class="btn-favorite js-add-game-to-favorite-btn"
      type="button"
      aria-label="Add game to favorite list"
    >
      <!-- heart.svg -->
      <HeartIc />
    </button>
  </article>
</template>
