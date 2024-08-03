<template>

<div>
    <!-- <div class="w-[733px] h-[308px] flex-shrink-0 rounded-[1vw] border-[3px]">
        <object 
        data="Company\monster1.svg"
        type="image/svg+xml"
        class="w-[214px] h-[188px] flex-shrink-0 relative left-[10%]"></object>
    </div> -->
    <!-- <div class="grid grid-rows-custom-all"> -->
    <div style="height: calc(90vw * 2479 / 1184);">
        <div class="w-full h-full grid grid-cols-[4.39fr_2.79fr_1.48fr_2.83fr] grid-rows-custom-part1 gap-3">

            <!-- 合作企業-NXP  -->
            <div class="row-start-1 row-span-2 col-start-1 relative ">
                <CompanyCardBox/>
            </div>
        
            <!-- 奇怪生物 + 網格線  -->
            
            <div class="flex flex-col row-start-1 col-start-2 col-span-3">
                <div class="flex h-[20px] flex-shrink-0 mb-1.5"></div>
                <div class="flex relative flex-shrink-0 rounded-[1vw] border-[3px] flex-grow border-dark-gray">
                </div>
            </div>
        
            <!-- 超小長方形*2  -->
            <div class="grid grid-cols-[10fr_14fr_3fr] gap-3">
                <div ></div>
                <div class="col-start-2 rounded-[1vw] border-[3px] bg-[#FFF] border-dark-gray"></div>
                <div class="col-start-3 rounded-[1vw] border-[3px] bg-[var(--d-9-d-9-d-9,_#D9D9D9)] border-dark-gray"></div>
            </div>
        
            <!-- 合作企業-LINE  -->
            <div class="row-start-2 col-start-3 row-span-3 col-span-2 relative w-full h-full box-border">
                <!-- 切分  -->
                <div class="flex flex-col h-full w-full"> 
                    <CompanyCardBox/>
                </div>
                
            <!-- 文字-梅竹黑客松 -->
            </div>
            <div class="row-start-3 col-start-1 col-span-2 relative ">
                <div class="h-full w-full grid grid-cols-[88%_auto] grid-rows-[13.1fr_8.5fr] gap-3">
                    <div class="row-start-1 col-start-1 rounded-[1vw] border-[3px] border-dark-gray"></div>
                    <div class="flex overflow-hidden flex-col row-start-2 col-start-1 rounded-[1vw] border-[3px] border-dark-gray">
                        <div class="h-1/2"></div>
                        <div class="h-1/2 rounded-none border-t-2 border-dark-gray bg-[var(--d-9-d-9-d-9,_#D9D9D9)]"></div> 
                    </div>
                    <div class="row-start-1 col-start-2 row-span-2 rounded-[1vw] border-[3px] border-dark-gray bg-[#FFF]"></div>
                </div>
            </div>
        
            <!-- 小長方形*1 -->
            <div class="row-start-4 col-start-2 
            flex-shrink-0 rounded-[1vw] border-[3px] border-[#43473E]">
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
            <div class="row-start-5 col-start-4 rounded-[1vw] border-[3px] border-[#43473E]">
                
            </div>
    
            <!-- 動畫-組合  -->
            <div class="row-start-6 row-span-2 col-start-1 rounded-[1vw] border-[3px] border-[#43473E]">
                
            </div>
    
            <!-- 合作企業-羅技  -->
            <div class="row-start-7 col-start-2 col-span-2">
                <CompanyCardBox/>
                
            </div>
    
            <!-- 動畫-組合  -->
            <div class="row-start-6 row-span-2 col-start-4 rounded-[1vw] border-[3px] border-[#43473E]">
                
            </div>
    
            <!-- 動畫-組合  -->
            <div class="row-start-8 col-start-1 col-span-2 rounded-[1vw] border-[3px] border-[#43473E]">
                
            </div>
    
            <!-- 合作企業-中華電信  -->
            <div class="row-start-8 col-start-3 col-span-2">
                <CompanyCardBox/>
                
            </div>
    
            <div class="flex row-start-9 col-start-1 col-span-4">
                <div class="grid grid-cols-[3.72fr_4.39fr_3.72fr] w-full">
                    <div class="cols-start-1">
                        
                    </div>
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


</style>