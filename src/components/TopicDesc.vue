<template>
    <div class="hidden sm:block flex-shrink-0">
        <Top/>
    </div>
    <div class="overflow-hidden box-border">
        <div class="relative hidden sm:block flex-shrink-0 overflow-hidden box-border">
            <div class="absolute w-full inset-0 z-[-1]">
                <Background/>
            </div>
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
import Background from './Company/Background.vue';
export default {
    name: 'TopicDesc',
    components: {
        Frame,
        Top,
        PhoneFrame,
        Background
    }
}
</script>
    
<style>
    
</style>