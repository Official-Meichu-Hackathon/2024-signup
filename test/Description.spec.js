import { mount } from "@vue/test-utils";
import Description from "@/components/home/Description.vue";

describe("Description", () => {
  test("renders correctly", () => {
    const wrapper = mount(Description);

    expect(wrapper.exists()).toBe(true);
  });

  test("renders SVG elements correctly", () => {
    const wrapper = mount(Description);

    expect(wrapper.find('object[data="/home/icon-re29.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-re36.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-ve29.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-ve31.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-ve32.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-ve33.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-mo03.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-co08.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-co16.svg"]').exists()).toBe(
      true
    );
    expect(wrapper.find('object[data="/home/icon-co24.svg"]').exists()).toBe(
      true
    );
  });

  test("displays the correct description text", () => {
    const wrapper = mount(Description);

    const expectedText = `科技的日新月異為我們帶來無限可能，而創意與想法更能跨越時空、引領未來。<br /><br />
      「2024 新竹 X 梅竹黑客松」提供了一個近乎無限制的平台，無論你來自何處，都能組隊挑戰六間優秀企業與新竹市政府所提出的難題。在眾多合作單位的資源與技術支持下，參賽者們可以盡情將想法化為現實，打造屬於自己的「最小可行性產品」。<br /><br />
      梅竹黑客松，一場創意嘉年華，聚集來自各地、各專業、各背景的參賽者們，彼此激盪全新的想像力，共同創造出獨特而非凡的作品。在這場盛會裡，參賽者、政府、企業、以及黑客松團隊都是不可或缺的一部分。我們鼓勵來自不同領域的隊伍組成，從多元角度思考問題，讓提案或產品更加全面與具體，提升實現的可能性。<br /><br />
      今年，梅竹黑客松將在陽明交通大學體育館重返兩天一夜、不間斷的挑戰模式。參賽者們將發揮「黑客精神」，全力解決眼前的挑戰，而梅竹黑客松團隊也致力於提供更佳的比賽體驗，使每位參賽者不受時間與空間的限制，貫徹自己的創意，並將更完整的規劃與成果呈現給評審與大眾。<br /><br />
      「2024 新竹 X 梅竹黑客松」期許你的創意，能引領世界潮流走向無限。`;

    const descriptionHtml = wrapper
      .find('[data-testid="description-text"]')
      .html();

    // Ensure the HTML contains the expected text
    expectedText.split("<br /><br />").forEach((part) => {
      expect(descriptionHtml).toContain(part.trim());
    });
  });
});
