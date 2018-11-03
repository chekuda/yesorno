import React  from 'react'
import FadeAnimation from '../../Components/FadeAnimation'

if(process.browser) {
  require('./AddArticle.scss')
}

const AddArticle = () => {
  return (
      <div className="addArticle-container">
        <FadeAnimation types={['fadeIn', 'fadeUp']} time={'one'}>
          <h1 className='title'>Add your new question</h1>
          <input className='article' type='text' placeholder='make people think'/>
          <button className='submit'>Submit</button>
        </FadeAnimation>
      </div>
  )
}

export default AddArticle
