<!-- 4 獎項資訊 @userwei -->

<template>
  <div
    class="hidden md:block relative h-[100dvh] w-[full] overflow-hidden z-20 box-border"
  >
    <div
      class="font-Mantou text-[#43473E] text-[36px] text-[400] absolute top-[7%] left-[50%] translate-x-[-50%]"
    >
      獎項資訊
    </div>
    <object
      data="/home/icon-ve72.svg"
      type="image/svg+xml"
      class="absolute top-[7%] left-[2%]"
    ></object>
    <object
      data="/home/icon-ve73.svg"
      type="image/svg+xml"
      class="absolute top-[0.1%] left-[77%]"
    ></object>
    <object
      data="/home/icon-ve74.svg"
      type="image/svg+xml"
      class="absolute top-[58%] left-[19.5%]"
    ></object>
    <object
      data="/home/icon-ve75.svg"
      type="image/svg+xml"
      class="absolute top-[26%] left-[85%]"
    ></object>
    <div
      class="grid grid-cols-2 gap-y-6 absolute top-[20%] left-[50%] translate-x-[-50%]"
    >
      <div
        class="col-span-2 border-[#D9D9D9] border-[3px] rounded-[40px] px-10 py-6 bg-white hover:bg-[#FEFFF0] hover:border-[#D8E022]"
      >
        <div class="flex flex-col gap-4">
          <div class="flex flex-row gap-4 items-baseline">
            <div class="font-Mantou text-[#43473E] text-[34px] text-[400]">
              黑客組
            </div>
            <div class="font-Inter text-[12px] text-[400]">
              每間企業獨立評選
            </div>
          </div>
          <div class="flex flex-col gap-1 font-Inter text-[16px] text-[400]">
            <div>第一名：新台幣 15,000 元整、實體獎品、實習或實習面試資格</div>
            <div>第二名：新台幣 10,000 元整、實體獎品</div>
            <div>第三名：新台幣 5,000 元整、實體獎品</div>
          </div>
        </div>
      </div>
      <div
        class="col-span-2 border-[#D9D9D9] border-[3px] rounded-[40px] px-10 py-6 bg-white hover:bg-[#FEFFF0] hover:border-[#D8E022]"
      >
        <div class="flex flex-col gap-4">
          <div class="font-Mantou text-[#43473E] text-[34px] text-[400]">
            創客交流組
          </div>
          <div class="flex flex-col gap-1 font-Inter text-[16px] text-[400]">
            <div>第一名：新台幣 40,000 元整</div>
            <div>第二名：新台幣 30,000 元整</div>
            <div>第三名：新台幣 20,000 元整</div>
          </div>
        </div>
      </div>
      <div
        class="col-start-2 border-[#D9D9D9] border-[3px] rounded-[40px] px-10 py-6 bg-white hover:bg-[#FEFFF0] hover:border-[#D8E022]"
      >
        <div class="flex flex-col gap-4">
          <div class="flex flex-col">
            <div class="font-Mantou text-[#43473E] text-[34px] text-[400]">
              梅竹大獎
            </div>
            <div class="font-Inter text-[12px] text-[400]">
              由各企業第一名共同角逐
            </div>
          </div>
          <div class="flex flex-col gap-1 font-Inter text-[16px] text-[400]">
            <div>第一名：新台幣 28,000 元整</div>
            <div>第二名：新台幣 12,000 元整</div>
            <div>第三名：新台幣 6,000 元整</div>
          </div>
        </div>
      </div>
    </div>
    <object
      data="/home/icon-mo08.svg"
      type="image/svg+xml"
      class="prize-mo8 absolute top-[44%] left-[52%]"
    ></object>
    <object
      data="/home/icon-co31.svg"
      type="image/svg+xml"
      class="prize-co31 absolute top-[67%] left-[77%]"
    ></object>
    <object
      data="/home/icon-co28.svg"
      type="image/svg+xml"
      class="prize-co28 absolute top-[65%] left-[27%]"
    ></object>
    <object
      data="/home/icon-co29.svg"
      type="image/svg+xml"
      class="prize-co29 absolute top-[70%] left-[24%]"
    ></object>
    <object
      data="/home/icon-co30.svg"
      type="image/svg+xml"
      class="prize-co30 absolute top-[75%] left-[21%]"
    ></object>
  </div>
</template>

<script setup></script>

<style scoped>
.prize-mo8 {
  animation: animateMo8 5s ease-out infinite;
}

@keyframes animateMo8 {
  0% {
    transform: rotate(12deg);
  }
  12.5% {
    transform: rotate(28.92deg);
  }
  25% {
    transform: rotate(28.92deg);
  }
  37.5% {
    transform: rotate(42.92deg);
  }
  50% {
    transform: rotate(42.92deg);
  }
  62.5% {
    transform: rotate(28.92deg);
  }
  75% {
    transform: rotate(28.92deg);
  }
  87.5% {
    transform: rotate(12deg);
  }
  100% {
    transform: rotate(4deg);
  }
}

.prize-co31 {
  animation: animateCo31 3s ease-out infinite;
}

@keyframes animateCo31 {
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

.prize-co28 {
  animation: animateCo28 4s ease-out infinite;
}

@keyframes animateCo28 {
  0% {
    transform: translate(0, 0) rotate(180deg);
  }
  25% {
    transform: translate(-40px, 0px) rotate(180deg) scale(1.1);
  }
  50% {
    transform: translate(-40px, 0px) rotate(180deg) scale(1.1);
  }
  75% {
    transform: translate(0, 0) rotate(180deg);
  }
  100% {
    transform: translate(0, 0) rotate(180deg);
  }
}

.prize-co29 {
  animation: animateCo29 4s ease-out 0.1s infinite;
}

@keyframes animateCo29 {
  0% {
    transform: translate(0, 0) rotate(180deg);
  }
  25% {
    transform: translate(-40px, 0px) rotate(180deg) scale(1.1);
  }
  50% {
    transform: translate(-40px, 0px) rotate(180deg) scale(1.1);
  }
  75% {
    transform: translate(0, 0) rotate(180deg);
  }
  100% {
    transform: translate(0, 0) rotate(180deg);
  }
}

.prize-co30 {
  animation: animateCo30 4s ease-out 0.2s infinite;
}

@keyframes animateCo30 {
  0% {
    transform: translate(0, 0) rotate(180deg);
  }
  25% {
    transform: translate(-40px, 0px) rotate(180deg) scale(1.1);
  }
  50% {
    transform: translate(-40px, 0px) rotate(180deg) scale(1.1);
  }
  75% {
    transform: translate(0, 0) rotate(180deg);
  }
  100% {
    transform: translate(0, 0) rotate(180deg);
  }
}
</style>
