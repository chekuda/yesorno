import React from 'react'

if(process.browser) {
  require('./Card.scss')
}

const Card = ({ content }) => {
  return (
    <div className='card-container'>
      {
        content &&
          <div className='content'>
            { content }
          </div>
      }
    </div>
  )
}

export default Card