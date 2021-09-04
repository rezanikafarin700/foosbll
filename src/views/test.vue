<template>
	<div v-swiper="swiperOption" class=" ml-auto relative swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide img-1">AAAAA
				<!-- <img src="@/assets/img/slider-img-1.png" alt=""> -->
			</div>
			<div class="swiper-slide  img-2">BBBBB
				<!-- <img src="@/assets/img/slider-img-2.jpg" alt=""> -->
			</div>
			<div class="swiper-slide img-3">CCCCC
				<!-- <img src="@/assets/img/slider-img-3.jpg" alt=""> -->
			</div>

		</div>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>

	</div>
</template>

<script>
    import { directive } from "vue-awesome-swiper";
    import Swiper, { Autoplay} from 'swiper';
    Swiper.use([Autoplay]);
    export default {
        name: 'HeroSlider',
        directives: {
            swiper: directive,
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView:1,
                    spaceBetween: 0,
                    slidesPerGroup: 1,
                    speed:1500,
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: ".swiper-pagination",
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
    }
</script>

<style lang="scss" scoped>
	.swiper-container {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin: auto;
		overflow: hidden;
	}

	.swiper-wrapper{
		display: flex;
		flex-direction: row;
	}
	.swiper-slide {
		width: 80%;
		min-height: calc(100vw / 2.8);
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;

	}
	.img-1{
		background-image: url('../../public/images/articles/1.jpg');
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.img-2{
		background-image: url('../../public/images/articles/2.jpg');
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.img-3{
		background-image: url('../../public/images/articles/3.jpg');
		background-repeat: no-repeat;
		background-size: 100%;
	}

	@media (max-width:992px) {
		.img-1 .img-2 .img-3 {
			background-size: 100% 60%
		}

	}
</style>
