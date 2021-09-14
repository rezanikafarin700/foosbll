<template>
  <div class="parent">
    <div class="parent__intro">
      <div class="parent__title">لیست محصولات</div>
      <p class="parent__title--small">توضیحات مختصر</p>
      <p class="parent__text">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
      </p>
      <div class="parent__button-outline-green">
        خرید کن
      </div>
    </div>

    <div class="slider">
      <div v-swiper="swiperOption" class="ml-auto relative swiper-container" @slideChange="alert('ffff')">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            :class="`{img-${index + 1}}`"
            v-for="(product, index) in products"
            :key="index"
            
          >
            <div class="card">
              <div
                class="image"
                :style="{
                  backgroundImage: `url(http://localhost/Asia/public/images/products/${product.id}/${product.image})`,
                }"
              >
                <div class="ratio"></div>
              </div>
              <div class="intro">
                <div class="title dastnevis">{{ product.name }}</div>
                <div class="text dastnevis">مدل : {{ product.model }}</div>
                <div class="text dastnevis">جنس : {{ product.material }}</div>
                <div class="text dastnevis">اندازه : {{ product.size }}</div>
                <div class="text dastnevis">
                  قیمت : {{ product.price }} تومان
                </div>
                <div class="text dastnevis">
                  تخفیف : {{ product.discount }} درصد
                </div>
                <div class="text dastnevis">کد محصول : {{ product.code }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev" slot="button-prev">
        <div
          class="arrow"
          :style="{ backgroundImage: `url(icons/arrow-left.png)` }"
        ></div>
      </div>
      <div class="swiper-button-next" slot="button-next">
        <div
          class="arrow"
          :style="{ backgroundImage: `url(icons/arrow-right.png)` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";

import Swiper, { Autoplay, Navigation, Pagination } from "swiper";

Swiper.use([Autoplay, Navigation, Pagination]);

export default {
  name: "index",

  props: {
    products: [],
  },

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

<style scoped lang="scss">
.parent {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-between;

  &__intro {
    width: calc(40% - 2rem);
    flex: 0 0 auto;
    text-align: right;
    direction: rtl;
  }

  &__title {
    font-family: "minion-pro", serif;
    font-size: 34px;

    &--small {
      font-size: 1rem;
      font-weight: bold;
      font-family: "minion-pro", serif;
    }
  }

  &__text {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: "minion-pro", serif;
    line-height: 1.7;
    font-weight: 500;
    text-align: justify;
  }

  &__button-outline-green {
    border: 2px solid #1aa170;
    color: #1aa170;
    text-align: center;
    width: 50%;
    font-weight: bold;
    font-size: 18px;
    padding: 0.5rem 0;
    margin-top: 1rem;
    cursor: pointer;
  }

  .slider {
    background: #e5e5e5;
    width: calc(60% - 2rem);
    position: relative;
    display: flex;

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
        height: 100%;

        .card {
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: flex-start;

          .intro {
            width: calc(35% - 2rem);
            direction: rtl;
            text-align: right;
            user-select: none;
            margin: 1rem;

            .title {
              font-size: 22px;
              font-weight: bold;
              margin-bottom: 1rem;
            }

            .text {
              font-size: 1rem;
            }
          }

          .image {
            width: calc(60% - 2rem);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 4px;
            margin: 1rem;

            .ratio {
              padding-top: 80%;
              position: relative;
            }
          }
        }
      }
    }

    .swiper-button-prev {
      position: absolute;
      top: 50%;
      left: -25px;
      display: flex;
      justify-content: center;
      align-items: center;

      .arrow {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 8px;
        height: 16px;
      }
    }
    .swiper-button-next {
      position: absolute;
      top: 50%;
      right: -25px;
      display: flex;
      justify-content: center;
      align-items: center;

      .arrow {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 8px;
        height: 16px;
      }
    }
  }
}

.trnslate-enter {
  flex-direction: row-reverse;
}

@media (max-width: 950px) {
  .parent {
    &__intro {
      width: calc(100% - 2rem);
      margin-bottom: 2rem;
    }
  }

  .parent {
    .slider {
      width: calc(100% - 2rem);
    }
  }
}

@media (max-width: 650px) and (min-width: 426px) {
  .parent {
    .slider {
      .swiper-button-prev {
        display: none;
      }
      .swiper-button-next {
        display: none;
      }
      .swiper-wrapper {
        .swiper-slide {
          .card {
            .intro {
              white-space: nowrap;
              .title {
                font-size: 1rem;
              }
              .text {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 425px) {
  .parent {
    padding: 1rem;
    .slider {
      width: calc(100% - 2rem);
      .swiper-button-prev {
        display: none;
      }
      .swiper-button-next {
        display: none;
      }
      .swiper-wrapper {
        .swiper-slide {
          .card {
            .intro {
              text-align: center;
              width: calc(100% - 2rem);
              white-space: nowrap;
              .title {
                font-size: 1rem;
                margin: 0;
              }
              .text {
                font-size: 12px;
              }
            }
            .image {
              width: calc(100% - 2rem);
            }
          }
        }
      }
    }
  }
}
</style>
