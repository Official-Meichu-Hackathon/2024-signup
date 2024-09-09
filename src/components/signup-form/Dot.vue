<template>
  <div class="dot">
    <div
      class="circle"
      :style="{
        width: size + 'px',
        height: size + 'px',
        fontSize: fontSize + 'px',
        backgroundColor: color,
      }"
    >
      {{ number }}
    </div>
    <div class="slot-container" :style="{ color: color }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: "20",
    },
    number: {
      type: Number,
      default: "1",
    },
    fontSize: {
      type: Number,
      default: "12",
    },
    color: {
      type: String,
      default: "#bfbfbf",
    },
  },
};
</script>

<style scoped>
.circle {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  color: white;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.dot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
}
.slot-container {
  font-weight: 500;
  color: #333;
  text-align: center;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  line-height: normal;
}

@media (max-width: 576px) {
    .dot {
        margin-top: 4px;
    }
}
</style>
