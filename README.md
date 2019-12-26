# vue-draggable-float

### 可拖动的悬浮组件

### 拖动效果

![barrage](https://user-gold-cdn.xitu.io/2019/7/20/16c0f1a946a59f3e?w=480&h=188&f=gif&s=4517801)

### 在线DEMO

效果如果看不到请[点击这里](https://user-gold-cdn.xitu.io/2019/7/20/16c0f1a946a59f3e?w=480&h=188&f=gif&s=4517801)

### 功能点

1. 支持循环弹幕
2. 弹幕不重叠
3. 支持选择轨道数
4. 支持弹幕发送
5. 支持弹幕头像
6. 支持背景颜色配置
7. 背景色和渐变背景色

### 使用

`npm install vue-barrage`

### 参数配置

| name | type | default | desc  |
| ------ | ------ | ------ | ------ |
| barrageList | Array | [] | 弹幕数据 |
| speed | Number | 4 | 弹幕滚动速度 |
| loop | Boolean | true | 是否循环滚动 |
| channels | Number | 2 | 弹幕轨道数 |
| borderColor | String | '' | 弹幕边框颜色 |
| background | String | '#FFFFFF' | 弹幕背景色 |
| linearGradient | String | '' | 弹幕渐变背景色 |

### 使用

```
<barrage
    ref="barrage"
    class="barrage"
    :barrage-list="barrageList"
    :speed="speed"
    :loop="loop"
    :channels="channels"
    :border-color="borderColor"
    :background="background"
    :linear-gradient="linearGradient"/>
    
import Barrage from 'vue-barrage'

// 弹幕数据初始化  
this.barrageList = [{
	icon: 'https://user-gold-cdn.xitu.io/2019/3/3/169412b9920a8e31?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
   content: '试数据测试数测试数据数测试数据',
   color: 'white'
}, {
   content: '试数据测试数测试数据数测试数据',
   color: 'white'
}]
// 新增弹幕
this.$refs.barrage.add({
   content: '增加一条新的弹幕增加一条新的弹幕',
   color: 'white'
})
```

[源码地址](https://github.com/5ibinbin/vue-draggable-float)
