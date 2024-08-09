<template>
<div class="relative w-full h-full flex">
    <object data="Company/Circle/circle1.svg" type="image/svg+xml" class="dot1 absolute top-[11.5%] left-[30%] w-[12.4%]"></object>
    <object data="Company/Circle/circle2.svg" type="image/svg+xml" class="dot2 absolute top-[40%] left-[2.1%] w-[24%]"></object>
    <object data="Company/Circle/circle3.svg" type="image/svg+xml" class="dot3 absolute bottom-[9%] right-[10%] w-[48.8%]"></object>
</div>
</template>

<script>
export default {

}
</script>
    
<style scoped>
.dot1 {
    animation: animateDot1 15s ease-out infinite;
}
@keyframes animateDot1 {
    0% {
      transform: translate(50%, 0);
    }
    50% {
        transform: translate(-50%, 0);
    }
    100% {
      transform: translate(50%, 0);
    }
}
.dot2 {
    animation: animateDot2 15s ease-out infinite;
}
@keyframes animateDot2 {
    0% {
      transform: translate(0, 0);
    }
    50% {
        transform: translate(35%, 0);
    }
    100% {
      transform: translate(0, 0);
    }
}
.dot3 {
    animation: animateDot3 15s ease-out infinite;
}
@keyframes animateDot3 {
    0% {
      transform: translate(6%, 0);
    }
    50% {
        transform: translate(-6%, 0);
    }
    100% {
      transform: translate(6%, 0);
    }
}
</style>
