<template>
    <img :src="currentImageUrl" class=""/>
    <!-- <div class="">
        <BackgroundEffect/>
    </div> -->
</template>
      
<script>
export default {
    data() {
        return {
            currentImageIndex: Math.floor(Math.random() * 10),
            images: [
                'Company/BackgroundEffect/1.svg',
                'Company/BackgroundEffect/2.svg',
                'Company/BackgroundEffect/3.svg',
                'Company/BackgroundEffect/4.svg',
                'Company/BackgroundEffect/5.svg',
                'Company/BackgroundEffect/6.svg',
                'Company/BackgroundEffect/7.svg',
                'Company/BackgroundEffect/8.svg',
                'Company/BackgroundEffect/9.svg',
                'Company/BackgroundEffect/10.svg'
            ],
            // intervals: [1500, 1500, 1500, 1500, 300],
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
            if (index >= 10) index = 0;
            this.currentImageIndex = index;
            setTimeout(() => {
            changeImage(index + 1);
            }, 300);
        };

        changeImage(this.currentImageIndex);
        },
    }
};
</script>
    
<style scoped>

</style>
