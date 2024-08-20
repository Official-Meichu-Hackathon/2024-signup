<template>
  <div class="mt-[75px] flex flex-row w-full h-full justify-center">
    <div class="flex">
      <div class="w-[23vw] h-[30vw] relative">
        <img class="absolute top-[3.66vw] w-[7.96vw]" src="../../../public/time_flow/time_left1.svg"/>
        <img class="absolute left-[8.05vw] top-[4.14vw] w-[12.02vw]" src="../../../public/time_flow/time_left2.svg"/>
        <img class="absolute left-[1.03vw] top-[9.42vw] w-[13.98vw]" src="../../../public/time_flow/time_left3.svg"/>
        <div class="absolute left-[2.27vw] top-[5.44vw] text-black font-Mantou text-[3.25vw] font-normal tracking-[0.33vw]">賽程</div>
        <div class="absolute left-[2.27vw] top-[16.82vw] text-[1.3vw]">
          <br>地點｜國立清華大學新體育館<br>時間｜2024/10/19(六) - 10/20(日)
        </div>
      </div>
    </div>
    <div class="mt-[5.77vw] px-[2%] pb-[2%] justify-center">
      <div class="flex relative">
        <div class="w-[2.44vw]"></div>
        <img src="../../../public/time_flow/time_star.svg" class="absolute w-[2.44vw] left-[0vw] star1"/>
        <img src="../../../public/time_flow/time_star_ch.svg" class="absolute w-[4.71vw] left-[-1.6vw] star2" />
        <div class="flex ml-[1.95vw] text-black font-black text-[1.95vw] font-['Inter']">10/19<br>Saturday</div>
      </div>
      <div class="flex flex-col">
        <div v-for="(item, index) in satData" :key="index">
          <Timebox :nowTime="item.curTime" :activity="item.actList" :hasPhoto="item.ifPhoto" :photoHref="item.photoH"/>
        </div>
      </div>
    </div>
    <div class="mt-[5.77vw] justify-center">
      <div class="flex relative">
        <div class="w-[2.44vw]"></div>
        <img src="../../../public/time_flow/time_star.svg" class="absolute w-[2.44vw] left-[0vw] star1"/>
        <img src="../../../public/time_flow/time_star_ch.svg" class="absolute w-[4.71vw] left-[-1.6vw] star2" />
        <div class="flex ml-[1.95vw] text-black font-black text-[1.95vw] font-['Inter']">10/20<br>Sunday</div>
      </div>
      <div class="flex flex-col">
        <div v-for="(item, index) in sunData" :key="index">
          <Timebox :nowTime="item.curTime" :activity="item.actList" :hasPhoto="item.ifPhoto" :photoHref="item.photoH"/>
        </div>
      </div>
    </div>
  </div>
  <div class="pb-[2%] text-red-500 font-bold text-[1.5vw] font-['Inter'] transform translate-x-[26.5vw]">
      實際流程將以現場公佈為準，屆時請參賽者留意大會推播通知。
  </div>
</template>

<script>
import Timebox from '@/components/time_flow/Timebox.vue'

export default {
  components: {
    Timebox
  },
  data(){
    return {
      showStar:true,
      satData:[ 
        {
          curTime: '08:30 - 09:00',
          actList: ['參賽者報到'],
          ifPhoto: false,
          photoH: ''
        },
        {
          curTime: '09:00 - 10:30',
          actList: ['開幕式'],
          ifPhoto: true,
          photoH: '1.jpg'
        },
        {
          curTime: '10:30 - 12:00',
          actList: ['Coding','企業博覽會','娛樂交流活動'],
          ifPhoto: true,
          photoH: '2.jpg'
        },
        {
          curTime: '12:00 - 13:30',
          actList: ['午餐'],
          ifPhoto: true,
          photoH: '3.jpg'
        },
        {
          curTime: '13:30 - 18:00',
          actList: ['Coding','企業博覽會','娛樂交流活動'],
          ifPhoto: true,
          photoH: '4.jpg'
        },
        {
          curTime: '18:00 - 19:30',
          actList: ['晚餐'],
          ifPhoto: true,
          photoH: '5.jpg'
        },
        {
          curTime: '19:30 - 22:00',
          actList: ['Coding','娛樂交流活動'],
          ifPhoto: true,
          photoH: '6.jpg'
        },
        {
          curTime: '22:00 - 22:30',
          actList: ['宵夜'],
          ifPhoto: false,
          photoH: ''
        },
        {
          curTime: '22:30 - 24:00',
          actList: ['Coding','參賽者休息'],
          ifPhoto: true,
          photoH: '7.jpg'
        }
      ],
      sunData:[ 
        {
          curTime: '00:00 - 08:00',
          actList: ['Coding','參賽者休息'],
          ifPhoto: true,
          photoH: '7.jpg'
        },
        {
          curTime: '08:00 - 09:00',
          actList: ['早餐'],
          ifPhoto: false,
          photoH: ''
        },
        {
          curTime: '09:00 - 11:00',
          actList: ['Coding','企業博覽會','娛樂交流活動'],
          ifPhoto: true,
          photoH: '8.jpg'
        },
        {
          curTime: '11:00 - 11:50',
          actList: ['午餐','活動攤位'],
          ifPhoto: true,
          photoH: '3.jpg'
        },
        {
          curTime: '11:50 - 15:10',
          actList: ['創客交流組決賽'],
          ifPhoto: false,
          photoH: ''
        },
        {
          curTime: '12:10 - 14:00',
          actList: ['黑客組初賽'],
          ifPhoto: true,
          photoH: '9.jpg'
        },
        {
          curTime: '15:20 - 17:30',
          actList: ['黑客組決賽'],
          ifPhoto: false,
          photoH: ''
        },
        {
          curTime: '17:30 - 18:30',
          actList: ['頒獎','抽獎'],
          ifPhoto: true,
          photoH: '10.jpg'
        },
        {
          curTime: '18:30 - 19:30',
          actList: ['閉幕式'],
          ifPhoto: false,
          photoH: ''
        },
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