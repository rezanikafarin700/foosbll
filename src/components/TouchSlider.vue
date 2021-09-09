<template>
	<div>
		<div class="parent" ref="parent">
			<div class="slider"  @touchstart="touch" ref="slider">
				<div class="slide" v-for="(img,index) of images" :key="index" :style="{backgroundImage:`url(${addressImages}/${img})`}">
					<div class="ratio"></div>
				</div>
			</div>
			<div class="left" ref="left" @click="prev"></div>
			<div class="right" ref="right" @click="next"></div>
		</div>

		<div class="smallItems">
			<div @click="random(index)" :class="{active : index == indexGlobal}" class="smallItem" v-for="(img,index) of images" :key="index" :style="{backgroundImage:`url(${addressImages}/${img})`}">
				<div class="ratio"></div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "TouchSlider",

        props: {
            images: Array,
            addressImages: String
        },

        data() {
            return {
                ne: 0,
                indexGlobal: 0,
            }
        },

        methods: {
            touch(e) {
                const vm = this;
                let widthSlider = vm.$refs.parent.clientWidth;
                let widthWindow = window.innerWidth;
                let x = (e.touches[0].clientX * widthSlider) / widthWindow;
                if (x  <= widthSlider/2) {
                    vm.prev();
                } else if(x  > widthSlider/2) {
                    vm.next();
                }
            },

            random(index) {

                const vm = this;
                let widthSlider = vm.$refs.parent.clientWidth;
                let widthAll = vm.$refs.slider.clientWidth * (vm.images.length);
                if (vm.ne < widthAll) {
                    vm.ne = (widthSlider * index);
                    vm.indexGlobal = index;
                }
                vm.$refs.slider.scrollLeft = vm.ne;
                if (vm.ne < widthAll) {
                    vm.$refs.right.style.opacity = '1';
                    if (vm.ne > 0) {
                        vm.$refs.left.style.opacity = '1';
                    } else {
                        vm.$refs.left.style.opacity = '0';

                    }
                } else {
                    vm.$refs.right.style.opacity = '0';

                    if (vm.ne > 0) {
                        vm.$refs.left.style.opacity = '1';
                    } else {
                        vm.$refs.left.style.opacity = '0';

                    }

                }

            },

            next() {
                const vm = this;
                let widthSlider = vm.$refs.parent.clientWidth;
                let widthAll = vm.$refs.slider.clientWidth * (vm.images.length - 1);
                if (vm.ne < widthAll) {
                    vm.ne += widthSlider;
                    vm.indexGlobal++;
                }
                vm.$refs.slider.scrollLeft = vm.ne;

                if (vm.ne < widthAll) {
                    vm.$refs.right.style.opacity = '1';
                    if (vm.ne > 0) {
                        vm.$refs.left.style.opacity = '1';
                    } else {
                        vm.$refs.left.style.opacity = '0';

                    }
                } else {
                    vm.$refs.right.style.opacity = '0';

                    if (vm.ne > 0) {
                        vm.$refs.left.style.opacity = '1';
                    } else {
                        vm.$refs.left.style.opacity = '0';

                    }

                }
            },
            prev() {
                const vm = this;
                let widthSlider = vm.$refs.parent.clientWidth;
                let widthAll = vm.$refs.slider.clientWidth * (vm.images.length - 1);
                if (vm.ne > 0) {
                    vm.ne -= widthSlider;
                    vm.indexGlobal--;
                }
                vm.$refs.slider.scrollLeft = vm.ne;

                if (vm.ne > 0) {
                    vm.$refs.left.style.opacity = '1';
                    if (vm.ne < widthAll) {
                        vm.$refs.right.style.opacity = '1';
                    } else {
                        vm.$refs.right.style.opacity = '0';
                    }

                } else {
                    vm.$refs.left.style.opacity = '0';
                    if (vm.ne < widthAll) {
                        vm.$refs.right.style.opacity = '1';
                    } else {
                        vm.$refs.right.style.opacity = '0';
                    }
                }
            }
        },

    }
</script>

<style scoped lang="scss">
	@import "public/sass/variable";

	.parent {
		width: 100%;
		position: relative;
		border-radius: $border-radius-global;


		.left {
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;
			background-color: transparentize(#7ba8ff, 0.4);
			position: absolute;
			top: 40%;
			left: -1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			transition: all .5s;
			opacity: 0;

			&:before {
				content: '';
				border: 3px solid #ffffff;
				width: .8rem;
				height: .8rem;
				transform: rotate(-135deg);
				border-bottom: none;
				border-left: none;
				position: relative;
				left: 2px;
				border-radius: 2px;
			}
		}

		.right {
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;
			background-color: transparentize(#7ba8ff, 0.4);
			position: absolute;
			top: 40%;
			right: -1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			transition: all .5s;

			&:before {
				content: '';
				border: 3px solid #ffffff;
				width: .8rem;
				height: .8rem;
				transform: rotate(135deg);
				border-bottom: none;
				border-right: none;
				position: relative;
				left: -2px;
				border-radius: 2px;
			}
		}

		.slider {
			width: 100%;
			height: 100%;
			white-space: nowrap;
			scroll-behavior: smooth;
			overflow: hidden;
			border-radius: $border-radius-global;


			.slide {
				width: 100%;
				height: 100%;
				background-position: center;
				background-size: cover;
				display: inline-block;
				border-radius: $border-radius-global;

				.ratio {
					width: 100%;
					height: 100%;
					position: relative;
					padding-top: 90%;
					border-radius: $border-radius-global

				}
			}
		}
	}

	.smallItems {
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: wrap;
		margin: .25rem -.5rem;

		.smallItem {
			width: calc(25% - 1rem);
			margin: .5rem;
			flex: 0 0 auto;
			background-size: cover;
			background-position: center;
			border-radius: .5rem;
			transition: all .4s;
			border: 3px solid #f5f5f5;
			cursor: pointer;

			&.active {
				border: 3px solid red;
			}

			> .ratio {
				position: relative;
				padding-top: 100%;
			}
		}
	}

	@media (min-width: 500px) and (max-width: 700px) {
		.smallItems {
			.smallItem {
				width: calc(33.333% - 1rem);
			}
		}
	}

	@media (max-width: 500px) {
		.smallItems {
			.smallItem {
				width: calc(50% - 1rem);
			}
		}
	}
</style>
