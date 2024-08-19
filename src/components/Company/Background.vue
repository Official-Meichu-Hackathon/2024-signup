<template>
    
        <div class="w-full overflow-hidden">
            <BackgroundEffect 
            v-for="n in 150"
            :key="n"
            :interval="getRandomInterval()"
            :move="getRandomMovable()"
            :visibility="getRandomVisibility()"
            />

            
        </div>
    
</template>
      
<script>
import BackgroundEffect from './BackgroundEffect.vue';
export default {
    components: {
        BackgroundEffect
    },
    methods: {
        getRandomInterval() {
            const intervals = [400, 600, 800, 1000];
            return intervals[Math.floor(Math.random() * intervals.length)];
        },
        getRandomMovable() {
            return Math.random() <= 1/10;
        },
        getRandomVisibility() {
            return Math.random() >= 1/15;
        }

    }
};
</script>
    
<style scoped>

</style>
