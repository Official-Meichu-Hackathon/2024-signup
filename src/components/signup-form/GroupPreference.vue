<template>
  <div class="group-preference">
    <draggable
      :modelValue="modelValue"
      @update:modelValue="updateValue"
      item-key="id"
      @start="dragStart"
      @end="dragEnd"
      :animation="300"
      ghost-class="ghost"
      handle=".handle"
      :delay="200"
      :delayOnTouchOnly="true"
      :touchStartThreshold="5"
    >
      <template #item="{ element }">
        <div 
          class="item" 
          :class="{ 'is-dragging': drag, 'is-touching': touching === element.id }"
          @touchstart="touchStart(element.id)"
          @touchend="touchEnd"
        >
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
    const drag = ref(false);
    const touching = ref(null);

    const updateValue = (newValue) => {
      const unpacked = newValue.map((item) => {
        if (item && typeof item === "object" && !Array.isArray(item)) {
          return Object.assign({}, item);
        }
        return item;
      });
      emit("update:modelValue", unpacked);
    };

    const dragStart = () => {
      drag.value = true;
    };

    const dragEnd = () => {
      drag.value = false;
    };

    const touchStart = (id) => {
      touching.value = id;
    };

    const touchEnd = () => {
      touching.value = null;
    };

    return {
      drag,
      touching,
      updateValue,
      dragStart,
      dragEnd,
      touchStart,
      touchEnd,
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
  touch-action: none;
}

.item.is-touching {
  border-color: #2196f3;
  box-shadow: 0 1px 8px rgba(33, 150, 243, 0.3);
}

.handle {
  cursor: move;
  touch-action: none;
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

.item.is-touching .dot {
  background-color: #2196f3;
}

.item-content {
  flex-grow: 1;
  color: #43473e;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.ghost {
  opacity: 0.5;
  background: #e3f2fd;
  border: 2px dashed #2196f3;
}

@media (max-width: 576px) {
  .item {
    height: 79px;
    margin-bottom: 13px;
  }
  
  .dots {
    display: flex;
    flex-wrap: wrap;
    width: 12px;
    height: 18px;
  }
  
  .item-content {
    font-size: 14px;
  }
}
</style>