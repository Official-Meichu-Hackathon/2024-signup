<template>
  <div class="card h-[588px] w-[529px] rounded-[20px] bg-white/70 hover:bg-white flex flex-col justify-center items-center gap-8"
  @mouseenter="hover=True" @mouseleave="hoevr=False">
    <div class="font-Mantou text-[4rem] font-normal">{{ title }}</div>
    <div class="wrapper relative h-[293px] w-[488px]">
      <img class="chart absolute" :src="chart"/>
      <div class="decs font-Taipei text-xl/7 font-bold mx-16">{{ desc }}</div>
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
  },
  data() {
    return {
      hover: false,
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