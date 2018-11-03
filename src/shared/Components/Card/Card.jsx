import React from 'react'

if(process.browser) {
  require('./Card.scss')
}

const Card = ({ content, yes, no, handleOnClick, id }) => {
  return (
    <div className='card-container'>
      <div className='content'>
        { content }
      </div>
      {
        handleOnClick &&
          <div className='card-section'>
            <div className='action' onClick={() => handleOnClick(id, 'yes')}>
              <img src='/assets/icons/smile.svg' width='25' height="25" />
              { yes && <p className='votes'>{yes}</p> }
            </div>
            <div className='action' onClick={() => handleOnClick(id, 'no')}>
              { no && <p className='votes'>{no}</p> }
              <img src='/assets/icons/frown-open.svg' width='25' height="25" />
            </div>
        </div>
      }
    </div>
  )
}

export default Card