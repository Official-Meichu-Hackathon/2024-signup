<template>
  <div class="flex flex-col w-full h-full">
    <div
      class="flex p-[3%] flex-grow flex-shrink-0 rounded-[0.75vw] border-dark-gray border-[3px] bg-[#FFF] items-center justify-center relative"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >   
      <transition name="fade" mode="out-in">
        <div v-if="!hover" key="not-hover" class="absolute inset-0 flex items-center justify-center">
          <div class="dashed-border"></div>
          <img :src="imageSrc" alt="Company Logo" :class="imageClass" />
        </div>
      </transition>
      <div v-if="hover" class="w-full h-full">
        <div class="relative companyName pl-[3%] pt-[2%] w-[100%]">{{ companyName }}</div>
        <div class="min5max30 absolute top-[30%] left-[6%] right-[6%] w-[88%] h-auto" style="font-family: 'Taipei Sans TC Beta'; color: var(--43473-e, #43473E); font-weight: 700;" >
            題目：{{ description }}
        </div>
        <div class="Details absolute top-[91%] left-[67%] w-[25%] h-auto">
            <a :href="detailsLink" target="_blank" rel="noopener noreferrer" 
            class="details-link" 
            style="display: inline-block;">
                <img src="Company/Description/DescriptionGreen.svg" alt="詳細說明" 
                    class="details-image" 
                    style="cursor: pointer; transition: all 0.3s ease;"
                    onmouseover="this.src='Company/Description/DescriptionGray.svg';" 
                    onmouseout="this.src='Company/Description/DescriptionGreen.svg';" 
                    onmousedown="this.src='Company/Description/DescriptionBlack.svg';" 
                    onmouseup="this.src='Company/Description/DescriptionGreen.svg';">
            </a>
        </div>
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
    companyName: {
      type: String,
      default: '公司名稱'
    },
    description: {
      type: String,
      default: '描述內容' 
    },
    detailsLink: {
      type: String,
      required: true
    },
    imageClass: {
      type: String,
      default: ''
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
.min5max30 {
  --min-size: 5;
  --max-size: 30;
  --font-size: calc(
    (var(--min-size) * 1px) + 
    (var(--max-size) - var(--min-size)) * 
    ((100cqw - 320px) / (1920 - 320))
  );
  font-size: clamp(var(--min-size) * 1px, var(--font-size), var(--max-size) * 1px);
}

</style>

