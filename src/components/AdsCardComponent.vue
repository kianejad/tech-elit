<template>
  <div class="AdsCard">
    <div class="card">
      <div class="card-image">
        <img :src="BASE_URL + image" alt="image" :style="{color: color}">
      </div>
      <div class="card-title">
        <h4 :style="{color: color}">{{ title }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdsCardComponent",
  props: {
    title: {
      type: String,
      default: "عنوان"
    },
    image: {
      type: String,
      default: "https://picsum.photos/200/300"
    },
    color: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      BASE_URL: '/src/assets/images/icons/icon-box/'
    };
  }
}

</script>

<style lang="scss" scoped>

.AdsCard {
  width: 235px;
  height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  .card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-radius: 10px;

    .card-image {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      padding: 1rem;

      img {
        width: 86px;
        height: 86px;
        object-fit: contain;
      }
    }

    .card-title {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      padding: 1rem;
      text-align: center;

      h4 {
        font-size: 1.1rem;
        font-weight: 600;
      }
    }
  }
}
</style>

