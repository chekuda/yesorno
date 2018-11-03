import React from 'react'

if(process.browser) {
  require('./Card.scss')
}

const Card = ({ content, yes, no, handleOnClick, id }) => {
  return (
    <div className='card-container'>
      <div className='card-content'>
        { content }
      </div>
      {
        handleOnClick &&
          <div className='card-actions-section'>
            <div className='action yes' onClick={() => handleOnClick(id, 'yes')}>
              <img src='/assets/icons/smile.svg' width='25' height="25" />
              { typeof yes !== undefined && <p className='votes'>{yes}</p> }
            </div>
            <div className='action no' onClick={() => handleOnClick(id, 'no')}>
              { typeof yes !== undefined && <p className='votes'>{no}</p> }
              <img src='/assets/icons/frown-open.svg' width='25' height="25" />
            </div>
        </div>
      }
    </div>
  )
}

export default Card