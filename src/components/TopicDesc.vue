<template>
    <div class="hidden sm:block relative">
        <Top/>
    </div>
    <div class="overflow-hidden box-border relative">
        
        <div class="relative hidden sm:block flex-shrink-0 overflow-hidden box-border">
            <div class="absolute inset-0 z-[-1] top-[6px]">
                <Background :Mobile="false"/>
            </div>
            <Frame/>
            
        </div>
        <div class="block sm:hidden flex-shrink-0 ">
            <div class="absolute inset-0 z-[-1] top-[6px]">
                <Background :Mobile="true"/>
            </div>
            <MobileFrame/>
        </div>
    </div>
    
</template>
    
<script>

import Frame from './Company/Frame.vue';
import Top from './Company/Top.vue';
import MobileFrame from './Company/MobileFrame.vue';
import Background from './Company/Background.vue';
export default {
    name: 'TopicDesc',
    components: {
        Frame,
        Top,
        MobileFrame,
        Background
    }
}
</script>
    
<style>
    
</style>