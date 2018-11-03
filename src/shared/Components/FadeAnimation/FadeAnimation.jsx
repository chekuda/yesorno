import React, { Component } from 'react'

if(process.browser) {
  require('./FadeAnimation.scss')
}

const fadeAnimations = {
  fadeIn: 'in',
  fadeUp: 'up',
  fadeRight: 'right',
  fadeLeft: 'left',
  fadeDown: 'down'
}

class FadeAnimation extends Component {
  render() {
    const { types, children, time } = this.props
    const currentAnimation = types.reduce((acc, type) =>
      fadeAnimations[type]
        ? acc.concat(`fade-${fadeAnimations[type]}`)
        : acc
    , [])

    if(currentAnimation.length === 0) return children

    return (
      <div className={`fade ${currentAnimation.join(' ')} ${time}`}>
        { children }
      </div>
    )
  }
}


export default FadeAnimation
