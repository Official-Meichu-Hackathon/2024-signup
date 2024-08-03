<template>
  <div 
      @mouseover="hoverIf = true"
      @mouseleave="hoverIf = false" 
      class="inline-flex ml-[55px] my-[13px] w-[351px] h-[144px] relative overflow-hidden">
    <div class="text-black text-sm font-normal font-['Inter']">
      <div class="mb-[11px]">{{ nowTime }} <br></div>
      <div v-for="(item, index) in activity" :key="index">
        {{ item }} <br>
      </div>
    </div>
    <div>
      <img
        @mouseover="hoverIf = true"
        @mouseleave="hoverIf = false" 
        class="absolute left-[155px] top-[24.5px] transition-opacity duration-500 ease-in-out" 
        :class="{'opacity-0': hoverIf, 'opacity-100': !hoverIf}"
        :src="boriginalImage"
      />
      <img
        @mouseover="hoverIf = true"
        @mouseleave="hoverIf = false" 
        class="absolute left-[155px] top-[24.5px] transition-opacity duration-500 ease-in-out" 
        :class="{'opacity-0': hoverIf, 'opacity-100': !hoverIf}"
        :src="boriginalImage"
      />
      <img
        @mouseover="hoverIf = true"
        @mouseleave="hoverIf = false" 
        class="absolute left-[155px] top-[24.5px] transition-opacity duration-500 ease-in-out" 
        :class="{'opacity-100': hoverIf, 'opacity-0': !hoverIf}"
        :src="bhoverImage"
      />
      <img
        @mouseover="hoverIf = true"
        @mouseleave="hoverIf = false" 
        class="absolute left-[155px] top-[24.5px] transition-opacity duration-500 ease-in-out" 
        :class="{'opacity-100': hoverIf, 'opacity-0': !hoverIf}"
        :src="bhoverImage"
      />
      <img 
        @mouseover="hoverIf = true"
        @mousemove="cnt1 = true"
        @mouseleave="Leave"
        class="absolute left-[123px] top-[15px] transition-transform duration-500 transform" 
        :class="{'scale-370 left-[212px] top-[72px]': hoverIf, 'scale-100 left-[123px] top-[15px]': !hoverIf}"
        :src="soriginalImage"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverIf: false,
      cnt1: false,
      boriginalImage: require('../../public/time_maxbox.svg'),
      bhoverImage: require('../../public/time_maxbox_ch.svg'),
      soriginalImage: require('../../public/time_minbox.svg'),
      shoverImage: require('../../public/time_minbox_ch.svg'),
    };
  },
  methods: {
    Leave(){
      this.hoverIf = (this.cnt1 ? false : true) ;
      this.cnt1=false ;
    }
  },
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
<style scoped>
</style>
