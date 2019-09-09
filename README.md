# order-menue


## 项目介绍
```shell
本项目是使用Vue构建
基于vant组件库开发
```
### 运行项目

1. 安装依赖：

```shell
cnpm install
```

2. 启动服务

```shell
npm run serve
```
### 样式适配问题
1. 介绍
```shell
本项目安装了rem适配依赖，会自动将px转换成rem,如果不想自动转换可写成大写PX或者Px。
依赖是lib-flexible以及postcss-px2rem。
```
2. 样式设置
```shell
第一步，将设计稿调为750px宽度，在iPhone6中显示效果。
第二步，如果在设计稿中元素尺寸为100px,那么将元素设置为50px。即为设计稿的一半。
(注意如果使用PX或者Px，不转换rem,则在750px的设计稿中量出来宽度就是元素的真实宽度，不用除2，iphone6两个像素点为一个设备独立像素点)
```
### Vant组件库的使用
1. 全局按需引用vant组件
```shell
在main.js进行全局配置，按需引用，即任何组件均可直接使用vant组件；
如button的引用

import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);
```
2. 局部按需引用vant组件
```shell
即直接在组件内部引用组件并注册
如
import { Button } from 'vant';
export default{
  components:{
    "van-button":Button,
  }
}
```

3. 组件样式问题
```shell
因为安装了rem适配依赖,本项目会自动将px转换成rem单位，所以写样式的时候自己注意一下。

```
### sass的使用
1. 全局变量
```shell
在variables.scss设置全局变量；
在组件中即可在scss中直接使用
如
<style lang="scss">
.hello{
  background-color: $color;
}
</style>
```
2. 混合器声明
```shell
在mixin.scss设置全局混合器；
在组件中即可在scss中直接使用
如
<style lang="scss">
.hello{
  background-color: $color;
  @include hline(5px yellow dashed,20px)
}
</style>
```
```