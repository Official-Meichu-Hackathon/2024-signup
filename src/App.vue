<template>
  <Navbar/>
  <router-view class="pb-[78px] sm:pb-0"/>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>


<style>
</style>
