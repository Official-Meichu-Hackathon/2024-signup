<template>
  <div class="mt-[75px] flex flex-col w-full h-full justify-center md:flex-row">
    <div class="relative">
      <div class="w-[23vw] h-[30vw]"></div>
      <img class="absolute top-[3.66vw]" src="../../public/time_left1.svg"/>
      <img class="absolute left-[8.05vw] top-[4.14vw]" src="../../public/time_left2.svg"/>
      <img class="absolute left-[1.03vw] top-[9.42vw]" src="../../public/time_left3.svg"/>
      <div class="absolute left-[2.27vw] top-[5.44vw] text-black font-Mantou text-[40px] font-normal tracking-[4px]">賽程</div>
      <div class="absolute left-[2.27vw] top-[16.82vw]">
        <br>地點｜國立清華大學新體育館<br>時間｜2024/10/19(六) - 10/20(日)
      </div>
    </div>
    <div class="mt-[5.77vw] px-[1%]">
      <div class="flex relative">
        <div class="w-[2.44vw]"></div>
        <img src="../../public/time_star.svg" class="absolute left-[0vw] star1"/>
        <img src="../../public/time_star_ch.svg" class="absolute left-[-1.6vw] star2" />
        <div class="flex ml-6 text-black font-black text-2xl font-['Inter']">10/21<br>Saturday</div>
      </div>
      <div class="flex flex-col justify-center">
        <div class="mt-[13px] ml-[55px] text-black text-sm font-normal font-['Inter']">08:30 - 09:00</div>
        <div class="mb-[13px] ml-[55px] text-black text-sm font-normal font-['Inter']">參賽者報到</div>
        <div v-for="(item, index) in satData" :key="index">
          <Timebox :nowTime="item.curTime" :activity="item.actList" />
        </div>
      </div>
    </div>
    <div class="mt-[5.77vw] px-[1%]">
      <div class="flex relative">
        <div class="w-[2.44vw]"></div>
        <img src="../../public/time_star.svg" class="absolute left-[0vw] star1"/>
        <img src="../../public/time_star_ch.svg" class="absolute left-[-1.6vw] star2" />
        <div class="flex ml-6 text-black font-black text-2xl font-['Inter']">10/22<br>Sunday</div>
      </div>
      <div class="flex flex-col justify-center">
        <div v-for="(item, index) in sunData" :key="index">
          <Timebox :nowTime="item.curTime" :activity="item.actList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timebox from '@/components/Timebox.vue'

export default {
  name: 'ContestSchedule',
  components: {
    Timebox
  },
  data(){
    return {
      showStar:true,
      satData:[ 
        {
          curTime: '09:00 - 10:30',
          actList: ['開幕式']
        },
        {
          curTime: '10:30 - 12:00',
          actList: [
            'Coding',
            '企業博覽會',
            '文化交流活動'
          ]
        },
        {
          curTime: '12:00 - 13:30',
          actList: ['午餐時間']
        },
        {
          curTime: '13:30 - 18:00',
          actList: [
            'Coding',
            '企業博覽會',
            '娛樂交流活動'
          ]
        },
        {
          curTime: '18:30 - 19:00',
          actList: ['晚餐時間']
        },
        {
          curTime: '19:30 - 22:00',
          actList: [
            'Coding',
            '娛樂交流活動'
          ]
        }
      ],
      sunData:[ 
        {
          curTime: '08:00 - 11:00',
          actList: [
            'Coding',
            '企業博覽會',
            '娛樂交流活動'
          ]
        },
        {
          curTime: '12:00 - 13:00',
          actList: [
            'Coding',
          ]
        },
        {
          curTime: '13:00 - 17:10',
          actList: [
            '黑客組初賽',
            '創克交流組決賽',
            '黑客組決賽'
          ]
        },
        {
          curTime: '17:10 - 19:00',
          actList: ['閉幕式、頒獎、抽獎']
        }
      ]
    }
  },
}
</script>
<style scoped>
  .star1 {
    animation: animateStar1 4s ease-out infinite;
  }
  @keyframes animateStar1 {
    0% {
      opacity: 1;
    }
    12% {
      opacity: 0.7;
      transform: rotate(60);
    }
    25% {
      opacity: 0.3;
    }
    50% {
      opacity: 0;
    }
    62% {
      opacity: 0.3;
    }
    75% {
      opacity: 0.7;
      transform: rotate(-60);
    }
    87% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  .star2 {
    animation: animateStar2 4s ease-out infinite;
  }
  @keyframes animateStar2 {
    0% {
      opacity: 0;
    }
    12% {
      opacity: 0.3;
    }
    25% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
    62% {
      opacity: 0.7;
    }
    75% {
      opacity: 0.3;
    }
    87% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
}
</style>