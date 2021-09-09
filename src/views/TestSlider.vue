<template>
  <div>
    <!-- <touch-slider :images="images" /> -->
    <div class="wrapper">
      <div class="parent">
        <div class="parent__avatar"></div>
        <div class="parent__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            provident explicabo doloremque. Cupiditate eaque necessitatibus
            animi, aperiam pariatur eveniet illo, quidem deleniti cum nihil
            eligendi rerum, magnam aut adipisci in.
          </p>
          <div class="parent__overlay">
            <h3>Salam</h3>
            <h3>Reza</h3>
            <h3>Nikafarin</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure sint ratione velit doloribus nihil officia dolor ipsum incidunt consequatur beatae expedita omnis, animi quos esse quod? Libero, omnis nobis!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TouchSlider from "../../components/TouchSlider";
export default {
  name: "TestSlider",
  components: {
    // TouchSlider,
  },
  data() {
    return {
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
      address: "images/articles",
    };
  },
};
</script>

<style lang="scss" scoped>
.parent {
  display: flex;
  flex-direction: row-reverse;
  &:hover &{
    &__overlay{
      transform: translateX(100%);  
    }
  }


  &__avatar {
    width: 30%;
    flex: 0 0 auto;
    background: orange;
  }
  &__text {
    position: relative;
    width: 70%;
    flex: 0 0 auto;
    background-color:#999;
    padding: 1rem;
    text-align: justify;
    overflow-x: hidden;
  }

  &__overlay {
    position: absolute;
    right: 0;
    top: 0;
    padding: 1rem;
    background-color: orange;
    width: 100%;
    height: 100%;
    transform: translateX(0);
    transition: all 1s;
    overflow : hidden;
  }
}
.wrapper {
  width: 500px;
  margin: 0 auto;
  background: pink;
  padding: 1rem;
}
</style>
