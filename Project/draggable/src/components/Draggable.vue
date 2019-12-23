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
    height: {
      type: Number,
      default: 200
    },
    scrollVisiable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      clientWidth: null,
      clientHeight: null,
      left: 0,
      top: 0
    }
  },
  created () {
    this.clientWidth = document.documentElement.clientWidth
    this.clientHeight = document.documentElement.clientHeight
  },
  mounted () {
    this.$nextTick(() => {
      this.floatDrag = this.$refs.floatDrag
      // 获取元素位置属性
      this.floatDragDom = this.floatDrag.getBoundingClientRect()
      // 设置初始位置
      this.left = this.clientWidth - this.floatDragDom.width
      this.top = this.clientHeight - this.floatDragDom.height - 100
      this.initDraggable()
    })
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    /**
     * 设置滚动监听
     * 设置滚动时隐藏悬浮按钮，停止时显示
     */
    handleScroll () {

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
        this.floatDrag.style.transition = 'none'
      })
      this.floatDrag.addEventListener('touchmove', (e) => {
        if (e.targetTouches.length === 1) {
          let touch = event.targetTouches[0]
          this.left = (touch.clientX - this.floatDragDom.width / 2)
          this.top = (touch.clientY - this.floatDragDom.height / 2)
        }
      })
      this.floatDrag.addEventListener('touchend', () => {
        this.floatDrag.style.transition = 'all 0.3s'
        this.checkDraggablePosition()
      })
    },
    /**
     * 判断元素显示位置
     */
    checkDraggablePosition () {
      if ((this.left + this.floatDragDom.width / 2) >= this.clientWidth / 2) { // 判断位置是往左往右滑动
          this.left = (this.clientWidth - this.floatDragDom.width)
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
