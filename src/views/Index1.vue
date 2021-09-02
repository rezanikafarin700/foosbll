<template>
	<div>
		fullName : {{ fullName }}

		<div v-if="products.length == 0">
			<Spinner color="red"/>
			<!--			<img src="/images/s1.jpg" alt="" width="70" height="50">-->
		</div>
		<div>
			Products : {{ products }}
		</div>
	</div>
</template>

<script>
    import axios from 'axios';
    import Spinner from "../components/Spinner";

    export default {
        name: "Index",

        components: {
            Spinner
        },

        data() {
            return {
                products: [],
                name: 'Ali',
                family: "Alavi",
            }
        },

        computed: {
            fullName: {
                get: function () {
                    return this.name + ' ' + this.family;
                },

                set: function (newValue) {
					let names = newValue.split(' ');
                    this.name = names[0];
                    this.family = names[1];
                }
            }
        },


        mounted() {
            const vm = this;
            axios.get('http://localhost/Asia/public/api/products').then(res => {
                vm.products = res.data;
            })
        },


    }
</script>

<style scoped lang="scss">


</style>
