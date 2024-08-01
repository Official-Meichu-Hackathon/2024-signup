<template>
  <Navbar/>
  <router-view/>
  <TopicDesc/>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import TopicDesc from './components/TopicDesc.vue';
export default {
  components: {
    Navbar,
    Footer,
    TopicDesc
  }
}
</script>


<style>
</style>
