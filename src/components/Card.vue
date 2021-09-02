<template>
	<div>
		<div class="card">
			<div class="overlay"></div>
			<div class="image" :style="{backgroundImage : `url(http://localhost/Asia/public/images/products/${product.id}/${product.image})`}">
				<div class="ratio"></div>
			</div>

			<div class="intro">
				<div class="title">{{ product.name }}</div>
				<div class="text">
					<div>قیمت : {{product.price.toLocaleString('fa')  }} تومان</div>
					<div>اندازه : {{ product.size}}</div>
					<div>مدل : {{ product.model }}</div>
					<div>کد محصول : {{product.code}}</div>
				</div>
				<div class="btn-card">بیشتر </div>
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
	$color-title: #0d0d0d;
	$color-text: #404040;

	$color-btn-text: #3363ff;
	$color-btn-background: #e6ecff;

	$border-card : 4px;
	.card {
		border-radius: $border-card;
		cursor: pointer;
		box-shadow: 0 0 5px 0 #999999;
		position: relative;

		.overlay{
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,.2);
			transition: all .5s;
			opacity: 0;
			position: absolute;
			left: 0;
			top : 0;
		}

		&:hover{
			z-index: -1;

			.overlay{
				opacity: 1;
				z-index: 1;
			}
		}



		.image {
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;

			.ratio {
				padding-top: 80%;
				position: relative;
			}
		}

		.intro {
			padding: 1rem;
			direction: rtl;
			text-align: right;
			transition: all .2s;
			background-color: #fff;
			/*z-index: 1;*/

			.title {
				font-size: 1.2rem;
				font-weight: 500;
				color: $color-title;
				margin-bottom: 1.5rem;
			}

			.text {
				font-size: 14px;
				letter-spacing: .1rem;
				line-height: 1.1;
				color: darken($color-text, 1%);
				margin-bottom: 2.5rem;
			}

			.btn-card {
				width: 100%;
				padding: .5rem 1.5rem;
				background-color: $color-btn-background;
				color: $color-btn-text;
				display: flex;
				justify-content: center;
				align-items: center;

			}
		}
	}

</style>
