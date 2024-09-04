<template>
  <div class="group-preference">
    <draggable
      v-model="internalValue"
      item-key="id"
      :animation="300"
      ghost-class="ghost"
      :delay="350"
      :delayOnTouchOnly="true"
      :touch-start-threshold="20"
    >
      <template #item="{ element }">
        <div class="item">
          <div class="item-content">
            <div class="dots">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            <span>{{ element.name }}</span>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import draggable from "vuedraggable";

export default {
  name: "GroupPreference",
  components: {
    draggable,
  },
  props: {
    modelValue: {
      type: Array,
      default: () => [
        { id: 1, name: "恩智浦半導體" },
        { id: 2, name: "LINE台灣" },
        { id: 3, name: "Google" },
        { id: 4, name: "台積電" },
        { id: 5, name: "羅技" },
        { id: 6, name: "中華電信" },
        { id: 7, name: "創客交流組" },
      ],
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const internalValue = ref(props.modelValue);

    watch(internalValue, (newValue) => {
      emit("update:modelValue", newValue);
    });

    watch(() => props.modelValue, (newValue) => {
      internalValue.value = newValue;
    });

    return {
      internalValue,
    };
  },
};
</script>

<style scoped>
.group-preference {
  width: 100%;
  display: flex;
  align-self: stretch;
}
.item {
  margin-bottom: 14px;
  cursor: move;
  touch-action: none;
}
.item-content {
  display: flex;
  align-items: center;
  padding: 20px;
  background: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  gap: 22px;
  height: 81px;
}
.item:hover .item-content {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
}
.dots {
  display: flex;
  flex-wrap: wrap;
  width: 12px;
  height: 20px;
}
.dot {
  width: 4px;
  height: 4px;
  background-color: #43473e;
  border-radius: 50%;
  margin: 1px;
  transition: background-color 0.3s ease;
}
.item:hover .dot {
  background-color: #757575;
}
.item-content span {
  flex-grow: 1;
  color: #43473e;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.ghost {
  opacity: 0.5;
  background: #f8ff74;
  border: 2px dashed #9ea41f;
}
.ghost .item-content {
  background: transparent;
  border: none;
  box-shadow: none;
}
@media (max-width: 576px) {
  .item-content {
    height: 79px;
    padding: 15px;
  }
  .dots {
    width: 12px;
    height: 18px;
  }
  .item-content span {
    font-size: 14px;
  }
}
</style>
