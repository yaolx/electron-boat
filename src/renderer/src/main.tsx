import React from 'react'
import { HashRouter } from 'react-router-dom'

import ReactDOM from 'react-dom/client'

import Router from '@/routes'
import './assets/index.css'
// 使用StrictMode，会触发2次render
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Router />
    </HashRouter>
  </React.StrictMode>
)
