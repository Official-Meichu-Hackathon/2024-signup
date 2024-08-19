import { mount } from "@vue/test-utils";
import Introduction from "@/components/home/Introduction.vue";

describe("Introduction", () => {
  test("renders correctly", () => {
    const wrapper = mount(Introduction);

    expect(wrapper.exists()).toBe(true);
  });

  test("renders SVG elements correctly", () => {
    const wrapper = mount(Introduction);

    expect(wrapper.find('[data-testid="icon-gr52-1"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="icon-gr52-2"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="icon-ve47"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="icon-ve48"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="icon-ve71"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="icon-co09"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="icon-mo07"]').exists()).toBe(true);
  });

  test("displays the correct title text", () => {
    const wrapper = mount(Introduction);

    const titleText = wrapper.find('[data-testid="title-text"]').text();

    expect(titleText).toBe("組別介紹 & 工作坊");
  });

  test("renders group sections correctly", () => {
    const wrapper = mount(Introduction);

    expect(wrapper.find('[data-testid="group-hackers"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="group-creators"]').exists()).toBe(true);
  });

  test("displays the correct description text for hackers group", () => {
    const wrapper = mount(Introduction);

    const descriptionHackers = wrapper
      .find('[data-testid="description-hackers"]')
      .text();

    expect(descriptionHackers).toContain("我們致力於搭起學界與業界之間的橋樑");
    expect(descriptionHackers).toContain(
      "恩智浦半導體與文曄科技、LINE台灣、Google、台積電、羅技、中華電信"
    );
  });

  test("displays the correct description text for creators group", () => {
    const wrapper = mount(Introduction);

    const descriptionCreators = wrapper
      .find('[data-testid="description-creators"]')
      .text();

    expect(descriptionCreators).toContain(
      "由新竹市政府命題，融大新竹居民的民生交通情境，鼓勵參賽者跨領域"
    );
    expect(descriptionCreators).toContain(
      "過程中將促進各方人才創作交流，激發新穎想法並提升日常生活的用戶體驗，打造數位科技的創客精神！"
    );
  });
});
