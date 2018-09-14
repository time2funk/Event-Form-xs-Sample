import React from 'react';
import { Provider } from 'react-redux';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
(Enzyme).configure({ adapter: new Adapter() });

import store from '../../store';
import Events from '../Events';


const component = Enzyme.shallow(<Events store={store} />);

describe(`<Events />`, () => {
  it('should be defined', () => {
    expect(Events).toBeDefined();
  });

  it('describe render', () => {
    expect(component).toHaveLength(1);
  });

 it('should match the snapshot', () => {
   expect(component).toMatchSnapshot();
 });
});
