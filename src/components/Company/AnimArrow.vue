<template>
<div class="w-full h-full relative">
    <object data="Company/SquareGrid/anim1.svg" type="image/svg+xml" class="absolute top-1/2 left-1/2 w-[92%] h-auto transform -translate-x-1/2 -translate-y-1/2 changing-object" style="animation-delay: 0s;"></object>
    <object data="Company/SquareGrid/anim2.svg" type="image/svg+xml" class="absolute top-1/2 left-1/2 w-[92%] h-auto transform -translate-x-1/2 -translate-y-1/2 changing-object" style="animation-delay: 1s;"></object>
    <object data="Company/SquareGrid/anim3.svg" type="image/svg+xml" class="absolute top-1/2 left-1/2 w-[92%] h-auto transform -translate-x-1/2 -translate-y-1/2 changing-object" style="animation-delay: 2s;"></object>
    <object data="Company/SquareGrid/anim4.svg" type="image/svg+xml" class="absolute top-1/2 left-1/2 w-[92%] h-auto transform -translate-x-1/2 -translate-y-1/2 changing-object" style="animation-delay: 3s;"></object>
</div>
</template>
      
<script>
export default {

}
</script>
    
<style scoped>

.changing-object {
  animation: showFrame 4s steps(1) infinite;
  opacity: 0; 
}

@keyframes showFrame {
  0%, 25% {
    opacity: 1;
  }
  25%, 100% {
    opacity: 0;
  }
}

</style>
