<template>
    <div class="home pt-[75px]">
      <TopicDesc/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import TopicDesc from '@/components/TopicDesc.vue';

  
  export default {
    name: 'TopicDesciptionView',
    components: {
      TopicDesc
    }
  }
  </script>
  