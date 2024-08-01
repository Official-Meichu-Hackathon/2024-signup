<template>
  <div class="inline-flex ml-[55px] my-[13px] w-[406px] h-[144px] relative">
    <div class="text-black text-sm font-normal font-['Inter']">
      <div class="mb-[11px]">{{ nowTime }} <br></div>
      <div v-for="(item, index) in activity" :key="index">
        {{ item }} <br>
      </div>
    </div>
    <div>
      <img class="absolute left-[155px] top-[24.5px]" src="../../public/time_maxbox.svg"/>
      <img class="absolute left-[123px] top-[15px]" src="../../public/time_minbox.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nowTime: {
      type: String,
      required: true
    },
    activity: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>