<template>
  <div id="app">
    <TestCard />
  </div>
</template>

<script>
import TestCard from './views/TestCard.vue';

export default {
  name: 'App',
  components: {
    TestCard,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
