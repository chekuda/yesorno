import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomePage from '../../Pages/HomePage'
import { voteArticle, fetchArticles } from '../../redux/articles'

export class HomeContainer extends Component {
  static fetchData(store){
    return store.dispatch(fetchArticles())
  }

  componentDidMount() {
    const { fetchArticles, articles = [] } = this.props

    if(articles.length === 0) {
      fetchArticles()
    }
  }

  voteArticle = (id, actionType) => {
    const { voteArticle } = this.props

    voteArticle(id, actionType)
  }
  render() {
    const { articles = [] } = this.props
    return (
      <div>
        {
          articles.length &&
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
  state => ({ articles: state.articles }),
  dispatch =>  bindActionCreators({ voteArticle, fetchArticles }, dispatch)
)(HomeContainer)