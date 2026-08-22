import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './11-forms&controlled-compents/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
