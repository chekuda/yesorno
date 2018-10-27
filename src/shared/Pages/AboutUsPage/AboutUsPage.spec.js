import React from 'react'
import { shallow } from 'enzyme'
import AboutUsPage from './AboutUsPage'

describe('AboutUsPage',() => {
  describe('given AboutUsPage component', () => {
    it('should render AboutUsPage component', () => {
      expect(shallow(<AboutUsPage />).length).toBe(1)
    })
  })
})