<script setup>
import Header from './components/sections/Header.vue';
import Menu from './components/sections/Header.vue';
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
          <!-- <style>
            .games-grid {
              display: flex;
              flex-wrap: wrap;
              align-items: flex-start;
              gap: 16px;
            }

            .is-large {
              width: 290px;
              height: 290px;
              position: relative;
            }

            .is-small {
              position: relative;
              width: 90px;
              height: 90px;
            }

            .is-medium {
              position: relative;
              width: 190px;
              height: 190px;
            }
          </style> -->

          <div class="games-grid-wrapper">
            <div class="games-grid-item">
              <div
                class="games-catalog-block__heading row row-nowrap align-vertical-center align-horisontal-start"
              >
                <h2 class="block-title">Most Addicting Games</h2>
                <a href="page-category.html" class="permalink">More</a>
              </div>

              <div class="games-grid">
                <!-- 'is-anim-lighting' for lighting svg animation, 'is-anim-shake' for shake animate, 'is-anim-pulse' for pulse animation -->
                <!-- Tile -->
                <article class="game-tile is-large is-anim-lighting">
                  <a href="page-game.html" class="game-tile-content">
                    <span
                      class="game-tile-media"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <video autoplay loop muted>
                        <source
                          src="video/video.mp4"
                          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                        />
                        <source
                          src="video/video.webm"
                          type='video/webm; codecs="vp8, vorbis"'
                        />
                      </video>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="game-tile__lighting"
                      >
                        <rect x="0" y="0"></rect>
                      </svg>
                    </span>

                    <span class="game-tile__title">
                      <span class="game-tile__title-text"
                        >Bascketball Game</span
                      >
                    </span>
                  </a>

                  <!-- Add 'is-active' class when the game is selected by user -->
                  <button
                    class="btn-favorite js-add-game-to-favorite-btn"
                    type="button"
                    aria-label="Add game to favorite list"
                  >
                    <!-- heart.svg -->
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //tile -->

                <!-- Tile -->
                <article class="game-tile is-medium is-anim-shake">
                  <span class="label-new"></span>
                  <a href="page-game.html" class="game-tile-content">
                    <span
                      class="game-tile-media"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <video autoplay loop muted>
                        <source
                          src="video/video.mp4"
                          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                        />
                        <source
                          src="video/video.webm"
                          type='video/webm; codecs="vp8, vorbis"'
                        />
                      </video>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="game-tile__lighting"
                      >
                        <rect x="0" y="0"></rect>
                      </svg>
                    </span>

                    <span class="game-tile__title">
                      <span class="game-tile__title-text"
                        >Bascketball Game</span
                      >
                    </span>
                  </a>

                  <!-- Add 'is-active' class when the game is selected by user -->
                  <button
                    class="btn-favorite js-add-game-to-favorite-btn"
                    type="button"
                    aria-label="Add game to favorite list"
                  >
                    <!-- heart.svg -->
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //tile -->

                <!-- Tile -->
                <article class="game-tile is-small is-anim-pulse">
                  <a href="page-game.html" class="game-tile-content">
                    <span
                      class="game-tile-media"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <video autoplay loop muted>
                        <source
                          src="video/video.mp4"
                          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                        />
                        <source
                          src="video/video.webm"
                          type='video/webm; codecs="vp8, vorbis"'
                        />
                      </video>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="game-tile__lighting"
                      >
                        <rect x="0" y="0"></rect>
                      </svg>
                    </span>

                    <span class="game-tile__title">
                      <span class="game-tile__title-text"
                        >Bascketball Game</span
                      >
                    </span>
                  </a>

                  <!-- Add 'is-active' class when the game is selected by user -->
                  <button
                    class="btn-favorite js-add-game-to-favorite-btn"
                    type="button"
                    aria-label="Add game to favorite list"
                  >
                    <!-- heart.svg -->
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //tile -->
              </div>
            </div>

            <div class="games-grid-item">
              <div
                class="games-catalog-block__heading row row-nowrap align-vertical-center align-horisontal-start"
              >
                <h2 class="block-title">Most Playing Games</h2>
                <a href="page-category.html" class="permalink">More</a>
              </div>

              <div class="games-grid">
                <!-- 'is-anim-lighting' for lighting svg animation, 'is-anim-shake' for shake animate, 'is-anim-pulse' for pulse animation -->
                <!-- Tile -->
                <article class="game-tile is-large is-anim-lighting">
                  <a href="page-game.html" class="game-tile-content">
                    <span
                      class="game-tile-media"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <video autoplay loop muted>
                        <source
                          src="video/video.mp4"
                          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                        />
                        <source
                          src="video/video.webm"
                          type='video/webm; codecs="vp8, vorbis"'
                        />
                      </video>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="game-tile__lighting"
                      >
                        <rect x="0" y="0"></rect>
                      </svg>
                    </span>

                    <span class="game-tile__title">
                      <span class="game-tile__title-text"
                        >Bascketball Game</span
                      >
                    </span>
                  </a>

                  <!-- Add 'is-active' class when the game is selected by user -->
                  <button
                    class="btn-favorite js-add-game-to-favorite-btn"
                    type="button"
                    aria-label="Add game to favorite list"
                  >
                    <!-- heart.svg -->
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //tile -->

                <!-- Tile -->
                <article class="game-tile is-medium is-anim-shake">
                  <span class="label-new"></span>
                  <a href="page-game.html" class="game-tile-content">
                    <span
                      class="game-tile-media"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <video autoplay loop muted>
                        <source
                          src="video/video.mp4"
                          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                        />
                        <source
                          src="video/video.webm"
                          type='video/webm; codecs="vp8, vorbis"'
                        />
                      </video>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="game-tile__lighting"
                      >
                        <rect x="0" y="0"></rect>
                      </svg>
                    </span>

                    <span class="game-tile__title">
                      <span class="game-tile__title-text"
                        >Bascketball Game</span
                      >
                    </span>
                  </a>

                  <!-- Add 'is-active' class when the game is selected by user -->
                  <button
                    class="btn-favorite js-add-game-to-favorite-btn"
                    type="button"
                    aria-label="Add game to favorite list"
                  >
                    <!-- heart.svg -->
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //tile -->

                <!-- Tile -->
                <article class="game-tile is-small is-anim-pulse">
                  <a href="page-game.html" class="game-tile-content">
                    <span
                      class="game-tile-media"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <video autoplay loop muted>
                        <source
                          src="video/video.mp4"
                          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                        />
                        <source
                          src="video/video.webm"
                          type='video/webm; codecs="vp8, vorbis"'
                        />
                      </video>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="game-tile__lighting"
                      >
                        <rect x="0" y="0"></rect>
                      </svg>
                    </span>

                    <span class="game-tile__title">
                      <span class="game-tile__title-text"
                        >Bascketball Game</span
                      >
                    </span>
                  </a>

                  <!-- Add 'is-active' class when the game is selected by user -->
                  <button
                    class="btn-favorite js-add-game-to-favorite-btn"
                    type="button"
                    aria-label="Add game to favorite list"
                  >
                    <!-- heart.svg -->
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //tile -->
              </div>
            </div>

            <div class="games-grid-item">
              <div
                class="games-catalog-block__heading row row-nowrap align-vertical-center align-horisontal-start"
              >
                <h2 class="block-title">New Games</h2>
                <a href="page-category.html" class="permalink">More</a>
              </div>

              <div class="games-grid">
                <!-- 'is-anim-lighting' for lighting svg animation, 'is-anim-shake' for shake animate, 'is-anim-pulse' for pulse animation -->
                <!-- Tile -->
                <article class="game-tile is-large is-anim-lighting">
                  <a href="page-game.html" class="game-tile-content">
                    <span
                      class="game-tile-media"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <video autoplay loop muted>
                        <source
                          src="video/video.mp4"
                          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                        />
                        <source
                          src="video/video.webm"
                          type='video/webm; codecs="vp8, vorbis"'
                        />
                      </video>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="game-tile__lighting"
                      >
                        <rect x="0" y="0"></rect>
                      </svg>
                    </span>

                    <span class="game-tile__title">
                      <span class="game-tile__title-text"
                        >Bascketball Game</span
                      >
                    </span>
                  </a>

                  <!-- Add 'is-active' class when the game is selected by user -->
                  <button
                    class="btn-favorite js-add-game-to-favorite-btn"
                    type="button"
                    aria-label="Add game to favorite list"
                  >
                    <!-- heart.svg -->
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //tile -->

                <!-- Tile -->
                <article class="game-tile is-medium is-anim-shake">
                  <span class="label-new"></span>
                  <a href="page-game.html" class="game-tile-content">
                    <span
                      class="game-tile-media"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <video autoplay loop muted>
                        <source
                          src="video/video.mp4"
                          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                        />
                        <source
                          src="video/video.webm"
                          type='video/webm; codecs="vp8, vorbis"'
                        />
                      </video>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="game-tile__lighting"
                      >
                        <rect x="0" y="0"></rect>
                      </svg>
                    </span>

                    <span class="game-tile__title">
                      <span class="game-tile__title-text"
                        >Bascketball Game</span
                      >
                    </span>
                  </a>

                  <!-- Add 'is-active' class when the game is selected by user -->
                  <button
                    class="btn-favorite js-add-game-to-favorite-btn"
                    type="button"
                    aria-label="Add game to favorite list"
                  >
                    <!-- heart.svg -->
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //tile -->

                <!-- Tile -->
                <article class="game-tile is-small is-anim-pulse">
                  <a href="page-game.html" class="game-tile-content">
                    <span
                      class="game-tile-media"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <video autoplay loop muted>
                        <source
                          src="video/video.mp4"
                          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                        />
                        <source
                          src="video/video.webm"
                          type='video/webm; codecs="vp8, vorbis"'
                        />
                      </video>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="game-tile__lighting"
                      >
                        <rect x="0" y="0"></rect>
                      </svg>
                    </span>

                    <span class="game-tile__title">
                      <span class="game-tile__title-text"
                        >Bascketball Game</span
                      >
                    </span>
                  </a>

                  <!-- Add 'is-active' class when the game is selected by user -->
                  <button
                    class="btn-favorite js-add-game-to-favorite-btn"
                    type="button"
                    aria-label="Add game to favorite list"
                  >
                    <!-- heart.svg -->
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //tile -->
              </div>
            </div>
          </div>

          <section class="games-catalog gutter-bottom">
            <div class="games-catalog-block">
              <div
                class="games-catalog-block__heading row row-nowrap align-vertical-center align-horisontal-start"
              >
                <h2 class="block-title">Categories</h2>
                <a href="page-category.html" class="permalink">More</a>
              </div>

              <div class="categories-cards row align-horisontal-start">
                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/popular.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="Popular games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">Popular</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->

                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/arcade.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="Arcade games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">Arcade</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->

                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/adventure.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="Adventure games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">Adventure</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->

                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/fight.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="Fight & Battle games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">Fight & Battle</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->

                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/fun.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="Funny & Crazy games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">Funny & Crazy</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->

                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/2player.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="2 Player games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">2 Player</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->

                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/driving.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="Driving & Ricing games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">Driving & Ricing</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->

                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/shooting.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="Shooting games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">Shooting</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->

                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/sports.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="Sports games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">Sports</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->

                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/thinking.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="Thinking games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">Thinking</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->

                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/io.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="IO Games games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">IO Games</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->

                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/kids.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="For Kids games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">For Kids</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->

                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/girls.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="For Girls games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">For Girls</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->

                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/clicker.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="Clicker games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">Clicker</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->

                <article class="category-card__wrapper">
                  <a href="page-category.html" class="category-card">
                    <span class="category-card__thumbnail">
                      <img
                        src="img/cats/all.png"
                        loading="lazy"
                        width="290"
                        height="110"
                        alt="All Games games"
                      />
                    </span>
                    <span class="category-card__content">
                      <h3 class="category-card__title">All Games</h3>
                      <span class="category-card__counter">999</span>
                    </span>
                  </a>
                </article>
                <!-- //card -->
              </div>
            </div>
            <!-- //catalog block -->

            <div class="games-catalog-block">
              <div
                class="games-catalog-block__heading row row-nowrap align-vertical-center align-horisontal-start"
              >
                <h2 class="block-title">All Games</h2>
                <a href="page-category.html" class="permalink">More</a>
              </div>

              <div
                class="games-cards games-cards-homepage row align-horisontal-start"
              >
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
                <article class="game-card__wrapper">
                  <a href="page-game.html" class="game-card" title="Pixel Gun">
                    <span
                      class="game-card__thumbnail thumbnail bg"
                      style="background-image: url('img/thumbnail.png')"
                    >
                      <!-- INSERT VIDEO IF NEEDED -->
                    </span>

                    <span class="game-card__content">
                      <h3 class="game-card__title">
                        <span
                          >Pixel Gun Pixel Gun Pixel Gun Pixel Gun Pixel Gun
                          Pixel Gun Pixel Gun</span
                        >
                      </h3>

                      <span class="game-rating">
                        <span class="game-rating-value">
                          7.3
                          <!-- star.svg -->
                          <svg
                            viewBox="0 0 15 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.72917 1.60319C6.80009 1.45967 6.90987 1.33881 7.0461 1.2543C7.18233 1.16979 7.33956 1.125 7.5 1.125C7.66044 1.125 7.81767 1.16979 7.9539 1.2543C8.09013 1.33881 8.19991 1.45967 8.27083 1.60319L9.92937 4.9541L13.6392 5.4923C13.7979 5.51529 13.947 5.58212 14.0696 5.68522C14.1922 5.78832 14.2834 5.92359 14.333 6.07572C14.3825 6.22785 14.3884 6.39077 14.3499 6.54605C14.3114 6.70133 14.2301 6.84277 14.1152 6.95436L11.4306 9.56311L12.0648 13.2483C12.0919 13.4059 12.0742 13.5679 12.0138 13.716C11.9534 13.8641 11.8526 13.9924 11.7229 14.0864C11.5932 14.1803 11.4397 14.2363 11.2797 14.2478C11.1198 14.2593 10.9598 14.226 10.8179 14.1515L7.50086 12.4118L4.18207 14.1515C4.04011 14.2258 3.88015 14.259 3.72028 14.2473C3.5604 14.2356 3.40699 14.1796 3.27736 14.0856C3.14774 13.9915 3.04708 13.8632 2.98676 13.7151C2.92644 13.5669 2.90887 13.405 2.93602 13.2474L3.56936 9.56311L0.884771 6.95436C0.769874 6.84277 0.688586 6.70133 0.650103 6.54605C0.611621 6.39077 0.617479 6.22785 0.667015 6.07572C0.716552 5.92359 0.80779 5.78832 0.930407 5.68522C1.05302 5.58212 1.20213 5.51529 1.36085 5.4923L5.07063 4.95496L6.72917 1.60233V1.60319Z"
                            />
                          </svg>
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
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8.36639 16.0114L8.36495 16.0101C6.02771 13.901 4.16861 12.2185 2.88213 10.6523C1.60648 9.09919 1 7.78386 1 6.42596C1 4.21652 2.72449 2.5 4.95 2.5C6.2155 2.5 7.44531 3.09142 8.24273 4.01602L9 4.89405L9.75727 4.01602C10.5547 3.09142 11.7845 2.5 13.05 2.5C15.2755 2.5 17 4.21652 17 6.42596C17 7.78386 16.3935 9.09919 15.1179 10.6523C13.8314 12.2185 11.9723 13.901 9.63505 16.0101L9.63361 16.0114L9 16.5855L8.36639 16.0114Z"
                        />
                      </g>
                    </svg>
                  </button>
                </article>
                <!-- //game card -->
              </div>
            </div>
            <!-- //catalog block -->
          </section>
          <!-- //catalog -->

          <section class="sect__tags gutter-bottom">
            <h2 class="block-title">Popular Tags</h2>
            <nav class="tags">
              <ul>
                <li><a href="#" class="tag">Unblocked</a></li>
                <li><a href="#" class="tag">School games</a></li>
                <li><a href="#" class="tag">War game</a></li>
                <li><a href="#" class="tag">Soccer</a></li>
                <li><a href="#" class="tag">Driving</a></li>
                <li><a href="#" class="tag">RPG</a></li>
                <li><a href="#" class="tag">Football games</a></li>
                <li><a href="#" class="tag">Papas</a></li>
                <li><a href="#" class="tag">Kids</a></li>
                <li><a href="#" class="tag">Bascketball</a></li>
                <li><a href="#" class="tag">Ninja</a></li>
                <li><a href="#" class="tag">Unblocked</a></li>
                <li><a href="#" class="tag">School games</a></li>
                <li><a href="#" class="tag">War game</a></li>
                <li><a href="#" class="tag">Soccer</a></li>
                <li><a href="#" class="tag">Driving</a></li>
                <li><a href="#" class="tag">RPG</a></li>
                <li><a href="#" class="tag">Football games</a></li>
                <li><a href="#" class="tag">Papas</a></li>
                <li><a href="#" class="tag">Kids</a></li>
                <li><a href="#" class="tag">Bascketball</a></li>
                <li><a href="#" class="tag">Ninja</a></li>
                <li><a href="#" class="tag">Unblocked</a></li>
                <li><a href="#" class="tag">School games</a></li>
                <li><a href="#" class="tag">War game</a></li>
                <li><a href="#" class="tag">Soccer</a></li>
                <li><a href="#" class="tag">Driving</a></li>
                <li><a href="#" class="tag">RPG</a></li>
                <li><a href="#" class="tag">Football games</a></li>
                <li><a href="#" class="tag">Papas</a></li>
                <li><a href="#" class="tag">Kids</a></li>
                <li><a href="#" class="tag">Bascketball</a></li>
                <li><a href="#" class="tag">Ninja</a></li>
              </ul>
            </nav>
          </section>

          <section class="sect__text">
            <article class="content text-content">
              <h1>Free Unblocked Online Games - Play on Game CHY</h1>
              <p>
                On GameCHY.com, we have the best selection of free online games
                that allow endless fun and excitement either when flying solo or
                with a group of friends looking to spend quality time gaming. No
                downloads, logins, and pesky pop-ups—our games are ready right
                at the click. Click and Play!
              </p>
              <h2>Why Choose GameCHY.com?</h2>
              <p>
                Instant Play, No Hassle: With our instant play feature, dive
                into the action straight away. No download or subscription is
                needed here. Just pick a game and start playing instantly.<br />
                Cross-Platform Fun: You can play our games with a desktop,
                tablet, or mobile on any device. Play all your favorite games in
                comfort, on the move, or anywhere else you like.<br />
                A Game for Everyone: We offer a wide variety of games in our
                catalog to colleagues who are gamers aged all the way from young
                ones to older people and even game lovers of all tastes. These
                include action games that will leave you on the edge of your
                seat and others like teasing puzzles for relaxation purposes.
                Our Game Selection Our gaming platform is always updated and
                full of new games from talented developers. Some of the popular
                titles are fan favorites like Crossy Road, Stickman Hook, Slope,
                and Doodle Jump. We offer timeless classic games such as Fireboy
                and Watergirl, Troll Face Quest, and Bob the Robber. You will be
                provided with more than 1000 game titles to play with a
                different one each day.
              </p>
              <h2>Popular Categories</h2>
              <p>
                Not sure where to begin? Check out our most popular categories:
              </p>
              <ul>
                <li>
                  Puzzle Games: Keep your brain active and indulge in stacks of
                  exciting puzzles.
                </li>
                <li>
                  .io Games: Join other players from across the world and engage
                  in live action .io games.
                </li>
                <li>
                  2 Player Games: Share some playful competition with a fellow
                  player or friend using the heaps of exciting two-player games.
                </li>
                <li>
                  Car Games: Fire your engines to race down the tracks towards
                  the finish line.
                </li>
                <li>
                  Shooting Games: Show your cunning sharp shooting and fast
                  reflexes in various shooting games.
                </li>
                <li>
                  Shooting Games: Show your cunning sharp shooting and fast
                  reflexes in various shooting games.
                </li>
              </ul>
              <p>
                Join the Community<br />
                GameCHY.com is so much more than a game site. It is a living
                gaming community. Make an account and log in to play with other
                gamers, to show off your high scores of the highest levels and
                to join in for a good multi-player game. Join the action with
                games like Family Barn and Goodgame Empire that have lively
                communities and a number of social aspects.
              </p>
              <h2>About Us</h2>
              <p>
                Since our establishment, millions of gamers from all over the
                world have visited GameCHY.com on a monthly basis. Hosting a
                diversified game collection that is fun simply made us players'
                favorite among people of all ages. From casual games to unwind
                to highly competitive challenges, you name it, the fun lies here
                at GameCHY.com. What else are you waiting for? Begin your gaming
                journey right now and find out why GameCHY.com has been your
                best source of free online games. Happy gaming!
              </p>
            </article>
          </section>

          <footer class="footer">
            <div
              class="footer__row row align-vertical-center row-nowrap align-horisontal-between"
            >
              <div class="footer-logo row align-vertical-center row-nowrap">
                <a href="index.html" class="logo">
                  <img
                    src="img/logo-text.svg"
                    loading="lazy"
                    width="110"
                    height="34"
                    alt=""
                    class="logo-text"
                  />
                  <img
                    src="img/logo.svg"
                    loading="lazy"
                    width="83"
                    height="48"
                    alt=""
                    class="logo-figure"
                  />
                </a>
                <ul class="socials">
                  <li>
                    <a href="#" rel="nofollow noopener" aria-label="Copy link">
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1491 1.61915C13.4995 1.77645 12.8595 2.29794 12.5816 2.8963C12.4041 3.27868 12.3437 3.53497 12.3437 3.9063C12.3437 4.12656 12.3643 4.3045 12.4174 4.49019C12.4556 4.62386 12.5107 4.76154 12.5872 4.92192C12.7338 5.22946 12.9571 5.50739 13.226 5.72454C13.3641 5.83597 13.5141 5.93139 13.6719 6.00661C14.0584 6.19087 14.3086 6.25005 14.7007 6.25005C15.748 6.25005 16.7052 5.4852 16.9721 4.4352C17.0415 4.16204 17.0488 3.72188 16.9887 3.42969C16.8522 2.76626 16.3134 2.08637 15.6975 1.80044C15.518 1.71708 15.2779 1.62946 15.1641 1.60571C14.8949 1.54958 14.4099 1.55598 14.1491 1.61915Z"
                        />
                        <path
                          d="M4.7741 7.7129C4.12445 7.8702 3.48445 8.39169 3.20664 8.99004C3.0291 9.37243 2.96875 9.62872 2.96875 10C2.96875 10.3789 3.02953 10.6325 3.21219 11.0157C3.43398 11.481 3.83152 11.8786 4.29687 12.1004C4.6834 12.2846 4.93355 12.3438 5.32574 12.3438C5.83979 12.3438 6.33214 12.1595 6.73181 11.8477C7.10737 11.5546 7.40109 11.149 7.55406 10.6777C7.56993 10.6288 7.58429 10.5792 7.59707 10.529C7.66652 10.2558 7.67379 9.81563 7.61367 9.52344C7.59858 9.45006 7.57856 9.37648 7.55406 9.30326C7.40807 8.86691 7.10295 8.44314 6.73181 8.14943C6.60211 8.04679 6.46435 7.96004 6.3225 7.89419C6.14297 7.81083 5.90293 7.72321 5.7891 7.69946C5.51992 7.64333 5.03492 7.64973 4.7741 7.7129Z"
                        />
                        <path
                          d="M14.1491 13.8066C13.8243 13.8853 13.502 14.0549 13.226 14.2797C12.9501 14.5046 12.7206 14.7846 12.5816 15.0838C12.5082 15.242 12.4548 15.3787 12.4174 15.5108C12.3645 15.698 12.3437 15.8761 12.3437 16.0938C12.3437 16.4726 12.4045 16.7263 12.5872 17.1094C12.809 17.5748 13.2065 17.9723 13.6719 18.1941C14.0584 18.3784 14.3086 18.4375 14.7007 18.4375C15.748 18.4375 16.7052 17.6727 16.9721 16.6227C17.0415 16.3495 17.0488 15.9094 16.9887 15.6172C16.8522 14.9538 16.3134 14.2739 15.6975 13.9879C15.518 13.9046 15.2779 13.817 15.1641 13.7932C14.8949 13.7371 14.4099 13.7435 14.1491 13.8066Z"
                        />
                        <path
                          d="M13.226 5.72454L11.9134 6.67376L11.7673 6.76297C11.5442 6.89915 8.9666 8.52231 8.95223 8.53571L7.55406 9.30326C7.40807 8.86691 7.10295 8.44314 6.73181 8.14943L8.08754 7.23337L8.21367 7.15801C8.37863 7.05946 11.0313 5.38692 11.0478 5.37106L12.4174 4.49019C12.4556 4.62386 12.5107 4.76154 12.5872 4.92192C12.7338 5.22946 12.9571 5.50739 13.226 5.72454ZM8.08754 12.7667L8.21367 12.8421C8.37863 12.9406 11.0313 14.6132 11.0478 14.629L12.4174 15.5108C12.4548 15.3787 12.5082 15.242 12.5816 15.0838C12.7206 14.7846 12.9501 14.5046 13.226 14.2797L11.9125 13.3271L11.7863 13.2518C11.6314 13.1594 8.9698 11.4807 8.95223 11.4644L7.55406 10.6777C7.40109 11.149 7.10737 11.5546 6.73181 11.8477L8.08754 12.7667Z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="nofollow noopener" aria-label="Facebook">
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6667 11.5H14.0476L15 7.5H11.6667V5.5C11.6667 4.47 11.6667 3.5 13.5714 3.5H15V0.14C14.6895 0.0970001 13.5171 0 12.279 0C9.69333 0 7.85714 1.657 7.85714 4.7V7.5H5V11.5H7.85714V20H11.6667V11.5Z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="nofollow noopener" aria-label="X">
                      <svg
                        viewBox="0 0 20 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.43063 0.151855H0.748535L7.64777 9.54796L1.16906 17.3333H4.11273L9.02762 11.4272L13.3643 17.3333H15.4669H17.149H17.5695H19.2516L12.1553 7.66874L18.4106 0.151855H15.4669L10.7754 5.78952L6.63588 0.151855H4.53326H2.85116H2.43063Z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="nofollow noopener" aria-label="WhatsApp">
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            d="M9.29683 0.0244166C5.05921 0.340393 1.50335 3.1577 0.527374 6.97246C0.313312 7.8093 0.25757 8.24703 0.256359 9.10137C0.254367 10.5293 0.519757 11.6701 1.15148 12.949C1.63577 13.9295 2.22331 14.7286 3.02366 15.4953L3.49605 15.9479L3.51558 17.9654L3.53511 19.9829L5.48593 18.9694L7.43675 17.9559L7.86874 18.0396C8.55429 18.1725 8.78941 18.2023 9.43652 18.2385C13.067 18.4415 16.4759 16.7525 18.382 13.8062C19.0182 12.823 19.4659 11.6314 19.673 10.3709C19.7776 9.73449 19.7696 8.47196 19.6569 7.81231C19.4605 6.66305 19.1198 5.7109 18.5708 4.77715C17.0878 2.25442 14.5187 0.566213 11.4761 0.115002C10.9694 0.0398462 9.76269 -0.01031 9.29683 0.0244166ZM11.4894 8.61156C11.7084 8.46203 12.5396 7.88797 13.3364 7.3359L14.7851 6.33215L15.3023 6.84672L15.8196 7.36133L15.6308 7.5575C15.5269 7.66543 14.5931 8.6502 13.5556 9.7459C12.5181 10.8416 11.5661 11.8434 11.44 11.9721L11.2107 12.2062L10.0821 11.0781L8.95355 9.95L7.14683 11.248L5.34015 12.5459L4.83804 12.0449C4.56187 11.7694 4.33589 11.5294 4.33589 11.5116C4.33589 11.4939 5.34952 10.3892 6.58839 9.0568L8.84085 6.63418L9.96605 7.75887L11.0912 8.88352L11.4894 8.61156Z"
                          />
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="nofollow noopener" aria-label="Viber">
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            d="M9.31621 0.0259714C6.78508 0.23101 4.61101 1.22964 2.8709 2.98648C1.33058 4.54167 0.363981 6.5314 0.0709731 8.75019C0.00784806 9.22816 0.00835588 10.5818 0.0718324 11.0353C0.23277 12.1856 0.505387 13.1036 0.984411 14.1078L1.22019 14.6022L0.629098 17.2878C0.303981 18.7648 0.0425746 19.977 0.0481996 19.9816C0.0537856 19.9861 1.28007 19.7111 2.77324 19.3703L5.48808 18.7507L5.87316 18.9281C6.73211 19.3238 8.0032 19.666 8.97855 19.7642C9.93804 19.8607 11.1346 19.7942 12.0983 19.5908C15.5247 18.8673 18.3704 16.3214 19.4731 12.9928C19.8474 11.8627 19.9801 10.9319 19.9498 9.64863C19.929 8.76476 19.8656 8.2805 19.6694 7.50668C18.816 4.14 16.1439 1.38011 12.7955 0.407065C11.7166 0.0935105 10.3417 -0.0570755 9.31621 0.0259714ZM6.19656 5.87261C6.32468 5.74265 6.48582 5.62074 6.5623 5.59597C6.6375 5.5716 6.87738 5.555 7.09543 5.55914C7.53972 5.5675 7.6 5.59671 7.74047 5.87191C7.84406 6.07492 8.47582 7.60558 8.52191 7.76527C8.57781 7.95894 8.42961 8.24191 8.07191 8.62437C7.71996 9.0007 7.7084 9.05683 7.91242 9.39703C8.28382 10.0162 8.95449 10.7631 9.52336 11.1911C10.098 11.6234 11.0481 12.1002 11.2393 12.0522C11.3611 12.0216 11.4989 11.8776 11.9414 11.3182C12.1589 11.0433 12.3085 10.8893 12.3739 10.8729C12.5255 10.8348 12.7833 10.9395 13.7693 11.4393L14.6678 11.8947L14.6793 12.1802C14.6936 12.5357 14.5785 12.9836 14.4096 13.2291C14.1859 13.5541 13.5558 13.9616 13.1248 14.0598C12.6793 14.1613 11.9983 14.0962 11.3105 13.8864C9.80703 13.4278 8.81539 12.8427 7.77226 11.7985C6.78621 10.8114 5.86445 9.47269 5.59277 8.633C5.25433 7.58695 5.46754 6.61218 6.19656 5.87261Z"
                          />
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="nofollow noopener" aria-label="Discord">
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            d="M20.0002 10.0002C20.0002 10.4191 19.895 10.8002 19.6846 11.1433C19.4743 11.4864 19.1909 11.7483 18.8343 11.9288C18.9199 12.2611 18.9627 12.6079 18.9627 12.969C18.9627 14.0887 18.583 15.1253 17.8236 16.0788C17.0642 17.0323 16.0285 17.7853 14.7165 18.3379C13.4045 18.8905 11.9784 19.1668 10.4382 19.1668C8.89804 19.1668 7.47373 18.8905 6.16529 18.3379C4.85686 17.7853 3.82294 17.0323 3.06355 16.0788C2.30415 15.1253 1.92446 14.0887 1.92446 12.969C1.92446 12.6295 1.96367 12.29 2.04211 11.9505C1.67846 11.7699 1.38611 11.5045 1.16506 11.1541C0.944018 10.8038 0.833496 10.4191 0.833496 10.0002C0.833496 9.40783 1.04028 8.90038 1.45385 8.4778C1.86741 8.05523 2.37011 7.84394 2.96194 7.84394C3.56803 7.84394 4.08498 8.07148 4.51281 8.52656C6.06725 7.42858 7.90334 6.84348 10.0211 6.77124L11.2618 1.12605C11.2832 1.03214 11.3367 0.956296 11.4222 0.898508C11.5078 0.84072 11.6005 0.822661 11.7003 0.844331L15.647 1.72199C15.7754 1.45472 15.9679 1.23982 16.2246 1.07729C16.4813 0.914761 16.7629 0.833496 17.0695 0.833496C17.5116 0.833496 17.8895 0.990608 18.2033 1.30483C18.517 1.61906 18.6739 2.0001 18.6739 2.44796C18.6739 2.89582 18.517 3.27866 18.2033 3.5965C17.8895 3.91433 17.5116 4.07325 17.0695 4.07325C16.6275 4.07325 16.2513 3.91614 15.9411 3.60192C15.631 3.28769 15.4759 2.90665 15.4759 2.45879L11.9035 1.65698L10.7912 6.77124C12.9303 6.83625 14.7807 7.41414 16.3422 8.50489C16.7558 8.06425 17.2656 7.84394 17.8717 7.84394C18.4635 7.84394 18.9662 8.05523 19.3798 8.4778C19.7934 8.90038 20.0002 9.40783 20.0002 10.0002ZM5.30429 12.1564C5.30429 12.6042 5.45938 12.9871 5.76955 13.3049C6.07973 13.6228 6.45586 13.7817 6.89795 13.7817C7.34004 13.7817 7.71795 13.6228 8.03169 13.3049C8.34543 12.9871 8.5023 12.6042 8.5023 12.1564C8.5023 11.7085 8.34543 11.3275 8.03169 11.0133C7.71795 10.699 7.34004 10.5419 6.89795 10.5419C6.46299 10.5419 6.08864 10.7008 5.7749 11.0187C5.46116 11.3365 5.30429 11.7158 5.30429 12.1564ZM13.9678 16.0029C14.0462 15.9235 14.0854 15.8296 14.0854 15.7212C14.0854 15.6128 14.0462 15.5189 13.9678 15.4395C13.8965 15.3672 13.8074 15.3311 13.7004 15.3311C13.5934 15.3311 13.5008 15.3672 13.4223 15.4395C13.13 15.7429 12.6986 15.9668 12.1281 16.1113C11.5577 16.2557 10.9873 16.328 10.4168 16.328C9.84639 16.328 9.27596 16.2557 8.70552 16.1113C8.13508 15.9668 7.70369 15.7429 7.41134 15.4395C7.33291 15.3672 7.24021 15.3311 7.13325 15.3311C7.0263 15.3311 6.93717 15.3672 6.86586 15.4395C6.78743 15.5117 6.74821 15.6038 6.74821 15.7158C6.74821 15.8277 6.78743 15.9235 6.86586 16.0029C7.17247 16.3135 7.59495 16.5591 8.1333 16.7397C8.67165 16.9203 9.10839 17.0269 9.44352 17.0594C9.77865 17.0919 10.1031 17.1081 10.4168 17.1081C10.7306 17.1081 11.055 17.0919 11.3901 17.0594C11.7253 17.0269 12.162 16.9203 12.7004 16.7397C13.2387 16.5591 13.6612 16.3135 13.9678 16.0029ZM13.9357 13.7817C14.3778 13.7817 14.7539 13.6228 15.0641 13.3049C15.3743 12.9871 15.5294 12.6042 15.5294 12.1564C15.5294 11.7158 15.3725 11.3365 15.0588 11.0187C14.745 10.7008 14.3707 10.5419 13.9357 10.5419C13.4936 10.5419 13.1157 10.699 12.802 11.0133C12.4882 11.3275 12.3314 11.7085 12.3314 12.1564C12.3314 12.6042 12.4882 12.9871 12.802 13.3049C13.1157 13.6228 13.4936 13.7817 13.9357 13.7817Z"
                          />
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                class="scroll-up js-scroll-up-btn"
                aria-label="Scroll up"
              >
                <span class="scroll-up-text">Scroll</span>
                <!-- arrows-up.svg -->
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.99985 20.9998H14.9998M8.99985 11.9998H5.41385C5.2161 11.9998 5.0228 11.9411 4.85839 11.8313C4.69398 11.7214 4.56584 11.5652 4.49017 11.3825C4.4145 11.1998 4.3947 10.9988 4.43327 10.8048C4.47183 10.6109 4.56704 10.4327 4.70685 10.2928L11.2928 3.70685C11.4804 3.51938 11.7347 3.41406 11.9998 3.41406C12.265 3.41406 12.5193 3.51938 12.7068 3.70685L19.2928 10.2928C19.4327 10.4327 19.5279 10.6109 19.5664 10.8048C19.605 10.9988 19.5852 11.1998 19.5095 11.3825C19.4339 11.5652 19.3057 11.7214 19.1413 11.8313C18.9769 11.9411 18.7836 11.9998 18.5858 11.9998H14.9998V17.9998H8.99985V11.9998Z"
                  />
                </svg>
              </button>
            </div>
          </footer>
        </section>
      </div>
    </section>
    <!-- //Main -->

    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="game-tile-svg-gradient visually-hidden"
    >
      <defs>
        <linearGradient id="lgrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%"></stop>
          <stop offset="25%"></stop>
          <stop offset="50%"></stop>
          <stop offset="75%"></stop>
          <stop offset="100%"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
  <!-- //CONTENT WRAPPER -->
</template>
