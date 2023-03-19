<template>
  <div class="header">
    <div class="container">
      <div class="navBar">
        <div class="logo">
          <div class="logo-art">
            <img src="../../assets/images/logo/logo.png" alt="logo-art">
          </div>
          <div class="logo-text">
            <img src="../../assets/images/logo/logo%20text.png" alt="logo-text">
          </div>
        </div>
        <div class="menu">
          <div class="item">
            <p>معرفی</p>
          </div>
          <div class="item">
            <p>جذب و پذیرش</p>
          </div>
          <div class="item">
            <p>مزایا و حمایت ها</p>
          </div>
          <div class="item">
            <p>اخبار</p>
          </div>
          <div class="item">
            <p>واحد های فناور</p>
          </div>
          <div class="item">
            <p>ارتباط با ما</p>
          </div>
          <button class="btn-idea">ثبت ایده</button>
        </div>
      </div>
      <div class="title">
        <h1>مسیر بهتری را انتخاب کنید
          رویا، ساختن، رشد</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderLayout"
}
</script>

<style lang="scss" scoped>
.header {
  height: 900px;
  width: 100%;
  background-image: url("../../assets/images/icons/image 1.png");
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    .navBar {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 1rem;

        .logo-art {

          img {
            width: 60px;
            height: 60px;
          }
        }
      }

      .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        gap: 2rem;
        margin-right: 5rem;

        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;

          p {
            font-size: 16px;
            font-weight: 500;
            color: var(--white-color);
          }
        }

        .btn-idea {
          width: 150px;
          height: 52px;
          padding: 14px 10px;
          background-color: var(--white-color);
          font-size: 16px;
          font-weight: 400;
          font-family: var(--font-iranSansDn);
        }
      }
    }

    .title {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: center;
      margin-top: 18rem;

      h1 {
        width: 500px;
        font-size: 48px;
        font-weight: 500;
        color: var(--white-color);
      }
    }
  }
}
</style>