<template>
<div class="w-full h-full
    grid grid-cols-[1.48fr_2.83fr]
    grid-rows-[1.15fr_.32fr_.32fr_.65fr_2.55fr] gap-2">
    <div class="relative row-start-1 row-span-5 col-start-1 rounded-[.75vw] border-[3px] bg-[#FFF] border-dark-gray">
        <object data="Company\RectangularGrid\grid1.svg" type="image/svg+xml" class="flex h-full relative hide-grid1_1"></object>
    </div>
    <!-- 怪物 -->
    <div class="flex row-start-1 col-start-2 rounded-[.75vw] border-[3px] bg-[#FFF] border-dark-gray items-center justify-center">
        <object data="Company/monster2.svg" type="image/svg+xml" class="h-[82%] cardbox-mo2"></object>
    </div>
    <!-- 灰色框 -->
    <div class="row-start-2 col-start-2 rounded-[.75vw] border-[3px] bg-[var(--d-9-d-9-d-9,_#D9D9D9)] border-dark-gray"></div>
    <div class="row-start-3 col-start-2 rounded-[.75vw] border-[3px] bg-[var(--d-9-d-9-d-9,_#D9D9D9)] border-dark-gray"></div>
    <div class="row-start-4 col-start-2 rounded-[.75vw] border-[3px] bg-[#FFF] border-dark-gray"></div>
</div>
</template>
      
<script>
export default {

}
</script>
    
<style scoped>
.hide-grid1_1 {
    animation: animateGr1_1 6s infinite;
}
  
@keyframes animateGr1_1 {
    0% {
        opacity: 1;
        visibility: visible;
    }
    50% {
        opacity: 0;
        visibility: hidden;
    }
}

.cardbox-mo2 {
    animation: animateMo2 4s ease-out infinite;
}
  
@keyframes animateMo2 {
    0% {
      transform: translate(0, 10%);
    }
    50% {
        transform: translate(0, -10%);
    }
    100% {
      transform: translate(0, 10%);
    }
}
</style>
