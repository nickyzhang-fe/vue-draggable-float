<template>
  <section class="thor-network">
    <div class="navigation">
      <div class="navigation-left"></div>
      <div class="navigation-right">
        <a v-for="(item, index) in navigateArray" :key="index" :class="{'active': index == isActive}"
           @click="pageNavigator(item, index)">{{item.title}}</a>
      </div>
    </div>
    <div class="scrollToTop" :class="[isScroll ? 'scrollTopShow' : 'scrollTopHide']" @click="scrollToTop"></div>
    <div class="download" :class="[isShowDownLoad ? 'scrollTopShow' : 'scrollTopHide']">白皮书</div>
    <!--首屏加载-->
    <home></home>
    <!--雷神愿景-->
    <vision></vision>
    <!--技术亮点-->
    <technology></technology>
    <!--生态网络-->
    <zoology></zoology>
    <div class="progress" id="progress">
      <div class="thor-network-title contact-title">发展进程</div>
      <div class="thor-network-line contact-line"></div>
    </div>
    <div class="contact" id="contact" :class="{'contact-subscribe': isSubScribe}">
      <div class="thor-network-title contact-title">联系我们</div>
      <div class="thor-network-line contact-line"></div>
      <div class="contact-input" v-if="!isSubScribe">
        <input class="email input" id="email" placeholder="请输入您的邮箱" v-model="email"/>
        <input class="submit input" type="button" @click="subscribe" value="立即订阅"/>
      </div>
      <div class="contact-footer">
        <div>
          <img src="../assets/img/vision3.png"/>
          <img src="../assets/img/vision3.png"/>
          <img src="../assets/img/vision3.png"/>
          <img src="../assets/img/vision3.png"/>
          <img src="../assets/img/vision3.png"/>
        </div>
        <div>
          <span>E-mail: info@thornetwork.org</span>
          <span>© 2018 Thor Network. All Rights Reserved</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Lottie from '~/components/lottie';
  import home from '~/components/home';
  import vision from '~/components/vision';
  import technology from '~/components/technology'
  import zoology from '~/components/zoology'
  import {isPc, isDomVisible} from '../util/tools'
  import {EMAIL_SUBSCRIBE} from '../api/api';
  import toast from '../util/toast'

  export default {
    data() {
      return {
        navigateArray: [{
          title: '首页',
          hash: 'home'
        }, {
          title: '雷神愿景',
          hash: 'vision'
        }, {
          title: '技术亮点',
          hash: 'technology'
        }, {
          title: '生态网络',
          hash: 'zoology'
        }, {
          title: '发展进程',
          hash: 'progress'
        }, {
          title: '联系我们',
          hash: 'contact'
        }],
        isActive: 0, //默认第0个被激活
        screenWidth: 0,   //屏幕宽度
        timeout: null,
        scrollHeight: 0,  //滚动高度
        tempScrollHeight: 0, //保存上一次滚动的距离
        scrollTimeout: null, //滚动定时器
        isScroll: false,  //判断是否滚动，滚动则显示一键置顶
        isShowDownLoad: false, //白皮书下载是否显示
        isSubScribe: false, //是否订阅邮件
        email: '',
      }
    },
    components: {
      Lottie,
      home,
      vision,
      technology,
      zoology
    },
    watch: {
      screenWidth(val){
        var that = this;
        if (!this.timeout) {
          this.screenWidth = val
          this.timeout = true;
          setTimeout(function () {
            that.timeout = false
          }, 400)
        }
      }
    },
    methods: {
      /**
       * 滚动监听
       */
      scrollListener() {
        let that = this;
        let clientHeight = document.body.clientHeight; //屏幕高度
        this.tempScrollHeight = document.body.scrollTop || document.documentElement.scrollTop; //滚动的距离
        this.entryAnimation();
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(function () {
          that.scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
          //判断下载白皮书是否显示
          if (that.tempScrollHeight >= clientHeight) {
            that.isShowDownLoad = true;
          } else {
            that.isShowDownLoad = false;
          }
          //判断一键置顶是否显示
          if (this.tempScrollHeight === this.scrollHeight) {
            if (that.scrollHeight) {
              that.isScroll = true;
            } else {
              that.isScroll = false;
            }
          }
        }, 200);
      },
      /*获取dom元素*/
      getDom: function (id) {
        return document.getElementById(id);
      },
      /**滚动到节点**/
      animationToAnchor: function (startNum, stopNum) {
        let that = this;
        var nowNum = startNum + 50; // 步进为10
        if (nowNum > stopNum) {
          nowNum = stopNum;
        }
        // 缓动方法
        window.requestAnimationFrame(function () {
          document.body.scrollTop = nowNum; // 当前示例页面，滚动条在body，所以滚动body
          // 滚动到预定位置则结束
          if (nowNum == stopNum) {
            return;
          }
          that.animationToAnchor(nowNum, stopNum); // 只要还符合缓动条件，则递归调用
        });
      },
      /**
       * 顶部导航栏点击事件
       * @param item
       * @param index
       */
      pageNavigator: function (item, index) {
        this.isActive = index;
//        window.location.hash = item.hash;
        this.animationToAnchor(document.body.scrollTop, this.getDom(item.hash).offsetTop)
      },
      /**
       * 入场动画
       */
      entryAnimation: function () {
        let clientHeight = document.body.clientHeight; //屏幕高度
        let homeHeight = document.getElementById('home').getBoundingClientRect().top;//愿景距离顶部高度
        let visionHeight = document.getElementById('vision').getBoundingClientRect().top;//愿景距离顶部高度
        let technologyHeight = document.getElementById('technology').getBoundingClientRect().top;//技术距离顶部高度
        let zoologyHeight = document.getElementById('zoology').getBoundingClientRect().top;//生态距离顶部高度
        let progressHeight = document.getElementById('progress').getBoundingClientRect().top;//生态距离顶部高度
        let contactHeight = document.getElementById('contact').getBoundingClientRect().top;//生态距离顶部高度
        let visionId = document.getElementById('vision-entry-animation');
        let technologyId = document.getElementById('technology-entry-animation');
        let zoologyLeftId = document.getElementById('zoology-left-entry-animation');
        let zoologyRightId = document.getElementById('zoology-right-entry-animation');
        //愿景可视时显示动画
        if (visionHeight - clientHeight <= -100) {
          visionId.style.animation = 'bounceInRight 2s ease';
          visionId.style.opacity = '1';
        }
        //技术亮点显示动画
        if (technologyHeight - clientHeight <= -100) {
          technologyId.style.animation = 'bounceInLeft 2s ease';
          technologyId.style.opacity = '1';
        }
        if (zoologyHeight - clientHeight <= -100) {
          zoologyLeftId.style.animation = 'bounceInLeft 2s ease';
          zoologyLeftId.style.opacity = '1';
          zoologyRightId.style.animation = 'bounceInRight 2s ease';
          zoologyRightId.style.opacity = '1';
        }
        if (homeHeight < 3) {
          this.isActive = 0;
        }
        if (visionHeight < 3) {
          this.isActive = 1;
        }
        if (technologyHeight < 3) {
          this.isActive = 2;
        }
        if (zoologyHeight < 3) {
          this.isActive = 3;
        }
        if (progressHeight < 3) {
          this.isActive = 4;
        }
        if (contactHeight < 3) {
          this.isActive = 5;
        }
      },
      /**
       * 滚动到顶部
       */
      scrollToTop(){
        let that = this;
        let timer;
        timer = setInterval(function () {
          that.scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
          var isSpeed = Math.floor(that.scrollHeight / 6);//滚动速度递减
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollHeight - isSpeed;
          //判断，然后清除定时器
          if (isSpeed === 0) {
            clearInterval(timer);
            document.body.scrollTop = 0;
          }
        }, 33);
      },
      /**
       * 邮件订阅
       */
      subscribe: function () {
        if (!this.email) {
          toast('请输入邮箱');
          return;
        }
        let params = {
          email: this.email
        };
        EMAIL_SUBSCRIBE(params)
          .then(res => {
            let response = JSON.parse(res)
            if (response.success) {
              toast('订阅成功');
              this.isSubScribe = true
            }
          })
      }
    },
    mounted: function () {
      var that = this;
      //滚动监听
      window.addEventListener('scroll', this.scrollListener)
      window.onresize = function () {
        that.screenWidth = document.body.clientWidth
      }
    }
  }
</script>

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

  .thor-network {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    .navigation {
      position: fixed;
      top: 0;
      left: 0;
      height: 2rem;
      width: 100%;
      background: transparent;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 4rem;
      z-index: 1000;
      .navigation-left {
        height: 1rem;
        background: url("../assets/img/logo.png") no-repeat center;
        background-size: contain;
        width: 5rem;
      }
      .navigation-right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
      }
      a {
        font-size: 0.32rem;
        color: white;
      }
      .active {
        color: #F18F35;
      }
    }
    .scrollToTop {
      position: fixed;
      bottom: 1.5rem;
      right: 0;
      background: url("../assets/img/scroll_to_top.png") no-repeat center;
      background-size: contain;
      height: 0.8rem;
      width: 0.8rem;
      z-index: 1000;
      transition: all 0.6s ease-in;
    }
    .scrollToTop:hover {
      transition: all 0.3s ease-in;
      transform: scale(1.2) translateX(-1.3rem);
    }
    .scrollTopShow {
      transform: translateX(-1.5rem);
      opacity: 1;
    }
    .scrollTopHide {
      transform: translateX(0);
      opacity: 0;
    }
    .download {
      background: url("../assets/img/download_bg.png") no-repeat center;
      background-size: 100% 100%;
      width: 0.8rem;
      height: 1.62rem;
      writing-mode: vertical-lr;
      position: fixed;
      top: 50%;
      right: 0;
      transform: translateY(0, -50%);
      color: white;
      font-size: 0.1rem;
      line-height: 0.8rem;
      text-align: left;
      padding-top: 0.2rem;
      z-index: 1000;
      transition: all 0.6s ease-in;
    }
    .download:hover {
      transition: all 0.3s ease-in;
      transform: scale(1.2) translateX(-1.3rem);
    }
    .progress {
      width: 100vw;
      height: 16rem;
      background: url("../assets/img/progress.png") no-repeat center #080F28;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .contact {
      width: 100vw;
      height: 9.2rem;
      background: url("../assets/img/contact.png") no-repeat center #252B4A;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .contact-input {
        font-size: 0.32rem;
        input {
          margin: 0;
          padding: 0;
          border: none;
          outline: none;
          -webkit-border-radius: 0;
          -moz-border-radius: 0;
          border-radius: 0;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          box-sizing: border-box;
        }
        .email {
          width: 6.4rem;
          height: 0.92rem;
          padding: 0 0.1rem;
          color: black;
        }
        .submit {
          background: #F18F35;
          color: white;
          width: 6.4rem;
          text-align: center;
          line-height: 0.92rem;
          height: 0.92rem;
          margin-left: 0.4rem;
        }
      }
      .contact-footer {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        margin-top: 1.4rem;
        height: 2.88rem;
        img {
          height: 0.6rem;
          width: 0.6rem;
          margin-left: 0.56rem;
        }
        span {
          color: white;
          font-size: 0.28rem;
          margin-left: 1.56rem;
        }
      }
    }
    .contact-subscribe {
      height: 8.6rem;
    }
    .contact-title {
      margin-top: 1.34rem;
    }
    .contact-line {
      margin-top: 0.49rem;
      margin-bottom: 1.04rem;
    }
  }
</style>
