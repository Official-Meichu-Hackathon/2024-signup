<template>
  <div class="mt-[75px] flex-col w-full h-full align-items justify-center">
    <div class="flex justify-center pb-[5%]">
      <div class="w-[69vw] h-[67vw] relative">
        <img class="absolute top-[10.98vw] w-[23.88vw]" src="../../../public/time_flow/time_left1.svg"/>
        <img class="absolute left-[24.15vw] top-[12.42vw] w-[36.06vw]" src="../../../public/time_flow/time_left2.svg"/>
        <img class="absolute left-[3.09vw] top-[28.26vw] w-[41.94vw]" src="../../../public/time_flow/time_left3.svg"/>
        <div class="absolute left-[6.81vw] top-[16.32vw] text-black font-Mantou text-[9.75vw] font-normal tracking-[0.99vw]">賽程</div>
        <div class="absolute left-[6.81vw] top-[50.46vw] text-[3.9vw]">
          <br>地點｜國立陽明交通大學體育館<br>時間｜2024/10/19(六) - 10/20(日)
        </div>
      </div>
    </div>
    <div class="flex items-center flex-col py-[5%]">
      <div class="relative">
        <div class="w-[6.1vw]"></div>
        <img src="../../../public/time_flow/time_star.svg" class="absolute w-[6.1vw] left-[-32.5vw] star1"/>
        <img src="../../../public/time_flow/time_star_ch.svg" class="absolute w-[11.78vw] left-[-36.5vw] star2" />
        <div class="transform translate-x-[-18.75vw] text-black font-black text-[4.88vw] font-['Inter']">10/19<br>Saturday</div>
      </div>
      <div class="flex-col">
        <div v-for="(item, index) in satData" :key="index">
          <Timebox_ph :nowTime="item.curTime" :activity="item.actList" :hasPhoto="item.ifPhoto" :photoHref="item.photoH"/>
        </div>
      </div>
    </div>
    <div class="flex items-center flex-col pb-[5%]">
      <div class="relative">
        <div class="w-[6.1vw]"></div>
        <img src="../../../public/time_flow/time_star.svg" class="absolute w-[6.1vw] left-[-32.5vw] star1"/>
        <img src="../../../public/time_flow/time_star_ch.svg" class="absolute w-[11.78vw] left-[-36.5vw] star2" />
        <div class="transform translate-x-[-20vw] text-black font-black text-[4.88vw] font-['Inter']">10/20<br>Sunday</div>
      </div>
      <div class="flex flex-col">
        <div v-for="(item, index) in sunData" :key="index">
          <Timebox_ph :nowTime="item.curTime" :activity="item.actList" :hasPhoto="item.ifPhoto" :photoHref="item.photoH"/>
        </div>
      </div>
    </div>
    <div class="flex pb-[5%] text-red-500 font-bold text-[3.75vw] font-['Inter'] items-center justify-center">
      實際流程將以現場公佈為準，<br>
      屆時請參賽者留意大會推播通知。
    </div>
  </div>
</template>

<script>
import Timebox_ph from '@/components/time_flow/Timebox_ph.vue'

export default {
  components: {
    Timebox_ph
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