<template>
	<div>
		<div class="footer">
			<div class="end-intro">
				<div class="end-intro__title dastnevis">تقدیم به دوستان عزیزم</div>
				<div class="end-intro__text dastnevis">تقدیم به دوستان عزیزم که با آنها خاطرات خوبی دارم
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
					چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
					<p class="end-intro__foot dastnevis">
						ارادتمند شما رضا نیک آفرین
					</p>
				</div>
			</div>

			<div>
				<div class="footer__icons">
					<br>
					<div class="footer__icon" :style="{backgroundImage : `url(icons/facebook.svg)`}"></div>
					<div class="footer__icon" :style="{backgroundImage : `url(icons/instagram1.svg)`}"></div>
					<div class="footer__icon" :style="{backgroundImage : `url(icons/twiter.svg`}"></div>
					<div class="footer__icon" :style="{backgroundImage : `url(icons/telegram.svg`}"></div>
					<div class="footer__icon" :style="{backgroundImage : `url(icons/whatsapp.svg`}"></div>
				</div>
			</div>
			<p class="small-font">هر گونه استفاده از مطالب این سایت هیچگونه پیگرد قانونی ندارد پس تا میتوانید
				استفاده کنید</p>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">

	.footer {
		background-color: #ffffff;;
		padding: 4rem 2rem 1rem 2rem;
		font-weight: bold;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;


		&__icons {
			display: flex;
			flex-wrap: nowrap;
			justify-content: center;
			align-items: center;
		}

		&__icon {
			width: 20px;
			height: 20px;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			margin: 1rem;
			cursor: pointer;
		}

	}

	.end-intro {
		&__title {
			font-weight: bold;
			font-size: 20px;
		}

		&__text {
			font-weight: 300;
			font-size: 16px;
			width: 600px;
			margin: 0 auto;
		}

		&__foot {
			font-size: 12px;
			direction: ltr;
			text-align: left;
		}

	}

	.small-font {
		font-size: 12px;
		font-weight: 300;
		border-top: 1px solid #999999;
		padding-top: .5rem;
	}

	@media (max-width: 320px) {
		.footer {
			padding: 0;
		}

		.end-intro {
			&__text {
				width: 100%;
				padding: 1rem;
			}
		}
		.small-font{
			padding: 1rem 1rem 0 1rem;
		}
	}

	@media (max-width: 425px) and (min-width: 320px) {
		.wrapper {
			width: 320px;
		}
		.footer {
			padding: 0;
		}
		.end-intro {
			&__text {
				width: 100%;
				padding: 1rem;
			}
		}
		.small-font{
			padding: 1rem 1rem 0 1rem;
		}
	}

	@media (max-width: 600px) and (min-width: 426px) {
		.wrapper {
			width: 425px;
		}
		.end-intro {
			&__text {
				width: 100%;
				padding: 1rem;
			}
		}



	}
		@media (max-width: 768px) and (min-width: 600px) {
			.wrapper {
				width: 550px;
			}
		}

		@media (max-width: 922px) and (min-width: 769px) {
			.wrapper {
				width: 700px;
			}
		}

		@media (max-width: 1024px) and (min-width: 923px) {
			.wrapper {
				width: 850px;
			}
		}

		@media (max-width: 1200px) and (min-width: 1025px) {
			.wrapper {
				width: 950px;
			}
		}


</style>
