import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './13-react-form-validation/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
