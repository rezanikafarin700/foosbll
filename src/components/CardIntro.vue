<template>
	<div>
		<div class="parent">
			<div class="image" :style="{backgroundImage : `url(images/types/${product.image})`}">
				<div class="ratio"></div>
			</div>
			<div class="text">
				<div class="title">{{ product.title }}</div>
				<div class="intro"> اندازه : {{ product.text }}</div>
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

		&:hover {
			cursor: pointer;
			background-color: #e6ecff;

			.text::before {
				background-color: #e6ecff;
			}

		}

		.image {
			background-position: center;
			background-size: cover;
			transition: all 1s;
			padding : 4rem;

			.ratio {
				content: '';
				padding-top: 70%;
				position: relative;
			}
		}

		.text {
			direction: rtl;
			text-align: right;
			padding: 2rem 1rem;
			position: relative;
			min-height: 200px;


			&:hover {

			}

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

			.title {
				font-weight: bold;
				font-size: 1.2rem;
				border-bottom: 3px solid #9DD9C5;
				display: inline-block;
			}

			.intro {
				line-height: 1.4;
				font-size: 14px;
				font-weight: 400;
				margin-top: 1rem;
			}
		}
	}
</style>
