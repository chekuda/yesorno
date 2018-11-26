import React from 'react'
import { shallow } from 'enzyme'

import Sidebar from './SideBar'

const linkCreator = (num) =>
  Array(num).fill('link').map((link, index) => <li key={index}>{link}</li>)

describe('SideBar', () => {
  describe('given a sidebar component', () => {
    const props = {
      linskMarkUp: linkCreator(3),
      showSideBar: false,
      setShowSideBar: jest.fn()
    }
    afterEach(() => {
      jest.resetAllMocks()
    })
    describe('when trying to render the component', () => {
      const component = shallow(<Sidebar {...props}/>)
      it('should render the componet', () => {
        expect(component.length).toBe(1)
      })
      it('should render the sideBar shadow', () => {
        const shadow = component.find('.sidebar-shadow')

        expect(shadow.length).toBe(1)
        expect(shadow.hasClass('show')).toBe(false)
      })
      it('should render the panel', () => {
        const panel = component.find('.sidebar-panel')

        expect(panel.length).toBe(1)
        expect(panel.hasClass('show')).toBe(false)
      })
      it('should render all the links provided under side panel', () => {
        const panel = component.find('.sidebar-panel')

        expect(panel.props().children).toEqual(props.linskMarkUp)
      })
      describe('and the the sidebar is set up to show', () => {
        const newProps = {
          ...props,
          showSideBar: true
        }
        const newComponent = shallow(<Sidebar {...newProps}/>)
        it('should show the sidebar shadow', () => {
          const shadow = newComponent.find('.sidebar-shadow')

          expect(shadow.hasClass('show')).toBe(true)
        })
        it('should show the sidebar panel', () => {
          const panel = newComponent.find('.sidebar-panel')

          expect(panel.hasClass('show')).toBe(true)
        })
      })
      describe('when clicking on the shadow', () => {
        it('should call the setShowSidebar', () => {
          const shadow = component.find('.sidebar-shadow')

          expect(props.setShowSideBar).not.toHaveBeenCalled()
          shadow.simulate('click')

          expect(props.setShowSideBar).toHaveBeenCalledTimes(1)
        })
      })
    })
  })
})