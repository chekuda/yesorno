import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'

describe('Card', () => {
  describe('given Card component', () => {
    const props = { content: 'dummyContent', _id: 'dummyId' }

    it('should render Card component', () => {
      const component = shallow(<Card {...props}/>)
      expect(component.length).toBe(1)
    })
    it('should render the content', () => {
      const component = shallow(<Card {...props}/>)
      const content = component.find('.card-content')
      
      expect(content.length).toBe(1)
      expect(content.text()).toBe(props.content)
    })
    describe('when trying to render the actions section', () => {
      describe('and the callback handleOnClick is passed', () => {
        const newProps = {
          ...props,
          handleOnClick: jest.fn()
        }
        it('should render the two actions', () => {
          const component = shallow(<Card {...newProps}/>)
          const actions = component.find('.action')

          expect(actions.length).toBe(2)
        })
        describe('and the votes are passed', () => {
          const propsWithVotes = {
            ...newProps,
            yes: 10,
            no: 0
          }
          it('should render the icon and the vote section', () => {
            const component = shallow(<Card {...propsWithVotes}/>)
            const actions = component.find('.action')

            actions.forEach((action) => {
              expect(action.children().length).toBe(2)
            })
          })
        })
      })
      describe('and the callback handleOnClick is not passed', () => {
        const component = shallow(<Card {...props}/>)
        it('should not render any action', () => {
          const actions = component.find('.action')

          expect(actions.length).toBe(0)
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
          const action = component.find('.action.yes')
          action.simulate('click')

          expect(newProps.handleOnClick).toBeCalledWith(props._id, 'yes')
        })
      })
      describe('and action is no', () => {
        it('should pass the id of the article and the action type', () => {
          const action = component.find('.action.no')
          action.simulate('click')

          expect(newProps.handleOnClick).toBeCalledWith(props._id, 'no')
        })
      })
    })
  })
})