import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Foo from '../components/Foo.vue';

describe('Foo', () => {
  it('increments the click count', async () => {
    const wrapper = mount(Foo, {
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
