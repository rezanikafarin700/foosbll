<template>
	<div>
		<div class="wrapper">
			<div class="image" :style="{backgroundImage:`url(http://localhost/Asia/public/images/products/${product.id}/${product.image})`}"></div>
			<div>{{ product.image }}</div>
			<div>{{ product.id }}</div>
			<div>{{ product.name }}</div>
			<div>{{ product.model }}</div>
			<div>{{ product.size }}</div>
			<img width="200px" height="200px" :src="`http://localhost/Asia/public/images/products/${product.id}/${product.image})`">
		</div>
	</div>
</template>

<script>
    import axiox from 'axios';

    export default {
        name: "Show",

        data() {
            return {
                product: {}
            }
        },

        beforeRouteEnter(to, from, next) {
            let id = to.params.id;
            axiox.get(`http://localhost/Asia/public/api/products/${id}`)
                .then(res => {
                    next(vm => {
                        console.log("Salam", res.data);
                        vm.product = res.data;
                    })
                })
        }


    }
</script>

<style scoped lang="scss">
	.image {
		width: 300px;
		height: 300px;
		border: 2px solid #2c3e50;
		background-size: cover;
		background-position: center;
	}
</style>
