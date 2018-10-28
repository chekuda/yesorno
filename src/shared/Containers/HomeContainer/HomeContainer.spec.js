import React from 'react'
import { shallow } from 'enzyme'

import { HomeContainer } from './HomeContainer'

describe('HomeContainer', () => {
  describe('given HomeContainer', () => {
    it('should render the HomeContainer', () => {
      expect(shallow(<HomeContainer />).length).toBe(1)
    })
    describe('when articles are passed by props', () => {
      it('should render the HomePage component', () => {
        const props = { articles: [] }
        const component = shallow(<HomeContainer {...props}/>)
        const page = shallow(<HomeContainer {...props}/>).find('HomePage')

        expect(page.length).toBe(1)
        expect(page.props().articles).toEqual(props.articles)
      })
    })
    describe('when articles are not passed by props', () => {
      it('should no render the HomePage component', () => {
        const component = shallow(<HomeContainer />)

        expect(component.find('HomePage').length).toBe(0)
      })
    })
  })
})