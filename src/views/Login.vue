<template>
	<div>
		<div class="wrapper-register">
			<div class="box-white">
				<div class="title">ورود و ثبت نام</div>
				<form>
					<input autocomplete="on" type="text" placeholder="امیل را وارد کنید" v-model="data.email">
					<br>
					<input type="password" placeholder="پسورد را وارد کنید" v-model="data.password">
					<br>
					<input type="submit" value="ارسال" @click="send">
				</form>
			</div>
		</div>
	</div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "AdminLogin",

        data() {
            return {
                data: {},
                admin: {}
            }
        },

        methods: {
            send() {
                const vm = this;
                const fd = new FormData();
                fd.append('email', vm.data.email)
                fd.append('password', vm.data.password)
                fd.append('type', 'USER')
                axios({
                    method: 'post',
                    data: fd,
                    // url: process.env.VUE_APP_BASE_URL + 'users',
                    url: 'http://localhost/Asia/public/api/' + 'users',

                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }

                }).then(res => {
                    vm.admin = res.data;
                })
            }
        }
    }
</script>

<style scoped lang="scss">
	@import "box-white";

</style>
