<template>
  <div class="px-[3%]">
    <div class="hidden sm:block">
      <Timecp/>
    </div>
    <div class="block sm:hidden">
      <Timeph/>
    </div>
  </div>
</template>

<script>
import Timebox from '@/components/Timebox.vue'
import Timecp from '@/components/Timecp.vue'
import Timeph from '@/components/Timeph.vue'

export default {
  name: 'ContestSchedule',
  components: {
    Timebox,
    Timecp,
    Timeph,
  }
}
</script>
<style scoped>
</style>