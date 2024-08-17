<template>
  <div 
      @mouseover="hoverIf = true, cnt2 = true"
      @mouseleave="hoverIf = false" 
      class="relative ml-[4.47vw] w-[28.02vw] overflow-hidden"
      :class="{'h-[11.7vw]': hasPhoto, 'h-[8vw]': !hasPhoto}"
  >
    <div class="absolute top-[1.13vw] text-black text-[1.3vw] font-normal font-['Inter']">
      <div class="mb-[0.89vw]">{{ nowTime }}<br></div>
      <div v-for="(item, index) in activity" :key="index">
        {{ item }} <br>
      </div>
    </div>
    <div v-if="hasPhoto">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 120" 
        class="absolute left-[13vw] top-[1.9vw] w-[15.93vw]"> 
        <defs>
          <clipPath id="clip-shape">
            <path d="M10.5 14.5L146 0.5L265 120H64.5L0 107.5L10.5 14.5Z" />
          </clipPath>
        </defs>
        <image :href="photoHref" x="0" y="0"  width="100%" height="100%" clip-path="url(#clip-shape)"
          @mouseover="hoverIf = true"
          @mouseleave="hoverIf = false"
          class="transition-opacity duration-500 ease-in-out"
          :class="{'opacity-0': hoverIf, 'opacity-100': !hoverIf}"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 120" fill="none"
        class="absolute left-[13vw] top-[1.9vw] w-[15.93vw]">
        <defs>
          <clipPath id="clip-chshape">
            <path d="M0 7.5L139 0L265 120H0V7.5Z" />
          </clipPath>
        </defs>
        <image :href="photoHref" x="0" y="0"  width="100%" height="100%" clip-path="url(#clip-chshape)"
              @mouseover="hoverIf = true"
              @mouseleave="hoverIf = false"
              class="transition-opacity duration-500 ease-in-out"
              :class="{'opacity-100': hoverIf, 'opacity-0': !hoverIf}"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 120" 
        class="absolute left-[13vw] top-[1.9vw] w-[15.93vw]"> 
        <defs>
          <clipPath id="clip-shape">
            <path d="M10.5 14.5L146 0.5L265 120H64.5L0 107.5L10.5 14.5Z" />
          </clipPath>
        </defs>
        <image :href="photoHref" x="0" y="0"  width="100%" height="100%" clip-path="url(#clip-shape)"
          @mouseover="hoverIf = true"
          @mouseleave="hoverIf = false"
          class="transition-opacity duration-500 ease-in-out"
          :class="{'opacity-0': hoverIf, 'opacity-100': !hoverIf}"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 120" fill="none"
        class="absolute left-[13vw] top-[1.9vw] w-[15.93vw]">
        <defs>
          <clipPath id="clip-chshape">
            <path d="M0 7.5L139 0L265 120H0V7.5Z" />
          </clipPath>
        </defs>
        <image :href="photoHref" x="0" y="0"  width="100%" height="100%" clip-path="url(#clip-chshape)"
              @mouseover="hoverIf = true"
              @mouseleave="hoverIf = false"
              class="transition-opacity duration-500 ease-in-out"
              :class="{'opacity-100': hoverIf, 'opacity-0': !hoverIf}"
        />
      </svg>
      <svg
        @mouseover="hoverIf = true"
        @mousemove="cnt1 = true"
        @mouseleave="Leave"
        class="absolute left-[10.4vw] top-[1.13vw] w-[5.36vw] transition-transform duration-500 transform" 
        :class="{'frame': hoverIf, 'nframe': (!hoverIf & cnt2)}"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 46" fill="none">
        <path d="M1 17.5775L26.3085 1L58.5072 9.52113L65 35.2394L20.7433 45L1 17.5775Z" stroke="black"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverIf: false,
      cnt1: false,
      cnt2: false,
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
    },
    hasPhoto: {
      type: Boolean,
      required: true
    },
    photoHref: {
      type: String,
      required: false
    }
  },
}
</script>
<style scoped>
.frame{
  animation-name: animatescale, animatemove, changeStroke; 
  animation-duration: 0.5s, 0.5s, 0.5s;
  animation-fill-mode: forwards; 
}
@keyframes animatescale{
  from{ transform: scale(1) ; }
  to{ transform: scale(3.5) ;}
}
@keyframes animatemove{
  from{ 
    left: 10.4vw;
    top: 1.13vw; 
  }
  to{ 
    left: 17.5vw;
    top: 5.2vw; 
  }
}
@keyframes changeStroke {
    from { stroke-width: 1; }
    to { stroke-width: 0.3; }
}
.nframe{
  animation-name: nanimatescale, nanimatemove, nchangeStroke; 
  animation-duration: 0.5s, 0.5s, 0.5s;
  animation-fill-mode: forwards; 
}
@keyframes nanimatescale{
  from{ transform: scale(3.5) ; }
  to{ transform: scale(1) ;}
}
@keyframes nanimatemove{
  from{ 
    left: 17.5vw;
    top: 5.2vw; 
  }
  to{ 
    left: 10.4vw;
    top: 1.13vw; 
  }
}
@keyframes nchangeStroke {
    from { stroke-width: 0.3; }
    to { stroke-width: 1; }
}
</style>