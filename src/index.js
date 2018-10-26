import React from 'react'
import { hydrate } from 'react-dom'

import App from './shared'

const render = Component => {
  hydrate(
    <Component />,
    document.getElementById('root')
  )
}

render(App)

