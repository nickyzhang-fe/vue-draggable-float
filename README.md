# vue-draggable-float

### 可拖动的悬浮组件

### 拖动效果

![barrage](https://user-gold-cdn.xitu.io/2019/7/20/16c0f1a946a59f3e?w=480&h=188&f=gif&s=4517801)

### 在线DEMO

效果如果看不到请[点击这里](https://user-gold-cdn.xitu.io/2019/7/20/16c0f1a946a59f3e?w=480&h=188&f=gif&s=4517801)

### 功能点

1. 支持拖拽
2. 滚动隐藏
3. 设置初始位置
4. 支持移动端

### 使用

`npm install vue-barrage`

### 参数配置

| name | type | default | desc  |
| ------ | ------ | ------ | ------ |
| distanceRight | Number | 0 | 元素距右侧距离 |
| distanceBottom | Number | 100 | 元素距底部距离 |
| isScrollHidden | Boolean | false | 滚动时按钮是否隐藏 |
| isCanDraggable | Boolean | true | 是否可拖拽 |

### 使用

```
<draggable 
	:distanceRight='100'
	:distanceBottom='100'
	:isScrollHidden='false' 
	:isCanDraggable='true'>
    <div>测试样式</div>
</draggable>
    
import Draggable from 'vue-barrage'

export default {
  name: 'draggable',
  components: {
    Draggable
  }
}
```

[源码地址](https://github.com/5ibinbin/vue-draggable-float)
