<template>
	<div>
		<div class="parent">

			<div class="parent__slider" v-for="(image,i) in images" :key="i">
				<transition name="fade">
					<div class="parent__slide" v-if="index == i" :style="{backgroundImage : `url(images/header/${image.address})`}">
						<transition name="translate">
							<div class="parent__texts" v-if="showTexts">
								<h1>{{ image.title }}</h1>
								<p>{{ image.text }}</p>
							</div>
						</transition>
					</div>
				</transition>


			</div>
			<div class="parent__parent-btn" v-if="showBtns">
				<div class="parent__btn-prev" @click="prev">PREV</div>
				<div class="parent__btn" @click="scrollBotton">
					<svg width="50" height="200" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve"><polygon points="237.339,0 237.339,458.069 99.333,300.928 87.832,311.038 244.996,490 402.168,311.038 390.652,300.928 252.654,458.069 252.654,0 "/>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g></svg>
				</div>
				<div class="parent__btn-next" @click="next">NEXT</div>
			</div>
		</div>

		<div class="btn-scroll" @click="scrollTop" v-if="showScroll">
			<svg width="30" height="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"><path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394	l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g>
				<g></g></svg>

		</div>
	</div>
</template>

<script>
    export default {
        name: "HeaderSliderByButton",

        props: {
            height: {
                type: Number,
                default: 650,
            },
            images: {
                type: Array,
            }
        },

        data() {
            return {
                index: 0,
                showTexts: true,
                showBtns: true,
                showScroll: false

            }
        },

        methods: {
            scrollBotton() {
                document.documentElement.scrollTop = 650;
            },

            next() {
                if (this.index == this.images.length - 1) {
                    this.index = 0;
                } else {
                    this.index++;
                }
            },

            prev() {
                if (this.index == 0) {
                    this.index = this.images.length - 1;
                } else {
                    this.index--;
                }
            },

            scrollTop() {
                document.documentElement.scrollTop = 0;
            },


        },

        mounted() {
            const vm = this;
            window.onscroll = function () {
                if (document.documentElement.scrollTop > 80) {
                    vm.showTexts = false;
                    vm.showBtns = false;
                    vm.showScroll = true;

                } else {
                    vm.showTexts = true;
                    vm.showBtns = true;
                    vm.showScroll = false;
                }
            }
        }


    }
</script>

<style scoped lang="scss">
	.btn-scroll {
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 4rem;
		right: .25rem;
		border-radius: 100%;
		cursor: pointer;
		z-index: 10;

		svg {
			fill: #1b1b1b;
			width: 20px;
			height: 20px;
		}

	}

	.parent {
		width: 100%;
		height: 95vh;
		position: relative;
		top: 51px;
		direction: rtl;
		border: 20px solid #ffffff;
		border-top: none;
		border-bottom: none;


		&__slider {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;


		}

		&__slide {
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			background-attachment: fixed;
			transition: all .7s;

			&:before {
				content: '';
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.4);
				position: absolute;
				top: 0;
				left: 0;
			}
		}

		&__texts {
			direction: rtl;
			text-align: justify;
			padding: 4rem 4rem 0 0;
			width: 400px;
			color: #ffffff;
			user-select: none;
			font-weight: 100;
			position: fixed;
			transition: all .5s;
		}

		&__parent-btn {
			width: 100px;
			height: 100%;
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			padding: 1rem;


		}

		&__btn-next {
			color: #ffffff;
			transform: rotate(90deg);
			cursor: pointer;
			border-bottom: 1px solid #ffffff;
			font-weight: lighter;
		}

		&__btn-prev {
			color: #ffffff;
			transform: rotate(-90deg);
			cursor: pointer;
			border-bottom: 1px solid #ffffff;
			font-weight: lighter;
		}

		&__btn {
			cursor: pointer;

			svg {
				fill: #f0e1ff;

			}
		}
	}


	.fade-enter {
		opacity: 0;
	}

	.move-enter {
		transform: translateY(-200px);
	}

	.translate-enter {
		transform: translateY(-100px);
		opacity: 0;
	}

	.translate-leave-active {
		opacity: 0;
	}


	.fade-enter {
		opacity: 0;
	}

	.fade-leave-active {
		opacity: 0;
	}


	@media (max-width: 425px) {
		.parent {
			&__texts {
				display: none;
			}
		}
	}
</style>
