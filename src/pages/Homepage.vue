<!-- @format -->

<template>
  <div class="homepage">
    <h1 class="title">{{ titleText }}</h1>
    <img class="logo" src="@assets/images/logo.png">
    <p class="description">
      基于 vue-cli3 开箱即用的 Vue 脚手架模版，集成 Webpack Vuex Vue-router Element-ui 等周边生态工具，致力于探究更优质地构建 Vue 应用；推荐阅读<a href="https://jeffjade.com/2018/05/20/140-vue-webpack-boilerplate-template/" target="_blank" rel="noreferrer noopener">开箱即用的 Vue Webpack 脚手架模版</a>。
    </p>
    <div class="action-area">
      <a href="https://cli.vuejs.org/zh/" target="_blank" rel="noreferrer noopener" class="find-more"><icon name="document"></icon>Vue Cli3 文档</a>
      <a href="/explore" class="find-more"><icon name="explore"></icon>发现更多</a>
      <a class="find-more" href="https://github.com/nicejade/" target="_blank" rel="noreferrer noopener"><icon name="github"></icon> GitHub 源码</a>
    </div>
    <Instruction />
  </div>
</template>

<script>
import Instruction from '@components/Instruction'

export default {
  name: 'homepage',

  data() {
    return {
      titleText: 'Awesome Vue-Cli3 Example'
    }
  },

  components: {
    Instruction
  }
}
</script>

<style lang="scss">
.homepage {
  width: 100%;
  height: 100%;
  @include flex-box-center(column);
  .logo {
    width: 200px;
    margin: 0 auto;
    background-size: 100% 100%;
  }
  .title {
    font-size: $font-large;
    margin: $font-medium auto;
    font-weight: 600;
  }
  .description {
    max-width: 36rem;
    font-size: $font-medium;
    line-height: 1.3;
    color: $text-grey;
    margin: $font-medium auto;
  }
  .action-area {
    width: 100%;
    max-width: 36rem;
    @include flex-box-center(row, space-around);
    margin: 3 * $size-factor auto;
    .find-more {
      @include flex-box-center(row, space-around);
      margin: 15px auto;
      padding: 5px 16px;
      border: 1px solid $border-grey;
      border-radius: 30px;
      .svg-icon {
        margin-right: $size-factor;
      }
    }
  }
}
</style>
