<template>
  <div class="filled-form">
    <form ref="Form">
      <div class="team-name">
        <label for="teamName" style="color: #666666">*隊伍名稱（上限20字）</label>
        <input
          maxlength="20"
          type="text"
          name="teamName"
          id="teamName"
          v-model="localTeamName"
          required
        />
      </div>
      <div class="team-size">
        <label style="color: #666666">*隊伍人數</label>
        <div class="description">
            <p>創客交流組為 3 ~ 4 人一組</p>
            <p>若五人成隊者，其填入之創客交流組志願序將直接視為無效，謝謝配合</p>
        </div>
        <div class="size-option">
          <div v-for="size in [3, 4, 5]" :key="size" class="radio">
            <input
              type="radio"
              :id="`size-${size}`"
              v-model="localTeamSize"
              :value="size"
              name="teamSize"
              required
            />
            <label class="radio" :for="`size-${size}`">{{ size }}人</label>
          </div>
        </div>
      </div>
      <div class="cross-group">
        <label style="color: #666666">*跨域組隊</label>
        <div class="description">
          <p>註：符合以下任一條件，全隊報名費可減免 100 元</p>
          <p>報名隊伍內有三個（含）以上不同科系</p>
          <p>
            組內含高中職、大專院校生或碩博生、社會人士兩種（含）以上身份別之參賽者（限創客交流組
          </p>
        </div>
        <div class="cross-option">
          <div v-for="option in ['是', '否']" :key="option" class="radio">
            <input
              type="radio"
              :id="option"
              :value="option"
              v-model="localCrossGroup"
              name="crossGroup"
              required
            />
            <label class="radio" :for="option">{{ option === "是" ? "是" : "否" }}</label>
          </div>
        </div>
      </div>
      <div class="group-preference" v-if="group ==='黑客組'">
        <label style="color: #666666">組別或企業志願序</label>
        <div class="description">
          <p>
            註：企業題目或組別將依據隊伍的志願序分發。若單一企業或組別超額，將亂數抽籤決定
          </p>
          <p>未報名創客交流組則將創客交流組的志願序填為 7。若未選擇，將隨機分配。</p>
        </div>
        <div class="preference">
          <div class="text">
            <p v-for="n in 7" :key="n">志願序{{ n }}</p>
          </div>
          <div class="preference-item">
            <GroupPreference
              v-model="localPreference"
              @update:modelValue="updatePreference"
            ></GroupPreference>
          </div>
        </div>
      </div>
      <NextStepButton @validate="validate"></NextStepButton>
    </form>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import GroupPreference from "./GroupPreference.vue";
import NextStepButton from "./NextStepButton.vue";
import validateForm from "@/composables/validateForm";

export default {
  components: {
    GroupPreference,
    NextStepButton,
  },
  props: {
    teamName: String,
    teamSize: Number,
    crossGroup: String,
    preference: Array,
    isFilled: {
      type: Boolean,
      default: false,
    },
    group: {
        type: String,
        default: '黑客組',
    }
  },
  emits: [
    "update:teamName",
    "update:teamSize",
    "update:crossGroup",
    "update:preference",
    "signupOption",
    "success",
  ],
  setup(props, { emit }) {
    const localTeamName = ref(props.teamName);
    const localTeamSize = ref(props.teamSize);
    const localCrossGroup = ref(props.crossGroup);
    const localPreference = ref(props.preference);
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
    watch(
      () => props.teamName,
      (newVal) => {
        localTeamName.value = newVal;
      }
    );
    watch(
      () => props.teamSize,
      (newVal) => {
        localTeamSize.value = newVal;
      }
    );
    watch(
      () => props.crossGroup,
      (newVal) => {
        localCrossGroup.value = newVal;
      }
    );
    watch(
      () => props.preference,
      (newVal) => {
        localPreference.value = newVal;
      }
    );

    watch(localTeamName, (newVal) => {
      emit("update:teamName", newVal);
    });
    watch(localTeamSize, (newVal) => {
      emit("update:teamSize", newVal);
    });
    watch(localCrossGroup, (newVal) => {
      emit("update:crossGroup", newVal);
    });

    const updatePreference = (newValue) => {
      localPreference.value = newValue;
      emit("update:preference", newValue);
    };

    const Form = ref(null);
    const validate = () => {
      const formData = validateForm(Form);
      if (formData) {
        formData["preference"] = localPreference.value;
        formData["teamName"] = localTeamName.value;
        formData["teamSize"] = localTeamSize.value;
        formData["crossGroup"] = localCrossGroup.value;
        if (formData) {
          emit("signupOption", formData);
          emit("success", true);
          return true;
        } else {
          return false;
        }
      }
    };

    const group = ref(props.group);
    watch(
      () => props.group,
      (newVal, oldVal) => {
        if (newVal) {
            group.value = newVal;
        }
        if(newVal === '黑客組' && oldVal === '創客交流組'){
            localPreference.value = props.preference;
        }else if( newVal === '創客交流組' && oldVal === '黑客組'){
            localPreference.value = [];
        }
      }
    );

    return {
      localTeamName,
      localTeamSize,
      localCrossGroup,
      localPreference,
      updatePreference,
      Form,
      validate,
      group,
    };
  },
};
</script>

<style scoped>
.filled-form {
  padding: 0 30px;
}
.team-name,
.team-size,
.cross-group,
.group-preference {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 24px;
  color: #666;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.group-preference {
  margin-bottom: 0;
}

.radio label {
  font-weight: 400;
}

.team-name input {
  border-radius: 12px;
  border: 1px solid rgba(102, 102, 102, 0.35);
  height: 56px;
  align-self: stretch;
  padding-left: 10px;
}
.size-option,
.cross-option {
  display: flex;
  flex-direction: row;
  margin-left: 8px;
}
.size-option div,
.cross-option div {
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
.size-option input,
.cross-option input {
  width: 16px;
  color: #111111;
}
.description {
  padding: 6px 0;
}
.description p {
  color: #666;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.preference {
  display: flex;
  flex-direction: row;
  gap: 12px;
}
.text {
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 72px;
}
.text p {
  color: #43473e;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  padding: 0 19px;
  white-space: nowrap;
}
.text p:last-child {
  margin-bottom: 0;
}
.preference-item {
  width: 100%;
}
@media (max-width: 576px) {
    .size-option div{
        white-space: nowrap;
    }
    label {
        font-size: 7px;
    }
    .description p{
        font-size: 7px;
    }
    .radio {
        font-size: 8px;
    }

}
</style>
