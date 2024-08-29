<template>
  <div class="basic-info">
    <div class="filled-form">
      <form ref="Form">
        <div class="name">
          <label for="name" style="color: #666666">*姓名</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="sex">
          <label style="color: #666666">*生理性別</label>
          <div class="sex-option">
            <div v-for="option in ['女性', '男性']" :key="option">
              <input type="radio" :id="option" name="sex" :value="option" required />
              <label :for="option">{{ option === "女性" ? "女性" : "男性" }}</label>
            </div>
          </div>
        </div>
        <div class="birth">
          <label for="birth" style="color: #666666">*生日 （e.g. 20040101）</label>
          <input type="date" id="birth" name="birth" required />
        </div>
        <div class="ID">
          <label for="ID" style="color: #666666">*身分證字號</label>
          <input type="text" id="ID" name="ID" required />
        </div>
        <div class="identity">
          <label style="color: #666666">*身份</label>
          <div class="identity-option">
            <div v-for="option in ['學生', '社會人士']" :key="option">
              <input type="radio" :id="option" name="identity" :value="option" required />
              <label :for="option">{{ option === "學生" ? "學生" : "社會人士" }}</label>
            </div>
          </div>
        </div>
        <div class="school">
          <label for="school" style="color: #666666"
            >*就讀學校（填寫全名 e.g. 國立陽明交通大學），社會人士可填無</label
          >
          <input type="text" id="school" name="school" required />
        </div>
        <div class="major">
          <label for="major" style="color: #666666"
            >*科系（填寫全名 e.g. 資訊工程學系），社會人士可填無</label
          >
          <input type="text" id="major" name="major" required />
        </div>
        <div class="grade">
          <label for="grade" style="color: #666666">*年級，社會人士可填無</label>
          <input type="text" id="grade" name="grade" required />
        </div>
        <div class="occupation">
          <label for="occupation" style="color: #666666">*職業，學生可填無</label>
          <input type="text" id="occupation" name="occupation" required />
        </div>
        <div class="email">
          <label for="email" style="color: #666666">*電子郵件信箱</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="phone">
          <label for="phone" style="color: #666666">*手機號碼</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div class="dietary">
          <label for="dietary" style="color: #666666">特殊飲食習慣</label>
          <input type="text" id="dietary" name="dietary" />
        </div>
        <div class="size">
          <label style="color: #666666">*衣服尺寸</label>
          <img src="/size.jpg" alt="">
          <div class="size-option">
            <div
              v-for="option in ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL']"
              :key="option"
            >
              <input type="radio" :id="option" name="size" :value="option" required />
              <label :for="option">{{ option }}</label>
            </div>
          </div>
        </div>
        <NextStepButton @validate="validate"></NextStepButton>
      </form>
    </div>
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
  },
  components: {
    NextStepButton,
  },
  emits: ["basicInfo", "success"],
  setup(props, { emit }) {
    const Form = ref(null);
    const validate = () => {
      const formData = validateForm(Form);
      if (formData) {
        emit("basicInfo", formData);
        return true;
      } else {
        return false;
      }
    };
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
    return {
      Form,
      validate,
    };
  },
};
</script>

<style scoped>
.basic-info {
  padding: 0 24px;
}

.text {
  color: #666;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.name,
.birth,
.ID,
.school,
.major,
.grade,
.occupation,
.email,
.phone,
.dietary {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.birth input {
  padding-right: 10px;
}

.sex label,
.identity label,
.size label,
.name label,
.birth label,
.ID label,
.school label,
.major label,
.grade label,
.occupation label,
.email label,
.phone label,
.dietary label {
  color: #666666;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.name input,
.birth input,
.ID input,
.school input,
.major input,
.grade input,
.occupation input,
.email input,
.phone input,
.dietary input {
  border-radius: 12px;
  border: 1px solid rgba(102, 102, 102, 0.35);
  height: 56px;
  align-self: stretch;
  padding-left: 10px;
}

.sex-option,
.identity-option {
  display: flex;
  flex-direction: row;
  margin-left: 8px;
}

.size-option {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 8px;
  gap: 28px;
}

.sex-option input,
.identity-option input,
.size-option input {
  width: 16px;
  color: #111111;
}

.sex-option div,
.identity-option div {
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

.size-option div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  color: #111;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.sex,
.identity,
.size {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>