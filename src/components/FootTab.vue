<template>
  <div id="tab-bar">
    <mt-tabbar v-model="selected" v-show="isShow" fixed class="border-1px-top">
      <mt-tab-item id="welcome">
        <img :src="img1" slot="icon">初接触
      </mt-tab-item>
      <mt-tab-item id="our">
        <img :src="img3" slot="icon">我们
      </mt-tab-item>
      <mt-tab-item id="regulation">
        <img :src="img5" slot="icon">熟悉规定
      </mt-tab-item>
      <mt-tab-item id="signup">
        <img :src="img7" slot="icon">报名点我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'FootTab',
  data () {
    return {
      selected: 'welcome',
      img1: 'static/welcome.png',
      img3: 'static/our.png',
      img5: 'static/regulation.png',
      img7: 'static/signup.png'
    }
  },
  computed: {
    isShow: function () {
      return true
    }
  },
  watch: {
    'selected': {
      handler: function () {
        if (this.selected === 'welcome') {
          this.$router.push({
            path: '/welcome',
            name: 'welcome'
          })
          this.img1 = 'static/welcome_selected.png'
        } else {
          this.img1 = 'static/welcome.png'
        }
        if (this.selected === 'our') {
          this.$router.push('/our')
          this.img3 = 'static/our_selected.png'
        } else {
          this.img3 = 'static/our.png'
        }
        if (this.selected === 'regulation') {
          this.$router.push('/regulation')
          this.img5 = 'static/regulation_selected.png'
        } else {
          this.img5 = 'static/regulation.png'
        }
        if (this.selected === 'signup') {
          this.$router.push('/signup')
          this.img7 = 'static/signup_selected.png'
        } else {
          this.img7 = 'static/signup.png'
        }
      }
    }
  }
}
</script>
