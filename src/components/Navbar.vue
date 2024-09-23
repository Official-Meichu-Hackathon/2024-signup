<template>
  <!-- Desktop ver. -->
  <nav class="hidden sm:block h-[4.6875rem] z-50">
    <div class="flex items-center justify-between mx-[3vw] h-full">
      <div class="flex items-center justify-between gap-x-[3vw]">
        <router-link to="/"><img src="Header_Logo.svg" class="sm:w-[110px] md:w-[120px] lg:w-[130px] xl:w-[140px] 2xl:w-[156px]"/></router-link>
        <router-link to="/" class="text-basic hover:text-yellow mt-1.5">首頁</router-link>
        <router-link to="/contest_schedule" class="text-basic hover:text-yellow mt-1.5">比賽時程</router-link>
        <router-link to="/topic_description" class="text-basic hover:text-yellow mt-1.5">題目說明</router-link>
        <router-link to="/statistics" class="text-basic hover:text-yellow mt-1.5">參賽數據</router-link>
      </div>
      <div class="flex min-w-[75px] w-[11vw] lg:w-[10vw] xl:w-[7.6vw] h-11 mr-8 mt-2 justify-center items-center gap-2.5 rounded-lg bg-[#d6e02280] cursor-not-allowed">
        <span class="font-Inter font-bold text-[#ffffff]">報名結束</span>
      </div>
    </div>
  </nav>

  <!-- Mobile ver. -->
  <nav class="sm:hidden h-14 z-50">
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
import { useRouter } from 'vue-router'
export default {
    setup(){
        const router = useRouter()
        const GoToSignupForm = () => {
            router.push('/form')
        }
        return {
            GoToSignupForm
        }
    }
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
.text-basic {
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: Inter, sans-serif;
  font-weight: 500;
  color: #222236;
}
.router-link-exact-active.text-basic {
  font-weight: 800;
  color: #d8e022;
}
</style>