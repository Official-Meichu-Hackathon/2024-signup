<!-- 2 照片 - 介紹 @userwei -->

<template>
  <div
    class="hidden md:block relative h-[130dvh] w-[full] overflow-hidden z-20 box-border"
  >
    <object
      data="/home/icon-re29.svg"
      type="image/svg+xml"
      class="absolute top-[7.6%] left-[50%] translate-x-[-50%]"
    ></object>
    <object
      data="/home/icon-re36.svg"
      type="image/svg+xml"
      class="absolute top-[6%] left-[50%] translate-x-[-50%]"
    ></object>
    <object
      data="/home/icon-ve29.svg"
      type="image/svg+xml"
      class="absolute top-[0.2%] left-[16%]"
    ></object>
    <object
      data="/home/icon-ve31.svg"
      type="image/svg+xml"
      class="absolute top-[27%] left-[-4%]"
    ></object>
    <object
      data="/home/icon-ve32.svg"
      type="image/svg+xml"
      class="absolute top-[25%] left-[81%]"
    ></object>
    <object
      data="/home/icon-ve33.svg"
      type="image/svg+xml"
      class="absolute top-[73%] left-[14%]"
    ></object>
    <object
      data="/home/icon-mo03.svg"
      type="image/svg+xml"
      class="title-mo3 absolute top-[85%] left-[5.5%]"
    ></object>
    <object
      data="/home/icon-co08.svg"
      type="image/svg+xml"
      class="title-co8 absolute top-[58%] left-[0.1%]"
    ></object>
    <object
      data="/home/icon-co16.svg"
      type="image/svg+xml"
      class="desc-co16 absolute top-[1.5%] left-[30%]"
    ></object>
    <object
      data="/home/icon-co24.svg"
      type="image/svg+xml"
      class="title-co24 absolute top-[61%] left-[78%]"
    ></object>
    <div
      class="absolute top-[53%] left-[50%] w-[47%] translate-x-[-50%] font-[14px] font-Inter"
      data-testid="description-text"
    >
      「2023 新竹 X
      梅竹黑客松」延續前一屆種下的創意種子，迎接新一年的盛會期待百花綻放，在近年人工智慧與科技蓬勃發展的洪流下，我們邀請到六間國際級企業與新竹市政府，剖析世界所期待得到解答的問題，並提供相關資源與指導，引領所有參賽者成為關鍵的最後一塊拼圖。<br /><br />
      梅竹黑客松就像一場盛大同樂會，一群「衷於解決問題」的人同聚一堂並勇於跳脫自我舒適圈，在發現與應用中，認識彼此與自己。兩天的比賽不單是激烈的隊伍競賽，更多的是透過團隊內的互補學習、隊伍與企業交流之間的教學相長，讓參賽者在梅竹黑客松中，「玩得像個小孩，想得像個大人」。<br /><br />
      我們始終堅信，每一個人的每一份想法都是無價的，在梅竹黑客松中你可以盡情揮灑各種想法，並學習利用有限的資源去創造無限可能期待各位參賽者能夠從生活中的細節挖掘出問題的根本，讓靈感化為行動，為你的人生自此展開不同樣貌。<br /><br />
      同時，我們延續自 2022
      活動十周年以來所建立的成果存放平台，持續翻新與維護該平台，致力於保留所有人最珍貴的好點子，希望自全國菁英歷年所奠定的基礎上，為新的一年啟發靈感與激盪嶄新想法，飲水思源之際，保有自強不息的精神，達成善的循環回饋社會。
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.title-co8 {
  animation: animateCo8 4s ease-out infinite;
}

@keyframes animateCo8 {
  0% {
    transform: translate(0, 0) rotate(160deg);
  }
  25% {
    transform: translate(-40px, 10px) rotate(160deg) scale(1.1);
  }
  50% {
    transform: translate(-40px, 10px) rotate(160deg) scale(1.1);
  }
  75% {
    transform: translate(0, 0) rotate(160deg);
  }
  100% {
    transform: translate(0, 0) rotate(160deg);
  }
}
.desc-co16 {
  animation: animateCo16 3.5s ease-out infinite;
}

@keyframes animateCo16 {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(30deg);
  }
  50% {
    transform: rotate(30deg);
  }
  75% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
}

.title-co24 {
  animation: animateCo24 3s ease-out infinite;
}

@keyframes animateCo24 {
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

.title-mo3 {
  animation: animateMo3 5s ease-out infinite;
}

@keyframes animateMo3 {
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
</style>
