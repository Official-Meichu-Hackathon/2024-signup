<template>
  <div 
      @mouseover="hoverIf = true"
      @mouseleave="hoverIf = false" 
      class="flex ml-[4.47vw] my-[1.05vw] w-[28.52vw] h-[11.7vw] relative overflow-hidden">
    <div class="text-black text-sm font-normal font-['Inter']">
      <div class="mb-[0.89vw]">{{ nowTime }} <br></div>
      <div v-for="(item, index) in activity" :key="index">
        {{ item }} <br>
      </div>
    </div>
    <div>
      <img
        @mouseover="hoverIf = true"
        @mouseleave="hoverIf = false" 
        class="absolute left-[12.6vw] top-[1.99vw] transition-opacity duration-500 ease-in-out" 
        :class="{'opacity-0': hoverIf, 'opacity-100': !hoverIf}"
        :src="boriginalImage"
      />
      <img
        @mouseover="hoverIf = true"
        @mouseleave="hoverIf = false" 
        class="absolute left-[12.6vw] top-[1.99vw] transition-opacity duration-500 ease-in-out" 
        :class="{'opacity-0': hoverIf, 'opacity-100': !hoverIf}"
        :src="boriginalImage"
      />
      <img
        @mouseover="hoverIf = true"
        @mouseleave="hoverIf = false" 
        class="absolute left-[12.6vw] top-[1.99vw] transition-opacity duration-500 ease-in-out" 
        :class="{'opacity-100': hoverIf, 'opacity-0': !hoverIf}"
        :src="bhoverImage"
      />
      <img
        @mouseover="hoverIf = true"
        @mouseleave="hoverIf = false" 
        class="absolute left-[12.6vw] top-[1.99vw] transition-opacity duration-500 ease-in-out" 
        :class="{'opacity-100': hoverIf, 'opacity-0': !hoverIf}"
        :src="bhoverImage"
      />
      <img 
        @mouseover="hoverIf = true"
        @mousemove="cnt1 = true"
        @mouseleave="Leave"
        class="absolute left-[123px] top-[15px] transition-transform duration-500 transform" 
        :class="{'frame': hoverIf}"
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
.frame{
  animation-name: animatescale, animatemove, changeStroke; 
  animation-duration: 1.5s, 1.5s, 1.5s;
  animation-fill-mode: forwards; 
}
@keyframes animatescale{
  from{ transform: scale(1) ; }
  to{ transform: scale(3.5) ;}
}
@keyframes animatemove{
  from{ 
    left: 123px;
    top: 15px; 
  }
  to{ 
    left: 212px;
    top: 72px; 
  }
}
@keyframes changeStroke {
    from { stroke-width: 2; }
    to { stroke-width: 10; }
}
</style>
