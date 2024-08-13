<template>
  <div class="w-full h-full flex">
    <div class="flex h-[20px] flex-shrink-0 mb-1.5"></div>
    <div class="flex relative flex-shrink-0 rounded-[0.75vw] flex-grow border-dark-gray">
      <object
        data="Company/Monster1/background.svg"
        type="image/svg+xml"
        class="absolute left-1/2 bottom-[-1%] w-[93%] h-auto transform -translate-x-1/2"
      ></object>
      <object
        data="Company/Monster1/monster1-1.svg"
        type="image/svg+xml"
        class="absolute top-[19%] left-[14%] w-[35%] h-auto changing-object"
        style="animation-delay: 0s"
      ></object>
      <object
        data="Company/Monster1/monster1-2.svg"
        type="image/svg+xml"
        class="absolute top-[19%] left-[14%] w-[35%] h-auto changing-object"
        style="animation-delay: 2s"
      ></object>
      <object
        data="Company/Monster1/monster1-3.svg"
        type="image/svg+xml"
        class="absolute top-[19%] left-[14%] w-[35%] h-auto changing-object"
        style="animation-delay: 4s"
      ></object>
      <object
        data="Company/Monster1/monster1-4.svg"
        type="image/svg+xml"
        class="absolute top-[19%] left-[14%] w-[35%] h-auto changing-object"
        style="animation-delay: 6s"
      ></object>
    </div>
  </div>


    <div
      class="relative h-full w-full grid grid-cols-[6.18fr_1.04fr] grid-rows-[13fr_8.5fr] gap-3"
    >
        <div
          class="absolute inset-0 font-Mantou text-[3vw] text-success-text text-[#43473E] font-[400] gap-1 flex flex-row items-center justify-center left-[30%] test"
          data-v-1765d9d0=""
        >
          <div class="cardbox-font1" data-v-1765d9d0="">報</div>
          <div class="cardbox-font2" data-v-1765d9d0="">名</div>
          <div class="cardbox-font3" data-v-1765d9d0="">成</div>
          <div class="cardbox-font4" data-v-1765d9d0="">功</div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.text-success-text {
  font-size: calc(2vw + 10px); /* 調整這裡的值以獲得合適的大小 */
}

.test {
    margin-top: -70%;
}
.changing-object {
  animation: showFrame 8s steps(1) infinite;
  opacity: 0;
  margin-top: -38%;
}

@keyframes showFrame {
  0%,
  20% {
    opacity: 1;
  }
  25%,
  95% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.cardbox-font1 {
  animation: animateFont1 15s ease-out infinite;
}

@keyframes animateFont1 {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(0deg);
  }
  66% {
    transform: rotate(9.356deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.cardbox-font2 {
  animation: animateFont2 15s ease-out infinite;
}

@keyframes animateFont2 {
  0% {
    transform: rotate(-15.858deg);
  }
  33% {
    transform: rotate(-2.197deg);
  }
  66% {
    transform: rotate(-6.558deg) translate(0, -1.12vw);
  }
  100% {
    transform: rotate(-15.858deg);
  }
}

.cardbox-font3 {
  animation: animateFont3 15s ease-out infinite;
}

@keyframes animateFont3 {
  0% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(0, 0.96vw);
  }
  66% {
    transform: translate(0, -0.32vw);
  }
  100% {
    transform: translate(0, 0);
  }
}

.cardbox-font4 {
  animation: animateFont4 15s ease-out infinite;
}

@keyframes animateFont4 {
  0% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(0.32vw, -1.8vw);
  }
  66% {
    transform: translate(-0.24vw, 0.8vw);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>

*/
