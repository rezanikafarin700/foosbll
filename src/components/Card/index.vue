<template>
	<div>
		<div class="card">
			<div class="card__overlay"></div>
			<div class="card__image" :style="{backgroundImage : `url(http://localhost/Asia/public/images/products/${product.id}/${product.image})`}">
				<div class="card__image--ratio"></div>
			</div>

			<div class="card__intro">
				<div class="card__title">{{ product.name }}</div>
				<div class="card__text">
					<div>قیمت : {{product.price.toLocaleString('fa')  }} تومان</div>
					<div>اندازه : {{ product.size}}</div>
					<div>مدل : {{ product.model }}</div>
					<div>کد محصول : {{product.code}}</div>
				</div>
				<div class="card__btn-card">بیشتر </div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Card",

        props: {
            product: Object
        }
    }
</script>

<style scoped lang="scss">
	@import "card";
</style>
