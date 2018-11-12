import ConnectHomeContainer, { HomeContainer } from '../../Containers/HomeContainer'
import AboutUsPage from '../../Pages/AboutUsPage'
import AddArticle from '../../Pages/AddArticle'

const routes = [
  {
    Component: ConnectHomeContainer,
    path: '/',
    apiUrl: HomeContainer.apiUrl,
    initialize: data => ({ articles: data })
  },
  {
    Component: AboutUsPage,
    path: '/aboutus'
  },
  {
    Component: AddArticle,
    path: '/addarticle'
  },
]

export default routes
