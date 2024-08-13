<template>
  <div class="next-step-container" @click="$emit('validate')">
    <button type="button" class="next-step-button">{{content}}</button>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "下一步",
    },
  },
  setup() {},
};
</script>

<style scoped>
.next-step-container {
  margin-bottom: 25px;
  width: 100%;
}
.next-step-button {
  width: 100%;
  padding: 16px 0;
  background: #bfbfbf;
  border: none;
  border-radius: 12px;
  font-family: "Poppins";
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: #fff;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.next-step-button:hover {
  background-color: #c6ce1b;
}
.next-step-button:active {
  background-color: #b4bc19;
}
</style>
