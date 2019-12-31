<!--
 * @Author: your name
 * @Date: 2019-09-02 23:57:42
 * @LastEditTime : 2019-12-26 23:43:36
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-draggable/README.md
 -->
# vue-draggable-float

### 可拖动的悬浮组件

### 拖动效果

![Draggable](https://user-gold-cdn.xitu.io/2019/12/26/16f42e02c2eefbab?w=335&h=600&f=gif&s=5226115)

### 在线DEMO

如果看不到请[点击这里](https://user-gold-cdn.xitu.io/2019/12/26/16f42e02c2eefbab?w=335&h=600&f=gif&s=5226115)

### 功能点

1. 支持拖拽
2. 滚动隐藏
3. 设置初始位置
4. 支持移动端
5. 支持PC端

### 使用

`npm install vue-draggable-float`

### 参数配置

| name | type | default | desc  |
| ------ | ------ | ------ | ------ |
| distanceRight | Number | 0 | 元素距右侧距离 |
| distanceBottom | Number | 100 | 元素距底部距离 |
| isScrollHidden | Boolean | false | 滚动时按钮是否隐藏 |
| isCanDraggable | Boolean | true | 是否可拖拽 |
| zIndex | Number | 50 | Fixed控制层级 |

### 使用

```
<draggable 
	:distanceRight='100'
	:distanceBottom='100'
	:isScrollHidden='false' 
	:isCanDraggable='true'
	:zIndex="100">
    <div>测试样式</div>
</draggable>
    
import Draggable from 'vue-draggable-float'

export default {
  name: 'draggable',
  components: {
    Draggable
  }
}
```

[源码地址](https://github.com/5ibinbin/vue-draggable-float)
