import HTMLTransformer from '../../helpers/HTMLTransformer'

export default (_, res, data) => {
  HTMLTransformer(data)
    .then(currentView =>
      res.send(currentView))
    .catch(err =>
      res.status(500).send(err))
}
