import React from 'react'
import setViews from './setViews'
import App from '../../shared/index'
import { renderToString } from 'react-dom/server'

export const getHome = (req, res) => {
  const data = {
    title: 'home',
    content: renderToString(<App />)
  }

  setViews(req, res, data)
}

export const getAboutUs = (req, res) => {
  const data = {
    title: 'about us',
    content: renderToString(<App />)
  }

  setViews(req, res, data)
}