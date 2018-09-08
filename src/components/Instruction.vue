<!-- @format -->

<template>
  <div class="instruction-area">
    <h2 class="title">功能详述</h2>
    <el-collapse v-model="activeNames" @change="onHandleChange">
    <el-collapse-item title="功能丰富" name="0">
      <div><strong>Vue-Cli3</strong>：对 Babel、TypeScript、ESLint、PostCSS、PWA、单元测试和 End-to-end 测试提供开箱即用的支持。</div>
      <div class="extra-instruction">
        <MarkdownPreview value="**此脚手架**：基于 Vue-Cli3 所构建，延续早先[vue-boilerplate-template](https://github.com/nicejade/vue-boilerplate-template)项目所倡导，旨在探究更高效地构建优质 Web 应用（推荐阅读[开箱即用的 Vue Webpack 脚手架模版](https://jeffjade.com/2018/05/20/140-vue-webpack-boilerplate-template/)）；为此，有作以下工作：" />
        <MarkdownPreview :value="newFunctionintroduceMd" />
      </div>
    </el-collapse-item>
    <el-collapse-item title="易于扩展" name="1">
      <div><strong>Vue-Cli3</strong>：它的插件系统可以让社区根据常见需求构建和共享可复用的解决方案。</div>
      <div class="extra-instruction">
        <strong>此脚手架</strong>：你可以在此基础上，根据自己所需，轻易增删插件，无痛变更解决方案；推荐文章：<a href="https://jeffjade.com/2018/05/20/140-vue-webpack-boilerplate-template/" target="_blank" rel="noreferrer noopener">开箱即用的 Vue Webpack 脚手架模版</a>；<a href="https://jeffjade.com/2017/03/11/120-how-to-write-vue-better/" target="_blank" rel="noreferrer noopener">如何写一手漂亮的 Vue</a>。
      </div>
    </el-collapse-item>
    <el-collapse-item title="无需 Eject" name="2">
      <div><strong>Vue-Cli3</strong>：Vue CLI 完全是可配置的，无需 eject。这样你的项目就可以长期保持更新了。</div>
      <div class="extra-instruction">
        <strong>此脚手架</strong>：默认对项目基本所需，已在 <mark>vue.config.js</mark> 中做了填写，参照的同时，你可自行修改。
      </div>
      <div class="warning-tip">
        <strong>注意事项</strong>：在 <mark>vue.config.js</mark> 中，已对<mark>全局样式</mark>做了预先注入，可以无需引用即可使用；对此，须要付出的代价是，一旦对预先注入的<mark>全局样式</mark>做了修改，需要重新运行项目，方可生效。
      </div>
    </el-collapse-item>
    <el-collapse-item title="CLI 之上的图形化界面" name="3">
      <div><strong>Vue-Cli3</strong>：通过配套的图形化界面创建、开发和管理你的项目。</div>
    </el-collapse-item>
    <el-collapse-item title="即刻创建原型" name="4">
      <div><strong>Vue-Cli3</strong>：用单个 Vue 文件即刻实践新的灵感。</div>
    </el-collapse-item>
    <el-collapse-item title="面向未来" name="5">
      <div><strong>Vue-Cli3</strong>：为现代浏览器轻松产出原生的 ES2015 代码，或将你的 Vue 组件构建为原生的 Web Components 组件。</div>
    </el-collapse-item>
  </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['0', '1', '2', '3', '4', '5'],
      newFunctionintroduceMd: `
- [x] 注入并配置 [Vue-router](https://router.vuejs.org/zh/)，使得构建单页面应用(SPA)变得易如反掌；
- [x] 注入并配置 [Vuex](https://vuex.vuejs.org/zh/)，以方便处理应用程序开发的状态管理；
- [x] 引入 [Element-ui](http://element.eleme.io/#/zh-CN)，以便快速搭建网站，而无需过多关注 UI；
- [x] 引入 [Axios](https://github.com/axios/axios)并做封装，使得更优雅处理 Http 请求；
- [x] 引入 [Dayjs](https://github.com/iamkun/dayjs)，使得以更小的代价，处理日期时间相关；
- [x] 引入 [marked](https://github.com/markedjs/marked) 插件，并做封装，使得可以充作富文本编辑器；同时亦可借助它的解析功能，实现 \`Markdown\` 来绘制页面；
- [x] 基于 Webepack 4.* 新增特性，作了优化，详见 \`vue.config.js\`；
- [x] 开启 & 运用 [Jest](https://jestjs.io/) 对组件做单元测试，并附以 Demo 示例；
- [x] 集成 [Prettier](https://prettier.io/) 插件并做配置，促使团队写出更好且风格一致的代码，具体参见[使用 ESLint ＆ Prettier美化Vue代码](https://jeffjade.com/2018/06/18/142-beautify-vue-by-eslint-and-prettier/)；
- [x] 注入 [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)  插件，使得在单页面应用程序中预呈现静态 HTML，优化 SEO 以及首屏渲染。
- [x] 注入 [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) 插件，使得运行 \`yarn analyz\`，即可直观得到构建包内容，以助优化；详情参见：[Webpack 打包优化之体积篇](https://jeffjade.com/2017/08/06/124-webpack-packge-optimization-for-volume/#%E5%AE%9A%E4%BD%8D-webpack-%E5%A4%A7%E7%9A%84%E5%8E%9F%E5%9B%A0)
- [x] 注入 [size-plugin](https://github.com/GoogleChromeLabs/size-plugin) 插件，使得在构建应用之时，可打印 Webpack 资产的 gzip 大小，以及自上次构建以来的变更。
- [ ] 优化内置 \`Icon\`(Svg) 组件，使可以接收不同方式输入，并将 Svg 提取至单独文件中，以避免资源重复加载；
- [ ] 将此脚手架，结合 **Node.js**(Koa2) **Nginx** **MondoDb** **Redis**，汇融入于 **Docker**，使 Front-End Developer 可轻松构建整个 Web 应用。
      `
    }
  },

  methods: {
    onHandleChange() {}
  },

  components: {}
}
</script>

<style lang="scss">
.instruction-area {
  text-align: left;
  .title {
    font-size: $font-large;
    text-align: center;
  }
  .extra-instruction {
    color: $text-grey;
  }
  .warning-tip {
    background-color: rgba(255, 229, 100, 0.3);
    border-left: 3px solid $yellow;
    color: $orange;
    padding: 2 * $size-factor;
  }
}
</style>
