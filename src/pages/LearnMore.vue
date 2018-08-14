<!-- @format -->

<template>
  <div class="learn-more">
    <HelloWorld :msg="titleText"/>
    <br>
    <br>
    <a href="javascript:;" @click="onChangeVuexStateClick">
      Change Vuex State
    </a>
    <p>{{ defaultField }}</p>
  </div>
</template>

<script>
import HelloWorld from '@components/HelloWorld.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'learnMore',

  data() {
    return {
      titleText: 'Welcome to Your Vue.js App'
    }
  },

  components: {
    HelloWorld
  },

  computed: {
    ...mapGetters('demo', ['defaultField'])
  },

  methods: {
    ...mapActions('demo', ['updateDefaultField']),

    onChangeVuexStateClick() {
      this.updateDefaultField(211314)
    }
  }
}
</script>

<style lang="scss">
.learn-more {
  height: 100vh;
  @include flex-box-center(column);
}
</style>
