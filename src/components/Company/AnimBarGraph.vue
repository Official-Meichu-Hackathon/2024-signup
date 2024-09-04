<template>
    <div class="relative w-full h-full grid grid-rows-[1.63fr_1.93fr_0.49fr] gap-2.5">
        <div class="relative">
            <div class="absolute w-full h-full rounded-[0.75vw] border-[3px] border-dark-gray overflow-hidden bg-[#FFF]">
                <div class="absolute flex w-full h-full items-center">
                    <object data="Company\gray_rect.svg" type="image/svg+xml" class="h-[56%] cardbox-re1"></object>
                    
                </div>
                <div class="absolute w-full h-full grid grid-cols-[5.6fr_6fr_8fr_10fr_11fr_12fr_20.7fr] overflow-hidden">
                    <div class="border-r-[3px] border-dark-gray">
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                        <div class="flex h-full w-full title-font pl-[1px] pb-[.2vw] text-[1.1vw]">60</div>
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                        <div class="flex h-full w-full title-font pl-[1px] pb-[.2vw] text-[1.1vw]">80</div>
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                        <div class="flex h-full w-full title-font pl-[1px] pb-[.2vw] text-[1.1vw]">100</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="relative ">
            <div class="absolute w-full h-full rounded-[0.75vw] border-[3px] border-dark-gray overflow-hidden bg-[#FFF]">
                <div class="absolute flex w-full h-full items-center">
                    <object data="Company\yellow_rect.svg" type="image/svg+xml" class="h-[56%] cardbox-re2"></object>
                    
                </div>
                <div class="absolute w-full h-full grid grid-cols-[5.6fr_6fr_8fr_10fr_11fr_12fr_20.7fr] overflow-hidden">
                    <div class="border-r-[3px] border-dark-gray">
                    </div>
                    <div class="flex border-r-[3px] border-dark-gray">
                        <div class="flex h-full w-full title-font pl-[1px] pb-[.2vw] text-[1.15vw]">10</div>
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                        <div class="flex h-full w-full title-font pl-[1px] pb-[.2vw] text-[1.15vw]">11</div>
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                    </div>
                    <div class="border-r-[3px] border-dark-gray">
                        <div class="flex h-full w-full title-font pl-[1px] pb-[.2vw] text-[1.15vw]">12</div>
                    </div>
                </div>
                
            </div>
        </div>
        <div>
            <div class="relative w-full h-full rounded-[0.75vw] border-[3px] border-dark-gray">
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
.title-font {
    color: var(--43473-e, #43473E);
    font-family: "Taipei Sans TC Beta";
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: flex-end;
}
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
