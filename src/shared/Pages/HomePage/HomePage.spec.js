import React from 'react'
import { shallow } from 'enzyme'
import HomePage from './HomePage'

describe('HomePage',() => {
  describe('given HomePage component', () => {
    it('should render HomePage component', () => {
      expect(shallow(<HomePage />).length).toBe(1)
    })
  })
})