<!-- 7 企業廣告 @lynu369 -->

<template>
  <div
    class="hidden md:block relative h-[1600px] w-[full] overflow-hidden z-20 box-border"
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
    <div class="relative w-full h-full">
      <div class="carousel absolute top-[8%] left-[50%] translate-x-[-50%] w-[50%] h-auto mx-auto overflow-hidden">
        <div class="flex carousel-track">
          <img src="/home/ad-1.jpg" alt="Image 1" class="w-full object-cover" />
          <img src="/home/ad-2.jpg" alt="Image 2" class="w-full object-cover" />
        </div>
      </div>
    </div>
    
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
  <div
    class="block md:hidden relative h-[640px] w-[full] overflow-hidden z-20 box-border"
  >
    <object
      data="/home/icon-ve102.svg"
      type="image/svg+xml"
      class="absolute top-[0%] left-[0%]"
    ></object>
    <object
      data="/home/icon-ve100.svg"
      type="image/svg+xml"
      class="absolute top-[37%] left-[55%]"
    ></object>
    <object
      data="/home/icon-ve101.svg"
      type="image/svg+xml"
      class="absolute top-[56%] left-[80%]"
    ></object>
    <div
      class="font-Mantou text-[#43473E] text-[20px] text-[400] absolute top-[5%] left-[50%] translate-x-[-50%]"
    >
      企業廣告
    </div>
    <div class="relative w-full h-full">
      <div class="carousel absolute top-[15%] left-[50%] translate-x-[-50%] w-[50%] h-auto mx-auto overflow-hidden">
        <div class="flex carousel-track">
          <img src="/home/ad-1.jpg" alt="Image 1" class="w-full object-cover" />
          <img src="/home/ad-2.jpg" alt="Image 2" class="w-full object-cover" />
        </div>
      </div>
    </div>

    <div
      class="font-Mantou text-[#43473E] text-[20px] text-[400] absolute top-[60%] left-[50%] translate-x-[-50%]"
    >
      Youtube影片
    </div>
    <object
      data="/home/icon-gr91.svg"
      type="image/svg+xml"
      class="absolute top-[65%] left-[50%] translate-x-[-50%]"
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
.carousel-track {
  animation: scroll-carousel 10s linear infinite;
}

@keyframes scroll-carousel {
  0% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-100%);
  }
  80% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
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