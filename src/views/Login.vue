<template>
	<div>
		<div class="wrapper-register">
			<div class="box-white">
				{{ errors }}
				<div class="title">ورود و ثبت نام</div>
				<div class="space-items"></div>
				<form>
					<div class="field">
						<label class="field__label" for="email">ایمیل</label>
						<input class="field__input" id="email" autocomplete="on" type="text" placeholder="امیل را وارد کنید" v-model="data.email">
						<small class="field__error" v-if="errors && errors.email">{{ errors.email[0] }}</small>
					</div>
					<div class="field">
						<label class="field__label" for="password">پسورد</label>
						<input class="field__input" id="password" type="password" placeholder="پسورد را وارد کنید" v-model="data.password">
						<small class="field__error" v-if="errors && errors.password">{{ errors.password[0] }}</small>
					</div>
					<input class="field__submit" type="submit" value="ارسال" @click.prevent="send">
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
                data: {email: "", data: ""},
                admin: {},
                errors: {}
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
                    url: process.env.VUE_APP_BASE_URL + 'users',

                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }

                }).then(res => {
                    vm.admin = res.data;
                    // vm.$router.push({name : 'index'})
                }).catch(err => {
                    console.log(err.response.data, 'err')
                    vm.errors = err.response.data.errors;
                });
            }
        }
    }
</script>

<style scoped lang="scss">
	@import "box-white";

</style>
