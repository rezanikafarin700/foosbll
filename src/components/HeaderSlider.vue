<template>
	<div>
		<div class="parent">

			<div class="slider" v-for="(image,i) in images" :key="i">
				<transition name="fade">
					<div class="slide" v-if="index == i" :style="{backgroundImage : `url(images/header/${image.address})`}">
						<div class="texts">
							<h1>{{ image.title }}</h1>
							<p>{{ image.text }}</p>
						</div>
					</div>
				</transition>


			</div>
			<div class="parent-btn">
				<div class="btn" @click="scrollBotton">
					<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32.75px" height="32.75px" viewBox="0 0 32.75 32.75" style="enable-background:new 0 0 32.75 32.75;" xml:space="preserve">
<g>
	<path d="M29.975,22.449l-11.011,9.35c-0.745,0.635-1.667,0.951-2.589,0.951c-0.921,0-1.842-0.316-2.589-0.951l-11.01-9.35
		c-1.684-1.432-1.89-3.955-0.46-5.639c1.43-1.686,3.955-1.892,5.639-0.459l4.42,3.754V4c0-2.209,1.791-4,4-4c2.208,0,4,1.791,4,4
		v16.105l4.421-3.754c1.686-1.43,4.209-1.225,5.639,0.459S31.657,21.02,29.975,22.449z"/>
</g>
						</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "HeaderSlider",

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
            }
        },

        methods: {
            scrollBotton() {
                document.documentElement.scrollTop = 650;
            }
        },

        mounted() {
            const vm = this;
            setInterval(function () {
                if (vm.index < vm.images.length - 1) {
                    vm.index++;
                } else {
                    vm.index = 0;
                }
            }, 10000)
        }
    }
</script>

<style scoped lang="scss">
	.parent {
		width: 100%;
		height: 100vh;
		position: relative;
		top: 130px;
		direction: rtl;


		.slider {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;


			.slide {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
				background-attachment: fixed;
				transition: all ease 3s;

				&:before {
					content: '';
					width: 100%;
					height: 100%;
					background-color: rgba(0, 0, 0, 0.4);
					position: absolute;
					top: 0;
					left: 0;

				}

				.texts {
					direction: rtl;
					text-align: justify;
					padding: 4rem 4rem 0 0;
					width: 400px;
					color: #ffffff;
					transition: all 1s;
					position: relative;
					user-select: none;
				}

			}
		}

		.parent-btn {
			width: 100%;
			height: 100px;
			position: absolute;
			bottom: 0;
			left: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;

			.btn {
				width: 80px;
				height: 80px;
				border-radius: 100%;
				border: 4px solid #f0e1ff;
				display: flex;
				justify-content: center;
				align-items: center;

				svg {
					animation-name: a;
					animation-duration: 2s;
					animation-timing-function: inherit;
					animation-iteration-count: infinite;
					transition: all 1s;
					fill: #f0e1ff;

				}
			}
		}
	}


	.fade-enter {
		opacity: 0;
	}

	.move-enter {
		transform: translateY(-200px);
	}

	@keyframes a {
		0% {
			transform: translateY(20px)
		}
		50% {
			transform: translateY(-20px)
		}
		100% {
			transform: translateY(20px)
		}
	}

	@media (max-width: 425px) {
		.parent {
			.slider {
				.slide {
					.texts {
						display: none;
					}
				}
			}
		}
	}


</style>
