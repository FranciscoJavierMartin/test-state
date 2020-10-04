<template>
  <div id="app">
    <strong>{{ this.myState }}</strong>
    <div>
      <button @click="this.myAction">Alone</button>
      <button @click="this.myActionWithParameter">With param</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['myState']),
  },
  methods: {
    ...mapActions(['myAction', 'myActionWithParameter']),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
