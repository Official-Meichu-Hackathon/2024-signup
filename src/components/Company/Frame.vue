<template>

<div>
    <!-- <div class="w-[733px] h-[308px] flex-shrink-0 rounded-[10px] border-[3px]">
        <object 
        data="Company\monster1.svg"
        type="image/svg+xml"
        class="w-[214px] h-[188px] flex-shrink-0 relative left-[10%]"></object>
    </div> -->
    <div class="grid grid-rows-custom-lv1 gap-3">
        <!-- part 1  -->
        <div class="grid grid-cols-[35%_auto_35%] grid-rows-custom-lv2 gap-3">

            <!-- 合作企業-NXP  -->
            <div class="row-start-1 row-span-2 col-start-1 relative ">
                <CompanyCardBox/>
            </div>

            <!-- 奇怪生物 + 網格線  -->
            <div class="row-start-1 col-start-2 col-span-2 flex-shrink-0 rounded-[10px] border-[3px]">
                
            </div>

            <!-- 超小長方形*2  -->
            <div class="row-start-2 col-start-2 ">
                
            </div>

            <!-- 合作企業-LINE  -->
            <div class="row-start-2 col-start-3 row-span-3 relative w-full h-full box-border ">
                <!-- 切分  -->
                <div class="grid grid-rows-[20px_auto] h-full w-full"> 
                    <div class="flex items-center text-[16px] mb-1.5 font-bold font-[Lato] not-italic leading-[normal] ">題目說明</div>
                    <div class=""><CompanyCardBox/></div>
                </div>
                
            <!-- 文字-梅竹黑客松 -->
            </div>
            <div class="row-start-3 col-start-1 col-span-2 relative ">
                <div class="h-full w-full grid grid-cols-[88%_auto] grid-rows-custom-titleword gap-3">
                    <div class="row-start-1 row-span-2 col-start-1"></div>
                    <div class="row-start-1 col-start-2 row-span-2 flex-shrink-0 rounded-[10px] border-[3px] border-dark-gray bg-[#FFF]"></div>
                </div>
            </div>

            <!-- 小長方形*1 -->
            <div class="row-start-4 col-start-2 
            flex-shrink-0 rounded-[10px] border-[3px] border-[#43473E]">
            </div>
            <!-- 
            <div class="col-span-2 bg-green-500">
                <div class="aspect-w-733 aspect-h-308 flex-shrink-0 rounded-[10px] border-[3px]"></div>
            </div>
            <div class="col-start-2 row-start-2 bg-green-500"></div> -->
        </div>
        
        <div class="grid grid-cols-[35%_35%_auto] grid-rows-[.38fr_.14fr_.48fr] gap-3">
            <div class="row-start-1 col-start-1">

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
        
        <div class="bg-blue-600"></div>
    </div>
    
</div>
</template>
  
<script>
import CompanyCardBox from './CompanyCardBox.vue';
export default {
    components: {
        CompanyCardBox
    }
}
</script>
  
<style scoped>

    .grid-rows-custom-lv1 {
        grid-template-rows: calc(90vw * 765 / 1184) calc(90vw * 850 / 1184) calc(90vw * 418 / 1184);
    }
    .grid-rows-custom-lv2 {
        grid-template-rows: .44fr .10fr .33fr .13fr;
    }
    .grid-cols-custom-lv2 {
        grid-template-columns: 760px 850px 418px;
    }
    .grid-cols-custom-titleword {
        grid-template-columns: .9f .1f;
    }
    .grid-rows-custom-titleword {
        grid-template-rows: .61f .39f;
    }
    .overlap {
        position: relative;
        top: -20px; /* 根據需要調整 */
    }


</style>