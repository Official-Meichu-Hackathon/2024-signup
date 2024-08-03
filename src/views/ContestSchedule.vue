<template>
  <div class="mt-[75px]">
    <div class="relative">
      <img class="absolute left-[3.5625rem] top-[2.8125rem]" src="../../public/time_left1.svg"/>
      <img class="absolute left-[9.75rem] top-[3.1875rem]" src="../../public/time_left2.svg"/>
      <img class="absolute left-[4.375rem] top-[7.25rem]" src="../../public/time_left3.svg"/>
      <div class="absolute left-[5.3125rem] top-[4.1875rem] text-black font-Mantou text-[2.5rem] font-normal tracking-[0.25rem]">賽程</div>
      <div class="absolute left-[5.3125rem] top-[12.9375rem]">
        <br>地點｜國立清華大學新體育館<br>時間｜2024/10/19(六) - 10/20(日)
      </div>
    </div>
    <div class="flex flex-row">
      <div class="ml-[26.25rem] mt-[71px]">
        <div class="flex">
          <img v-show="showStar" src="../../public/time_star.svg" class="w-[1,875rem] transition-opacity duration-500" />
          <img v-show="!showStar" src="../../public/time_star_ch.svg" class="w-[1.875rem] transition-opacity duration-500" />
          <div class="flex ml-6 text-black font-black text-2xl font-['Inter']">10/21<br>Saturday</div>
        </div>
        <div class="flex flex-col">
          <div class="mt-[13px] ml-[55px] text-black text-sm font-normal font-['Inter']">08:30 - 09:00</div>
          <div class="mb-[13px] ml-[55px] text-black text-base font-normal font-['Inter']">參賽者報到</div>
          <div v-for="(item, index) in satData" :key="index">
            <Timebox :nowTime="item.curTime" :activity="item.actList" />
          </div>
        </div>
      </div>
      <div class="mt-[4.0625rem]">
        <div class="flex">
          <img class="w-[1.875rem] relative" src="../../public/time_star.svg"/>
          <div class="flex ml-6 text-black font-black text-2xl font-['Inter']">10/22<br>Sunday</div>
        </div>
        <div class="flex flex-col">
          <div v-for="(item, index) in sunData" :key="index">
            <Timebox :nowTime="item.curTime" :activity="item.actList" />
          </div>
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
  mounted() {
    this.starSwitching();
  },
  beforeDestroy() {
    this.stopSwitching();
  },
  methods: {
    starSwitching() {
      this.interval = setInterval(() => {
        this.showStar = !this.showStar;
      }, 2000); 
    },
    stopSwitching() {
      clearInterval(this.interval);
    }
  }
}
</script>
<style scoped>

</style>