<template>
  <nav class="fixed top-0 w-full h-[75px] bg-white">
    <div class="flex items-center justify-between mx-11 h-full">
      <div class="flex items-center justify-between gap-x-12 mt-1.5">
        <router-link to="/" class="w-[15vw] font-Mantou font-normal text-2xl text-[#43473E]">梅竹黑克松</router-link>
        <div class="text-base font-Inter font-extrabold text-yellow">首頁</div>
        <router-link to="/contest_schedule" class="text-base font-Inter font-medium text-[#222236] hover:text-yellow">比賽時程</router-link>
        <div class="text-base font-Inter font-medium text-[#222236]">題目說明 testt</div>
        <div class="text-base font-Inter font-medium text-[#222236]">參賽數據</div>
      </div>
      <div class="flex w-28 h-11 mr-8 mt-2 justify-center items-center gap-2.5 rounded-lg bg-yellow">
        <p class="font-Inter font-bold text-white" @click="GoToSignupForm">我要報名</p>
      </div>
    </div>
    <hr class="mx-8 bg-[#0F112B] h-[1px]">
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

</style>