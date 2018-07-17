<template>
  <div class="vision" id="vision">
    <div class="vision-left">
      <lottie class="vision-animation" :options="visionOptions"></lottie>
    </div>
    <div class="vision-right" id="vision-entry-animation">
      <div class="thor-network-title">雷神愿景</div>
      <div class="thor-network-line"></div>
      <div class="vision-right-instr-txt">数字资产交易平台3.0</div>
      <div class="vision-right-item">
        <img class="vision-right-img" src="../assets/img/vision1.png"/>
        <span class="vision-right-subtitle">突破性的领先技术</span>
      </div>
      <div class="vision-right-item">
        <img class="vision-right-img" src="../assets/img/vision2.png"/>
        <span class="vision-right-subtitle">健康自治的商业模式</span>
      </div>
      <div class="vision-right-item">
        <img class="vision-right-img" src="../assets/img/vision3.png"/>
        <span class="vision-right-subtitle">全球繁荣的生态系统</span>
      </div>
    </div>
  </div>
</template>
<script>
  import Lottie from './lottie.vue';
  import vision from '../assets/json/vision.json'
  export default{
    data(){
      return {
        visionOptions: {animationData: vision}
      }
    },
    components: {
      'lottie': Lottie,
    },
  }
</script>
<style lang="less" scoped>
  .thor-network-line {
    background: #F18F35;
    height: 0.04rem;
    width: 0.8rem;
  }
  .vision {
    width: 100vw;
    height: 16rem;
    background: url("../assets/img/vision.png") no-repeat center #252B4A;
    background-size: 100% 100%;
    display: flex;
    flex-direction: row;
    .vision-entry-animation {
      animation: bounceInRight 4s ease;
    }
    .vision-left {
      height: 100%;
      width: 52%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .vision-animation {
        height: 12rem !important;
        width: 12rem !important;
      }
    }
    .vision-right {
      height: 100%;
      width: 48%;
      text-align: left;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding: 3.28rem 0 4.6rem 2rem;
      opacity: 0;
      .vision-right-instr-txt {
        color: #F18F35;
        font-size: 0.48rem;
        margin-bottom: 0.4rem;
      }
      .vision-right-item {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .vision-right-img {
        height: 1rem;
        width: 1rem;
      }
      .vision-right-subtitle {
        color: #FFFFFF;
        font-size: 0.32rem;
        margin-left: 0.42rem;
      }
    }
  }
</style>
