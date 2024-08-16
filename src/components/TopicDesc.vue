<template>
    <div class="hidden sm:block flex-shrink-0">
        <Top/>
    </div>
    <div class="overflow-hidden box-border pl-[8%] pr-[8%] mb-[3%]">
        <div class="hidden sm:block flex-shrink-0">
            <Frame/>
        </div>
        <div class="block sm:hidden flex-shrink-0">
            <PhoneFrame/>
        </div>
    </div>
    
</template>
    
<script>

import Frame from './Company/Frame.vue';
import Top from './Company/Top.vue';
import PhoneFrame from './Company/PhoneFrame.vue';
export default {
    name: 'TopicDesc',
    components: {
        Frame,
        Top,
        PhoneFrame
    }
}
</script>
    
<style>
    
</style>