import { mount } from '@vue/test-utils';
import Prize from '@/components/home/Prize.vue';

describe('Prize.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Prize);

    // Check for the main title
    expect(wrapper.find('.font-Mantou').text()).toBe('獎項資訊');

    // Check for the presence of SVG objects
    expect(wrapper.find('object[data="/home/icon-ve72.svg"]').exists()).toBe(true);
    expect(wrapper.find('object[data="/home/icon-ve73.svg"]').exists()).toBe(true);
    expect(wrapper.find('object[data="/home/icon-ve74.svg"]').exists()).toBe(true);
    expect(wrapper.find('object[data="/home/icon-ve75.svg"]').exists()).toBe(true);
    expect(wrapper.find('object[data="/home/icon-mo08.svg"]').exists()).toBe(true);
    expect(wrapper.find('object[data="/home/icon-co31.svg"]').exists()).toBe(true);
    expect(wrapper.find('object[data="/home/icon-co28.svg"]').exists()).toBe(true);
    expect(wrapper.find('object[data="/home/icon-co29.svg"]').exists()).toBe(true);
    expect(wrapper.find('object[data="/home/icon-co30.svg"]').exists()).toBe(true);

    // Check for the first prize section
    const firstPrize = wrapper.find('.col-span-2');
    expect(firstPrize.exists()).toBe(true);
    expect(firstPrize.text()).toContain('黑客組');
    expect(firstPrize.text()).toContain('第一名：新台幣 15,000 元整、實體獎品、實習或實習面試資格');
    expect(firstPrize.text()).toContain('第二名：新台幣 10,000 元整、實體獎品');
    expect(firstPrize.text()).toContain('第三名：新台幣 5,000 元整、實體獎品');

    // Check for the second prize section
    const secondPrize = wrapper.findAll('.col-span-2').at(1);
    expect(secondPrize.exists()).toBe(true);
    expect(secondPrize.text()).toContain('創客交流組');
    expect(secondPrize.text()).toContain('第一名：新台幣 40,000 元整');
    expect(secondPrize.text()).toContain('第二名：新台幣 30,000 元整');
    expect(secondPrize.text()).toContain('第三名：新台幣 20,000 元整');

    // Check for the final prize section
    const finalPrize = wrapper.find('.col-start-2');
    expect(finalPrize.exists()).toBe(true);
    expect(finalPrize.text()).toContain('梅竹大獎');
    expect(finalPrize.text()).toContain('第一名：新台幣 28,000 元整');
    expect(finalPrize.text()).toContain('第二名：新台幣 12,000 元整');
    expect(finalPrize.text()).toContain('第三名：新台幣 6,000 元整');
  });
});
