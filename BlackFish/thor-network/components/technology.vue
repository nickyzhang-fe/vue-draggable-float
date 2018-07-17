<template>
  <div class="technology" id="technology">
    <div class="technology-left" id="technology-entry-animation">
      <div class="thor-network-title">技术亮点</div>
      <div class="thor-network-line"></div>
      <div class="technology-left-item">
        <img class="technology-left-img" src="../assets/img/vision1.png"/>
        <div class="technology-left-item-right">
          <span class="technology-item-right-title">全球统一订单簿（UOB）</span>
          <span class="technology-item-right-subtitle">社区共治的全球化数字货币交易基础设施</span>
        </div>
      </div>
      <div class="technology-left-item">
        <img class="technology-left-img" src="../assets/img/vision2.png"/>
        <div class="technology-left-item-right">
          <span class="technology-item-right-title bounceInRight">原子清算网络（ASN）</span>
          <span class="technology-item-right-subtitle">数字资产安全交易底层骨干网络</span>
        </div>
      </div>
    </div>
    <div class="technology-right">
      <lottie class="technology-animation" :options="technologyOptions"></lottie>
    </div>
  </div>
</template>
<script>
  import Lottie from './lottie.vue';
  import technology from '../assets/json/technology.json'
  export default{
    data(){
      return {
        technologyOptions: {animationData: technology},
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
  .technology {
    width: 100vw;
    height: 16rem;
    background: url("../assets/img/technology.png") no-repeat center #080F28;
    background-size: 100% 100%;
    display: flex;
    flex-direction: row;
    .technology-entry-animation {
      animation: bounceInLeft 4s ease;
    }
    .technology-left {
      height: 100%;
      width: 44%;
      text-align: left;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding: 4.54rem 0 6rem 8.4rem;
      opacity: 0;
      .technology-left-instr-txt {
        color: #F18F35;
        font-size: 0.48rem;
        margin-bottom: 0.4rem;
      }
      .technology-left-item {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .technology-left-img {
        height: 1rem;
        width: 1rem;
      }
      .technology-left-item-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 1rem;
      }
      .technology-item-right-title {
        color: #F18F35;
        font-size: 0.36rem;
        margin-left: 0.42rem;
      }
      .technology-item-right-subtitle {
        color: #FFFFFF;
        font-size: 0.24rem;
        margin-left: 0.42rem;
      }
    }
    .technology-right {
      height: 100%;
      width: 56%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-right: 1rem;
      .technology-animation {
        height: 12rem !important;
        width: 12rem !important;
      }
    }
  }
</style>
