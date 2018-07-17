<template>
  <div class="homePage" id="home">
    <lottie class="homePage-circle" :options="circleOptions"></lottie>
    <img class="homePage-earth" src="../assets/img/earth.png"/>
    <div class="homePage-content">
      <span class="homePage-content-title">颠覆性分布式数字资产交易生态</span>
      <div class="homePage-content-line"></div>
      <div class="homePage-content-btn">
        <input type="button" class="input-download input-download-chinese" value="白皮书下载(中文版)"/>
        <input type="button" class="input-download input-download-english" value="白皮书下载(英文版)"/>
      </div>
    </div>
  </div>
</template>
<script>
  import Lottie from './lottie.vue';
  import circle from '../assets/json/circle.json'
  export default{
    data(){
      return {
        circleOptions: {animationData: circle},
      }
    },
    components: {
      'lottie': Lottie,
    },
  }
</script>
<style lang="less" scoped>
  .homePage {
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../assets/img/earth_bg.jpg") no-repeat center #252B4A;
    background-size: 100% 100%;
    .homePage-circle {
      height: 12rem !important;
    }
    .homePage-earth {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 12rem;
      transform: translate(-50%, -50%);
    }
    .homePage-content {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 5.28rem;
      width: 100%;
      transform: translate(-50%, -50%);
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      margin-top: 2rem;
      .homePage-content-title {
        font-size: 1rem;
        letter-spacing: 0.34rem;
      }
      .homePage-content-line {
        width: 2rem;
        height: 0.08rem;
        border-radius: 0.04rem;
        background: white;
      }
      .homePage-content-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        .input-download {
          margin: 0;
          padding: 0;
          border: none;
          outline: none;
          border-radius: 0;
          appearance: none;
          box-sizing: border-box;
          height: 1rem;
          width: 4.8rem;
          font-size: 0.32rem;
          color: white;
        }
        .input-download-chinese {
          background: #252B4A;
        }
        .input-download-english {
          background: #F18F35;
          margin-left: 0.4rem;
        }
      }
    }
  }
</style>
