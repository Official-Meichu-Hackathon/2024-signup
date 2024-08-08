<template>
<div class="w-full h-full relative">
    <object data="Company/Ellipse/Ellipse1.svg" type="image/svg+xml" class="absolute top-[15%] left-[24%] w-[12%] h-auto moving-object-Small"></object>
    <object data="Company/Ellipse/Ellipse2.svg" type="image/svg+xml" class="absolute top-[41%] left-[2%] w-[24%] h-auto moving-object-Medium"></object>
    <object data="Company/Ellipse/Ellipse3.svg" type="image/svg+xml" class="absolute top-[65%] left-[47%] w-[48%] h-auto moving-object-Large"></object>
</div>
</template>
      
<script>
export default {

}
</script>
    
<style scoped>

.moving-object-Large {
  animation: moveLeftRight-Large 6s ease-in-out infinite;
  position: absolute; 
}

@keyframes moveLeftRight-Large {
  0% {
    left: 47%; 
  }
  50% {
    left: 36%; 
  }
  100% {
    left: 47%; 
  }
}

.moving-object-Medium {
  animation: moveLeftRight-Medium 6s ease-in-out infinite;
  position: absolute; 
}

@keyframes moveLeftRight-Medium {
  0% {
    left: 2%; 
  }
  50% {
    left: 12%; 
  }
  100% {
    left: 2%; 
  }
}

.moving-object-Small {
  animation: moveLeftRight-Small 6s ease-in-out infinite;
  position: absolute; 
}

@keyframes moveLeftRight-Small {
  0% {
    left: 38%; 
  }
  50% {
    left: 24%; 
  }
  100% {
    left: 38%; 
  }
}




</style>
