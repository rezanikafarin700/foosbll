<template>
	<div>
		<form>
			<input type="text" v-model="product.id" placeholder="Id">
			<br>
			<get-multi-image v-model="product.images"/>
			<br>
			<input type="submit" value="Send" @click.prevent="send">
		</form>
	</div>
</template>

<script>
    import axios from 'axios';
    import GetMultiImage from "../components/GetMultiImage";

    export default {
        name: "Images",
        components: {
            GetMultiImage
        },

        data() {
            return {
                product: {}
            }
        },

        methods: {
            send() {
                const vm = this;
                const fd = new FormData();
                fd.append('productId', vm.product.id);
                fd.append('images[]', vm.product.images)
                // for (let i = 0; i < vm.product.images.length; i++) {
                //     fd.append('images[' + i + ']', vm.product.images[i])
                // }
                axios({
                    url: 'http://localhost/Asia/public/api/images',
                    data: fd,
                    method: 'post',
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res => {
                    console.log(res.data)
                }).catch(err => {
                    console.log(err)
                })
            }
        }

    }
</script>

<style scoped>

</style>
