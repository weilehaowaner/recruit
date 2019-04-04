<template>
  <div id="app">
    <div class="content-div">
      <router-view />
    </div>
    <footer-bar class="footer"></footer-bar>
  </div>
</template>

<script>
import FootTab from './components/FootTab.vue'
export default {
  name: 'app',
  components: {
    'footer-bar': FootTab
  },
  computed: {}
}
</script>

<style scoped="">
  .content-div{
    margin-bottom:55px;
  }
</style>
