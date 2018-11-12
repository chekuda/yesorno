import React  from 'react'

import Card from '../../Components/Card'
import FadeAnimation from '../../Components/FadeAnimation'

if(process.browser) {
  require('./HomePage.scss')
}

const HomePage = ({ articles = [], handleOnClick } = {}) => {
  return (
    <div className="home-container">
      {
        articles.map(article =>
          <FadeAnimation key={article._id} types={['fadeIn', 'fadeUp']} time={'one'}>
            <Card
              {...article}
              handleOnClick={handleOnClick}
            />
          </FadeAnimation>
        )
      }
    </div>
  )
}

export default HomePage
