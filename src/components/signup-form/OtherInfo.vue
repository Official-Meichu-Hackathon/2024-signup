<template>
  <div class="other-info">
    <div class="text">清寒證明</div>
    <div class="filled-form">
      <form ref="Form">
        <div
          class="upload-container"
          :class="{ dragging: isDragging, success: uploadSuccess }"
          @dragover.prevent="onDragOver"
          @dragleave="onDragLeave"
          @drop.prevent="onDrop"
        >
          <div>
            <label for="file-input" class="upload-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </label>
            <div class="upload-text">
              Drag or
              <label for="file-input" class="choose-files">choose files</label>
              to upload
            </div>
            <input
              type="file"
              name="file"
              id="file-input"
              ref="fileInput"
              accept=".pdf, .png, .jpg, .svg, .doc, .docx, .jpeg"
              @change="onFileChange"
              multiple
            />
          </div>
        </div>
        <div class="fullWorkshopAttendance">
          <label style="color: #666666">*是否全程參加工作坊</label>
          <div class="fullWorkshopAttendance-option">
            <div v-for="option in ['是', '否']" :key="option" class="radio">
              <input
                type="radio"
                :id="option"
                v-model="fullWorkshopAttendance"
                :value="option"
                name="fullWorkshopAttendance"
                required
              />
              <label :for="option">{{ option === "是" ? "是" : "否" }}</label>
            </div>
          </div>
        </div>
        <div class="fullParticipationOpeningClosing">
          <label style="color: #666666">*是否全程參與開幕、閉幕</label>
          <div class="fullParticipationOpeningClosing-option">
            <div v-for="option in ['是', '否']" :key="option" class="radio">
              <input
                type="radio"
                :id="option"
                v-model="fullParticipationOpeningClosing"
                :value="option"
                name="fullParticipationOpeningClosing"
                required
              />
              <label :for="option">{{ option === "是" ? "是" : "否" }}</label>
            </div>
          </div>
        </div>
        <NextStepButton @validate="validate"></NextStepButton>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { watch } from "vue";
import NextStepButton from "./NextStepButton.vue";
import validateForm from "@/composables/validateForm";
export default {
  props: {
    isFilled: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    NextStepButton,
  },
  emits: ["otherinfo", "success"],
  setup(props, { emit }) {
    const fileInput = ref(null);
    const isDragging = ref(false);
    const uploadSuccess = ref(false);
    const fullWorkshopAttendance = ref("");
    const fullParticipationOpeningClosing = ref("");
    const Form = ref(null);
    const FileData = reactive({
      files: [],
    });
    const formDataToSend = reactive([]);

    watch(uploadSuccess, (newValue) => {
      console.log("uploadSuccess changed:", newValue);
    });
    watch(
      () => props.isFilled,
      (newVal) => {
        if (newVal) {
          if (validate()) {
            emit("success", true);
          } else {
            emit("success", false);
          }
        }
      }
    );
    const validate = () => {
      console.log("validate other info");
      const formData = validateForm(Form);
      if (formData) {
        formData.file = formDataToSend;
        emit("otherinfo", formData);
        return true;
      } else {
        return false;
      }
    };

    const onDragOver = (event) => {
      event.preventDefault();
      isDragging.value = true;
    };

    const onDragLeave = (event) => {
      event.preventDefault();
      isDragging.value = false;
    };

    const onDrop = (event) => {
      event.preventDefault();
      isDragging.value = false;
      const files = event.dataTransfer.files;
    };

    const onFileChange = (event) => {
      FileData.files = Array.from(event.target.files);
      formDataToSend.length = 0;
      FileData.files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          formDataToSend.push({
            file_name: file.name,
            type: file.type,
            data: e.target.result.split(",")[1],
          });
        };
        reader.readAsDataURL(file);
      });
      uploadSuccess.value = true;
    };

    return {
      fileInput,
      isDragging,
      uploadSuccess,
      onDragOver,
      onDragLeave,
      onDrop,
      onFileChange,
      fullWorkshopAttendance,
      fullParticipationOpeningClosing,
      validate,
      Form,
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.other-info {
  padding: 0 24px;
}
.text {
  color: #666;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 24px;
}
.upload-container {
  height: 155px;
  border: 1px solid rgba(0, 0, 0, 0.27);
  background: rgba(177, 177, 177, 0);
  padding: 20px;
  text-align: center;
  transition: border-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.upload-container.dragging,
.success {
  border: 3px solid #9ea41f;
  background: rgba(216, 224, 34, 0.45);
}

.upload-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; /* 確保內容佔滿整個容器高度 */
}

.upload-icon {
  cursor: pointer;
  margin-bottom: 10px;
  color: #bfbfbf; /* 使用與 choose files 相同的顏色 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.upload-icon:hover {
  color: #9ea41f;
  opacity: 0.8;
}

.upload-text {
  color: #000;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
}

.choose-files {
  color: #9ea41f;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
}

#file-input {
  display: none;
}

.fullParticipationOpeningClosing-option,
.fullWorkshopAttendance-option {
  display: flex;
  flex-direction: row;
  margin-left: 8px;
}
.fullParticipationOpeningClosing-option input,
.fullWorkshopAttendance-option input {
  width: 16px;
  color: #111111;
}
.fullParticipationOpeningClosing,
.fullWorkshopAttendance {
  color: #666;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.fullParticipationOpeningClosing-option div,
.fullWorkshopAttendance-option div {
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-right: 48px;
  color: #111;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.fullWorkshopAttendance,
.fullParticipationOpeningClosing {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.radio label {
  color: black;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
