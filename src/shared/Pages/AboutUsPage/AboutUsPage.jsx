import React, { Component } from 'react'

if(process.browser) {
  require('./AboutUsPage.scss')
}

class AboutUsPage extends Component {
  render(){
    return <div className='aboutus-container'>About Us Page </div>
  }
}

export default AboutUsPage