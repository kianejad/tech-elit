<template>
  <div class="footer">
    <div class="container">
      <div class="column1">
        <div class="col">
          <h4>معرفی</h4>
          <div class="item">
            <p>درباره ما</p>
            <p>تاریخچه</p>
            <p>اهداف و وظایف</p>
            <p>مدیریت</p>
            <p>قوانین و آئین نامه ها</p>
          </div>
          <span>
            <img src="../../assets/images/icons/social-media/linkedin-black.svg" alt="linkedin">
            <img src="../../assets/images/icons/social-media/instagram-black.svg" alt="instagram">
            <img src="../../assets/images/icons/social-media/whatsapp-black.svg" alt="whatsapp">
          </span>
        </div>
        <div class="col">
          <h4>جذب و پذیرش</h4>
          <div class="item">
            <p>فراخوان مسیر</p>
            <p>پایگاه جذب ایرانیان</p>
          </div>
        </div>
        <div class="col">
          <h4>مزایا و حمایت ها</h4>
          <h4>اخبار</h4>
          <h4>واحد های فناور</h4>
          <h4>ارتباط با ما</h4>
        </div>
      </div>
      <div class="column2">
        <div class="row">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="row">
          <h4>لینک های مرتبط</h4>
        </div>
        <div class="row">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="row" style="margin-top: 2rem">
          <div class="email-box">
          <span>
            kianejad@techpark.ir
          </span>
            <img src="../../assets/images/icons/icon-tools/fi-ss-envelope-black.svg" alt="email-icon">
          </div>
          <div class="phone-box">
          <span>
            021-88888888
          </span>
            <img src="../../assets/images/icons/icon-tools/fi-bs-phone-call-black.svg" alt="icon-phone">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "FooterLayout",
  components: {FontAwesomeIcon}
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: var(--white-color);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 2rem 0 ;

    .column1 {
      height: 100%;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      flex-wrap: wrap;

      .col {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: 100%;
        width: 250px;

        h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
        }

        p {
          font-size: 1rem;
          font-weight: 400;
          color: var(--black-color);
          margin-bottom: 1rem;
        }

        span {
          display: flex;
          justify-content: flex-start;
          align-items: baseline;
          width: 100%;
          padding-top: 1rem;
          gap: 1rem;

          img {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }

    .column2 {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      .row {
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 1.5rem;

        h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary-color);
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          text-align: right;
        }

        .circle {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background-color: var(--gray-color);
        }

        .email-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          gap: 0.5rem;

          span {
            font-size: 1rem;
            font-weight: 400;
            color: var(--black-color);
          }

          img {
            width: 1.5rem;
            height: 1.5rem;
          }
        }

        .phone-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          gap: 0.5rem;

          span {
            font-size: 1rem;
            font-weight: 400;
            color: var(--black-color);
          }

          img {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }
  }
}
</style>