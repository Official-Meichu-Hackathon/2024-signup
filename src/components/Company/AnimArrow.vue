<template>
<div class="w-full h-full relative">
    <object data="Company/SquareGrid/anim1.svg" type="image/svg+xml" class="absolute top-[0%] left-[0%] w-[101%] h-auto changing-object" style="animation-delay: 0s;"></object>
    <object data="Company/SquareGrid/anim2.svg" type="image/svg+xml" class="absolute top-[0%] left-[0%] w-[101%] h-auto changing-object" style="animation-delay: 1s;"></object>
    <object data="Company/SquareGrid/anim3.svg" type="image/svg+xml" class="absolute top-[0%] left-[0%] w-[101%] h-auto changing-object" style="animation-delay: 2s;"></object>
    <object data="Company/SquareGrid/anim4.svg" type="image/svg+xml" class="absolute top-[0%] left-[0%] w-[101%] h-auto changing-object" style="animation-delay: 3s;"></object>
</div>
</template>
      
<script>
export default {

}
</script>
    
<style scoped>

.changing-object {
  animation: showFrame 4s steps(1) infinite;
  opacity: 0; /* 初始狀態隱藏 */
}

@keyframes showFrame {
  0%, 25% {
    opacity: 1;
  }
  26%, 100% {
    opacity: 0;
  }
}

</style>
