import 'isomorphic-fetch'

export const fetchAPI = (relativePath) =>
  fetch(process.env.API_URL + relativePath)
    .then(res => res.json())
    .catch(() => { throw new Error('Wrong relative path')})

