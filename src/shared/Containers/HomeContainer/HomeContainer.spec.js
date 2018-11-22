import React from 'react'
import { shallow } from 'enzyme'

import { HomeContainer } from './HomeContainer'

describe('HomeContainer', () => {
  const props = {
    fetchArticles: jest.fn()
   }
  describe('given HomeContainer', () => {
    it('should render the HomeContainer', () => {
      expect(shallow(<HomeContainer {...props}/>).length).toBe(1)
    })
    describe('when articles are passed by props', () => {
      it('should render the HomePage component', () => {
        const newProps = {
          ...props,
          articles: [{ article: 'mocked' }]
         }
        const page = shallow(<HomeContainer {...newProps}/>).find('HomePage')

        expect(page.length).toBe(1)
        expect(page.props().articles).toEqual(newProps.articles)
      })
    })
    describe('when articles are not passed by props', () => {
      it('should no render the HomePage component', () => {
        const newProps = {
          ...props,
          articles: []
         }
        const component = shallow(<HomeContainer {...newProps}/>)

        expect(component.find('HomePage').length).toBe(0)
      })
    })
  })
})