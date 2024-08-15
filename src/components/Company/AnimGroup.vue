<template>
    <div class="w-full h-full grid grid-cols-[1.48fr_2.83fr]">
        <div class="flex col-start-1 h-full mr-2 rounded-[.75vw] border-[3px] bg-[#FFF] border-dark-gray overflow-hidden items-center justify-center ">
            <!-- <object data="Company\RectangularGrid\grid1.svg" type="image/svg+xml" class="absolute h-full flex hide-grid1_1"></object>
            <object data="Company\RectangularGrid\grid2.svg" type="image/svg+xml" class="absolute h-full flex hide-grid1_2"></object> -->
            <img :src="currentImageUrl" class="h-full aspect-w-132 aspect-h-509 flex p-2 grid_bg"/>
        </div>
        <div class="col-start-2 h-full w-full grid grid-rows-[1.15fr_.32fr_.32fr_.65fr_2.6fr] gap-1.5">
            <!-- 怪物 -->
            <div class="flex relative w-full aspect-w-283 aspect-h-115 rounded-[.75vw] border-[3px] bg-[#FFF] border-dark-gray items-center justify-center">
                <object data="Company/monster2.svg" type="image/svg+xml" class="absolute h-[80%] cardbox-mo2"></object>    
            </div>
            <!-- 灰色框 -->
            <div class="flex rounded-[.75vw] border-[3px] bg-[var(--d-9-d-9-d-9,_#D9D9D9)] border-dark-gray"></div>
            <div class="flex rounded-[.75vw] border-[3px] bg-[var(--d-9-d-9-d-9,_#D9D9D9)] border-dark-gray"></div>
            <div class="flex rounded-[.75vw] border-[3px] bg-[#FFF] border-dark-gray"></div>
            <div class="flex relative w-full h-full">
                <object data="Company/Blocks/origin_blocks.svg" type="image/svg+xml" class="absolute h-full"></object>
                <object data="Company/Blocks/block.svg" type="image/svg+xml" class="block-1 absolute w-[7.5%] left-[41.5%] top-[16.7%] "></object>
                <object data="Company/Blocks/block.svg" type="image/svg+xml" class="block-2 absolute w-[7.5%] left-[41.5%] bottom-[0%]"></object>
                <object data="Company/Blocks/block.svg" type="image/svg+xml" class="block-2 absolute w-[7.5%] left-[16.6%] top-[33.8%]"></object>
                <object data="Company/Blocks/block.svg" type="image/svg+xml" class="block-3 absolute w-[7.5%] right-[17.25%] top-[33.8%]"></object>
            </div>
        </div>
        
    </div>

</template>
      
<script>
export default {
    data() {
        return {
            currentImageIndex: 0,
            images: [
                'Company/RectangularGrid/grid1.svg',
                'Company/RectangularGrid/grid2.svg',
                'Company/RectangularGrid/grid3.svg',
                'Company/RectangularGrid/grid4.svg',
                'Company/RectangularGrid/grid5.svg'
            ],
            intervals: [1500, 1500, 1500, 1500, 200],
        };
    },
    computed: {
        currentImageUrl() {
      // 确保 images 数组已经定义并且 currentImageIndex 有效
      
        return this.images[this.currentImageIndex];
        }
    },
    mounted() {
        this.startImageSlider();
    },
    methods: {
        startImageSlider() {
        const changeImage = (index) => {
            if (index >= 5) index = 0;
            this.currentImageIndex = index;
            setTimeout(() => {
            changeImage(index + 1);
            }, this.intervals[index % this.intervals.length]);
        };

        changeImage(this.currentImageIndex);
        },
    }
};
</script>
    
<style scoped>
.grid_bg {
    animation: changeBackground 6.2s infinite;
}
@keyframes changeBackground {
    96.77% { background-color: transparent; } /* 6秒處 (6/6.2 = 0.9677) */
    100% { background-color: gray; } /* 6.2秒處 (100%) */
}


.cardbox-mo2 {
    animation: animateMo2 3s ease-out infinite;
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

.block-1 {
    animation: animateBk1 1.25s ease-out infinite;
}
  
@keyframes animateBk1 {
    0% {
      opacity: 0;
    }
    75% {
        opacity: 0;
    }
    80% {
        opacity: 0;
    }
    95% {
        opacity: 1;
    }
    100%{
        opacity: 1;
    }
}

.block-2 {
    animation: animateBk2 4.5s ease-out infinite;
}
  
@keyframes animateBk2 {
    0% {
        opacity: 0;
    }
    25% {
        opacity: 0;
    }
    27% {
        opacity: 1;
    }
    97.5% {
        opacity: 1;
    }
}

.block-3 {
    animation: animateBk3 10s ease-out infinite;
}
  
@keyframes animateBk3 {
    0% {
        transform: translate(0, 0);
    }
    21% {
        transform: translate(0, 0);
    }
    23% {
        transform: translate(-250%, 0);
    }
    24% {
        transform: translate(-200%, 0);
    }
    25% {
        transform: translate(-225%, 0);
    }
    26% {
        transform: translate(-230%, 0);
    }
    27% {
        transform: translate(-220%, 0);
    }
    28% {
        transform: translate(-225%, 0);
    }
    71% {
        transform: translate(-225%, 0);   
    }
    73% {
        transform: translate(25%, 0);   
    }
    74% {
        transform: translate(-25%, 0);   
    }
    75%{
        transform: translate(0, 0);
    }
    76%{
        transform: translate(5%, 0);
    }
    77%{
        transform: translate(-5%, 0);
    }
    78%{
        transform: translate(0, 0);
    }
    100%{
        transform: translate(0, 0);
    }
}
</style>
