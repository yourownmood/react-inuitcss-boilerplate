import * as React from 'react'
import { shallow } from 'enzyme'

import About from './About'

it('renders without crashing', () => {
  const component = shallow(<About />)
  expect(component.find('.About').length).toBe(1)
})
