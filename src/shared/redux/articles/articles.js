import 'isomorphic-fetch'

const SAVE_ARTICLES = 'ARTICLES/SAVE_ARTICLES'
const VOTE_ARTICLE = 'ARTICLES/VOTE_ARTICLE'

export const saveArticles = articles => ({
  type: SAVE_ARTICLES,
  payload: {
    articles
  }
})

export const voteArticle = (id, actionType) => ({
  type: VOTE_ARTICLE,
  payload: {
    id,
    actionType
  }
})

export const fetchArticles = () => dispatch => {
  return fetch('http://localhost:3001/api/getpostlist')
    .then(res => res.json())
    .then(articles => {
      dispatch(saveArticles(articles))
    })
}

const reducer = (state = [], action = {}) => {
  const { type, payload } = action

  switch(type) {
    case SAVE_ARTICLES:
      return state.concat(payload.articles)
    case VOTE_ARTICLE:
      return state.map(ele => {
          return ele._id === payload.id
            ? { ...ele, [payload.actionType]: ++ele[payload.actionType] }
            : ele
        })
    default:
      return state
  }
}

export default reducer