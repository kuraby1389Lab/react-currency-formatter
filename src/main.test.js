import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Currency from './main';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(
    <Currency
      quantity={89}
    />
  );

  expect(wrapper.text()).toEqual('$89.00');
});
