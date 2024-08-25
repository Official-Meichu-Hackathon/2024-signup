<template>
  <div class="relative py-[75px] px-[10%] bg-[#F1F2F2]">
    <img src="statistics/Vector121.svg" class="absolute top-[3%] left-[86%] w-[14.7vw] h-auto">
    <img src="statistics/Vector119.svg" class="absolute top-[31%] left-[0%] w-[37.8vw] h-auto">
    <img src="statistics/Vector118.svg" class="absolute top-[85%] left-[61%] w-[23.7vw] h-auto">
    <img src="statistics/Vector117.svg" class="absolute top-[95%] left-[21%] w-[22.5vw] h-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-[5.2vw] gap-x-[5vw] pt-[89px] justify-center">
      <div v-for="i in statistics" :key="i.title" class="grid-item">
        <Card :title="i.title" :chart="i.chart" :desc="i.desc"
              class=""/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/statistics/Card.vue'

export default {
  name: 'StatisticsView',
  components: {
    Card
  },
  data() {
    return {
        statistics: [
          {
            title: '歷屆參賽人數',
            chart: 'statistics/participants.svg',
            desc: `2023 年總參賽者：270 人
            - 黑客組： 參與人數 226 人，共 48 組參與。
            - 創客交流組： 總參與人數 44 人，共 10 組參與。`
          },
          {
            title: '參賽者學校分佈',
            chart: 'statistics/school.svg',
            desc: `　　2023 年度參賽者學校比例分布：國立清華大學、國立陽明交通大學共佔比 82.6%， 國立臺灣大學、國立中央大學、國立政治大學與國立臺灣科技大學等來自全台各地學校皆有一定比例參與，符合梅竹黑客松以全國性科技盛會為目標的期待。`
          },
          {
            title: '黑客組院系分布',
            chart: 'statistics/hacker_dept.svg',
            desc: `　　黑客組的題目往往考驗參賽者強韌的技術背景與解決問題的整合能力，其中有 72.2% 來自電機資訊學院的參賽者，亦因為競賽所強調的整合能力，吸引橫跨多方領域和系所的參賽者。`
          },
          {
            title: `創客交流組
            院系分布`,
            chart: 'statistics/maker_dept.svg',
            desc: `　　創客交流組講究跨域能力與想法創新，有近半數比例的多元科系參與，顯現參賽團隊跨域媒合組隊的成果。`
          },
          {
            title: '參賽者院系分布',
            chart: 'statistics/grade.svg',
            desc: `　　無論是黑客組抑或創客交流組，強調個人技術含量或創意發想，是進入社會的關鍵能力。透過下方圖表，大學三年級以上學生參賽者佔 82.1%，顯見梅竹黑客松提供了一個良好平台，為企業與學生間搭建交流橋樑。`
          }
        ]
    }
  }
}
</script>
<style>
@media (min-width: 768px) {
  .grid-item:nth-child(5) {
  grid-column: 1 / -1;
  margin: 0 21.25vw;
}
}

</style>