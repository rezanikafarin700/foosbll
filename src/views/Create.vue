<template>
	<div>
		<div class="wrapper-register"> {{ product.images }}
			<div class="box-white">
				<div class="title">افزودن محصول جدید</div>
				<div class="space-items"></div>
				<form method="post" enctype="multipart/form-data">
					<label class="add-image">افزودن عکس بازدید محصول را تا سه برابر افزایش میدهد</label>
					<get-multi-image v-model="product.images"/>
					<br>
					<div class="field">
						<label class="field__label" for="name">نام محصول</label>
						<input class="field__input" type="text" id="name" name="name" placeholder="مثلا فوتبال دستی آسیا" v-model="product.name">
						<small class="field__error" v-if="errors && errors.name">{{ errors.name[0]}}</small>
					</div>

					<div class="field">
						<label class="field__label" for="model">مدل</label>
						<input class="field__input" type="text" id="model" name="model" placeholder="مثلا تاشو" v-model="product.model">
						<small class="field__error" v-if="errors && errors.model">{{ errors.model[0]}}</small>
					</div>

					<div class="field">
						<label class="field__label" for="size">اندازه</label>
						<input class="field__input" type="text" id="size" name="size" placeholder="مثلا 75 * 120" v-model="product.size"><br>
						<small class="field__error" v-if="errors && errors.size">{{ errors.size[0]}}</small>
					</div>

					<div class="field">
						<label class="field__label" for="price">قیمت</label>
						<input class="field__input" type="text" id="price" name="price" placeholder="200000" v-model="product.price">
						<small class="field__error" v-if="errors && errors.price">{{ errors.price[0]}}</small>
					</div>

					<div class="field">
						<label class="field__label" for="discount">تخفیف</label>
						<input class="field__input" type="text" id="discount" name="discount" placeholder="مثلا 10" v-model="product.discount">
						<small class="field__error" v-if="errors && errors.discount">{{ errors.discount[0] }}</small>
					</div>

					<div class="field">
						<label class="field__label" for="code">کد محصول</label>
						<input class="field__input" type="text" id="code" name="code" placeholder="مثلا 100" v-model="product.code"><br>
						<small class="field__error" v-if="errors && errors.code">{{ errors.code[0]}}</small>
					</div>

					<div class="field">
						<label class="field__label" for="material">جنس محصول</label>
						<input class="field__input" type="text" id="material" name="material" placeholder="مثلا MDF" v-model="product.material"><br>
						<small class="field__error" v-if="errors && errors.material">{{ errors.material[0] }}</small>
					</div>

					<div class="field">
						<label for="description">توضیحات</label>
						<textarea name="description" id="description" placeholder="توضیحات" v-model="product.description"></textarea>
						<small class="field__error" v-if="errors && errors.description">{{ errors.description }}</small>
					</div>

					<input class="field__submit" type="submit" value="ارسال" @click.prevent="send">
				</form>
			</div>
		</div>
	</div>
</template>

<script>
    import axios from 'axios';
    import GetMultiImage from "../components/GetMultiImage/index";

    export default {
        name: "Create",

        components: {
            GetMultiImage
        },

        data() {
            return {
                product: {
                    name: "", model: "", size: "", price: "", discount: "",
                    code: null, material: "", description: "",
                    images: []

                },


                errors: {}
            }
        },

        methods: {
            send() {
                const vm = this;
                const fd = new FormData();
                fd.append('name', vm.product.name)
                fd.append('model', vm.product.model)
                fd.append('size', vm.product.size)
                fd.append('price', vm.product.price)
                fd.append('discount', vm.product.discount)
                fd.append('code', vm.product.code)
                fd.append('material', vm.product.material)
                fd.append('description', vm.product.description)
                for (let i = 0; i < vm.product.images.length; i++) {
                    fd.append('images[' + i + ']', vm.product.images[i]);
                }
                console.log(fd, 'fd')
                axios({
                    method: 'post',
                    url: process.env.VUE_APP_BASE_URL + 'products',
                    data: fd,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res => {
                    console.log(res, 'res')
                    vm.$router.push({name: 'index'});
                }).catch(err => {
                    console.log(err.response.data, 'err')
                    vm.errors = err.response.data.errors;
                    vm.showSave = false;
                });

            }
        }
    }
</script>

<style scoped lang="scss">
	@import "box-white";

	.add-image {
		font-size: 12px;
		font-weight: 400;
	}

	@media (max-width: 425px) and (min-height: 320px) {
		.add-image {
			font-size: 12px;
		}
	}

	@media (max-width: 320px) {
		.add-image {
			font-size: 10px;
		}
	}
</style>
