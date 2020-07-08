<template>
  <div class="home">
    <NavBar/>
    <HelloWorld/>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    HelloWorld
  }
}
</script>
