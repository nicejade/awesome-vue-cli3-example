<!-- @format -->

<template>
  <div class="homepage">
    <img class="logo" src="@assets/images/logo.png">
    <h1>{{ titleText }}</h1>
     <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://github.com/vuejs/vue-cli/tree/dev/docs" target="_blank">vue-cli3 documentation</a>.
    </p>
    <a href="/learn-more" class="learn-more">Learn More</a>
  </div>
</template>

<script>
export default {
  name: 'homepage',

  data() {
    return {
      titleText: 'Welcome to Your Vue.js App'
    }
  },

  components: {}
}
</script>

<style lang="scss">
.homepage {
  width: 100%;
  height: 100vh;
  @include flex-box-center(column);
  .logo {
    width: 200px;
    margin: 0 auto;
    background-size: 100% 100%;
  }
  .learn-more {
    display: inline-block;
    margin: 15px auto;
    padding: 5px 16px;
    border: 1px solid $border-grey;
    border-radius: 30px;
  }
}
</style>
