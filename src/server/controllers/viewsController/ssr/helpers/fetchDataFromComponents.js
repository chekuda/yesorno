import 'isomorphic-fetch'

import initialState from '../../../../../shared/redux/initialState'
import routes from '../../../../../shared/AppRouter/routes'

export const fetchDataFromComponents = async (path) => {
  try {
    const { apiUrl, initialize} = routes.find(route => route.path === path)

    if(!apiUrl || !initialize) {
      return {
        ...initialState
      }
    }

    return fetch(apiUrl)
      .then(res => res.json())
      .then(data => ({ ...initialState, ...initialize(data) }))
      .catch(() => { throw Error() })

  } catch(e) {
    throw Error('Couldnt fetch the data', e.message)
  }
}
