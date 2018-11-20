import HomeContainer from '../../Containers/HomeContainer'
import AboutUsPage from '../../Pages/AboutUsPage'
import AddArticle from '../../Pages/AddArticle'

const routes = [
  {
    Component: HomeContainer,
    path: '/',
    exact: true,
    name: 'Home'
  },
  {
    Component: AddArticle,
    path: '/addarticle',
    name: 'Add Article'
  },
  {
    Component: AboutUsPage,
    path: '/aboutus',
    name: 'Aboutus'
  }
]

export default routes
