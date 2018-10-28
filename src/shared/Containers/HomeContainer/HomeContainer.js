import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomePage from '../../Pages/HomePage'
import { voteArticle } from '../../redux/articles'

export class HomeContainer extends Component {
  state = {
    articles: this.props.articles
  }
  voteArticle = (id, actionType) => {
    //TODO: Fetch
    const { voteArticle } = this.props

    voteArticle(id, actionType)
  }
  render() {
    return (
      <div>
        {
          this.state.articles &&
            <HomePage
              handleOnClick={this.voteArticle}
              articles={this.state.articles}
            />
        }
      </div>
    )
  }
}

export default connect(
  state => ({ articles: state.articles.list }),
  dispatch =>  bindActionCreators({ voteArticle }, dispatch)
)(HomeContainer)