<template>
    <div class="p-[8%]">
        <Top/>
        <div class="hidden md:block flex-shrink-0">
            <Frame/>
        </div>
    </div>
    
</template>
    
<script>
import Frame from './Company/Frame.vue';
import Top from './Company/Top.vue';
export default {
    name: 'TopicDesc',
    components: {
        Frame,
        Top
    }
}
</script>
    
<style>
    
</style>