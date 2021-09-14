<template>
  <div>
    <div class="card">
      <div class="card__overlay"></div>
      <div
        class="card__image"
        :style="{
          backgroundImage: `url(http://localhost/Asia/public/images/products/${product.id}/${product.image})`,
        }"
      >
        <div class="card__image--ratio"></div>
      </div>

      <div class="card__intro">
        <div class="card__title">{{ product.name }}</div>
        <div class="card__text">
          <div>مدل : {{ product.model }}</div>
          <div>جنس : {{ product.material }}</div>
          <div>اندازه : {{ product.size }}</div>
          <div>تخفیف : {{ product.discount.toLocaleString('fa') }} درصد </div>
          <div>قیمت : {{ product.price.toLocaleString("fa") }} تومان</div>
        </div>
        <div class="card__btn-card">بیشتر</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",

  props: {
    product: Object,
  },
};
</script>

<style scoped lang="scss">
@import "card";
</style>
