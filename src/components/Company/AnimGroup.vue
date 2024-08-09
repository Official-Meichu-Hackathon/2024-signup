<template>

<div class="w-full h-full flex flex-row">
    <div class="flex h-full mr-2">
        <!-- <object data="Company\RectangularGrid\grid1.svg" type="image/svg+xml" class="absolute h-full flex hide-grid1_1"></object>
        <object data="Company\RectangularGrid\grid2.svg" type="image/svg+xml" class="absolute h-full flex hide-grid1_2"></object> -->
        <img :src="currentImageUrl" class="h-full flex"/>
    </div>
    <div class="flex-grow h-full grid grid-rows-[1.15fr_.32fr_.32fr_.65fr_2.6fr] gap-1.5">
        <!-- 怪物 -->
        <div class="flex w-full rounded-[.75vw] border-[3px] bg-[#FFF] border-dark-gray items-center justify-center">
            <object data="Company/monster2.svg" type="image/svg+xml" class="h-[82%] cardbox-mo2"></object>
        </div>
        <!-- 灰色框 -->
        <div class="rounded-[.75vw] border-[3px] bg-[var(--d-9-d-9-d-9,_#D9D9D9)] border-dark-gray"></div>
        <div class="rounded-[.75vw] border-[3px] bg-[var(--d-9-d-9-d-9,_#D9D9D9)] border-dark-gray"></div>
        <div class="rounded-[.75vw] border-[3px] bg-[#FFF] border-dark-gray"></div>    
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
            intervals: [1200, 1200, 1200, 1200, 100],
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
.hide-grid1_1 {
    animation: animateGr1_1 6s infinite;
}
  
@keyframes animateGr1_1 {
    0% {
        opacity: 1;
        visibility: visible;
    }
    0.1% {
        opacity: 0;
        visibility: hidden;
    }
    0.2% {
        opacity: 1;
        visibility: visible;
    }
}

.hide-grid1_2 {
    animation: animateGr1_2 3s infinite;
}
  
@keyframes animateGr1_2 {
    0% {
        opacity: 0;
        visibility: hidden;
        
    }
    0.1% {
        opacity: 1;
        visibility: visible;
    }
    0.2% {
        opacity: 0;
        visibility: hidden;
    }
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
</style>
