<template>
  <div class="flex flex-col">
    <Title />
    <Description />
    <Introduction />
    <Prize />
    <Signup />
    <Sponsor />
    <Ad />
    <Staff />
  </div>
</template>

<script setup>
import Title from "@/components/home/Title.vue";
import Description from "@/components/home/Description.vue";
import Introduction from "@/components/home/Introduction.vue";
import Prize from "@/components/home/Prize.vue";
import Signup from "@/components/home/Signup.vue";
import Sponsor from "@/components/home/Sponsor.vue";
import Ad from "@/components/home/Ad.vue";
import Staff from "@/components/home/Staff.vue";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
