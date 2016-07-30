import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
      component = renderComponent(App);
  });

  it('show a stands component', () => {
    expect(component.find('.stands-list')).to.exist;
  });
});
