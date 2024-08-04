<template>

<div>
    <div style="height: calc(84vw * 2479 / 1184);">
        <div class="w-full h-full grid grid-cols-[4.39fr_2.79fr_1.48fr_2.83fr] grid-rows-custom-part1 gap-3">

            <!-- 合作企業-NXP  -->
            <div class="row-start-1 row-span-2 col-start-1 relative ">
                <CompanyCardBox/>
            </div>
        
            <!-- 奇怪生物 + 網格線  -->
            
            <div class="flex flex-col row-start-1 col-start-2 col-span-3">
                <div class="flex h-[20px] flex-shrink-0 mb-1.5"></div>
                <div class="flex relative flex-shrink-0 rounded-[0.75vw] border-[3px] flex-grow border-dark-gray">
                </div>
            </div>
        
            <!-- 超小長方形*2  -->
            <div class="grid grid-cols-[10fr_14fr_3fr] gap-3">
                <div ></div>
                <div class="col-start-2 rounded-[0.75vw] border-[3px] bg-[#FFF] border-dark-gray"></div>
                <div class="col-start-3 rounded-[0.75vw] border-[3px] bg-[var(--d-9-d-9-d-9,_#D9D9D9)] border-dark-gray"></div>
            </div>
        
            <!-- 合作企業-LINE  -->
            <div class="row-start-2 col-start-3 row-span-3 col-span-2 relative w-full h-full box-border">
                <!-- 切分  -->
                <div class="flex flex-col h-full w-full"> 
                    <CompanyCardBox/>
                </div>
                
            <!-- 文字-梅竹黑客松 -->
            </div>
            <div class="relative row-start-3 col-start-1 col-span-2">
                <div class="relative h-full w-full grid grid-cols-[6.18fr_1.04fr] grid-rows-[13fr_8.5fr] gap-3">
                    
                    <div class="relative h-full w-full row-start-1 col-start-1 rounded-[0.75vw] border-[3px] border-dark-gray">
                        <div class="absolute inset-0 font-Mantou text-[7.7dvw] text-[#43473E] font-[400] gap-1 flex flex-row items-center justify-center" data-v-1765d9d0="">
                            <div class="cardbox-font1" data-v-1765d9d0="">梅</div>
                            <div class="cardbox-font2" data-v-1765d9d0="">竹</div>
                            <div class="cardbox-font3" data-v-1765d9d0="">黑</div>
                            <div class="cardbox-font4" data-v-1765d9d0="">客</div>
                            <div class="cardbox-font5" data-v-1765d9d0="">松</div>
                        </div>
                    </div>
                    <div class="flex overflow-hidden flex-col row-start-2 col-start-1 rounded-[0.75vw] border-[3px] border-dark-gray">
                        <div class="h-1/2"></div>
                        <div class="h-1/2 rounded-none border-t-2 border-dark-gray bg-[var(--d-9-d-9-d-9,_#D9D9D9)]"></div> 
                    </div>
                    <div class="row-start-1 col-start-2 row-span-2 rounded-[0.75vw] border-[3px] border-dark-gray bg-[#FFF]"></div>
                </div>
            </div>
        
            <!-- 小長方形*1 -->
            <div class="row-start-4 col-start-2 
            flex-shrink-0 rounded-[0.75vw] border-[3px] border-dark-gray">
            </div>
            
            <!-- 合作企業-Google  -->
            <div class="row-start-4 row-span-2 col-start-1">
                <CompanyCardBox/>
            </div>
    
            <!-- 合作企業-TSMC  -->
            <div class="row-start-5 row-span-2 col-start-2 col-span-2">
                <CompanyCardBox/>
            </div>
    
            <!-- 動畫-座標  -->
            <div class="row-start-5 col-start-4 rounded-[0.75vw] border-[3px] border-dark-gray">
                
            </div>
    
            <!-- 動畫-組合  -->
            <div class="row-start-6 row-span-2 col-start-1
            grid grid-cols-[1.48fr_2.83fr]
            grid-rows-[1.15fr_.32fr_.32fr_.65fr_2.55fr] gap-2">
                <div class="row-start-1 row-span-5 rounded-[.75vw] border-[3px] bg-[#FFF] border-dark-gray"></div>
                <!-- 怪物 -->
                <div class="relative flex row-start-1 col-start-2 rounded-[.75vw] border-[3px] bg-[#FFF] border-dark-gray items-center justify-center">
                    <object data="Company/monster2.svg" type="image/svg+xml" class="h-[82%] cardbox-mo2"></object>
                </div>
                <!-- 灰色框 -->
                <div class="row-start-2 col-start-2 rounded-[.75vw] border-[3px] bg-[var(--d-9-d-9-d-9,_#D9D9D9)] border-dark-gray"></div>
                <div class="row-start-3 col-start-2 rounded-[.75vw] border-[3px] bg-[var(--d-9-d-9-d-9,_#D9D9D9)] border-dark-gray"></div>
                <div class="row-start-4 col-start-2 rounded-[.75vw] border-[3px] bg-[#FFF] border-dark-gray"></div>
            </div>
    
            <!-- 合作企業-羅技  -->
            <div class="row-start-7 col-start-2 col-span-2">
                <CompanyCardBox/>
            </div>
    
            <!-- 動畫-組合  -->
            <div class="row-start-6 row-span-2 col-start-4 rounded-[0.75vw] border-[3px] border-dark-gray">
                
            </div>
    
            <!-- 動畫-組合  -->
            <div class="row-start-8 col-start-1 col-span-2
            grid grid-rows-[1.63fr_1.93fr_0.49fr] gap-2.5">
                <div class="relative">
                    <!-- <object data="Company\Component 41.svg"
                    type="image/svg+xml"
                    class="flex-shrink-0 w-full"></object> -->
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
                    3
                </div>
                
            </div>
    
            <!-- 合作企業-中華電信  -->
            <div class="row-start-8 col-start-3 col-span-2">
                <CompanyCardBox/>
                
            </div>
    
            <div class="flex row-start-9 col-start-1 col-span-4">
                <div class="grid grid-cols-[3.72fr_4.39fr_3.72fr] w-full">
                    <div class="cols-start-1"></div>
                    <div class="cols-start-2">
                        <CompanyCardBox/>
                    </div>
                </div>
                
            </div>
        </div>
        
        <!-- <div class="grid grid-cols-[35%_35%_auto] grid-rows-[.38fr_.14fr_.48fr] gap-3">
            <div class="row-start-1 col-start-1 w-full h-full">
                <div style="height: calc(90vw * 765 / 1184 * 0.13 + 12px);" class="overlap relative items-end border-[3px] border-dark-gray">
                    hi
                </div>
            </div>
            
            <div class="row-start-2 row-span-2 col-start-1">

            </div>
            <div class="row-start-1 col-start-3">

            </div>
            <div class="row-start-1 col-start-2 row-span-2">

            </div>
            <div class="row-start-3 col-start-2">

            </div>
            <div class="row-start-2 col-start-3 row-span-2">

            </div>
        </div>
        
        <div class="bg-blue-600"></div> -->
    </div>
    
</div>
</template>
  
<script>
import CompanyCardBox from './CompanyCardBox.vue';
export default {
    name: 'Frame',
    components: {
        CompanyCardBox
    }
}
</script>
  
<style scoped>
.grid-rows-custom-part1 {
    grid-template-rows: 3.08fr .73fr 2.28fr .94fr 3.03fr 1.09fr 4.14fr 4.2fr 4fr;
}

.overlap {
    position: relative;
    top: calc( ( (0vw - 90vw) * (765 / 1184) - 36px) * 0.13 ); /* 根據需要調整 */
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

.cardbox-re1 {
    animation: animateRe1 6s ease-out infinite;
}
  
@keyframes animateRe1 {
    0% {
      transform: translate(0, 0);
    }
    50% {
        transform: translate(-5%, 0);
    }
    60% {
      transform: translate(-1%, 0);
    }
    90% {
        transform: translate(-10%, 0);
      }
    100% {
      transform: translate(0, 0);
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
  

.cardbox-font1 {
    animation: animateFont1 15s ease-out infinite;
}

@keyframes animateFont1 {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(0deg);
    }
    66% {
        transform: rotate(9.356deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
.cardbox-font2 {
    animation: animateFont2 15s ease-out infinite;
}
  
@keyframes animateFont2 {
    0% {
      transform: rotate(-15.858deg);
    }
    33% {
      transform: rotate(-2.197deg);
    }
    66% {
      transform: rotate(-6.558deg) translate(0, -1.12dvw);
    }
    100% {
      transform: rotate(-15.858deg);
    }
}
  
.cardbox-font3 {
    animation: animateFont3 15s ease-out infinite;
}
  
@keyframes animateFont3 {
    0% {
      transform: translate(0, 0);
    }
    33% {
      transform: translate(0, .96dvw);
    }
    66% {
      transform: translate(0, -.32dvw);
    }
    100% {
      transform: translate(0, 0);
    }
}
  
.cardbox-font4 {
    animation: animateFont4 15s ease-out infinite;
}
  
@keyframes animateFont4 {
    0% {
      transform: translate(0, 0);
    }
    33% {
      transform: translate(.32dvw, -1.8dvw);
    }
    66% {
      transform: translate(-.24dvw, .8dvw);
    }
    100% {
      transform: translate(0, 0);
    }
 }
  
.cardbox-font5 {
    animation: animateFont5 15s ease-out infinite;
}
  
@keyframes animateFont5 {
    0% {
      transform: rotate(13.92deg);
    }
    33% {
      transform: rotate(13.92deg);
    }
    66% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(13.92deg);
    }
}

</style>