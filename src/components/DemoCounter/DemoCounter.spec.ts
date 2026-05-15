import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import DemoCounter from './DemoCounter.vue';

describe('DemoCounter', () => {
  it('increments the click count', async () => {
    const wrapper = mount(DemoCounter, {
      props: {
        msg: 'Hello world!',
      },
    });

    const button = wrapper.get('button');
    await button.trigger('click');
    await button.trigger('click');

    expect(button.text()).toBe('clicked: 2');
  });
});
