import React from 'react';
import { Provider } from 'react-redux';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
(Enzyme).configure({ adapter: new Adapter() });

import store from '../../store';
import Form from '../Form';

describe(`<Form />`, () => {
  it('renders component', () => {
    const component = Enzyme.shallow(<Form store={store} backHome={()=>{}}/>);
    expect(component).toHaveLength(1);
  });
})
