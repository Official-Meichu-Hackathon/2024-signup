<template>
  <div class="group-preference">
    <draggable
      :list="internalList"
      @update:modelValue="updateValue"
      item-key="id"
      :animation="0"
      ghost-class="ghost"
      chosen-class="chosen"
      drag-class="dragging"
      :delay="200"
      :delayOnTouchOnly="true"
      :touchStartThreshold="5"
      @start="dragStart"
      @end="dragEnd"
    >
      <template #item="{ element, index }">
        <div 
          class="item" 
          :class="{ 'is-dragging': isDragging && dragIndex === index }"
          :style="getDragStyle(index)"
        >
          <div class="item-content">
            <div class="drag-indicator">
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
import { ref, computed } from "vue";
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
    const isDragging = ref(false);
    const dragIndex = ref(-1);
    const dragPosition = ref({ x: 0, y: 0 });
    const dragSize = ref({ width: 0, height: 0 });
    const internalList = ref([...props.modelValue]);

    const updateValue = (newValue) => {
      console.log('updateValue called', newValue);
      internalList.value = newValue;
      emit("update:modelValue", newValue);
    };

    const dragStart = (evt) => {
      console.log('Drag started', evt);
      isDragging.value = true;
      dragIndex.value = evt.oldIndex;
      const rect = evt.item.getBoundingClientRect();
      dragPosition.value = { x: evt.clientX, y: evt.clientY };
      dragSize.value = { width: rect.width, height: rect.height };
    };

    const dragEnd = (evt) => {
      console.log('Drag ended', evt);
      isDragging.value = false;
      dragIndex.value = -1;
    };

    const getDragStyle = (index) => {
      if (isDragging.value && dragIndex.value === index) {
        return {
          position: 'fixed',
          zIndex: 9999,
          width: `${dragSize.value.width}px`,
          height: `${dragSize.value.height}px`,
          left: `${dragPosition.value.x}px`,
          top: `${dragPosition.value.y}px`,
          transform: 'translate(-50%, -50%) rotate(3deg)',
          opacity: 0.8,
          pointerEvents: 'none',
        };
      }
      return {};
    };

    return {
      internalList,
      isDragging,
      dragIndex,
      updateValue,
      dragStart,
      dragEnd,
      getDragStyle,
    };
  },
};
</script>

<style scoped>
.group-preference {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
}

.item {
  background: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-bottom: 14px;
  height: 81px;
  touch-action: none;
  cursor: move;
}

.item:hover {
  border-color: #9ea41f;
  box-shadow: 0 1px 8px rgba(33, 150, 243, 0.3);
}

.item-content {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 100%;
  gap: 22px;
}

.drag-indicator {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 4px;
}

.dot {
  width: 4px;
  height: 4px;
  background-color: #43473e;
  border-radius: 50%;
}

.item:hover .dot {
  background-color: #9ea41f;
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
  background: #e3f2fd;
  border: 2px dashed #9ea41f;
}

.chosen {
  background: #e3f2fd;
  border-color: #9ea41f;
  box-shadow: 0 0 10px rgba(158, 164, 31, 0.3);
}

.dragging {
  z-index: 9999;
}

@media (max-width: 576px) {
  .item {
    height: 79px;
    margin-bottom: 13px;
  }
  
  .item-content span {
    font-size: 14px;
  }
}
</style>