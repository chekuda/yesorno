import view from '../views/view'

export default (_, res, data) => {
  view(data)
    .then(currentView =>
      res.send(currentView))
    .catch(err =>
      res.status(500).send(err))
}
