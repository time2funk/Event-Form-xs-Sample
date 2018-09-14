import React from 'react';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
(Enzyme).configure({ adapter: new Adapter() });

import App from '../App';


describe(`<App />`, () => {
  it('renders component', () => {
    const component = Enzyme.shallow(<App />);
    expect(component).toHaveLength(1);
  });
})
