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

const reducer = (state = {}, action = {}) => {
  const { type, payload } = action

  switch(type) {
    case SAVE_ARTICLES:
      return { ...state, list: payload.articles }
    case VOTE_ARTICLE:
      return {
        ...state,
        list: state.list.map(ele => {
          return ele.id === payload.id
            ? { ...ele, [payload.actionType]: ++ele[payload.actionType] }
            : ele
        })
      }
    default:
      return state
  }
}

export default reducer