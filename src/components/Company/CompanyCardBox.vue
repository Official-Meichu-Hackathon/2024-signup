<!--
<template>
    <div class="flex flex-col w-full h-full">
        <div class="flex items-center text-[16px] mb-1.5 font-bold font-[Lato] not-italic leading-[normal] ">題目說明</div>
        
        <div class="flex p-[3%] flex-grow flex-shrink-0 rounded-[0.75vw] border-dark-gray border-[3px] bg-[#FFF] items-center justify-center">
            <div>hi</div>
            <div class="w-full h-full flex-shrink-0 rounded-[var(--sds-size-blur-100)] border-[1px] bg-[#FFF] items-center justify-center flex border-dashed"
            style="border-image: linear-gradient(to right, #6e6e6e 33%, rgba(255, 255, 255, 0) 0%) 1;">
                <img class="absolute" src="Company\NXP.svg" />
            </div> 
        </div>
    </div>
    
</template>
<script>
export default {

}
</script>
    
<style>
    
</style>  -->

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
      
      <div v-if="!hover">
        <div class="dashed-border"></div>
        <img :src="imageSrc" alt="Company Logo" class="image" />
      </div>
      <div v-else class="w-full h-full">
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

/*
.image {
  position: absolute;
  inset: 0; 
  width: 100%;
  height: 100%;
  object-fit: contain; 
  transform: scale(0.68);
  transform-origin: center;
  /*transform: scale(0.70);*/
  /*transform-origin: center;
}
*/

</style>

