import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import '../styles/globals.css'

// Ensure the root element exists
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found. Make sure there is a div with id="root" in your HTML.')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)