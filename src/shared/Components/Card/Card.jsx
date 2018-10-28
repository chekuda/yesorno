import React from 'react'

if(process.browser) {
  require('./Card.scss')
}

const Card = ({ content, handleOnClick, id }) => {
  return (
    <div className='card-container'>
      <div className='content'>
        { content }
      </div>
      {
        handleOnClick && 
          <div className='action yes' onClick={() => handleOnClick(id, 'yes')}>
            <img src='/assets/icons/thumbs-up.svg' width='25' height="25" />
          </div>
      }
      {
        handleOnClick && 
          <div className='action no' onClick={() => handleOnClick(id, 'no')}>
            <img src='/assets/icons/thumbs-down.svg' width='25' height="25" />
          </div>
      }
    </div>
  )
}

export default Card