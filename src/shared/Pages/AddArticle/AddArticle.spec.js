import React from 'react'
import { shallow } from 'enzyme'
import AddArticle from './AddArticle'

describe('AddArticle',() => {
  describe('given HomePage component', () => {
    describe('when trying to render an addArticle component', () => {
      const component = shallow(<AddArticle />)
      const fade = component.find('FadeAnimation')
      it('should render an addArticle component', () => {
        expect(component.length).toBe(1)
      })
      it('should render the fade animation', () => {
        expect(fade.length).toBe(1)
      })
      it('should render a title', () => {
        expect(fade.find('.title').length).toBe(1)
      })
      it('should render an article input', () => {
        expect(fade.find('.article').length).toBe(1)
      })
      it('should render a submit button', () => {
        expect(fade.find('.submit').length).toBe(1)
      })
    })
  })
})
