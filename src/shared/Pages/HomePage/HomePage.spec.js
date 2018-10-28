import React from 'react'
import { shallow } from 'enzyme'
import HomePage from './HomePage'

describe('HomePage',() => {
  describe('given HomePage component', () => {
    const props = {
      handleOnClick: jest.fn()
    }
    it('should render HomePage component', () => {
      expect(shallow(<HomePage />).length).toBe(1)
    })
    describe('when articles are received', () => {
      it('should render a Card per article received', () => {
        const newProps = {
          ...props,
          articles: [
            { id: 0, content: 'first', positive: 10, negative: 10 },
            { id: 1, content: 'second', positive: 10, negative: 10 }
          ]
        }
        const component = shallow(<HomePage {...newProps} />)
        const cards = component.find('Card')

        expect(cards.length).toBe(newProps.articles.length)
        cards.forEach((card, index) => {
          expect(card.props().content).toEqual(newProps.articles[index].content)
          expect(card.props().handleOnClick).toEqual(newProps.handleOnClick)
        })
      })
    })
    describe('when articles are not received', () => {
      it('should not render any Card ', () => {
        const component = shallow(<HomePage />)

        expect(component.find('Card').length).toBe(0)
      })
    })
  })
})
