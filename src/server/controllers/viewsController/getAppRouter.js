import HTMLTransformer from '../../helpers/HTMLTransformer'
import ssr from '../ssr'

export const getAppRouter = (req, res) => {
  const { content, preloadState } = ssr(req)
  
  const data = {
    title: 'YESORNOT',
    content,
    preloadState
  }

  HTMLTransformer(data)
    .then(currentView =>
      res.send(currentView))
    .catch(err =>
      res.status(500).send(err))
}