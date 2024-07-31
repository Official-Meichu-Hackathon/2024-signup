<!-- 1 標題 - 活動倒數 @userwei -->

<template>
  <div
    class="hidden md:block relative h-[150dvh] w-[full] overflow-hidden z-20 box-border"
  >
    <object
      data="/home/icon-gr14.svg"
      type="image/svg+xml"
      class="absolute top-[38%] left-[22%]"
    ></object>
    <object
      data="/home/icon-gr52-1.svg"
      type="image/svg+xml"
      class="title-gr52-1 absolute top-[32%] left-[18%]"
    ></object>
    <object
      data="/home/icon-gr52-2.svg"
      type="image/svg+xml"
      class="title-gr52-2 absolute top-[32%] left-[18%]"
    ></object>
    <object
      data="/home/icon-ve16.svg"
      type="image/svg+xml"
      class="absolute top-[22.5%] left-[21%]"
    ></object>
    <object
      data="/home/icon-ve17.svg"
      type="image/svg+xml"
      class="absolute top-[25%] left-[3%]"
    ></object>
    <object
      data="/home/icon-ve19.svg"
      type="image/svg+xml"
      class="absolute top-[27.5%] left-[46%]"
    ></object>
    <object
      data="/home/icon-ve20.svg"
      type="image/svg+xml"
      class="absolute top-[23%] left-[80%]"
    ></object>
    <object
      data="/home/icon-ve21.svg"
      type="image/svg+xml"
      class="absolute top-[34%] left-[77%]"
    ></object>
    <object
      data="/home/icon-ve26.svg"
      type="image/svg+xml"
      class="absolute top-[53%] left-[30%]"
    ></object>
    <object
      data="/home/icon-co02.svg"
      type="image/svg+xml"
      class="title-co2 absolute top-[7.5%] left-[25%]"
    ></object>
    <object
      data="/home/icon-co03.svg"
      type="image/svg+xml"
      class="title-co3 absolute top-[47.5%] left-[61%]"
    ></object>
    <object
      data="/home/icon-co06.svg"
      type="image/svg+xml"
      class="title-co6 absolute top-[37%] left-[60%]"
    ></object>
    <object
      data="/home/icon-co07.svg"
      type="image/svg+xml"
      class="title-co7 absolute top-[31.5%] left-[87%]"
    ></object>
    <object
      data="/home/icon-co10.svg"
      type="image/svg+xml"
      class="title-co10 absolute top-[90%] left-[70%]"
    ></object>
    <object
      data="/home/icon-mo01.svg"
      type="image/svg+xml"
      class="title-mo1 absolute top-[21%] left-[72%]"
    ></object>
    <object
      data="/home/icon-mo02.svg"
      type="image/svg+xml"
      class="title-mo2 absolute top-[35%] left-[3.5%]"
    ></object>
    <object
      data="/home/icon-mo04.svg"
      type="image/svg+xml"
      class="title-mo4 absolute top-[64%] left-[27.5%]"
    ></object>
    <div
      class="font-Mantou text-[20px] text-[#43473E] absolute top-[21%] left-[61.8%] font-[400]"
    >
      Creativity <br />
      Technology <br />
      Inovation
    </div>
    <div
      class="font-Mantou text-[110px] text-[#43473E] font-[400] h-[calc(100dvh-75px)] gap-1 flex flex-row items-center justify-center"
    >
      <div class="title-font1">梅</div>
      <div class="title-font2">竹</div>
      <div class="title-font3">黑</div>
      <div class="title-font4">客</div>
      <div class="title-font5">松</div>
    </div>
    <div
      class="absolute top-[76%] left-[50%] font-Mantou text-[#43473E] translate-x-[-50%]"
    >
      <div class="flex flex-col items-center">
        <div class="text-[24px] font-[400]" data-testid="countdown-label">
          距離活動開始還有
        </div>
        <vue-countdown
          :time="time"
          :interval="100"
          v-slot="{ days, hours, minutes, seconds }"
        >
          <div class="grid grid-cols-7 mt-6">
            <div class="flex flex-col items-center gap-y-4">
              <div class="text-[64px] font-[400]">{{ days }}</div>
              <div class="text-[24px] text-[400]" data-testid="days-label">
                Days
              </div>
            </div>
            <div class="flex flex-col items-center">
              <object
                data="/home/icon-co25.svg"
                type="image/svg+xml"
                class="title-co25 translate-y-[6px]"
              ></object>
            </div>
            <div class="flex flex-col items-center gap-y-4">
              <div class="text-[64px] font-[400]">{{ hours }}</div>
              <div class="text-[24px] text-[400]" data-testid="hours-label">
                Hours
              </div>
            </div>
            <div class="flex flex-col items-center">
              <object
                data="/home/icon-co26.svg"
                type="image/svg+xml"
                class="title-co26 translate-y-[6px]"
              ></object>
            </div>
            <div class="flex flex-col items-center gap-y-4">
              <div class="text-[64px] font-[400]">{{ minutes }}</div>
              <div class="text-[24px] text-[400]" data-testid="minutes-label">
                Mins
              </div>
            </div>
            <div class="flex flex-col items-center">
              <object
                data="/home/icon-co27.svg"
                type="image/svg+xml"
                class="title-co27 translate-y-[6px]"
              ></object>
            </div>
            <div class="flex flex-col items-center gap-y-4">
              <div class="text-[64px] font-[400]">{{ seconds }}</div>
              <div class="text-[24px] text-[400]" data-testid="seconds-label">
                Seconds
              </div>
            </div>
          </div>
        </vue-countdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueCountdown from "@chenfengyuan/vue-countdown"; // Ensure this component is installed

const now = new Date();
const targetDate = new Date(2024, 9, 19, 9, 0, 0); // October 19, 2024, 9:00 AM

const time = ref(targetDate - now);
</script>

<style scoped>
.title-font1 {
  animation: animateFont1 9s ease-out infinite;
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

.title-font2 {
  animation: animateFont2 9s ease-out infinite;
}

@keyframes animateFont2 {
  0% {
    transform: rotate(-15.858deg);
  }
  33% {
    transform: rotate(-2.197deg);
  }
  66% {
    transform: rotate(-6.558deg) translate(0, -14.1px);
  }
  100% {
    transform: rotate(-15.858deg);
  }
}

.title-font3 {
  animation: animateFont3 9s ease-out infinite;
}

@keyframes animateFont3 {
  0% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(0, 12px);
  }
  66% {
    transform: translate(0, -4px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.title-font4 {
  animation: animateFont4 9s ease-out infinite;
}

@keyframes animateFont4 {
  0% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(4px, -23px);
  }
  66% {
    transform: translate(-3px, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.title-font5 {
  animation: animateFont5 9s ease-out infinite;
}

@keyframes animateFont5 {
  0% {
    transform: rotate(13.92deg);
  }
  33% {
    transform: rotate(13.92deg);
  }
  66% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(13.92deg);
  }
}

.title-co2,
.title-co3 {
  animation: animateCo2 3s ease-out infinite;
}

@keyframes animateCo2 {
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

.title-co6 {
  animation: animateCo6 4s ease-out infinite;
}

@keyframes animateCo6 {
  0% {
    transform: translate(0, 0) rotate(15deg);
  }
  25% {
    transform: translate(40px, 10px) rotate(15deg) scale(1.1);
  }
  50% {
    transform: translate(40px, 10px) rotate(15deg) scale(1.1);
  }
  75% {
    transform: translate(0, 0) rotate(15deg);
  }
  100% {
    transform: translate(0, 0) rotate(15deg);
  }
}

.title-co7 {
  animation: animateCo7 4s ease-out infinite;
}

@keyframes animateCo7 {
  0% {
    transform: translate(0, 0) rotate(-20deg);
  }
  25% {
    transform: translate(40px, -10px) rotate(-20deg) scale(1.1);
  }
  50% {
    transform: translate(40px, -10px) rotate(-20deg) scale(1.1);
  }
  75% {
    transform: translate(0, 0) rotate(-20deg);
  }
  100% {
    transform: translate(0, 0) rotate(-20deg);
  }
}

.title-co10 {
  animation: animateCo10 4s ease-out infinite;
}

@keyframes animateCo10 {
  0% {
    transform: translate(0, 0) rotate(-25deg);
  }
  25% {
    transform: translate(40px, -10px) rotate(-25deg) scale(1.1);
  }
  50% {
    transform: translate(40px, -10px) rotate(-25deg) scale(1.1);
  }
  75% {
    transform: translate(0, 0) rotate(-25deg);
  }
  100% {
    transform: translate(0, 0) rotate(-25deg);
  }
}

.title-co25,
.title-co26,
.title-co27 {
  animation: animateCo25 2s ease-out infinite;
}

@keyframes animateCo25 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.title-mo1 {
  animation: animateMo1 5s ease-out infinite;
}

@keyframes animateMo1 {
  0% {
    transform: rotate(0);
  }
  12.5% {
    transform: rotate(16.92deg);
  }
  25% {
    transform: rotate(16.92deg);
  }
  37.5% {
    transform: rotate(30.92deg);
  }
  50% {
    transform: rotate(30.92deg);
  }
  62.5% {
    transform: rotate(16.92deg);
  }
  75% {
    transform: rotate(16.92deg);
  }
  87.5% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
}

.title-mo2 {
  animation: animateMo2 5s ease-out infinite;
}

@keyframes animateMo2 {
  0% {
    transform: rotate(0);
  }
  12.5% {
    transform: rotate(16.92deg);
  }
  25% {
    transform: rotate(16.92deg);
  }
  37.5% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(0);
  }
  62.5% {
    transform: rotate(-19.92deg);
  }
  75% {
    transform: rotate(-19.92deg);
  }
  87.5% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
}

.title-mo4 {
  animation: animateMo4 5s ease-out infinite;
}

@keyframes animateMo4 {
  0% {
    transform: rotate(9deg);
  }
  12.5% {
    transform: rotate(16.92deg);
  }
  25% {
    transform: rotate(16.92deg);
  }
  37.5% {
    transform: rotate(39.92deg);
  }
  50% {
    transform: rotate(39.92deg);
  }
  62.5% {
    transform: rotate(25.92deg);
  }
  75% {
    transform: rotate(25.92deg);
  }
  87.5% {
    transform: rotate(9deg);
  }
  100% {
    transform: rotate(9deg);
  }
}

.title-gr52-1 {
  animation: animateGr52-1 2.3s ease-out infinite;
}

@keyframes animateGr52-1 {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, -15px);
  }
  50% {
    transform: translate(0, -15px);
  }
  75% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

.title-gr52-2 {
  animation: animateGr52-2 2.3s ease-out infinite;
}

@keyframes animateGr52-2 {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, 15px);
  }
  50% {
    transform: translate(0, 15px);
  }
  75% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
