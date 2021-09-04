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
        name: "index",

        props: {
            product : Object
        }
    }
</script>

<style scoped lang="scss">
	@import "CartIntro";
</style>
