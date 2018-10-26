
import setViews from './setViews'
import ssr from '../ssr'

export const getAppRouter = (req, res) => {
  const data = {
    title: 'YESORNOT',
    content: ssr(req)
  }

  setViews(req, res, data)
}