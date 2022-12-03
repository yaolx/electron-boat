import React from 'react'
import { HashRouter } from 'react-router-dom'

import ReactDOM from 'react-dom/client'

import Router from '@/routes'
import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Router />
    </HashRouter>
  </React.StrictMode>
)
