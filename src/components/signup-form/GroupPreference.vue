<template>
  <div class="group-preference">
    <draggable
      :modelValue="modelValue"
      @update:modelValue="updateValue"
      item-key="id"
      @start="drag = true"
      @end="drag = false"
      :animation="300"
      ghost-class="ghost"
      handle=".handle"
    >
      <template #item="{ element }">
        <div class="item" :class="{ 'is-dragging': drag }">
          <div class="handle">
            <div class="dots">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <div class="item-content">{{ element.name }}</div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import { ref } from "vue";
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
        { id: 1, name: "NXP" },
        { id: 2, name: "Line" },
        { id: 3, name: "Google" },
        { id: 4, name: "TSMC" },
        { id: 5, name: "羅技" },
        { id: 6, name: "中華電信" },
        { id: 7, name: "創客交流組" },
      ],
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const drag = ref(false);

    const updateValue = (newValue) => {
      // 解包 Proxy 對象
      const unpacked = newValue.map((item) => {
        if (item && typeof item === "object" && !Array.isArray(item)) {
          return Object.assign({}, item);
        }
        return item;
      });
      emit("update:modelValue", unpacked);
    };

    return {
      drag,
      updateValue,
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
  display: flex;
  align-items: center;
  padding: 20px;
  background: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  gap: 22px;
  flex-shrink: 0;
  margin-bottom: 14px;
  height: 81px;
}

.item:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.handle {
  cursor: move;
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
  background-color: #000;
  border-radius: 50%;
  margin: 1px;
  transition: background-color 0.3s ease;
}
.item:hover .dot {
  background-color: #757575;
}
.item-content {
  flex-grow: 1;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.is-dragging {
  opacity: 0.7;
  background-color: #e0e0e0;
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
  border: 2px dashed #2196f3;
}
</style>
