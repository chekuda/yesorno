const SAVE_ARTICLES = 'ARTICLES/SAVE_ARTICLES'

export const saveArticles = articles => ({
  type: SAVE_ARTICLES,
  payload: {
    articles
  }
})

const reducer = (state = {}, action = {}) => {
  const { type, payload } = action

  switch(type) {
    case SAVE_ARTICLES:
      return { ...state, articles: payload.articles }
    default:
      return state
  }
}

export default reducer