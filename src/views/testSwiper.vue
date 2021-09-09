<template>
  <div class="warpper">
    <div v-swiper="swiperOption" class="ml-auto relative swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :class="`{img-${n}}`" v-for="n in 5" :key="n">
          <div
            class="imgage"
            :style="{ backgroundImage: `url(images/articles/${n}.jpg)` }"
          >
            <div class="ratio"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination">55</div>
    <div class="swiper-button-prev" slot="button-prev">prev</div>
    <div class="swiper-button-next" slot="button-next">next</div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";

import Swiper, { Autoplay, Navigation, Pagination } from "swiper";

Swiper.use([Autoplay, Navigation, Pagination]);

export default {
  name: "testSwiper",
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        speed: 1500,
        loop: true,
        autoplay: false,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          dynamicBullets: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
// @import url('swiper/scss/pagination');

.swiper-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  overflow: hidden;
}

.swiper-wrapper {
  display: flex;
  flex-direction: row;

  .swiper-slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .imgage {
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      .ratio {
        padding-top: 100%;
        position: relative;
      }
    }
  }
}

.warpper {
  width: 600px;
  margin: 0 auto;
  position: relative;
  .swiper-button-prev {
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: -100px;
  }
  .swiper-button-next {
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    right: -100px;
  }
}
$themeColor: #007aff !default;
$colors: (
  'white': #ffffff,
  'black': #000000,
) !default;

:root {
  /*
  --swiper-pagination-color: var(--swiper-theme-color);
  */
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
  background-color: orangered;
  left: 0;
right: 0;
bottom: 0;
  // transform: translateX(50%);
  margin: auto;
  height: 50px;
  &.swiper-pagination-hidden {
    opacity: 0;
  }
}
/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 10px;
  left: 0;
  width: 100%;

}
/* Bullets */
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
  
  .swiper-pagination-bullet { //رنگ دایره بزرگه
    transform: scale(0.33);
    position: relative;
      background-color: orchid;
  width: 30px;
  height: 30px;
  }
  .swiper-pagination-bullet-active {
    transform: scale(1);
  }
  .swiper-pagination-bullet-active-main {
    transform: scale(1);
  }
  .swiper-pagination-bullet-active-prev {
    transform: scale(0.66);
  }
  .swiper-pagination-bullet-active-prev-prev {
    transform: scale(0.33);
  }
  .swiper-pagination-bullet-active-next {
    transform: scale(0.66);
  }
  .swiper-pagination-bullet-active-next-next {
    transform: scale(0.33);
  }
}
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 50%;
  background: #000;
  opacity: 0.2;
  @at-root button#{&} {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    appearance: none;
  }
  .swiper-pagination-clickable & {
    cursor: pointer;
  }

  &:only-child {
    display: none !important;
  }
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}

.swiper-container-vertical {
  > .swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    transform: translate3d(0px, -50%, 0);
    .swiper-pagination-bullet {
      margin: 6px 0;
      display: block;
    }
    &.swiper-pagination-bullets-dynamic {
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      .swiper-pagination-bullet {
        display: inline-block;
        transition: 200ms transform, 200ms top;
      }
    }
  }
}
.swiper-container-horizontal {
  > .swiper-pagination-bullets {
    .swiper-pagination-bullet {
      margin: 0 4px;
    }
    &.swiper-pagination-bullets-dynamic {
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      .swiper-pagination-bullet {
        transition: 200ms transform, 200ms left;
      }
    }
  }
  &.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transition: 200ms transform, 200ms right;
  }
}
/* Progress */
.swiper-pagination-progressbar {
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
  .swiper-pagination-progressbar-fill {
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    transform-origin: left top;
  }
  .swiper-container-rtl & .swiper-pagination-progressbar-fill {
    transform-origin: right top;
  }
  .swiper-container-horizontal > &,
  .swiper-container-vertical > &.swiper-pagination-progressbar-opposite {
    width: 100%;
    height: 4px;
    left: 0;
    top: 0;
  }
  .swiper-container-vertical > &,
  .swiper-container-horizontal > &.swiper-pagination-progressbar-opposite {
    width: 4px;
    height: 100%;
    left: 0;
    top: 0;
  }
}
@each $paginationColorName, $paginationColorValue in $colors {
  .swiper-pagination-#{'' + $paginationColorName} {
    --swiper-pagination-color: #{'' + $paginationColorValue};
  }
}
.swiper-pagination-lock {
  display: none;
}

</style>
