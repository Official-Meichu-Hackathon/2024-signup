import { mount } from "@vue/test-utils";
import Title from "@/components/home/Title.vue";
import VueCountdown from "@chenfengyuan/vue-countdown";

describe("Title", () => {
  test("renders correctly", () => {
    const wrapper = mount(Title, {
      global: {
        components: {
          VueCountdown,
        },
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('[data-testid="title-font1"]').text()).toBe("梅");
    expect(wrapper.find('[data-testid="title-font2"]').text()).toBe("竹");
    expect(wrapper.find('[data-testid="title-font3"]').text()).toBe("黑");
    expect(wrapper.find('[data-testid="title-font4"]').text()).toBe("客");
    expect(wrapper.find('[data-testid="title-font5"]').text()).toBe("松");
  });

  test("renders countdown component", () => {
    const wrapper = mount(Title, {
      global: {
        components: {
          VueCountdown,
        },
      },
    });

    expect(wrapper.findComponent(VueCountdown).exists()).toBe(true);
  });

  test("renders SVG elements correctly", () => {
    const wrapper = mount(Title);

    expect(wrapper.find('object[data="/home/icon-gr14.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-co02.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-co25.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-co26.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-co27.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-gr52-1.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-gr52-2.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-ve16.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-ve17.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-ve19.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-ve20.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-ve21.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-ve26.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-co03.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-co06.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-co07.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-co10.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-mo01.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-mo02.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-mo04.svg"]').exists()).toBe(
      true
    );
  });

  test("displays the correct countdown labels", () => {
    const wrapper = mount(Title, {
      global: {
        components: {
          VueCountdown,
        },
      },
    });

    expect(wrapper.find('[data-testid="countdown-label"]').text()).toContain(
      "距離活動開始還有"
    );
    expect(wrapper.find('[data-testid="days-label"]').text()).toBe("Days");
    expect(wrapper.find('[data-testid="hours-label"]').text()).toBe("Hours");
    expect(wrapper.find('[data-testid="minutes-label"]').text()).toBe("Minutes");
    expect(wrapper.find('[data-testid="seconds-label"]').text()).toBe(
      "Seconds"
    );
  });
});
