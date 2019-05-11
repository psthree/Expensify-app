import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../components/LoginPage';

//snapshot test
test('Should render the login component', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});
