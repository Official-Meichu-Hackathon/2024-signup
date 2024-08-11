<!-- 7 企業廣告 @lynu369 -->

<template>
  <div
    class="hidden md:block relative h-[160dvh] w-[full] overflow-hidden z-20 box-border"
  >
    <object
      data="/home/icon-ve80.svg"
      type="image/svg+xml"
      class="absolute top-[5%] left-[76%]"
    ></object>
    <div
      class="font-Mantou text-[#43473E] text-[36px] text-[400] absolute top-[0%] left-[50%] translate-x-[-50%]"
    >
      企業廣告
    </div>
    <object
      data="/home/icon-ve43.svg"
      type="image/svg+xml"
      class="absolute top-[10%] left-[17%]"
    ></object>
    <object
      data="/home/icon-re49.svg"
      type="image/svg+xml"
      class="absolute top-[5%] left-[50%] translate-x-[-50%]"
    ></object>
    
    <div
      class="font-Mantou text-[#43473E] text-[36px] text-[400] absolute top-[50%] left-[50%] translate-x-[-50%]"
    >
      Youtube影片
    </div>
    <object
      data="/home/icon-ve45.svg"
      type="image/svg+xml"
      class="absolute top-[48%] left-[80%]"
    ></object>
    <object
      data="/home/icon-mo06.svg"
      type="image/svg+xml"
      class="ad-mo6 absolute top-[55%] left-[74%]"
    ></object>
    <object
      data="/home/icon-ve44.svg"
      type="image/svg+xml"
      class="absolute top-[53%] left-[0%]"
    ></object>
    <object
      data="/home/icon-gr28.svg"
      type="image/svg+xml"
      class="absolute top-[55%] left-[50%] translate-x-[-50%]"
    ></object>
    <object
      data="/home/icon-co13.svg"
      type="image/svg+xml"
      class="ad-co13 absolute top-[63%] left-[15%]"
    ></object>
    <object
      data="/home/icon-ve46.svg"
      type="image/svg+xml"
      class="absolute top-[78%] left-[70%]"
    ></object>
  </div>
</template>

<script setup></script>


<style scoped>
.ad-mo6 {
  animation: animateMo6 5s ease-out infinite;
}
.ad-co13 {
  animation: animateCo13 3s ease-out infinite;
}

@keyframes animateMo6 {
  0% {
    transform: rotate(4deg);
  }
  12.5% {
    transform: rotate(20.92deg);
  }
  25% {
    transform: rotate(20.92deg);
  }
  37.5% {
    transform: rotate(34.92deg);
  }
  50% {
    transform: rotate(34.92deg);
  }
  62.5% {
    transform: rotate(20.92deg);
  }
  75% {
    transform: rotate(20.92deg);
  }
  87.5% {
    transform: rotate(4deg);
  }
  100% {
    transform: rotate(4deg);
  }
}

@keyframes animateCo13 {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, -32px);
  }
  50% {
    transform: translate(0, -32px);
  }
  75% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}


</style>