import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

describe('Header', () => {
  describe('given Header component',() => {
    it('should render the Header component', () => {
      expect(shallow(<Header />).length).toBe(1)
    })
    it('should render a logo wrapper', () => {
      const component = shallow(<Header />)

      expect(component.find('.logo').length).toBe(1)
    })
  })
})