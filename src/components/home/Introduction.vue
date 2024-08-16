<!-- 3 組別介紹 @userwei -->

<template>
  <div
    class="hidden md:block relative h-[130dvh] w-[full] overflow-hidden z-20 box-border"
    data-testid="introduction-container"
  >
    <div class="absolute top-[0.1%] left-[50%] translate-x-[-50%]">
      <object
        data="/home/icon-gr52-1.svg"
        type="image/svg+xml"
        class="intro-gr52-1"
        data-testid="icon-gr52-1"
      ></object>
    </div>
    <div class="absolute top-[0.1%] left-[50%] translate-x-[-50%]">
      <object
        data="/home/icon-gr52-2.svg"
        type="image/svg+xml"
        class="intro-gr52-2"
        data-testid="icon-gr52-2"
      ></object>
    </div>
    <object
      data="/home/icon-ve47.svg"
      type="image/svg+xml"
      class="absolute top-[7%] left-[65%]"
      data-testid="icon-ve47"
    ></object>
    <object
      data="/home/icon-ve48.svg"
      type="image/svg+xml"
      class="absolute top-[37%] left-[73%]"
      data-testid="icon-ve48"
    ></object>
    <object
      data="/home/icon-ve71.svg"
      type="image/svg+xml"
      class="absolute top-[51%] left-[1%]"
      data-testid="icon-ve71"
    ></object>
    <div
      class="font-Mantou text-[#43473E] text-[36px] text-[400] absolute top-[7%] left-[50%] translate-x-[-50%]"
      data-testid="title-text"
    >
      組別介紹 & 工作坊
    </div>
    <div
      class="absolute top-[20%] left-[50%] translate-x-[-50%] flex flex-row gap-16"
      data-testid="groups-section"
    >
      <div
        class="group border-[#A1A8AD] bg-white border-[1px] w-[35dvw] px-12 pt-12 pb-6 rounded-[50px] flex flex-col items-center gap-4 hover:bg-[#FEFFF0] hover:border-[#D8E022] hover:border-[3px] hover:scale-[1.05] transition ease-in-out duration-500"
        data-testid="group-hackers"
      >
        <div>
          <object
            data="/home/icon-re239.svg"
            type="image/svg+xml"
            class="group-hover:scale-[1.05] transition ease-in-out duration-500 w-[30dvw]"
            data-testid="icon-re239-hackers"
          ></object>
        </div>
        <div class="font-Mantou text-[34px] text-[#43473E] font-[400]">
          黑客組
        </div>
        <div
          class="flex flex-row items-center gap-2 group-hover:scale-[1.05] transition ease-in-out duration-500"
          data-testid="stars-hackers"
        >
          <object data="/home/icon-re240.svg" type="image/svg+xml"></object>
          <object data="/home/icon-re240.svg" type="image/svg+xml"></object>
          <object data="/home/icon-re240.svg" type="image/svg+xml"></object>
        </div>
        <div
          class="font-Inter text-[16px] font-[400] text-center w-[30dvw]"
          data-testid="description-hackers"
        >
          我們致力於搭起學生與企業之間的橋樑，學生運用企業資源並發揮潛力回應企業命題，讓學生進一步實踐創意發想！而今年我們將由以下六家企業作為引導單位：
          ETtoday
          新聞雲、Google、KKCompanyTechnologies、LINE、恩智浦半導體、文曄科技、台積電（按企業英文全稱字母順序排列）
        </div>
        <button
          class="opacity-0 group-hover:opacity-100 transition ease-in-out duration-700 bg-[#D8E022] text-white font-Inter text-[20px] font-[400] px-4 py-2 rounded-full hover:bg-white hover:text-[#D8E022] hover:border-[#D8E022] border-[1px] border-[#D8E022] active:bg-white active:text-[#A1A8AD] active:border-[#A1A8AD]"
          data-testid="details-button-hackers"
        >
          <a href="/">
            <div class="flex flex-row gap-1 items-center justify-center">
              <div>工作坊細節</div>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10C17 11.5 16.5 13 15.61 14.19L16.42 15H17L22 20L20 22L15 17V16.41L14.19 15.6C11.1 17.92 6.71 17.29 4.39 14.2C2.07 11.11 2.7 6.72 5.79 4.4C7 3.5 8.5 3 10 3ZM9 6V9H6V11H9V14H11V11H14V9H11V6H9ZM0 0V7L7 0H0Z"
                  fill="CurrentColor"
                />
              </svg>
            </div>
          </a>
        </button>
      </div>
      <div
        class="group border-[#A1A8AD] bg-white border-[1px] w-[35dvw] px-12 pt-12 pb-6 rounded-[50px] flex flex-col items-center gap-4 hover:bg-[#FEFFF0] hover:border-[#D8E022] hover:border-[3px] hover:scale-[1.05] transition ease-in-out duration-500"
        data-testid="group-creators"
      >
        <div>
          <object
            data="/home/icon-re239.svg"
            type="image/svg+xml"
            class="group-hover:scale-[1.05] transition ease-in-out duration-500 w-[30dvw]"
            data-testid="icon-re239-creators"
          ></object>
        </div>
        <div class="font-Mantou text-[34px] text-[#43473E] font-[400]">
          創客交流組
        </div>
        <div
          class="flex flex-row items-center gap-2 group-hover:scale-[1.05] transition ease-in-out duration-500"
          data-testid="stars-creators"
        >
          <object data="/home/icon-re240.svg" type="image/svg+xml"></object>
          <object data="/home/icon-re240.svg" type="image/svg+xml"></object>
          <object data="/home/icon-re240.svg" type="image/svg+xml"></object>
        </div>
        <div
          class="font-Inter text-[16px] font-[400] text-wrap text-center w-[30dvw]"
          data-testid="description-creators"
        >
          由新竹市政府命題，融大新竹居民與旅遊客真實生活情境與議題，鼓勵跨領域，運用共享、共創、合作與實作，實際動手解決問題與提出方案。過程中將促進創作人才交流，體現創新創意、用戶體驗、數位科技趨勢應用的創客精神！
        </div>
        <button
          class="opacity-0 group-hover:opacity-100 transition ease-in-out duration-700 bg-[#D8E022] text-white font-Inter text-[20px] font-[400] px-4 py-2 rounded-full hover:bg-white hover:text-[#D8E022] hover:border-[#D8E022] border-[1px] border-[#D8E022] active:bg-white active:text-[#A1A8AD] active:border-[#A1A8AD]"
          data-testid="details-button-hackers"
        >
          <a href="/">
            <div class="flex flex-row gap-1 items-center justify-center">
              <div>工作坊細節</div>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10C17 11.5 16.5 13 15.61 14.19L16.42 15H17L22 20L20 22L15 17V16.41L14.19 15.6C11.1 17.92 6.71 17.29 4.39 14.2C2.07 11.11 2.7 6.72 5.79 4.4C7 3.5 8.5 3 10 3ZM9 6V9H6V11H9V14H11V11H14V9H11V6H9ZM0 0V7L7 0H0Z"
                  fill="CurrentColor"
                />
              </svg>
            </div>
          </a>
        </button>
      </div>
    </div>
    <div class="absolute top-[75%] left-[50%] translate-x-[-50%]">
      <object
        data="/home/icon-co09.svg"
        type="image/svg+xml"
        class="intro-co9"
        data-testid="icon-co09"
      ></object>
    </div>
    <object
      data="/home/icon-mo07.svg"
      type="image/svg+xml"
      class="intro-mo7 absolute top-[6%] left-[80%]"
      data-testid="icon-mo07"
    ></object>
  </div>
</template>

<script setup></script>

<style scoped>
.intro-gr52-1 {
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

.intro-gr52-2 {
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

.intro-co9 {
  animation: animateCo9 3s ease-out infinite;
}

@keyframes animateCo9 {
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

.intro-mo7 {
  animation: animateMo7 5s ease-out infinite;
}

@keyframes animateMo7 {
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
</style>
