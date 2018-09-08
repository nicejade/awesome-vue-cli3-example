<template>
  <div class="instruction-area">
    <el-collapse v-model="activeNames" @change="onHandleChange">
    <el-collapse-item title="功能丰富" name="0">
      <div><strong>Vue-Cli3</strong>：对 Babel、TypeScript、ESLint、PostCSS、PWA、单元测试和 End-to-end 测试提供开箱即用的支持。</div>
      <div class="extra-instruction">
        <strong>此脚手架</strong>：在其基础上注入 Vuex Vue-router Element-ui 等，并做了基本配置，以便捷应用开发；额外，还集成了 <mark>Prettier</mark>，使得可促使团队写出更好且风格一致的代码（详情可参见 <a href="https://jeffjade.com/2018/06/18/142-beautify-vue-by-eslint-and-prettier/" target="_blank" rel="noreferrer noopener">使用ESLint ＆ Prettier美化Vue代码</a>）；且内置了运用 <mark>Jest</mark>对组件做单元测试的示例。
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
        <strong>注意事项</strong>：在 <mark>vue.config.js</mark> 中，已对<mark>全局样式</mark>做了预先注入，可以无需引用即可使用；对此，须要付出的代价是，一旦对<mark>全局样式</mark>做了修改，需要重新运行项目，方可生效。
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
      activeNames: ['0', '1', '2', '3', '4', '5']
    }
  },
  methods: {
    onHandleChange(val) {}
  }
}
</script>

<style lang="scss">
.instruction-area {
  text-align: left;
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
