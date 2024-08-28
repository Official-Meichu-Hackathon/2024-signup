<template>
  <div class="other-info">
    <div class="filled-form">
      <form ref="Form">
        <div v-if="group === 1">
          <div class="text">一頁式企劃書</div>
          <div
            class="upload-container"
            :class="{ dragging: isDragging2, success: uploadSuccess2 }"
            @dragover.prevent="onDragOver(2)"
            @dragleave="onDragLeave(2)"
            @drop.prevent="onDrop($event, 2)"
          >
            <div>
              <label for="file-input-2" class="upload-icon">
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
                <label for="file-input-2" class="choose-files">choose files</label>
                to upload
              </div>
              <input
                type="file"
                name="file2"
                id="file-input-2"
                ref="fileInput2"
                accept=".pdf, .png, .jpg, .svg, .doc, .docx, .jpeg"
                @change="(event) => onFileChange(event, 2)"
                multiple
              />
            </div>
          </div>
          <p class="warning">
            若貴隊伍將創客交流組志願排於前三（含），請提交一頁式企劃書
          </p>
        </div>
        <div v-else>
          <div class="text">*一頁式企劃書</div>
          <div
            class="upload-container"
            :class="{ dragging: isDragging2, success: uploadSuccess2 }"
            @dragover.prevent="onDragOver(2)"
            @dragleave="onDragLeave(2)"
            @drop.prevent="onDrop($event, 2)"
          >
            <div>
              <label for="file-input-2" class="upload-icon">
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
                <label for="file-input-2" class="choose-files">choose files</label>
                to upload
              </div>
              <input
                type="file"
                name="file2"
                id="file-input-2"
                ref="fileInput2"
                accept=".pdf, .png, .jpg, .svg, .doc, .docx, .jpeg"
                @change="(event) => onFileChange(event, 2)"
                multiple
                required
              />
            </div>
          </div>
        </div>
        <div>
          <div class="text">清寒證明</div>
          <div
            class="upload-container"
            :class="{ dragging: isDragging1, success: uploadSuccess1 }"
            @dragover.prevent="onDragOver(1)"
            @dragleave="onDragLeave(1)"
            @drop.prevent="onDrop($event, 1)"
          >
            <div>
              <label for="file-input-1" class="upload-icon">
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
                <label for="file-input-1" class="choose-files">choose files</label>
                to upload
              </div>
              <input
                type="file"
                name="file1"
                id="file-input-1"
                ref="fileInput1"
                accept=".pdf, .png, .jpg, .svg, .doc, .docx, .jpeg"
                @change="(event) => onFileChange(event, 1)"
                multiple
              />
            </div>
          </div>
        </div>

        <div class="fullWorkshopAttendance">
          <label style="color: #666666">*是否全程參加工作坊</label>
          <div class="fullWorkshopAttendance-option">
            <div v-for="option in ['是', '否']" :key="option" class="radio">
              <input
                type="radio"
                :id="'workshop-' + option"
                v-model="fullWorkshopAttendance"
                :value="option"
                name="fullWorkshopAttendance"
                required
              />
              <label :for="'workshop-' + option">{{ option }}</label>
            </div>
          </div>
        </div>
        <div class="fullParticipationOpeningClosing">
          <label style="color: #666666">*是否全程參與開幕、閉幕</label>
          <div class="fullParticipationOpeningClosing-option">
            <div v-for="option in ['是', '否']" :key="option" class="radio">
              <input
                type="radio"
                :id="'opening-closing-' + option"
                v-model="fullParticipationOpeningClosing"
                :value="option"
                name="fullParticipationOpeningClosing"
                required
              />
              <label :for="'opening-closing-' + option">{{ option }}</label>
            </div>
          </div>
        </div>
        <NextStepButton @validate="validate"></NextStepButton>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";
import NextStepButton from "./NextStepButton.vue";
import validateForm from "@/composables/validateForm";

export default {
  props: {
    isFilled: {
      type: Boolean,
      default: false,
    },
    group: {
      type: Number,
      default: 1,
    },
  },
  components: {
    NextStepButton,
  },
  emits: ["otherinfo", "success"],
  setup(props, { emit }) {
    const fileInput1 = ref(null);
    const fileInput2 = ref(null);
    const isDragging1 = ref(false);
    const isDragging2 = ref(false);
    const uploadSuccess1 = ref(false);
    const uploadSuccess2 = ref(false);
    const fullWorkshopAttendance = ref("");
    const fullParticipationOpeningClosing = ref("");
    const Form = ref(null);

    const fileData1 = reactive({ files: [] });
    const fileData2 = reactive({ files: [] });
    const formDataToSend1 = reactive([]);
    const formDataToSend2 = reactive([]);

    const group = ref(props.group);

    watch(
      () => props.group,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          group.value = newVal;
          fileData2.files = [];
          formDataToSend2.length = 0;
          uploadSuccess2.value = false;
          if (fileInput2.value) {
            fileInput2.value.value = "";
          }
        }
      }
    );

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
      const formData = validateForm(Form);
      if (formData) {
        formData.file1 = formDataToSend1;
        formData.file2 = formDataToSend2;
        console.log(formData.file2);
        emit("otherinfo", formData);
        return true;
      } else {
        return false;
      }
    };

    const onDragOver = (index) => {
      if (index === 1) {
        isDragging1.value = true;
      } else {
        isDragging2.value = true;
      }
    };

    const onDragLeave = (index) => {
      if (index === 1) {
        isDragging1.value = false;
      } else {
        isDragging2.value = false;
      }
    };

    const onDrop = (event, index) => {
      event.preventDefault();
      if (index === 1) {
        isDragging1.value = false;
      } else {
        isDragging2.value = false;
      }
      const files = event.dataTransfer.files;
      handleFiles(files, index);
    };

    const onFileChange = (event, index) => {
      const files = event.target.files;
      handleFiles(files, index);
    };

    const handleFiles = (files, index) => {
      const fileDataTarget = index === 1 ? fileData1 : fileData2;
      const formDataTarget = index === 1 ? formDataToSend1 : formDataToSend2;

      fileDataTarget.files = Array.from(files);
      formDataTarget.length = 0;

      fileDataTarget.files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          formDataTarget.push({
            file_name: file.name,
            type: file.type,
            data: e.target.result.split(",")[1],
          });
        };
        reader.readAsDataURL(file);
      });

      if (index === 1) {
        uploadSuccess1.value = true;
      } else {
        uploadSuccess2.value = true;
      }
    };

    return {
      fileInput1,
      fileInput2,
      isDragging1,
      isDragging2,
      uploadSuccess1,
      uploadSuccess2,
      onDragOver,
      onDragLeave,
      onDrop,
      onFileChange,
      fullWorkshopAttendance,
      fullParticipationOpeningClosing,
      validate,
      Form,
      group,
      fileData1,
      fileData2,
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
  margin-bottom: 10px;
}

.warning {
  color: #9ea41f;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
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
  height: 100%;
}

.upload-icon {
  cursor: pointer;
  margin-bottom: 10px;
  color: #bfbfbf;
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

#file-input-1,
#file-input-2 {
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
