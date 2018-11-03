import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomePage from '../../Pages/HomePage'
import { voteArticle } from '../../redux/articles'

export class HomeContainer extends Component {
  voteArticle = (id, actionType) => {
    //TODO: Fetch
    const { voteArticle } = this.props

    voteArticle(id, actionType)
  }
  render() {
    return (
      <div>
        {
          this.props.articles &&
            <HomePage
              handleOnClick={this.voteArticle}
              articles={this.props.articles}
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