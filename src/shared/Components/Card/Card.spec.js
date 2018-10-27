import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'

describe('Card', () => {
  describe('given Card component', () => {
    it('should render Card component', () => {
      expect(shallow(<Card />).length).toBe(1)
    })
    describe('when the content is passed', () => {
      const props = { content: 'dummyContent' }
      it('should render the content', () => {
        const component = shallow(<Card {...props}/>)
        const content = component.find('.content')
        
        expect(content.length).toBe(1)
        expect(content.text()).toBe(props.content)
      })
    })
  })
})