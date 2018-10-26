import HTMLTransformer from '../../helpers/HTMLTransformer'
import ssr from '../ssr'

export const getAppRouter = (req, res) => {
  const data = {
    title: 'YESORNOT',
    content: ssr(req)
  }

  HTMLTransformer(data)
    .then(currentView =>
      res.send(currentView))
    .catch(err =>
      res.status(500).send(err))
}