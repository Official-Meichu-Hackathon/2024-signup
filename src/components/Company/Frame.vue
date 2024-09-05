<template>

<div class="pl-[8%] pr-[8%] mb-[3%]">
    <div class="relative" style="height: calc((84vw - 12px) * 0.38 * 2479 / 439 + 96px);">
        <div class="relative w-full h-full grid grid-cols-[4.39fr_2.79fr_1.48fr_2.83fr] grid-rows-custom-part1 gap-3">
            <!-- 添加背景 -->
            
            <!-- <div class="row-start-4 w-[100vw] absolute bg-fixed bg-cover left-[-8vw] inset-0 z-[-1]">
                <BackgroundEffect/>
            </div>
            <div class="row-start-9 w-[100vw] absolute bg-fixed bg-cover left-[-8vw] top-[30%] inset-0 z-[-1]">
                <BackgroundEffect/>
            </div>
            <div class="row-start-9 w-[100vw] absolute bg-fixed bg-cover left-[-8vw] top-[60%] inset-0 z-[-1]">
                <div class="transform scale-x-[-1]">
                    <BackgroundEffect/>
                </div>
            </div> -->
            <!-- 合作企業-NXP  -->
            <div class="row-start-1 row-span-2 col-start-1 relative ">
                <CompanyCardBox title="題目說明 #01" 
                                imageSrc="Company/Logo/logo-NXP.png" 
                                companyName="恩智浦半導體" 
                                description="如何能夠以創新應用因應目前的氣候變遷，對企業來說是個非常重要的課題，希望參賽者能利用恩智浦與文曄科技提供的相關開發資源，實現智慧應用、符合永續需求。"
                                detailsLink="Company/company_pdf/nxp.pdf" 
                                imageClass="absolute top-1/2 left-1/2 w-[85%] h-auto transform -translate-x-1/2 -translate-y-1/2">
                </CompanyCardBox>
            </div> 
        
            <!-- 奇怪生物 + 網格線  -->
            <div class="flex row-start-1 col-start-2 col-span-3">
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
                    <CompanyCardBox title="題目說明 #02" 
                                    imageSrc="Company/Logo/logo-LINE.svg" 
                                    companyName="LINE台灣" 
                                    description="以「透過生成式 AI 和多模態模型打造校園相關應用的 LINE Bot」為主題，創建一個能夠與校園生活緊密連結的 LINE Bot。"
                                    detailsLink="Company/company_pdf/line.pdf" 
                                    imageClass="absolute top-1/2 left-1/2 w-[50%] h-auto transform -translate-x-1/2 -translate-y-1/2">
                    </CompanyCardBox> 
                </div>
            </div>

            <!-- 文字-梅竹黑客松 -->
            <div class="relative flex row-start-3 col-start-1 col-span-2">
                <div class="relative h-full w-full grid grid-cols-[6.18fr_1.04fr] grid-rows-[13fr_8fr] gap-3">
                    <div class="flex relative items-center justify-center h-full w-full row-start-1 col-start-1 rounded-[0.75vw] border-[3px] border-dark-gray bg-[#FFF]">
                        <object data="Company\words.svg" type="image/svg+xml" class="absolute w-[40vw] pt-[.6vw]"></object>
                    </div>
                    <div class="flex overflow-hidden flex-col row-start-2 col-start-1 rounded-[0.75vw] border-[3px] border-dark-gray bg-[#FFF]">
                        <div class="h-1/2"></div>
                        <div class="h-1/2 rounded-none border-t-2 border-dark-gray bg-[var(--d-9-d-9-d-9,_#D9D9D9)]"></div> 
                    </div>
                    <div class="row-start-1 col-start-2 row-span-2 rounded-[0.75vw] border-[3px] border-dark-gray bg-[#FFF]"></div>
                </div>
            </div>
            <!-- 小長方形*1 -->
            <div class="relative row-start-4 col-start-2 
            flex-shrink-0 rounded-[0.75vw] border-[3px] bg-white border-dark-gray">
            <!-- <div class="absolute flex inset-0 z-0">
                <BackgroundEffect/>
            </div> -->
            </div>
            
            <!-- 合作企業-Google  -->
            <div class="row-start-4 row-span-2 col-start-1">
                <CompanyCardBox title="題目說明 #03" 
                                imageSrc="Company/Logo/Google-logo.svg" 
                                companyName="Google" 
                                description="使用 Gemini API 或 Gemma 模型在手機上做各種應用，透過 Gemini 發想能在生活中使用 AI 結合手機大幅提升效率或創新的可能。"
                                detailsLink="Company/company_pdf/google.pdf" 
                                imageClass="absolute top-1/2 left-1/2 w-[72.8%] h-auto transform -translate-x-1/2 -translate-y-1/2">
                </CompanyCardBox>
            </div>
    
            <!-- 合作企業-TSMC  -->
            <div class="row-start-5 row-span-2 col-start-2 col-span-2">
                <CompanyCardBox title="題目說明 #04" 
                                imageSrc="Company/Logo/Tsmc-logo.svg" 
                                companyName="台積電" 
                                description="思考即將進人職場的自己會希望得到什麼樣的員工數位認可 / 獎勵，並可選擇結合時下熱門的 Gen AI, Chatbot，實作出 Data-driven 且重視使用者體驗的解決方案。"
                                detailsLink="Company/company_pdf/tsmc.pdf" 
                                imageClass="absolute top-1/2 left-1/2 w-[43.7%] h-auto transform -translate-x-1/2 -translate-y-1/2">
                </CompanyCardBox>
            </div>
    
            <!-- 動畫-座標  -->
            <div class="row-start-5 col-start-4 rounded-[0.75vw] border-[3px] border-dark-gray bg-[#FFF]">
                <AnimArrow/>
            </div>
    
            <!-- 動畫-組合（左一右五）-->
            <div class="row-start-6 row-span-2 col-start-1">
                <AnimGroup/>
            </div>
            
    
            <!-- 合作企業-羅技  -->
            <div class="row-start-7 col-start-2 col-span-2">
                <CompanyCardBox title="題目說明 #05" 
                                imageSrc="Company/Logo/Logitech-logo.svg" 
                                companyName="羅技" 
                                description="羅技期望透過探索 AI 在各種使用場景中的潛在應用，不斷創新使用者體驗。結合現有的多種 AI 輔助技術與羅技產品，幫助使用者拓展能力、實現個人成就。"
                                detailsLink="Company/company_pdf/logitech.pdf" 
                                imageClass="absolute top-1/2 left-1/2 w-[72.8%] h-auto transform -translate-x-1/2 -translate-y-1/2">
                </CompanyCardBox>
            </div>
    
            <!-- 動畫-圓  -->
            <div class="row-start-6 row-span-2 col-start-4 rounded-[0.75vw] border-[3px] border-dark-gray bg-[#FFF]">
                <AnimDots/>
            </div>
    
            <!-- 動畫-組合 長條圖 -->
            <div class="row-start-8 col-start-1 col-span-2">
                <AnimBarGraph/>
            </div>
    
            <!-- 合作企業-中華電信  -->
            <div class="row-start-8 col-start-3 col-span-2">
                <CompanyCardBox title="題目說明 #06" 
                                imageSrc="Company/Logo/Chunghwa_Telecom-logo.svg" 
                                companyName="中華電信" 
                                description="應用生成式 AI 或 AI 偵偽/檢測技術，針對各式議題，設計創新應用，以避免生成式 AI 合成語音及 AI 影像/影片生成對一般大眾的負面威脅。"
                                detailsLink="Company/company_pdf/中華電信.pdf" 
                                imageClass="absolute top-1/2 left-1/2 w-[72.8%] h-auto transform -translate-x-1/2 -translate-y-1/2">
                </CompanyCardBox>
                
            </div>

            <!-- 合作機構-新竹市政府  -->
            <div class="flex row-start-9 col-start-1 col-span-4">
                <div class="grid grid-cols-[3.72fr_4.39fr_3.72fr] w-full">
                    <div class="cols-start-1"></div>
                    <div class="cols-start-2">
                        <CompanyCardBox title="題目說明 #07" 
                                        imageSrc="Company/Logo/新竹市政府-logo.png" 
                                        companyName="創客交流組" 
                                        description="新竹科技X交通 請應用市府資料開放平臺(open data)之數據資料，發掘竹市交通問題，並提供解方。"
                                        detailsLink="Company/company_pdf/2024新竹X梅竹黑客松競賽題目提案表.pdf" 
                                        imageClass="absolute top-1/2 left-1/2 w-[86.5%] h-auto transform -translate-x-1/2 -translate-y-1/2">
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
import BackgroundEffect from './BackgroundEffect.vue';
import Background from './Background.vue';
export default {
    name: 'Frame',
    components: {
        CompanyCardBox,
        AnimBarGraph,
        AnimGroup,
        AnimArrow,
        AnimDots,
        AnimMonster,
        BackgroundEffect,
        Background
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

.companyName {
    color: var(--43473-e, #43473E);
    font-family: "Mantou Sans";
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
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

@media (max-width: 1210px) {
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

@media (max-width: 1080px) {
    .companyName {
        font-size: 42px;
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
        font-size: 34px;
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
        font-size: 24px;
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