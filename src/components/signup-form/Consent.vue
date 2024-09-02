<template>
  <div class="consent">
    <form ref="Form">
      <div class="text">智慧財產權聲明暨授權同意書</div>
      <p class="text">
        本人代表參賽隊伍之團隊成員同意並擔保下列事項： <br /><br />
        一、同意主辦方、合作企業、贊助企業、政府單位及其他協辦單位於本活動進行過程中，以不妨礙活動進行為原則，拍攝、錄影或請參賽團隊提供相關照片、動態影像等，作為活動過程之紀錄，並無償授權主辦方、贊助企業及合作企業就上述所得之照片或動態影像，不限區域、時間、次數、年限及任何非營利性目的之使用（包含但不限於宣傳、行銷本活動或未來相關活動等）。<br /><br />
        二、參賽者如有抄襲仿冒之情事，經評審團決議認定或由相關權利人檢舉並證實確有該等情事後，梅竹黑客松團隊（以下稱主辦單位）得取消其參賽或得獎資格，並由參賽者自行承擔相關法律責任。<br /><br />
        三、團隊參賽作品（包含但不限於參賽過程提供之提案、相關圖文、簡報、照片、影音及其他資料）無侵害任何第三者之智慧財產權或違反其他權利及法令之情事。<br />
      </p>
      <p class="text indent">
        （一）參賽作品或其衍生說明文件簡報若有使用生成式 AI
        協助創作，請標示使用段落及說明使用方法，若有衍生相關著作權問題，一切法律責任由參賽者自行承擔，主辦單位概不負責。<br />
      </p>
      <p class="text indent">
        （二）參賽作品若有使用他人之文案、文稿或肖像，並涉及相關著作財產權時，須自行取得著作財產權授權同意等證明文件。若有牴觸任何相關著作權之法律，主辦單位得立即移除相關內容並取消參加資格與得獎資格，參賽者並應自行承擔相關法律責任，與本活動主辦單位無涉。
      </p>
      <p class="text">
        四、本人同意不得運用參與本活動所產出的作品於其他類似競賽。<br /><br />
        五、所有參賽作品及參賽者提交之說明簡報，主辦單為於本活動辦理期間得公開展示、公開傳輸及為符合本活動目的之使用。<br /><br />
        六、本人同意將參與本活動所產出之作品及相關圖文、簡報、照片、影音，經合作洽談後，有償或無償授權於主辦方與合作企業，不限區域、時間、次數、年限及任何非營利性目的之使用（包含但不限於宣傳、報導、印刷、編輯及改作等），並同意作品應用於合作企業之內部需求。參賽隊伍得與其參賽之個別合作企業商談合作細節，協議內容盡數與主辦單位無涉。<br /><br />
        七、本人同意主辦方及合作企業得不另予通知團隊，行使重製、改作、編輯、公開展示、公開發表等著作權法上著作財產權人所享有之權利於社群媒體，並保證不對主辦方及合作企業行使著作人格權。<br /><br />
        八、所有參賽人員基於誠信原則，對主辦單位、協辦單位及其他企業及廠商所提供之重要資料負有保密之責。<br />
      </p>
      <div class="read">
        <label style="color: #666666">*本人已充分知上述告知事項，保證已通知所有其餘團隊成員，並且經團隊全體同意。</label>
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
      <NextStepButton
        @validate="validate"
        :watingForUpload="watingForUpload"
        content="送出"
      ></NextStepButton>
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
    },
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
        emit("success", true);
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
.indent {
    padding-left: 2em;
}
@media (max-width: 576px) {
    .text {
        font-size: 12px;
    }
}
</style>
