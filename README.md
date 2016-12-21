# 微金所

## HTML

- 使用 H5 条件注释，处理 H5 兼容性问题

  ```html
    <!--[if lt IE 9]>
      <script src="lib/html5shiv/html5shiv.js"></script>
      <script src="lib/respond/respond.js"></script>
    <![endif]-->
  ```
## CSS

- 使用 bootstrap 的 navbar 组件，并实现距离顶部 200 时显示 navbar

  ```html
    <nav class="navbar wjs_nav" role="navigation" data-spy="affix" data-offset-top="200">
  ```

- 使用 bootstrap 的 carousel 组件制作轮播图

- 使用 bootstrap 的栅格化系统，结合媒体查询实现响应式布局

- 自定义字体类和字体图标

- 修改 bootstrap 组件的默认样式

## JS

- 使用 [underscore](http://underscorejs.org/) 的模板引擎动态渲染轮播图和圆点

- 封装移动端手势滑动函数处理轮播图显示逻辑
