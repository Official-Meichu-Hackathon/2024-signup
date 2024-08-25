<template>
  <div class="info">
    <h1>報名黑客松</h1>
    <p>
      本大會活動與 2024 梅竹黑客松團隊尊重各企業、市府單位與參賽組別及個人之間的合作協議，一切內容與主辦單位無涉，請參賽者自行留意，謝謝。
    </p>
    <div class="group-selector">
      <button
        ref="group1"
        class="group1 selected"
        @click="
          handleClick(1);
          $emit('group-selected', 1);
        "
      >
        黑客組
      </button>
      <button
        ref="group2"
        class="group2"
        @click="
          handleClick(2);
          $emit('group-selected', 2);
        "
      >
        創客交流組
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const group1 = ref(null);
    const group2 = ref(null);

    const handleClick = (selected) => {
      if (selected === 1) {
        group1.value.classList.add("selected");
        group2.value.classList.remove("selected");
      } else {
        group2.value.classList.add("selected");
        group1.value.classList.remove("selected");
      }
    };
    return {
      handleClick,
      group1,
      group2,
    };
  },
};
</script>

<style scoped>
.group-selector .selected {
  background: #dbe022;
}

.info {
  display: flex;
  position: fixed;
  width: 657px;
  flex-direction: column;
  margin-top: 250px;
  align-items: center;
  gap: 2px;
}

.info h1 {
  color: #43473e;
  text-align: center;
  font-family: "Mantou Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4px;
}

.info p {
  width: 497px;
  color: #666;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.group-selector {
  margin-top: 44px;
  display: flex;
}

.group1 {
  padding: 10px 0 10px 0;
  width: 151px;
  border-radius: 100px 0px 0px 100px;
  border: 1.6px solid #000;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  border-right-width: 0;
}

.group2 {
  padding: 10px 0 10px 0;
  width: 151px;
  border-radius: 0px 100px 100px 0px;
  border: 1.6px solid #79747e;
  color: #1d192b;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
}

@media (max-width: 768px) {
  .info {
    position: static;
    width: 100%;
    margin-top: 165px;
    padding: 0 20px;
  }

  .info h1 {
    font-size: 32px;
  }

  .info p {
    width: 100%;
    font-size: 16px;
  }

  .group-selector {
    width: 100%;
    justify-content: center;
  }

  .group1,
  .group2 {
    width: 40%;
  }
}
</style>
