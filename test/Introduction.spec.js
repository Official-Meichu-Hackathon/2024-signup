import { mount } from '@vue/test-utils';
import Introduction from '@/components/home/Introduction.vue';

describe('Introduction', () => {
  test('renders correctly', () => {
    const wrapper = mount(Introduction);

    expect(wrapper.exists()).toBe(true);
  });

  test('renders SVG elements correctly', () => {
    const wrapper = mount(Introduction);

    expect(wrapper.find('[data-testid="icon-gr52-1"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="icon-gr52-2"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="icon-ve47"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="icon-ve48"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="icon-ve71"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="icon-co09"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="icon-mo07"]').exists()).toBe(true);
  });

  test('displays the correct title text', () => {
    const wrapper = mount(Introduction);

    const titleText = wrapper.find('[data-testid="title-text"]').text();

    expect(titleText).toBe('組別介紹 & 工作坊');
  });

  test('renders group sections correctly', () => {
    const wrapper = mount(Introduction);

    expect(wrapper.find('[data-testid="group-hackers"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="group-creators"]').exists()).toBe(true);
  });

  test('displays the correct description text for hackers group', () => {
    const wrapper = mount(Introduction);

    const descriptionHackers = wrapper.find('[data-testid="description-hackers"]').text();

    expect(descriptionHackers).toContain('我們致力於搭起學生與企業之間的橋樑');
    expect(descriptionHackers).toContain('ETtoday 新聞雲、Google、KKCompanyTechnologies、LINE、恩智浦半導體、文曄科技、台積電');
  });

  test('displays the correct description text for creators group', () => {
    const wrapper = mount(Introduction);

    const descriptionCreators = wrapper.find('[data-testid="description-creators"]').text();

    expect(descriptionCreators).toContain('由新竹市政府命題，融大新竹居民與旅遊客真實生活情境與議題');
    expect(descriptionCreators).toContain('體現創新創意、用戶體驗、數位科技趨勢應用的創客精神');
  });
});
