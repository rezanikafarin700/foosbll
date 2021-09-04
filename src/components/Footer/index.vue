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
        name: "index"
    }
</script>

<style scoped lang="scss">

	@import "footer";
</style>
