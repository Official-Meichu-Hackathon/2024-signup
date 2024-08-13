<template>
  <div class="progress">
    <Dot :size="20" :number="1" :fontSize="12" :color="step === 1 ? 'black' : '#bfbfbf'">
      報名選項
    </Dot>
    <div class="connector"></div>
    <Dot :size="20" :number="2" :fontSize="12" :color="(step > 1 && step <= size+1) ? 'black' : '#bfbfbf'">
      參賽者一 基本資料
    </Dot>
    <div class="connector"></div>
    <Dot :size="20" :number="3" :fontSize="12" :color="(step > size+1) ? 'black' : '#bfbfbf'"> 其他 </Dot>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import Dot from "@/components/signup-form/Dot.vue";
export default {
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
    teamSize: {
      type: Number,
      default: 3,
    },
  },
  components: {
    Dot,
  },
  setup(props) {
    const step = ref(1);
    const size = ref(3);
    watch(
      () => props.currentStep,
      (newVal) => {
        step.value = newVal;
      }
    );
    watch(
      () => props.teamSize,
      (newVal) => {
        size.value = newVal;
      }
    );

    return {
      step,
      size
    };
  },
};
</script>

<style scoped>
.progress {
  display: flex;
  flex-direction: row;
  padding: 38px 0 38px 0;
  white-space: nowrap;
}
.connector {
  margin-top: 26px;
  width: 232px;
  height: 1px;
  background-color: gray;
  opacity: 0.35;
  background: #333;
}
</style>
