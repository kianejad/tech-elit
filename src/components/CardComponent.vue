<template>
  <div class="card">
    <div class="image" :style="{backgroundImage: `url('/src/assets/images/image-card/${image}')`}">
      <div class="title"
           :style="$props.color === 'black' ? {backgroundColor: 'rgba(0, 0, 0, 0.5)'} : {backgroundColor: 'rgba(240, 76, 40, 0.58)'}">
        <p>{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 258px;
  height: 180px;

  .image {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;

    .title {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }
}

</style>