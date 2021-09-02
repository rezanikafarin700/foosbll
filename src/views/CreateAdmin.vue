<template>
	<div>
		<div class="wrapper-register">
			<div class="box-white">
				<div class="title">افزودن مدیر</div>
				<form method="post">
					<label  for="email">ایمیل</label>
					<input  type="email" id="email" name="email" placeholder="ایمیل را وارد کنید" v-model="admin.email"><br>

					<label for="password">پسورد</label>
					<input autocomplete="off" type="password" id="password" name="password" placeholder="رمز عبور را وارد کنید" v-model="admin.password"><br>

					<input type="submit" value="ارسال" @click.prevent="send">
				</form>
			</div>
		</div>

	</div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "CreateAdmin",
        data() {
            return {
                admin: {
                    email: '',
                    password: ''
                }
            }
        },

        methods: {
            send() {
                const vm = this;
                const fd = new FormData();
                fd.append('email', vm.admin.email);
                fd.append('password', vm.admin.password);
                fd.append('type','ADMIN');
                axios({
                    url: process.env.VUE_APP_BASE_URL + 'admin',
                    data: fd,
                    method: 'post',

                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }

                })
            }
        }
    }
</script>

<style scoped lang="scss">
	@import "box-white";
</style>
