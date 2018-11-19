import HomeContainer from '../../Containers/HomeContainer'
import AboutUsPage from '../../Pages/AboutUsPage'
import AddArticle from '../../Pages/AddArticle'

const routes = [
  {
    Component: HomeContainer,
    path: '/'
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
