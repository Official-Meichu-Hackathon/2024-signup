<template>
  <div class="px-[3%]">
    <Timecp v-if="isLargeScreen"/>
    <Timeph v-else/>
  </div>
</template>

<script>
import Timebox from '@/components/Timebox.vue'
import Timebox_ph from '@/components/Timebox_ph.vue'
import Timecp from '@/components/Timecp.vue'
import Timeph from '@/components/Timeph.vue'

export default {
  name: 'ContestSchedule',
  components: {
    Timebox,
    Timecp,
    Timeph,
    Timebox_ph
  },
  data() {
    return {
      isLargeScreen: window.innerWidth >= 576, 
    };
  },
  mounted() {
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isLargeScreen = window.innerWidth >= 576;
    },
  },
}
</script>
<style scoped>
</style>