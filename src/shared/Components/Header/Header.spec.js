import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'
import routes from '../../AppRouter/routes'

describe('Header', () => {
  describe('given Header component',() => {
    const component = shallow(<Header />)
    it('should render the Header component', () => {
      expect(component.length).toBe(1)
    })
    it('should render a logo wrapper', () => {
      expect(component.find('.logo').length).toBe(1)
    })
    it('should render a link per route', () => {
      expect(component.find('NavLink').length).toBe(routes.length)
    })
  })
})