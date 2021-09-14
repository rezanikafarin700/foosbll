<template>
	<div>
		<div class="parent">
			<header class="parent__header">
				<div class="wrapper">
					<div class="parent__items">
						<div class="parent__item">
							<hamburger-icon/>
							<span style="margin: 0 0 0 2rem"></span>
							<div class="dastnevis parent__text" @click="goToLogin">ورود و ثبت نام</div>
						</div>
						<div class="parent__item">
							<div class="dastnevis parent__line-bottom">فوتبال دستی تاج اسپرت</div>
						</div>
						<div class="parent__item">
							<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="18px" height="18px">
								<path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/>
							</svg>
							<span style="margin: 0 0 0 2rem"></span>
							<div @click="move" class="dastnevis parent__text">خرید</div>
							<div class="parent__icon">
								<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 902.86 902.86" style="enable-background:new 0 0 902.86 902.86;" xml:space="preserve"><g>	<g><path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
									<path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744			c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z			 M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742			S619.162,694.432,619.162,716.897z"/></g></g>
									<g></g>
									<g></g>
									<g></g>
									<g>
</g>
									<g>
</g>
									<g>
</g>
									<g>
</g>
									<g>
</g>
									<g>
</g>
									<g>
</g>
									<g>
</g>
									<g>
</g>
									<g>
</g>
									<g>
</g>
									<g>
</g>
</svg>
							</div>
						</div>
					</div>

				</div>
			</header>
		</div>
	</div>
</template>

<script>
    import HamburgerIcon from "../HamburgerIcon";

    export default {
        name: "index",

        components: {
            HamburgerIcon
        },


        methods: {
            move() {
                document.documentElement.scrollTop = 3900;
            },

            goToLogin(){
                this.$router.push({name : 'login'})
            }
        }
    }
</script>

<style scoped lang="scss">
	@import "header";
</style>
