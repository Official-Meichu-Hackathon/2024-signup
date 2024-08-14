<template>
  <div class="consent">
    <form ref="Form">
      <div class="text">個人資料搜集、處理及利用之告知暨同意書</div>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut.
      </p>
      <div class="read">
        <label style="color: #666666">*我已詳細閱讀，並同意以上內容</label>
        <div class="read-option">
          <div v-for="option in ['yes']" :key="option" class="radio">
            <input
              type="radio"
              :id="option"
              v-model="read1"
              name="read1"
              value="yes"
              required
            />
            <label :for="option">是</label>
          </div>
        </div>
      </div>
      <div class="text">智慧財產權聲明暨授權同意書</div>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut.
      </p>
      <div class="read">
        <label style="color: #666666">*我已詳細閱讀，並同意以上內容</label>
        <div class="read-option">
          <div v-for="option in ['yes']" :key="option" class="radio">
            <input
              type="radio"
              :id="option"
              v-model="read2"
              name="read2"
              value="yes"
              required
            />
            <label :for="option">是</label>
          </div>
        </div>
      </div>
      <NextStepButton @validate="validate" :watingForUpload="watingForUpload" content="送出"></NextStepButton>
    </form>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import NextStepButton from "./NextStepButton.vue";
import validateForm from "@/composables/validateForm";
export default {
  props: {
    isFilled: {
      type: Boolean,
      default: false,
    },
    watingForUpload: {
        type: Boolean,
        default: false,
    }
  },
  emits: ["submit"],
  components: {
    NextStepButton,
  },
  setup(props, { emit }) {
    const read1 = ref("");
    const read2 = ref("");
    const Form = ref(null);
    watch(
      () => props.isFilled,
      (newVal) => {
        if (newVal) {
          if (justValidate()) {
            emit("success", true);
          } else {
            emit("success", false);
          }
        }
      }
    );
    const justValidate = () => {
      const formData = validateForm(Form);
      if (formData) {
        return true;
      } else return false;
    };
    const validate = () => {
      const formData = validateForm(Form);
      if (formData) {
        emit("submit");
      }
    };

    return { read1, read2, Form, validate };
  },
};
</script>

<style scoped>
.consent {
  padding: 0 24px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 19px;
}
.text {
  color: #666;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
.read-option {
  display: flex;
  flex-direction: row;
  margin-left: 8px;
}
.read-option input {
  width: 16px;
  color: #111111;
}
.read-option div {
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
.read {
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: #666;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
