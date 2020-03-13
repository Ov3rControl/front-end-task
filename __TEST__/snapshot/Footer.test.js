import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../src/components/layout/Footer';
describe('Footer', () => {
  test('snapshot Footer', () => {
    const component = renderer.create(<Footer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
