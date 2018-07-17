<template>
  <div class="zoology" id="zoology">
    <div class="thor-network-title contact-title">生态网络</div>
    <div class="thor-network-line zoology-line"></div>
    <div class="zoology-content">
      <div class="zoology-left" id="zoology-left-entry-animation">
        <div class="zoology-align-right">
          <div class="zoology-title">钱包</div>
          <div class="zoology-subtitle">直联雷神网络发起去中心化交易 </div>
          <div class="zoology-subtitle">共享收益，以合作为主</div>
          <div class="zoology-subtitle">建设开源demo钱包助推生态繁荣</div>
        </div>
        <div class="zoology-align-right">
          <div class="zoology-title">公链</div>
          <div class="zoology-subtitle">通过ASN，跨链清结算</div>
          <div class="zoology-subtitle">优化合作模式，实现低摩擦交易</div>
        </div>
        <div class="zoology-align-right">
          <div class="zoology-title">雷神基金会</div>
          <div class="zoology-subtitle">推进系统开发、迭代和运营维护 </div>
          <div class="zoology-subtitle">初期在社区中起主导作用积极推进</div>
          <div class="zoology-subtitle">优化进程</div>
        </div>
      </div>
      <div class="zoology-middle"></div>
      <div class="zoology-right" id="zoology-right-entry-animation">
        <div class="zoology-align-left">
          <div class="zoology-title">全球用户 </div>
          <div class="zoology-subtitle">直接从钱包发起安全可靠的交易</div>
          <div class="zoology-subtitle">持有THT，享受生态发展红利</div>
          <div class="zoology-subtitle">参与社区共治</div>
        </div>
        <div class="zoology-align-left">
          <div class="zoology-title">节点联盟 </div>
          <div class="zoology-subtitle">行情提供和订单匹配</div>
          <div class="zoology-subtitle">共同治理和维护雷神网络并分享收益</div>
        </div>
        <div class="zoology-align-left">
          <div class="zoology-title">项目方</div>
          <div class="zoology-subtitle">直联雷神网络免费上币</div>
          <div class="zoology-subtitle">解决上币难，上币贵的问题</div>
          <div class="zoology-subtitle">打破地域和技术局限，便捷接入雷神网络 </div>
          <div class="zoology-subtitle">共享交易深度 </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .thor-network-title {
    color: white;
    font-size: 0.84rem;
  }
  .thor-network-line {
    background: #F18F35;
    height: 0.04rem;
    width: 0.8rem;
  }
  .contact-title {
    margin-top: 1.34rem;
  }
  .zoology {
    width: 100vw;
    height: 16rem;
    background: url("../assets/img/zoology.png") no-repeat center #252B4A;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .zoology-line{
      margin-top:0.49rem;
      margin-bottom: 2rem;
    }
    .zoology-content{
      display: flex;
      align-items: center;
      .zoology-left {
        text-align: right;
        opacity: 0;
      }
      .zoology-middle {
        background: url("../assets/img/zoology_logo.png") no-repeat center;
        background-size: contain;
        width: 9em;
        height: 5.2rem;
        margin: 0 0.5rem;
      }
      .zoology-right {
        text-align: left;
        opacity: 0;
      }
    }
    .zoology-align-left {
      text-align: left;
      height: 2.66rem;
    }
    .zoology-align-right {
      text-align: right;
      height: 2.66rem;
    }
    .zoology-title{
      color: #F18F35;
      font-size: 0.4rem;
      margin-bottom: 0.3rem;
      line-height: 0.52rem
    }
    .zoology-subtitle{
      color: white;
      font-size: 0.24rem;
      line-height: 0.46rem
    }
  }
</style>
