<template>
  <!-- Desktop ver. -->
  <nav class="hidden md:block h-[4.6875rem]">
    <div class="flex items-center justify-between mx-[3vw] h-full">
      <div class="flex items-center justify-between gap-x-[3vw] mt-1.5">
        <router-link to="/"><img src="Header_Logo.svg"/></router-link>
        <div class="text-highlight">首頁</div>
        <div class="text-basic">比賽時程</div>
        <div class="text-basic">題目說明</div>
        <div class="text-basic">參賽數據</div>
      </div>
      <div class="flex w-[11vw] lg:w-[7.6vw] h-11 mr-8 mt-2 justify-center items-center gap-2.5 rounded-lg bg-yellow">
        <p class="font-Inter font-bold text-white">我要報名</p>
      </div>
    </div>
  </nav>

  <!-- Mobile ver. -->
  <nav class="md:hidden h-14">
    <div class="flex items-center justify-between px-[4.6vw] h-full">
      <router-link to="/"><img src="Header_Logo_m.svg"/></router-link>
      <div class="flex items-center justify-between gap-x-[3vw]">
        <a href="https://www.facebook.com/HackMeiChu"><img src="facebook.svg" class="w-5 h-5"/></a>
        <a href="https://www.instagram.com/mc_hackathon/"><img src="instagram.svg" class="w-5 h-5"/></a>
        <a href="mailto:2024mchackathon@gmail.com"><img src="email.svg" class="w-6 h-6"/></a>
      </div>
    </div>
  </nav>
</template>


<script>
export default {

}
</script>

<style>
nav {
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  background: white;
  box-shadow: 0px 1px 4px 0px #00000040;
}

.text-highlight {
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: Inter, sans-serif;
  font-weight: 800;
  color: #d8e022;
}
.text-basic {
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: Inter, sans-serif;
  font-weight: 500;
  color: #222236;
}
</style>