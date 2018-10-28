import React  from 'react'

import Card from '../../Components/Card'

if(process.browser) {
  require('./HomePage.scss')
}

const HomePage = ({ articles = [], handleOnClick }) => {
  return (
    <div className="home-container">
      {
        articles.map(article =>
          <Card
            key={article.id}
            {...article}
            handleOnClick={handleOnClick}
          />
        )
      }
    </div>
  )
}

export default HomePage
