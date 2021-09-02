<template>
	<div>
		<div class="parent">
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "HamburgerIcon"
    }
</script>

<style scoped lang="scss">

	.parent{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		width: 24px;
		height: 17px;


		.item{
			width: 100%;
			height: 3px;
			border-radius: 4px;
			background-color: #1b1b1b;

		}

	}
</style>
