<template>
    <div class="w-full pb-[2vw]">
        <img :src="currentImageUrl" class="w-full absolute"
        :style="getTranslateStyle()"/>
    </div>
        
    
</template>
      
<script>
export default {
    props: {
        interval: {
            type: Number,
            default: 300,
        },
        move: {
            type: Boolean,
            default: false,
        },
        visibility: {
            type: Boolean,
            default: true,
        },

    },
    data() {
        return {
            currentImageIndex: Math.floor(Math.random() * 11),
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
                'Company/BackgroundEffect/10.svg',
                'Company/BackgroundEffect/11.png'
            ],
            count: 0,
        };
    },
    computed: {
        effectiveInterval() {
        return this.move ? 200 : this.interval;
        },
        currentImageUrl() {
            return this.visibility ? this.images[this.currentImageIndex] : this.images[10];
        }

    },
    watch: {
        currentImageIndex(newIndex) {
            if (newIndex === 10 && this.move) {
                this.count += 1; // 增加百分比
            }
        }
    },
    mounted() {
        if(this.visibility) {
            this.startImageSlider();
        }
    },
    methods: {
        startImageSlider() {
            const changeImage = (index) => {
                if (index >= 11) index = 0;
                this.currentImageIndex = index;
                setTimeout(() => {
                changeImage(index + 1);
                }, this.effectiveInterval);
            };

            changeImage(this.currentImageIndex);
        },
        getTranslateStyle() {
            // const translateYValue = this.move ? `calc(${this.count * 100}% + ${this.count * 12}px)` : '0';
            const translateYValue = this.move ? `calc(${this.count * 2}vw)` : '0';
            return this.move ? { transform: `translateY(${translateYValue})` } : {};
        },
    }
};
</script>
    
<style scoped>

</style>
