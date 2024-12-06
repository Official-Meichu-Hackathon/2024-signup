<template>
  <div class="form">
    <div class="group-selector-container">
      <GroupSelector @group-selected="handleSelected"></GroupSelector>
    </div>
    <div class="content-container">
      <div class="content">
        <ProgressBar :currentStep="currentStep" :teamSize="teamSize"></ProgressBar>
        <!--報名選項 -->
        <div class="empty" v-show="!signupSuccess">
          <div class="card" :id="1">
            <div
              class="title"
              :class="{ 'become-dark': 1 <= completedStep }"
              @click="handleClick(1)"
            >
              <Dot
                :size="24"
                :number="1"
                :fontSize="12"
                :color="currentStep === 1 ? '#43473e' : '#bfbfbf'"
              ></Dot>
              <h2>報名選項</h2>
            </div>
            <div v-show="currentStep === 1">
              <SignupOption
                @signupOption="handleData_signupOption"
                @success="(data) => GoToNextStep(data)"
                :isFilled="isFilled[1]"
                v-model:teamName="teamName"
                v-model:teamSize="teamSize"
                v-model:crossGroup="crossGroup"
                v-model:preference="preference"
                :group="group"
              ></SignupOption>
            </div>
          </div>
          <!--參賽者資料-->
          <div class="card" v-for="number in teamSize" :key="number" :id="number + 1">
            <div
              class="title"
              :class="{ 'become-dark': number + 1 <= completedStep }"
              @click="handleClick(number + 1)"
            >
              <Dot
                :size="24"
                :number="number + 1"
                :fontSize="12"
                :color="currentStep === number + 1 ? '#43473e' : '#bfbfbf'"
              ></Dot>
              <h2>參賽者{{ getChineseNumber(number) }} 基本資料</h2>
            </div>
            <div v-show="currentStep === number + 1">
              <BasicInfo
                @basicInfo="(data) => handleData_basicInfo(data, number - 1)"
                @success="(data) => GoToNextStep(data)"
                :isFilled="isFilled[number + 1]"
              ></BasicInfo>
            </div>
          </div>
          <!-- 其他 -->
          <div class="card" :id="teamSize + 2">
            <div
              class="title"
              :class="{ 'become-dark': teamSize + 2 <= completedStep }"
              @click="handleClick(teamSize + 2)"
            >
              <Dot
                :size="24"
                :number="teamSize + 2"
                :fontSize="12"
                :color="currentStep === teamSize + 2 ? '#43473e' : '#bfbfbf'"
              ></Dot>
              <h2>其他</h2>
            </div>
            <div v-show="currentStep === teamSize + 2">
              <OtherInfo
                @otherinfo="handleData_otherInfo"
                @success="(data) => GoToNextStep(data)"
                :isFilled="isFilled[teamSize + 2]"
                :group="group"
              ></OtherInfo>
            </div>
          </div>
          <!--同意書-->
          <div class="card" :id="teamSize + 3">
            <div
              class="title"
              :class="{ 'become-dark': teamSize + 3 <= completedStep }"
              @click="handleClick(teamSize + 3)"
            >
              <Dot
                :size="24"
                :number="teamSize + 3"
                :fontSize="12"
                :color="currentStep === teamSize + 3 ? '#43473e' : '#bfbfbf'"
              ></Dot>
              <h2>填寫同意書</h2>
            </div>
            <div v-show="currentStep === teamSize + 3">
              <Consent
                @submit="submit"
                :isFilled="isFilled[teamSize + 3]"
                @success="(data) => GoToNextStep(data)"
                :watingForUpload="watingForUpload"
              ></Consent>
            </div>
          </div>
        </div>
        <div class="signupSuccess" v-show="signupSuccess">
          <div class="monster"><Monster></Monster></div>
        </div>
      </div>
    </div>
    <div class="overlay" v-if="watingForUpload">
      <div class="spinner"></div>
      <p>正在上傳，請勿關閉瀏覽器！</p>
    </div>
  </div>
</template>

<script>
import Dot from "@/components/signup-form/Dot.vue";
import SignupOption from "@/components/signup-form/SignupOption.vue";
import BasicInfo from "@/components/signup-form/BasicInfo.vue";
import OtherInfo from "@/components/signup-form/OtherInfo.vue";
import Consent from "@/components/signup-form/Consent.vue";
import ProgressBar from "@/components/signup-form/ProgressBar.vue";
import GroupSelector from "@/components/signup-form/GroupSelector.vue";
import Monster from "@/components/signup-form/Monster.vue";
import { ref, reactive, watch, nextTick } from "vue";
import { current } from "tailwindcss/colors";

export default {
  components: {
    Dot,
    SignupOption,
    BasicInfo,
    OtherInfo,
    Consent,
    ProgressBar,
    GroupSelector,
    Monster,
  },
  setup() {
    const group = ref("黑客組");
    const teamName = ref("");
    const teamSize = ref(3);
    const crossGroup = ref("");
    const preference = ref([
      { id: 1, name: "恩智浦半導體" },
      { id: 2, name: "LINE台灣" },
      { id: 3, name: "Google" },
      { id: 4, name: "台積電" },
      { id: 5, name: "羅技" },
      { id: 6, name: "中華電信" },
      { id: 7, name: "創客交流組" },
    ]);

    const signupDataList = reactive([]);
    const initSignupDataList = () => {
      signupDataList.length = 0;
      for (let i = 0; i < teamSize.value; i++) {
        signupDataList.push({
          teamName: "",
          group: 1,
          teamSize: teamSize.value,
          crossGroup: "",
          preference: [],
          name: "",
          sex: "",
          birth: "",
          ID: "",
          identity: "",
          school: "",
          major: "",
          grade: "",
          occupation: "",
          email: "",
          phone: "",
          dietary: "",
          size: "",
          certificate: null,
          fullWorkshopAttendance: "",
          fullParticipationOpeningClosing: "",
        });
      }
    };
    watch(teamSize, (newSize) => {
      initSignupDataList();
    });
    initSignupDataList();

    const getChineseNumber = (number) => {
      const chineseNumbers = ["一", "二", "三", "四", "五"];
      return chineseNumbers[number - 1] || number;
    };

    const isFilled = ref([...Array(9).fill(false)]);
    const currentStep = ref(1);
    const completedStep = ref(1);
    let nextStep = 0;
    const handleClick = async (idx) => {
      if (idx <= completedStep.value) {
        nextStep = idx;
        GoToNextStep(true);
        completedStep.value = idx;
        /*
        await nextTick();
        isFilled.value[currentStep.value] = true;
        */
      }
    };
    const GoToNextStep = (isSuccess) => {
      if (isSuccess == true) {
        if (nextStep > completedStep.value) {
          completedStep.value = nextStep;
        }
        if (nextStep != 0) {
          currentStep.value = nextStep;
          nextStep = 0;
        }
        nextTick(() => {
          const element = document.getElementById(currentStep.value);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      }
      isFilled.value[currentStep.value] = false;
    };

    const handleData_basicInfo = (data, index) => {
      Object.assign(signupDataList[index], {
        name: data.name,
        sex: data.sex,
        birth: data.birth,
        ID: data.ID,
        identity: data.identity,
        school: data.school,
        major: data.major,
        grade: data.grade,
        occupation: data.occupation,
        email: data.email,
        phone: data.phone,
        dietary: data.dietary,
        size: data.size,
      });
      if (data && currentStep.value < completedStep.value) {
        currentStep.value = currentStep.value + 1;
      } else if (data && currentStep.value === completedStep.value) {
        currentStep.value = currentStep.value + 1;
        completedStep.value = currentStep.value;
      }
    };
    const handleData_signupOption = (data) => {
      const preferenceString = data.preference
        .map((pref, index) => `${index + 1}.${pref.name}`)
        .join("\n");
      signupDataList.forEach((signupData) => {
        Object.assign(signupData, {
          teamName: data.teamName,
          group: group.value,
          teamSize: data.teamSize,
          crossGroup: data.crossGroup,
          preference: preferenceString,
        });
      });
      if (data && currentStep.value < completedStep.value) {
        currentStep.value = currentStep.value + 1;
      } else if (data && currentStep.value === completedStep.value) {
        currentStep.value = currentStep.value + 1;
        completedStep.value = currentStep.value;
      }
    };
    const handleData_otherInfo = (data) => {
      signupDataList.forEach((signupData) => {
        Object.assign(signupData, {
          certificate: data.file1,
          fullWorkshopAttendance: data.fullWorkshopAttendance,
          fullParticipationOpeningClosing: data.fullParticipationOpeningClosing,
        });
      });
      if (data && currentStep.value < completedStep.value) {
        currentStep.value = currentStep.value + 1;
      } else if (data && currentStep.value === completedStep.value) {
        currentStep.value = currentStep.value + 1;
        completedStep.value = currentStep.value;
      }
    };

    const handleSelected = (selected) => {
      for (let i = 0; i < signupDataList.length; i++) {
        signupDataList[i].group = selected;
      }
      group.value = selected;
    };

    const signupSuccess = ref(false);
    const watingForUpload = ref(false);
    const submit = async () => {
      watingForUpload.value = true;
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbyKSViKhu2L_nUducekh7BLVnc5ZTYnHWDhmP_LQbv43r4w08xq7JJNKVPxxCcWPcse/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "text/plain",
            },
            body: JSON.stringify(signupDataList),
            redirect: "follow",
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      watingForUpload.value = false;
      signupSuccess.value = true;
    };

    return {
      teamName,
      teamSize,
      crossGroup,
      preference,
      getChineseNumber,
      group,
      handleSelected,
      handleData_basicInfo,
      handleData_signupOption,
      handleData_otherInfo,
      handleClick,
      isFilled: isFilled.value,
      GoToNextStep,
      currentStep,
      completedStep,
      submit,
      signupSuccess,
      watingForUpload,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.form {
  display: flex;
  flex-direction: row;
  background: #f5f5f5;
  min-height: 100vh;
}

.group-selector-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 50%;
  height: 100vh;
  overflow-y: auto;
}

.content-container {
  width: 50%;
  margin-left: 50%;
  min-height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.content-container::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}

.content {
  padding: 113px 61px 0;
}

.card {
  border-radius: 24px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

.title {
  padding: 30px 24px;
  display: flex;
  flex-direction: row;
  gap: 12px;
}

.title:hover {
  cursor: pointer;
}

.title h2 {
  color: #bfbfbf;
  text-align: center;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: color 0.2s ease;
}

.become-dark h2 {
  color: #43473e;
}

@media (max-width: 576px) {
  .title h2 {
    font-size: 22px;
  }

  .form {
    flex-direction: column;
  }

  .group-selector-container {
    position: static;
    width: 100%;
    height: auto;
  }

  .content-container {
    width: 100%;
    margin-left: 0;
    min-height: auto;
  }

  .content {
    padding: 20px;
  }
}

.monster {
  margin-top: 50%;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #dbe022;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.overlay p {
  color: white;
  margin-top: 20px;
  font-size: 18px;
}
</style>
