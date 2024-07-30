<template>
  <nav class="fixed top-0 w-full h-[75px] z-50 bg-white">
    <div class="flex items-center justify-between mx-[3vw] h-full">
      <div class="flex items-center justify-between gap-x-[3vw] mt-1.5">
        <router-link to="/"><img src="@/../public/Header_Logo.svg"/></router-link>
        <div class="text-base font-Inter font-extrabold text-yellow">首頁</div>
        <div class="text-base font-Inter font-medium text-[#222236]">比賽時程</div>
        <div class="text-base font-Inter font-medium text-[#222236]">題目說明</div>
        <div class="text-base font-Inter font-medium text-[#222236]">參賽數據</div>
      </div>
      <div class="flex w-[11vw] lg:w-[7.6vw] h-11 mr-8 mt-2 justify-center items-center gap-2.5 rounded-lg bg-yellow">
        <p class="font-Inter font-bold text-white">我要報名</p>
      </div>
    </div>
    <hr class="mx-[2vw] bg-[#0F112B] h-[1px]">
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>