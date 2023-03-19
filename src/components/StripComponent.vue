<template>
  <div class="strip">
    <div class="container">
      <div class="column">
        <div class="icon-bar">
          <img src="../assets/images/icons/social-media/instagram.svg" alt="instagram-icon">
          <img src="../assets/images/icons/social-media/whatsapp.svg" alt="whatsapp-icon">
          <img src="../assets/images/icons/social-media/linkedin.svg" alt="linkedin-icon">
        </div>
      </div>
      <div class="column">
        <div class="email-box">
          <span>
            kianejad@techpark.ir
          </span>
          <img src="../assets/images/icons/icon-tools/fi-ss-envelope.svg" alt="email-icon">
        </div>
        <div class="phone-box">
          <span>
            021-88888888
          </span>
          <img src="../assets/images/icons/icon-tools/fi-ss-phone-call.svg" alt="icon-phone">
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "StripComponent",
  components: {FontAwesomeIcon}
}
</script>

<style lang="scss" scoped>
.strip {
  height: 35px;
  width: 100%;
  background-color: var(--primary-color);
  color: var(--color-white);

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    .column {
      display: flex;
      justify-content: center;
      align-items: center;

      .icon-bar {
        display: flex;
        justify-content: space-around;
        align-items: baseline;
        gap: 1rem;
        font-size: 1.4rem;
        margin: 0 10px;

        img {
          width: 20px;
          height: 20px;
        }
      }

      .email-box {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1rem;
        margin: 0 10px;

        span {
          margin-left: 5px;
        }

        img {
          width: 20px;
          height: 20px;
        }
      }

      .phone-box {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1rem;
        margin: 0 15px;

        span {
          margin-left: 5px;
        }

        img {
          width: 20px;
          height: 20px;
          fill: #F4f4f4;
        }
      }
    }
  }
}

</style>