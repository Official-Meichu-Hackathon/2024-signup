<template>
  <!-- Desktop ver. -->
  <footer class="hidden sm:block pd-15">
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
        <img src="footer/homepage_icon.svg">
        <div>首頁</div>
      </router-link>
      <div class="footer-button-m">
        <img src="footer/timeflow_icon.svg">
        <div>比賽時程</div>
      </div>
      <div class="signup-button flex flex-col items-center justify-center gap-1 mx-[-10px]">
        <img src="footer/monster.svg">
        <div>我要報名</div>
      </div>
      
      <div class="footer-button-m">
        <img src="footer/topic_icon.svg">
        <div>題目說明</div>
      </div>
      <div class="footer-button-m">
        <img src="footer/statistics_icon.svg">
        <div>參賽數據</div>
      </div>
    </div>
  </footer>

</template>

<script>

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
}
</style>