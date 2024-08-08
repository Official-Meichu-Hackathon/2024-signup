<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex items-center text-[16px] mb-1.5 font-bold font-[Lato] not-italic leading-[normal] ">
      {{ title }}
    </div>
    <div
      class="flex p-[3%] flex-grow flex-shrink-0 rounded-[0.75vw] border-dark-gray border-[3px] bg-[#FFF] items-center justify-center relative"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      
      <!--
      <div v-if="!hover">
        <div class="dashed-border"></div>
        <img :src="imageSrc" alt="Company Logo" class="image" />
      </div>
      <div v-else class="w-full h-full">
        <slot></slot>
      </div> -->
      
      <transition name="fade" mode="out-in">
        <div v-if="!hover" key="not-hover" class="absolute inset-0 flex items-center justify-center">
          <div class="dashed-border"></div>
          <img :src="imageSrc" alt="Company Logo" class="image" />
        </div>
      </transition>
      <div v-if="hover" class="w-full h-full">
        <slot></slot>
      </div> 



    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '題目說明'
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageWidth: {
      type: String,
      default: 'auto'
    },
    imageHeight: {
      type: String,
      default: 'auto'
    }
  },
  data() {
    return {
      hover: false
    };
  }
};
</script>

<style scoped>

.dashed-border {
  position: absolute;
  inset: 3%;
  border: 2px dashed #6e6e6e;
  border-radius: 0.75vw;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>

