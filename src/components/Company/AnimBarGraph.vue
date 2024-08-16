<template>
    <div class="relative w-full h-full grid grid-rows-[1.63fr_1.93fr_0.49fr] gap-2.5">
        <div class="relative">
            <div class="absolute w-full h-full rounded-[0.75vw] border-[3px] border-dark-gray overflow-hidden">
                <div class="absolute flex w-full h-full items-center">
                    <object data="Company\gray_rect.svg" type="image/svg+xml" class="h-[56%] cardbox-re1"></object>
                    
                </div>
                <div class="absolute w-full h-full grid grid-cols-[5.6fr_6fr_8fr_10fr_11fr_12fr_20.7fr] overflow-hidden">
                    <div class="border-r-[3px] border-dark-gray">
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                        <object data="Company\Number\60.svg" type="image/svg+xml" class="absolute bottom-0 pl-[1px] pb-[.2vw] h-[10%]"></object>
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                        <object data="Company\Number\80.svg" type="image/svg+xml" class="absolute bottom-0 pl-[1px] pb-[.2vw] h-[10%]"></object>
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                        <object data="Company\Number\100.svg" type="image/svg+xml" class="absolute bottom-0 pl-[1px] pb-[.2vw] h-[10%]"></object>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="relative ">
            <div class="absolute w-full h-full rounded-[0.75vw] border-[3px] border-dark-gray overflow-hidden">
                <div class="absolute flex w-full h-full items-center">
                    <object data="Company\yellow_rect.svg" type="image/svg+xml" class="h-[56%] cardbox-re2"></object>
                    
                </div>
                <div class="absolute w-full h-full grid grid-cols-[5.6fr_6fr_8fr_10fr_11fr_12fr_20.7fr] overflow-hidden">
                    <div class="border-r-[3px] border-dark-gray">
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                        <object data="Company\Number\10.svg" type="image/svg+xml" class="absolute bottom-0 pl-[1px] pb-[.2vw] h-[8%]"></object>
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                        <object data="Company\Number\11.svg" type="image/svg+xml" class="absolute bottom-0 pl-[1px] pb-[.2vw] h-[8%]"></object>
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                        <object data="Company\Number\12.svg" type="image/svg+xml" class="absolute bottom-0 pl-[1px] pb-[.2vw] h-[8%]"></object>
                    </div>
                </div>
                
            </div>
        </div>
        <div>
            <div class="relative w-full h-full rounded-[0.75vw] border-[3px] border-dark-gray">
                <div class="w-[97vw] absolute bg-fixed bg-cover left-[-8vw] inset-0 z-[-1] flex justify-center">
                    <BackgroundEffect/>
                </div>
            </div>
        </div>
    </div>
</template>
        
<script>
import BackgroundEffect from './BackgroundEffect.vue';
export default {
    components: {
        BackgroundEffect
    }
}
</script>
    
<style scoped>
.cardbox-re1 {
    animation: animateRe1 6s ease-out infinite;
}
    
@keyframes animateRe1 {
    0% {
        transform: translate(-5%, 0);
    }
    50% {
        transform: translate(0%, 0);
    }
    75% {
        transform: translate(-10%, 0);
    }
    81% {
        transform: translate(-3%, 0);
        }
    100% {
        transform: translate(-5%, 0);
    }
}

.cardbox-re2 {
    animation: animateRe2 6s ease-out infinite;
}
    
@keyframes animateRe2 {
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(-3vw, 0);
    }
    60% {
        transform: translate(-1vw, 0);
    }
    90% {
        transform: translate(-5vw, 0);
        }
    100% {
        transform: translate(0, 0);
    }
}
</style>
