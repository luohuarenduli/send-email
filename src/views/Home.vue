<!--
 * @Description: 
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-05-10 10:22:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-10 10:35:19
-->
<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png">
    <HelloWorld :userData="userData"
                msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      userData: {
        name: 'Marry'
      }
    }
  },
  components: {
    HelloWorld
  },
}
</script>
