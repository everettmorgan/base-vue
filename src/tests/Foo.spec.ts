import { mount } from '@cypress/vue';
import Foo from '../components/Foo.vue';

describe('Test', () => {
  it('renders a message', () => {
    mount(Foo, { props: { msg: 'Hello world!' } });

    const button = cy.get('button');
    button.click();
    button.click();
    button.should('have.text', 'clicked: 2');
  });
});
