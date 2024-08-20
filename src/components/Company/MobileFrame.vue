<template>

<div class="mt-[3%] w-full mb-[3%] pl-[8%] pr-[8%]">
    <div class="grid grid-rows-7 grid-cols-custom gap-2">
        <!-- layer 1 -->
        <div class="row-start-1 col-start-1 col-span-2">
            <div class="w-full flex h-[62vw] rounded-[3vw] border-[3px] bg-[#FFF] border-dark-gray">
                <MobileCompanyCardBox title="題目說明 #01" 
                                imageSrc="Company/Logo/NXP-logo.svg" 
                                companyName="恩智浦半導體" 
                                description="卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉 測試" 
                                detailsLink="Company/company_pdf/nxp.pdf" 
                                imageClass="absolute top-1/2 left-1/2 w-[70%] h-auto transform -translate-x-1/2 -translate-y-1/2">
                </MobileCompanyCardBox>
            </div>
        </div>
        <div class="row-start-1 col-start-3 w-full flex h-[62vw] rounded-[3vw] border-[3px] bg-[#FFF] border-dark-gray"></div>
        <!-- layer 2 -->
        <div class="flex overflow-hidden flex-col row-start-2 col-start-1 w-full h-[62vw] rounded-[3vw] border-[3px] bg-[#FFF] border-dark-gray">
            <div class="h-1/2"></div>
            <div class="h-1/2 rounded-none border-t-2 border-dark-gray bg-[var(--d-9-d-9-d-9,_#D9D9D9)]"></div> 
        </div>
        <div class="row-start-2 col-start-2 col-span-2">
            <div class="w-full flex h-[62vw] rounded-[3vw] border-[3px] bg-[#FFF] border-dark-gray">
                <MobileCompanyCardBox title="題目說明 #02" 
                                    imageSrc="Company/Logo/LINE-logo.svg" 
                                    companyName="LINE 台灣" 
                                    description="卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉 測試" 
                                    detailsLink="Company/company_pdf/line.pdf" 
                                    imageClass="absolute top-1/2 left-1/2 w-[44.8%] h-auto transform -translate-x-1/2 -translate-y-1/2">
                </MobileCompanyCardBox>
            </div>
        </div>
        <!-- layer 3,4 -->
        <div class="row-start-3 col-start-1 col-span-2">
            <div class="w-full flex h-[62vw] rounded-[3vw] border-[3px] bg-[#FFF] border-dark-gray">
                <MobileCompanyCardBox title="題目說明 #03" 
                                imageSrc="Company/Logo/Google-logo.svg" 
                                companyName="GOOGLE" 
                                description="卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉 測試" 
                                detailsLink="Company/company_pdf/test_details.pdf" 
                                imageClass="absolute top-1/2 left-1/2 w-[89.6%] h-auto transform -translate-x-1/2 -translate-y-1/2">
                </MobileCompanyCardBox>
            </div>
        </div>
        <div class="row-start-4 col-start-1 col-span-2">
            <div class="w-full flex h-[62vw] rounded-[3vw] border-[3px] bg-[#FFF] border-dark-gray">
                <MobileCompanyCardBox title="題目說明 #04" 
                                imageSrc="Company/Logo/Tsmc-logo.svg" 
                                companyName="台積電" 
                                description="卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉 測試" 
                                detailsLink="Company/company_pdf/test_details.pdf" 
                                imageClass="absolute top-1/2 left-1/2 w-[57.3%] h-auto transform -translate-x-1/2 -translate-y-1/2">
                </MobileCompanyCardBox>
            </div>
        </div>
        <div class="row-start-3 row-span-2 col-start-3 w-full grid grid-rows-[4fr_.48fr] gap-2">
            <div class="flex rounded-[3vw] border-[3px] bg-[#FFF] border-dark-gray">
                <div class="flex w-full h-full justify-center">
                    <div class="relative w-[65%] ">
                        <object data="Company\Phone\monster.svg" type="image/svg+xml" class="absolute w-full top-[5%] moving-object-Monster"></object>
                    </div>
                </div>
                
            </div>
            <div class="flex overflow-hidden flex-col rounded-[3vw] border-[3px] bg-[#FFF] border-dark-gray">
                <div class="h-1/2 rounded-none border-b-2 border-dark-gray bg-[var(--d-9-d-9-d-9,_#D9D9D9)]"></div> 
                <div class="h-1/2"></div>
            </div>
        </div>
        <!-- layer 5 -->
        <div class="row-start-5 col-start-1 w-full flex flex-col h-[62vw] ">
            <object data="Company\Phone\blocks.svg" type="image/svg+xml" class="w-full p-1 pb-2"></object>
            <div class="h-full flex overflow-hidden flex-col w-full rounded-[3vw] border-[3px] bg-[#FFF] border-dark-gray">
                <div class="h-1/2"></div>
                <div class="h-1/2 rounded-none border-t-2 border-dark-gray bg-[var(--d-9-d-9-d-9,_#D9D9D9)]"></div> 
            </div>
        </div>
        <div class="row-start-5 col-start-2 col-span-2">
            <div class="w-full flex h-[62vw] rounded-[3vw] border-[3px] bg-[#FFF] border-dark-gray">
                <MobileCompanyCardBox title="題目說明 #05" 
                                imageSrc="Company/Logo/Logitech-logo.svg" 
                                companyName="羅技" 
                                description="卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉 測試" 
                                detailsLink="Company/company_pdf/test_details.pdf" 
                                imageClass="absolute top-1/2 left-1/2 w-[85.2%] h-auto transform -translate-x-1/2 -translate-y-1/2">
                </MobileCompanyCardBox>
            </div>
        </div>
        <!-- layer 6 -->
        <div class="row-start-6 col-start-1 col-span-2">
            <div class="w-full flex h-[62vw] rounded-[3vw] border-[3px] bg-[#FFF] border-dark-gray">
                <MobileCompanyCardBox title="題目說明 #06" 
                                imageSrc="Company/Logo/Chunghwa_Telecom-logo.svg" 
                                companyName="中華電信" 
                                description="卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉 測試" 
                                detailsLink="Company/company_pdf/中華電信.pdf" 
                                imageClass="absolute top-1/2 left-1/2 w-[85.2%] h-auto transform -translate-x-1/2 -translate-y-1/2">
                </MobileCompanyCardBox>
            </div>
        </div>
        <div class="row-start-6 col-start-3 w-full flex h-[62vw] rounded-[3vw] border-[3px] bg-[#FFF] border-dark-gray"></div>
        <!-- layer 7 -->
        <div class="row-start-7 col-start-1 w-full flex h-[62vw] rounded-[3vw] border-[3px] bg-[#FFF] border-dark-gray"></div>
        <div class="row-start-7 col-start-2 col-span-2">
            <div class="w-full flex h-[62vw] rounded-[3vw] border-[3px] bg-[#FFF] border-dark-gray">
                <MobileCompanyCardBox title="題目說明 #07" 
                                        imageSrc="Company/Logo/新竹市政府-logo.svg" 
                                        companyName="新竹市政府" 
                                        description="卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉卡比巴拉 測試" 
                                        detailsLink="Company/company_pdf/test_details.pdf" 
                                        imageClass="absolute top-1/2 left-1/2 w-[100%] h-auto transform -translate-x-1/2 -translate-y-1/2">
                </MobileCompanyCardBox>
            </div>
        </div>
    </div>
    <!-- <div class="grid grid-rows-7 gap-2">
        <div class="row-start-1 grid grid-cols-custom gap-2">
            <div class="h-[62vw] rounded-[20px] border-[3px] bg-[#FFF] border-dark-gray">
            </div>
            <div class="h-[62vw] rounded-[20px] border-[3px] bg-[#FFF] border-dark-gray"></div>
            <div class="h-[62vw] rounded-[20px] border-[3px] bg-[#FFF] border-dark-gray"></div>
        </div>
        <div class="row-start-2 grid grid-cols-[auto_62vw] gap-2">
            <div class="h-[62vw] rounded-[20px] border-[3px] bg-[#FFF] border-dark-gray"></div>
            <div class="h-[62vw] rounded-[20px] border-[3px] bg-[#FFF] border-dark-gray">
            </div>
        </div>
        
    </div> -->
    

    <!-- <div class="w-full flex flex-row">
        <div class="w-[62vw] h-[62vw] rounded-[20px] border-[3px] bg-[#FFF] border-dark-gray">

        </div>
        <div class="ml-2 flex-grow h-[62vw] rounded-[20px] border-[3px] bg-[#FFF] border-dark-gray"></div>
    </div>
    <div class="w-full flex flex-row mt-2">
        <div class="mr-2 flex-grow h-[62vw] rounded-[20px] border-[3px] bg-[#FFF] border-dark-gray"></div>
        <div class="w-[62vw] h-[62vw] rounded-[20px] border-[3px] bg-[#FFF] border-dark-gray">
        </div>
    </div> -->
</div>
</template>
    
<script>
import MobileCompanyCardBox from './MobileCompanyCardBox.vue';
export default {
    name: 'PhoneFrame',
    components: {
        MobileCompanyCardBox
    }
}
</script>
<style>

    .grid-cols-custom {
      grid-template-columns: calc(22vw - 8px) auto calc(22vw - 8px);
    }

    .moving-object-Monster {
        animation: moveUpDown-Monster 6s ease-in-out infinite;
        position: absolute; 
    }

    @keyframes moveUpDown-Monster {
        0% {
            top: 5%; 
        }
        50% {
            top: 85%; 
        }
        100% {
            top: 5%; 
        }
    }


</style> 