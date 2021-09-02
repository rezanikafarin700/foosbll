<template>
	<div>
		<div class="parent">
			<div class="line">
				<div class="sqr"></div>
				<div class="sqr"></div>
				<div class="sqr"></div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style scoped lang="scss">

	.parent{
		width: 100px;
		height: 24px;
		display: flex;
		justify-content: center;
		align-items: center;

		.line{
			width: 100%;
			height: 1px;
			background-color: #999999;
			display: flex;
			justify-content: center;
			align-items: center;


			.sqr{
				width: 15px;
				height: 15px;
				border: 1px solid #999999;
				transform: rotate(45deg);
				margin: 0 0 0 5px;
			}

		}

	}

</style>
