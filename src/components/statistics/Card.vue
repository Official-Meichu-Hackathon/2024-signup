<template>
  <div class="card h-auto w-full 
              rounded-[20px] bg-white/70 hover:bg-white
              flex flex-col justify-center items-center gap-6 lg:gap-8
              px-4 py-[6vw] md:py-[4.5vw] lg:py-[5.8vw]">
    <div class="font-Mantou text-[2.5rem] sm:text-[3rem] md:text-[2.2rem] lg:text-[2.7rem] 2xl:text-[4rem] font-normal">{{ title }}</div>
    <div class="wrapper flex relative h-auto min-h-[40vw] md:min-h-[20vw] w-full">
      <div class="decs font-Taipei md:text-base/6 lg:text-base/7 2xl:text-xl/8 font-bold mx-[6vw] md:mx-[2vw] lg:mx-[4.4vw] whitespace-pre-line">{{ desc }}</div>
      <div class="absolute h-full w-full flex items-center justify-center">
        <img class="chart" :src="chart"/>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    chart: {
      String,
      required: true
    },
    desc: {
      String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  box-shadow: 5px 9px 29px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(1px);
}
.chart, .decs{
  transition: opacity 0.2s ease-in-out;
}
.chart {
  opacity: 1;
}
.decs {
  opacity: 0;
}
.card:hover .chart {
  opacity: 0;
}
.card:hover .decs {
  opacity: 1;
}
</style>>