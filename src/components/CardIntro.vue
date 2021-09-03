<template>
	<div>
		<div class="parent">
			<div class="parent__image" :style="{backgroundImage : `url(images/types/${product.image})`}">
				<div class="parent__image--ratio"></div>
			</div>
			<div class="parent__text">
				<div class="parent__title">{{ product.title }}</div>
				<div class="parent__intro"> اندازه : {{ product.text }}</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "CardIntro",

        props: {
            product : Object
        }
    }
</script>

<style scoped lang="scss">
	.parent {
		background-color: #F8F8F8;
		box-shadow: 0 0 1px 0 #999999;
		border-radius: 4px;

		&:hover &{
			cursor: pointer;
			background-color: #e6ecff;

			&__text{
				background-color: #e6ecff;

			}

			&__text::before {
				background-color: #e6ecff;
			}

		}

		&__image {
			background-position: center;
			background-size: cover;
			transition: all 1s;
			padding : 4rem;

			&--ratio {
				content: '';
				padding-top: 50%;
				position: relative;
			}
		}

		&__text {
			direction: rtl;
			text-align: right;
			padding: 2rem 1rem;
			position: relative;
			min-height: 200px;


			&:before {
				content: '';
				width: 10px;
				height: 10px;
				background-color: #F8F8F8;
				transform: rotate(45deg);
				position: absolute;
				top: -5px;
				right: 5%;
			}

		}
		&__title {
			font-weight: bold;
			font-size: 1.2rem;
			border-bottom: 3px solid #9DD9C5;
			display: inline-block;
		}

		&__intro {
			line-height: 1.4;
			font-size: 14px;
			font-weight: 400;
			margin-top: 1rem;
		}

	}
</style>
