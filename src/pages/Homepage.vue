<!-- @format -->

<template>
  <div class="homepage">
    <h1 class="title">{{ titleText }}</h1>
    <img class="logo" src="@assets/images/logo.png" alt="Vue-Cli3 脚手架模版" />
    <p class="description">
      此为基于 <mark>Vue-Cli3</mark> 搭建的开箱即用 Vue 脚手架模版，<br
        v-if="isBigScreenFlag"
      />致力于探究更高效地构建优质 Web 应用。
    </p>
    <div class="action-area">
      <a
        href="https://cli.vuejs.org/zh/"
        target="_blank"
        rel="noreferrer noopener"
        class="find-more"
        ><icon name="document"></icon>Vue Cli3 文档</a
      >
      <a href="/explore" class="find-more"><icon name="explore"></icon>发现更多</a>
      <a
        class="find-more"
        href="https://github.com/nicejade/awesome-vue-cli3-example"
        target="_blank"
        rel="noreferrer noopener"
        ><icon name="github"></icon> GitHub 源码</a
      >
    </div>
    <Instruction />
  </div>
</template>

<script>
import Instruction from '@components/Instruction'
import metaMixin from '@mixins/metaMixin.js'

export default {
  name: 'homepage',

  mixins: [metaMixin],

  data() {
    return {
      isBigScreenFlag: window.innerWidth > 768,
      titleText: 'Awesome Vue-Cli3 ExamplE'
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
  background-color: $white;
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

@media (max-width: 768px) {
  .homepage {
    padding: 0 2 * $size-factor;
    .logo {
      width: 160px;
    }
    .description {
      text-align: left;
    }
    .action-area {
      margin: 2 * $size-factor auto;
    }
    .action-area {
      @include flex-box-center(column);
    }
  }
}
</style>
