import React from 'react'
import { shallow } from 'enzyme'

import { HeaderView } from './Header'
import routes from '../../AppRouter/routes'

describe('Header', () => {
  describe('given Header component',() => {
    it('should render the Header component', () => {
      const component = shallow(<HeaderView />)
      expect(component.find('.header').length).toBe(1)
    })
    it('should render a logo wrapper', () => {
      const component = shallow(<HeaderView />)
      expect(component.find('.logo').length).toBe(1)
    })
    describe('when the context is setup to desktop view', () => {
      const component = shallow(<HeaderView context={{ isDesktop: true }}/>)
      it('should render a link per route', () => {
        expect(component.find('NavLink').length).toBe(routes.length)
      })
      it('should render the top nav links', () => {
        expect(component.find('.top-nav').length).toBe(routes.length)
      })
    })
  })
})