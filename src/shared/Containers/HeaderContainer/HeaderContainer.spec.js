import React from 'react'
import { shallow } from 'enzyme'

import { HeaderContainer } from './HeaderContainer'

describe('HeaderContainer', () => {
  describe('given HeaderContainer component',() => {
    describe('when trying to render the component', () => {
      it('should render the component', () => {
        const component = shallow(<HeaderContainer />)

        expect(component.length).toBe(1)
      })
      it('should render the component', () => {
        const component = shallow(<HeaderContainer />)

        expect(component.find('Header').length).toBe(1)
      })
      describe('and the context is passed', () => {
        it('should pass the context to the Header', () => {
          const props = {
            context: { mocked: 'context' }
          }
          const component = shallow(<HeaderContainer {...props} />)

          expect(component.find('Header').props().context).toBe(props.context)
        })
      })
    })
  })
})
