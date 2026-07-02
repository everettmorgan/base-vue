import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import DemoCounter from './DemoCounter.vue';

describe('DemoCounter', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('increments the shared counter store on click', async () => {
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
