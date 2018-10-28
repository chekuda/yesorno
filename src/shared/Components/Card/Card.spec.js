import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'

describe('Card', () => {
  describe('given Card component', () => {
    const props = { content: 'dummyContent', id: 'dummyId' }
    
    it('should render Card component', () => {
      const component = shallow(<Card {...props}/>)
      expect(component.length).toBe(1)
    })
    it('should render the content', () => {
      const component = shallow(<Card {...props}/>)
      const content = component.find('.content')
      
      expect(content.length).toBe(1)
      expect(content.text()).toBe(props.content)
    })
    describe('when trying to render the action buttons', () => {
      describe('and the callback handleOnClick is passed', () => {
        const newProps = {
          ...props,
          handleOnClick: jest.fn()
        }
        const component = shallow(<Card {...newProps}/>)
        it('should render the yes action', () => {
          const yesAction = component.find('.action.yes')
          
          expect(yesAction.length).toBe(1)
          expect(yesAction.props().children.type).toBe('img')
        })
        it('should render the no action', () => {
          const yesAction = component.find('.action.no')
          
          expect(yesAction.length).toBe(1)
          expect(yesAction.props().children.type).toBe('img')
        })
      })
      describe('and the callback handleOnClick is not passed', () => {
        const component = shallow(<Card {...props}/>)
        it('should not render the yes action', () => {
          const yesAction = component.find('.action.yes')
          
          expect(yesAction.length).toBe(0)
        })
        it('should not render the no action', () => {
          const yesAction = component.find('.action.no')
          
          expect(yesAction.length).toBe(0)
        })
      })
    })
    describe('when click on an action', () => {
      const newProps = {
        ...props,
        handleOnClick: jest.fn()
      }
      const component = shallow(<Card {...newProps}/>)
      afterEach(() => {
        jest.resetAllMocks()
      })
      describe('and action is yes', () => {
        it('should pass the id of the article and the action type', () => {
          const yesAction = component.find('.action.yes')
          yesAction.simulate('click')

          expect(newProps.handleOnClick).toBeCalledWith(props.id, 'yes')
        })
      })
      describe('and action is no', () => {
        it('should pass the id of the article and the action type', () => {
          const yesAction = component.find('.action.no')
          yesAction.simulate('click')

          expect(newProps.handleOnClick).toBeCalledWith(props.id, 'no')
        })
      })
    })
  })
})