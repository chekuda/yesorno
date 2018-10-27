import React, { Component } from 'react'
import Card from '../../Components/Card'

if(process.browser) {
  require('./HomePage.scss')
}

class HomePage extends Component {
  state = {}
  componentDidMount(){
    this.setState({
      articles: this.props.articles ||
      [
        { id: 0, content: 'Is fish meet?', positive: 10, negative: 10 },
        { id: 1, content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', positive: 10, negative: 10 }
      ]
    })
  }
  render() {
    return (
      <div className="home-container">
        {
          this.state.articles &&
            this.state.articles.map(article =>
              <Card
                key={article.id}
                {...article}
              />
            )
        }
      </div>
    )
  }
}

export default HomePage