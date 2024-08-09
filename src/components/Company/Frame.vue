<template>

<div>
    <div style="height: calc(84vw * 2479 / 1184);">
        <div class="w-full h-full grid grid-cols-[4.39fr_2.79fr_1.48fr_2.83fr] grid-rows-custom-part1 gap-3">

            <!-- 合作企業-NXP  -->
            <div class="row-start-1 row-span-2 col-start-1 relative ">
                <CompanyCardBox title="題目說明 #01" imageSrc="Company/Logo/NXP-logo.svg" imageWidth="300px" imageHeight="119.134px">
                    <div style="text-align: center;">
                        <div class="companyName">恩智浦半導體</div>
                        <div class="description">
                            題目：卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉 測試
                        </div>
                        <div class="Details" style="position: absolute; right: 15px; bottom: 28px">
                            <a href="Company/test_details.pdf" target="_blank" rel="noopener noreferrer" 
                            class="details-link" 
                            style="display: inline-block;">
                                <img src="Company/Description/DescriptionGreen.svg" alt="詳細說明" 
                                    class="details-image" 
                                    style="cursor: pointer; transition: all 0.3s ease;"
                                    onmouseover="this.src='Company/Description/DescriptionGray.svg';" 
                                    onmouseout="this.src='Company/Description/DescriptionGreen.svg';" 
                                    onmousedown="this.src='Company/Description/DescriptionBlack.svg';" 
                                    onmouseup="this.src='Company/Description/DescriptionGreen.svg';">
                            </a>
                        </div>
                    </div>
                </CompanyCardBox>
            </div>
        
            <!-- 奇怪生物 + 網格線  -->
            <div class="flex flex-col row-start-1 col-start-2 col-span-3">
                <AnimMonster/>
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
                    <CompanyCardBox title="題目說明 #02" imageSrc="Company/Logo/LINE-logo.svg" imageWidth="152px" imageHeight="152px">
                        <div style="text-align: center;">
                            <div class="companyName">LINE 台灣</div>
                            <div class="description">
                                題目：卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉 測試
                            </div>
                            <!--
                            <div class="Details" style="position: absolute; right: 15px; bottom: 28px">
                                <a href="Company/test_details.pdf" target="_blank" rel="noopener noreferrer">
                                    <img src="Company/詳細說明.svg" alt="詳細說明" style="cursor: pointer;">
                                </a>
                            </div>-->
                            <div class="Details" style="position: absolute; right: 15px; bottom: 28px">
                                <a href="Company/test_details.pdf" target="_blank" rel="noopener noreferrer" 
                                class="details-link" 
                                style="display: inline-block;">
                                    <img src="Company/Description/DescriptionGreen.svg" alt="詳細說明" 
                                        class="details-image" 
                                        style="cursor: pointer; transition: all 0.3s ease;"
                                        onmouseover="this.src='Company/Description/DescriptionGray.svg';" 
                                        onmouseout="this.src='Company/Description/DescriptionGreen.svg';" 
                                        onmousedown="this.src='Company/Description/DescriptionBlack.svg';" 
                                        onmouseup="this.src='Company/Description/DescriptionGreen.svg';">
                                </a>
                            </div>
                        </div> 
                    </CompanyCardBox>
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
                <CompanyCardBox title="題目說明 #03" imageSrc="Company/Logo/Google-logo.svg" imageWidth="320px" imageHeight="133.491px">
                    <div style="text-align: center;">
                        <div class="companyName">GOOGLE</div>
                        <div class="description">
                            題目：卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉 測試
                        </div>
                        <div class="Details" style="position: absolute; right: 15px; bottom: 28px">
                            <a href="Company/test_details.pdf" target="_blank" rel="noopener noreferrer" 
                            class="details-link" 
                            style="display: inline-block;">
                                <img src="Company/Description/DescriptionGreen.svg" alt="詳細說明" 
                                    class="details-image" 
                                    style="cursor: pointer; transition: all 0.3s ease;"
                                    onmouseover="this.src='Company/Description/DescriptionGray.svg';" 
                                    onmouseout="this.src='Company/Description/DescriptionGreen.svg';" 
                                    onmousedown="this.src='Company/Description/DescriptionBlack.svg';" 
                                    onmouseup="this.src='Company/Description/DescriptionGreen.svg';">
                            </a>
                        </div>
                    </div>
                </CompanyCardBox>
            </div>
    
            <!-- 合作企業-TSMC  -->
            <div class="row-start-5 row-span-2 col-start-2 col-span-2">
                <CompanyCardBox title="題目說明 #04" imageSrc="Company/Logo/Tsmc-logo.svg" imageWidth="192.123px" imageHeight="150px">
                    <div style="text-align: center;">
                        <div class="companyName">台積電</div>
                        <div class="description">
                            題目：卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉 測試
                        </div>
                        <div class="Details" style="position: absolute; right: 15px; bottom: 28px">
                            <a href="Company/test_details.pdf" target="_blank" rel="noopener noreferrer" 
                            class="details-link" 
                            style="display: inline-block;">
                                <img src="Company/Description/DescriptionGreen.svg" alt="詳細說明" 
                                    class="details-image" 
                                    style="cursor: pointer; transition: all 0.3s ease;"
                                    onmouseover="this.src='Company/Description/DescriptionGray.svg';" 
                                    onmouseout="this.src='Company/Description/DescriptionGreen.svg';" 
                                    onmousedown="this.src='Company/Description/DescriptionBlack.svg';" 
                                    onmouseup="this.src='Company/Description/DescriptionGreen.svg';">
                            </a>
                        </div>
                    </div>
                </CompanyCardBox>
            </div>
    
            <!-- 動畫-座標  -->
            <div class="row-start-5 col-start-4 rounded-[0.75vw] border-[3px] border-transparent">
                <AnimArrow/>
            </div>
    
            <!-- 動畫-組合（左一右五）-->
            <div class="row-start-6 row-span-2 col-start-1">
                <AnimGroup/>
            </div>
            
    
            <!-- 合作企業-羅技  -->
            <div class="row-start-7 col-start-2 col-span-2">
                <CompanyCardBox title="題目說明 #05" imageSrc="Company/Logo/Logitech-logo.svg" imageWidth="320px" imageHeight="95.56px">
                    <div style="text-align: center;">
                        <div class="companyName">羅技</div>
                        <div class="description">
                            題目：卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉 測試
                        </div>
                        <div class="Details" style="position: absolute; right: 15px; bottom: 28px">
                            <a href="Company/test_details.pdf" target="_blank" rel="noopener noreferrer" 
                            class="details-link" 
                            style="display: inline-block;">
                                <img src="Company/Description/DescriptionGreen.svg" alt="詳細說明" 
                                    class="details-image" 
                                    style="cursor: pointer; transition: all 0.3s ease;"
                                    onmouseover="this.src='Company/Description/DescriptionGray.svg';" 
                                    onmouseout="this.src='Company/Description/DescriptionGreen.svg';" 
                                    onmousedown="this.src='Company/Description/DescriptionBlack.svg';" 
                                    onmouseup="this.src='Company/Description/DescriptionGreen.svg';">
                            </a>
                        </div>
                    </div>
                </CompanyCardBox>
            </div>
    
            <!-- 動畫-圓  -->
            <div class="row-start-6 row-span-2 col-start-4 rounded-[0.75vw] border-[3px] border-dark-gray">
                <AnimDots/>
            </div>
    
            <!-- 動畫-組合 長條圖 -->
            <div class="row-start-8 col-start-1 col-span-2">
                <AnimBarGraph/>
            </div>
    
            <!-- 合作企業-中華電信  -->
            <div class="row-start-8 col-start-3 col-span-2">
                <CompanyCardBox title="題目說明 #06" imageSrc="Company/Logo/Chunghwa_Telecom-logo.svg" imageWidth="320px" imageHeight="105.6px">
                    <div style="text-align: center;">
                        <div class="companyName">中華電信</div>
                        <div class="description">
                            題目：卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉 測試
                        </div>
                        <div class="Details" style="position: absolute; right: 15px; bottom: 28px">
                            <a href="Company/test_details.pdf" target="_blank" rel="noopener noreferrer" 
                            class="details-link" 
                            style="display: inline-block;">
                                <img src="Company/Description/DescriptionGreen.svg" alt="詳細說明" 
                                    class="details-image" 
                                    style="cursor: pointer; transition: all 0.3s ease;"
                                    onmouseover="this.src='Company/Description/DescriptionGray.svg';" 
                                    onmouseout="this.src='Company/Description/DescriptionGreen.svg';" 
                                    onmousedown="this.src='Company/Description/DescriptionBlack.svg';" 
                                    onmouseup="this.src='Company/Description/DescriptionGreen.svg';">
                            </a>
                        </div>
                    </div>
                </CompanyCardBox>
                
            </div>
    
            <div class="flex row-start-9 col-start-1 col-span-4">
                <div class="grid grid-cols-[3.72fr_4.39fr_3.72fr] w-full">
                    <div class="cols-start-1"></div>
                    <div class="cols-start-2">
                        <CompanyCardBox title="題目說明 #07" imageSrc="Company/Logo/新竹市政府-logo.svg" imageWidth="380px" imageHeight="126px">
                            <div style="text-align: center;">
                                <div class="companyName">新竹市政府</div>
                                <div class="description">
                                    題目：卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉 測試
                                </div>
                                <div class="Details" style="position: absolute; right: 15px; bottom: 28px">
                                    <a href="Company/test_details.pdf" target="_blank" rel="noopener noreferrer" 
                                    class="details-link" 
                                    style="display: inline-block;">
                                        <img src="Company/Description/DescriptionGreen.svg" alt="詳細說明" 
                                            class="details-image" 
                                            style="cursor: pointer; transition: all 0.3s ease;"
                                            onmouseover="this.src='Company/Description/DescriptionGray.svg';" 
                                            onmouseout="this.src='Company/Description/DescriptionGreen.svg';" 
                                            onmousedown="this.src='Company/Description/DescriptionBlack.svg';" 
                                            onmouseup="this.src='Company/Description/DescriptionGreen.svg';">
                                    </a>
                                </div>
                            </div>
                        </CompanyCardBox>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
</div>
</template>
  
<script>
import CompanyCardBox from './CompanyCardBox.vue';
import AnimGroup from './AnimGroup.vue';
import AnimBarGraph from './AnimBarGraph.vue';
import AnimArrow from './AnimArrow.vue';
import AnimDots from './AnimDots.vue';
import AnimMonster from './AnimMonster.vue';
export default {
    name: 'Frame',
    components: {
        CompanyCardBox,
        AnimBarGraph,
        AnimGroup,
        AnimArrow,
        AnimDots,
        AnimMonster
    }
}
</script>
  
<style>
.grid-rows-custom-part1 {
    grid-template-rows: 3.08fr .73fr 2.28fr .94fr 3.03fr 1.09fr 4.14fr 4.2fr 4fr;
}

.overlap {
    position: relative;
    top: calc( ( (0vw - 90vw) * (765 / 1184) - 36px) * 0.13 ); /* 根據需要調整 */
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

.companyName {
    color: var(--43473-e, #43473E);
    font-family: "Mantou Sans";
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}

.description {
    color: var(--43473-e, #43473E);
    text-align: justify;
    font-family: "Taipei Sans TC Beta";
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 156.522% */
    letter-spacing: 2.3px;
}

@media (max-width: 1200px) {
    .companyName {
        font-size: 48px;
    }
    .description {
        font-size: 20px;
        font-weight: 600; 
        line-height: 32px; 
        letter-spacing: 2.0px; 
    }
}

@media (max-width: 992px) {
    .companyName {
        font-size: 36px;
    }
    .description {
        font-size: 14px;
        font-weight: 500; 
        line-height: 28px; 
        letter-spacing: 1.8px; 
    }
}

@media (max-width: 768px) {
    .companyName {
        font-size: 12px;
    }
    .description {
        font-size: 12px;
        font-weight: 400; 
        line-height: 24px; 
        letter-spacing: 1.4px; 
    }
}

@media (max-width: 576px) {
    .companyName {
        font-size: 24px;
    }
    .description {
        font-size: 8px;
        font-weight: 300; 
        line-height: 20px; 
        letter-spacing: 1px; 
    }
}




</style>