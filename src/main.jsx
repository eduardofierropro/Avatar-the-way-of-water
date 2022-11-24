import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { Provider } from './provider/Provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
)
