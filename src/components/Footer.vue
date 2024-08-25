<template>
  <!-- Desktop ver. -->
  <footer class="hidden sm:block pd-15 relative z-50">
    <div class="mx-8 h-[1px] bg-[#666]"/>
    <div class="inline-flex pt-0.5 pb-[88px] justify-center w-full">
      <div>
        <div class="flex pt-11 gap-x-8 justify-center">
          <a href="https://www.facebook.com/HackMeiChu"><img src="facebook.svg"/></a>
          <a href="https://www.instagram.com/mc_hackathon/"><img src="instagram.svg"/></a>
          <a href="mailto:2024mchackathon@gmail.com"><img src="email.svg"/></a>
        </div>
        <div class="font-Mantou font-normal text-sm pt-6">
          Copyright © 2024 Meichu Hackathon
        </div>
      </div>
    </div>
  </footer>

  <!-- Mobile ver. -->
  <footer class="sm:hidden footer-m fixed bottom-0 w-full h-[78px] z-50 bg-white">
    <div class="flex items-center justify-around h-full mx-[8vw]">
      <router-link to="/" class="footer-button-m">
        <img v-if="currentRouteName=='home'" src="footer/home_yellow.svg">
        <img v-else src="footer/home.svg">
        <div>首頁</div>
      </router-link>
      <router-link to="/contest_schedule" class="footer-button-m">
        <img v-if="currentRouteName=='contest_schedule'" src="footer/schedule_yellow.svg">
        <img v-else src="footer/schedule.svg">
        <div>比賽時程</div>
      </router-link>
      <router-link to="/form" class="signup-button flex flex-col items-center justify-center gap-1 mx-[-10px]">
        <img v-if="currentRouteName=='form'" src="footer/monster_yellow.svg">
        <img v-else src="footer/monster.svg">
        <div>我要報名</div>
      </router-link>
      <router-link to="/TopicDesciption" class="footer-button-m">
        <img v-if="currentRouteName=='topic'" src="footer/topic_yellow.svg">
        <img v-else src="footer/topic.svg">
        <div>題目說明</div>
      </router-link>
      <router-link to="/statistics" class="footer-button-m">
        <img v-if="currentRouteName=='statistics'" src="footer/statistics_yellow.svg">
        <img v-else src="footer/statistics.svg">
        <div>參賽數據</div>
      </router-link>
    </div>
  </footer>

</template>

<script>
export default {
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  }
}
</script>

<style>
.footer-m {
  color: #A1A8AD;
  font-size: 10px;
  font-weight: 700;
  font-family: Inter;
  text-align: center;
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25);
}
.signup-button {
  width: 74px;
  height: 68px;
  border-radius: 10px;
  border: 2px solid var(--d-9-d-9-d-9, #D9D9D9);
  background: #FFF;
}
.footer-button-m {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
  fill: #a1a8ad;
}
.router-link-exact-active {
  color: #d8e022;
  fill: #d8e022;
}
</style>