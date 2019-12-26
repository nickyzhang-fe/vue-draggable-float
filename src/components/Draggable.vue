<!--
 * @Author: nickyzhang
 * @Date: 2019-12-23 21:48:48
 * @LastEditTime : 2019-12-23 22:51:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /draggable/src/components/Draggable.vue
 -->
<template>
  <div ref="floatDrag"
    class="float-position"
    :style="{left: left + 'px', top: top + 'px'}"
    @touchmove.prevent>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'draggable',
  props: {
    distanceRight: {
      type: Number,
      default: 0
    },
    distanceBottom: {
      type: Number,
      default: 100
    },
    isScrollHidden: {
      type: Boolean,
      default: false
    },
    isCanDraggable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      clientWidth: null,
      clientHeight: null,
      left: 0,
      top: 0,
      timer: null,
      currentTop: 0
    }
  },
  created () {
    this.clientWidth = document.documentElement.clientWidth
    this.clientHeight = document.documentElement.clientHeight
  },
  mounted () {
    this.isCanDraggable && this.$nextTick(() => {
      this.floatDrag = this.$refs.floatDrag
      // 获取元素位置属性
      this.floatDragDom = this.floatDrag.getBoundingClientRect()
      // 设置初始位置
      this.left = this.clientWidth - this.floatDragDom.width - this.distanceRight
      this.top = this.clientHeight - this.floatDragDom.height - this.distanceBottom
      this.initDraggable()
    })
    this.isScrollHidden && window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    /**
     * 设置滚动监听
     * 设置滚动时隐藏悬浮按钮，停止时显示
     */
    handleScroll () {
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.handleScrollEnd()
      }, 200)
      this.currentTop = document.documentElement.scrollTop || document.body.scrollTop
      if(this.left > this.clientWidth/2) { // 判断元素位置再左侧还是右侧
          this.left = this.clientWidth + this.floatDragDom.width
      } else {
        this.left = -this.floatDragDom.width
      }
    },
    /**
     * 滚动结束
     */
    handleScrollEnd () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop === this.currentTop) {
        console.log(this.left)
        if(this.left > this.clientWidth / 2) { // 判断元素位置再左侧还是右侧
          this.left = this.clientWidth - this.floatDragDom.width
        } else {
          this.left = 0
        }
        clearTimeout(this.timer)
      }
    },
    /**
     * 窗口resize监听
     */
    handleResize () {
      this.clientWidth = document.documentElement.clientWidth
      this.clientHeight = document.documentElement.clientHeight
      this.checkDraggablePosition()
    },
    /**
     * 初始化draggable
     */
    initDraggable () {
      this.floatDrag.addEventListener('touchstart', () => {
        this.canClick = false
        this.floatDrag.style.transition = 'none'
      })
      this.floatDrag.addEventListener('touchmove', (e) => {
        this.canClick = true
        if (e.targetTouches.length === 1) { // 单指拖动
          let touch = event.targetTouches[0]
          this.left = (touch.clientX - this.floatDragDom.width / 2)
          this.top = (touch.clientY - this.floatDragDom.height / 2)
        }
      })
      this.floatDrag.addEventListener('touchend', () => {
        if (!this.canClick) return // 解决点击事件和touch事件冲突的问题
        this.floatDrag.style.transition = 'all 0.3s'
        this.checkDraggablePosition()
      })
    },
    /**
     * 判断元素显示位置
     * 在窗口改变和move end时调用
     */
    checkDraggablePosition () {
      if ((this.left + this.floatDragDom.width / 2) >= this.clientWidth / 2) { // 判断位置是往左往右滑动
          this.left = this.clientWidth - this.floatDragDom.width
        } else {
          this.left = 0
        }
        if (this.top < 0) { // 判断是否超出屏幕上沿
          this.top = 0
        }
        if ((this.top + this.floatDragDom.height) >= this.clientHeight) { // 判断是否超出屏幕下沿
          this.top = (this.clientHeight - this.floatDragDom.height)
        }
    }
  },
  beforeDestroy(){
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
  },
}
</script>

<style scoped>
.float-position {
  position: fixed;
  z-index: 50;
}
</style>
