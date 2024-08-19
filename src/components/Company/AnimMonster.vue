<template>
<div class="w-full h-full flex flex-col">
    <div class="flex h-[20px] flex-shrink-0 mb-1.5"></div> 
    <div class="flex relative flex-shrink-0 rounded-[0.75vw] border-[3px] flex-grow border-dark-gray">
        <object data="Company/Monster1/background.svg" type="image/svg+xml" class="absolute left-1/2 bottom-[-1%] w-[93%] h-auto transform -translate-x-1/2"></object>
        <object data="Company/Monster1/GreenRectangle.svg" type="image/svg+xml" class="absolute top-[25%] left-[64%] w-[29%] h-auto"></object>
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-container">
            <object data="Company/Monster1/Meichu Hackathon.svg" type="image/svg+xml" class="absolute top-[27%] left-[66%] w-[25%] h-auto"></object>
        </div>
        <object data="Company/Monster1/monster1-1.svg" type="image/svg+xml" class="absolute top-[19%] left-[14%] w-[35%] h-auto changing-object" style="animation-delay: 0s;"></object>
        <object data="Company/Monster1/monster1-2.svg" type="image/svg+xml" class="absolute top-[19%] left-[14%] w-[35%] h-auto changing-object" style="animation-delay: 2s;"></object>
        <object data="Company/Monster1/monster1-3.svg" type="image/svg+xml" class="absolute top-[19%] left-[14%] w-[35%] h-auto changing-object" style="animation-delay: 4s;"></object>
        <object data="Company/Monster1/monster1-4.svg" type="image/svg+xml" class="absolute top-[19%] left-[14%] w-[35%] h-auto changing-object" style="animation-delay: 6s;"></object>
    </div>
</div>
    
</template>
      
<script>
export default {

}
</script>
    
<style scoped>

.changing-object {
  animation: showFrame 8s steps(1) infinite;
  opacity: 0;
}

@keyframes showFrame {
  0%, 20% {
    opacity: 1;
  }
  25%, 95% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>

*/