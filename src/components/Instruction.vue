<!-- @format -->

<template>
  <div class="instruction-area">
    <h2 class="title">功能详述</h2>
    <el-collapse v-model="activeNames" @change="onHandleChange">
      <el-collapse-item title="功能丰富" name="0">
        <div>
          <strong>Vue-Cli3</strong>：对 Babel、TypeScript、ESLint、PostCSS、PWA、单元测试和
          End-to-end 测试提供开箱即用的支持。
        </div>
        <div class="extra-instruction">
          <MarkdownPreview
            value="**此脚手架**：基于 Vue-Cli3 所构建，延续早先[vue-boilerplate-template](https://github.com/nicejade/vue-boilerplate-template)项目所倡导，旨在探究更高效地构建优质 Web 应用（推荐阅读[开箱即用的 Vue Webpack 脚手架模版](https://jeffjade.com/2018/05/20/140-vue-webpack-boilerplate-template/)）；为此，有作以下工作："
          />
          <MarkdownPreview :value="newFunctionintroduceMd" />
        </div>
      </el-collapse-item>
      <el-collapse-item title="易于扩展" name="1">
        <div>
          <strong>Vue-Cli3</strong>：它的插件系统可以让社区根据常见需求构建和共享可复用的解决方案。
        </div>
        <div class="extra-instruction">
          <strong>此脚手架</strong
          >：你可以在此基础上，根据自己所需，轻易增删插件，无痛变更解决方案；推荐文章：<a
            href="https://jeffjade.com/2018/05/20/140-vue-webpack-boilerplate-template/"
            target="_blank"
            rel="noreferrer noopener"
            >开箱即用的 Vue Webpack 脚手架模版</a
          >；<a
            href="https://jeffjade.com/2017/03/11/120-how-to-write-vue-better/"
            target="_blank"
            rel="noreferrer noopener"
            >如何写一手漂亮的 Vue</a
          >。
        </div>
      </el-collapse-item>
      <el-collapse-item title="无需 Eject" name="2">
        <div>
          <strong>Vue-Cli3</strong>：Vue CLI 完全是可配置的，无需
          eject。这样你的项目就可以长期保持更新了。
        </div>
        <div class="extra-instruction">
          <strong>此脚手架</strong>：默认对项目基本所需，已在
          <mark>vue.config.js</mark> 中做了填写，参照的同时，你可自行修改。
        </div>
        <div class="warning-tip">
          <strong>注意事项</strong>：在
          <mark>vue.config.js</mark>
          中，已对<mark>全局样式</mark>做了预先注入，可以无需引用即可使用；对此，须要付出的代价是，一旦对预先注入的<mark>全局样式</mark>做了修改，需要重新运行项目，方可生效。
        </div>
      </el-collapse-item>
      <el-collapse-item title="CLI 之上的图形化界面" name="3">
        <MarkdownPreview :value="cliGraphicalInterfaceMd" />
        <img
          class="image-desc"
          src="@assets/images/vue-cli-manage-cli-plugin.png"
          alt="Vue-Cli3 脚手架模版"
        />
        <img
          class="image-desc"
          src="@assets/images/vue-cli-manage-project-dependencies.png"
          alt="Vue-Cli3 脚手架模版"
        />
        <img class="image-desc" src="@assets/images/vue-cli-npm.png" alt="Vue-Cli3 脚手架模版" />
      </el-collapse-item>
      <el-collapse-item title="即刻创建原型" name="4">
        <MarkdownPreview :value="instantPrototypingMd" />
      </el-collapse-item>
      <el-collapse-item title="面向未来" name="5">
        <MarkdownPreview :value="compatibleAndFutureproofMd" />
      </el-collapse-item>
    </el-collapse>
    <Advertisement />
  </div>
</template>

<script>
import Advertisement from '@components/Advertisement'

export default {
  data() {
    return {
      activeNames: ['0', '1', '2', '3', '4', '5'],
      newFunctionintroduceMd: `
- [x] 导入并配置 [Vue-router](https://router.vuejs.org/zh/)，使得构建单页面应用(SPA)变得易如反掌；
- [x] 导入并配置 [Vuex](https://vuex.vuejs.org/zh/)，以方便处理应用程序开发的状态管理；
- [x] 引入 [Element-ui](http://element.eleme.io/#/zh-CN)，以便快速搭建网站，而无需过多关注 UI；
- [x] 引入 [Axios](https://github.com/axios/axios)并做封装，使得更优雅处理 Http 请求；
- [x] 引入 [Dayjs](https://github.com/iamkun/dayjs)，使得以更小的代价，处理日期时间相关；
- [x] 引入 [marked](https://github.com/markedjs/marked) 插件，并做封装，使得可以充作富文本编辑器；同时亦可借助它的解析功能，实现 \`Markdown\` 来绘制页面；
- [x] 基于 Webepack 4.* 新增特性，作了优化，详见 \`vue.config.js\`；
- [x] 引入 [vue-meta](https://github.com/declandewet/vue-meta) 插件以便允许您管理应用的元信息，支持 \`SSR\` + \`Streaming\`，就像 [react-helmet](https://github.com/nfl/react-helmet) 对 React 一样，它对 \`SEO\` 很棒。
- [x] 开启 & 运用 [Jest](https://jestjs.io/) 对组件做单元测试，并附以 Demo 示例；
- [x] 集成 [Prettier](https://prettier.io/) 插件并做配置，促使团队写出更好且风格一致的代码，具体参见[使用 ESLint ＆ Prettier美化Vue代码](https://jeffjade.com/2018/06/18/142-beautify-vue-by-eslint-and-prettier/)；
- [x] 导入 [cli-plugin-pwa](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa) 插件，并在 \`vue.config.js\` 中进行配置，使得你可以轻松在 Vue 项目中开始使用 [PWA](https://github.com/nicejade/nice-front-end-tutorial/blob/master/tutorial/pwa-tutorial.md)；
- [x] 导入 [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)  插件，使得在单页面应用程序中预呈现静态 HTML，优化 SEO 以及首屏渲染。
- [x] 导入 [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) 插件，使得运行 \`yarn analyz\`，即可直观得到构建包内容，以助优化；详情参见：[Webpack 打包优化之体积篇](https://jeffjade.com/2017/08/06/124-webpack-packge-optimization-for-volume/#%E5%AE%9A%E4%BD%8D-webpack-%E5%A4%A7%E7%9A%84%E5%8E%9F%E5%9B%A0)。
- [x] 导入 [size-plugin](https://github.com/GoogleChromeLabs/size-plugin) 插件，使得在构建应用之时，可打印 Webpack 资产的 gzip 大小，以及自上次构建以来的变更。
- [x] 导入为模块提供中间缓存步骤的 [hard-source-webpack-plugin](https://github.com/mzgoddard/hard-source-webpack-plugin) 插件，它使第二次构建速度明显加快。
- [x] 将此脚手架，结合 **Node.js**(Koa2) **Nginx** **MondoDb** **Redis**，汇融入于 **Docker**，使 Front-End Developer 可轻松构建整个 Web 应用；目前开源于 [Docker Vue Node Nginx Mongodb Redis](https://github.com/nicejade/docker-vue-node-nginx-mongodb-redis)。
- [ ] 优化内置 \`Icon\`(Svg) 组件，使可以接收不同方式输入，并将 Svg 提取至单独文件中，以避免资源重复加载；

>**温馨提示**: [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin): 在单页面应用程序中预呈现静态 HTML。如果你不需要它，完全可以移除掉它；因为它有大量的依赖([puppeteer](https://github.com/GoogleChrome/puppeteer)，Chromium: ~170MB Mac, ~282MB Linux, ~280MB Win)需要下载，这比较耗时。
      `,
      cliGraphicalInterfaceMd: `
**Vue-Cli3**：通过配套的图形化界面创建、开发和管理你的项目；运行如下命令即可，这个真的太棒了。
\`\`\`
vue ui
\`\`\`
\`GUI\` 对新手来说特别有用，但即使你是一个终极极客也很难不喜欢它。你可以用它来创建一个项目、管理 CLI 插件、管理项目的依赖关系、配置项目、运行npm脚本；
      `,
      instantPrototypingMd: `
**Vue-Cli3**：用单个 Vue 文件即刻实践新的灵感。Vue CLI3 带有疯狂的新功能。 当您想要使用组件时，您可以创建单个文件组件（.vue 文件），而不是创建新项目，并通过运行 \`vue serve MyAwesomeComponent.vue\` 在浏览器中提供它。您甚至可以构建组件并在需要时进行部署。
      `,
      compatibleAndFutureproofMd: `
**Vue-Cli3**：为现代浏览器轻松产出原生的 ES2015 代码，或将你的 Vue 组件构建为原生的 Web Components 组件。

#### vue-cli-service serve

用法：vue-cli-service serve [options] [entry]
选项：

\`\`\`bash
--open    在服务器启动时打开浏览器
--copy    在服务器启动时将 URL 复制到剪切版
--mode    指定环境模式 (默认值：development)
--host    指定 host (默认值：0.0.0.0)
--port    指定 port (默认值：8080)
--https   使用 https (默认值：false)
\`\`\`

#### vue-cli-service serve

命令会启动一个开发服务器 (基于 [webpack-dev-server](https://github.com/webpack/webpack-dev-server)) 并附带开箱即用的模块热重载 (Hot-Module-Replacement)。

除了通过命令行参数，你也可以使用 vue.config.js 里的 [devServer](https://cli.vuejs.org/zh/config/#devserver) 字段配置开发服务器。

#### vue-cli-service build

用法：vue-cli-service build [options] [entry|pattern]

选项：

\`\`\`bash
--mode        指定环境模式 (默认值：production)
--dest        指定输出目录 (默认值：dist)
--modern      面向现代浏览器不带自动回退地构建应用
--target      app | lib | wc | wc-async (默认值：app)
--name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
--no-clean    在构建项目之前不清除目标目录
--report      生成 report.html 以帮助分析包内容
--report-json 生成 report.json 以帮助分析包内容
--watch       监听文件变化
\`\`\`

\`vue-cli-service build\` 会在 *dist/* 目录产生一个可用于生产环境的包，带有 JS/CSS/HTML 的压缩，和为更好的缓存而做的自动的 vendor chunk splitting。它的 chunk manifest 会内联在 HTML 里。

这里还有一些有用的命令参数：

- --modern 使用[现代模式](https://cli.vuejs.org/zh/guide/browser-compatibility.html#现代模式)构建应用，为现代浏览器交付原生支持的 ES2015 代码，并生成一个兼容老浏览器的包用来自动回退。

- --target 允许你将项目中的任何组件以一个库或 Web Components 组件的方式进行构建。更多细节请查阅[构建目标](https://cli.vuejs.org/zh/guide/build-targets.html)。

- --report 和 --report-json 会根据构建统计生成报告，它会帮助你分析包中包含的模块们的大小。
      `
    }
  },

  methods: {
    onHandleChange() {}
  },

  components: {
    Advertisement
  }
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
  .image-desc {
    width: 100%;
  }
}
</style>
