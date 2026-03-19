import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Dismiss preloader after app mounts
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader')
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = '0'
      preloader.style.pointerEvents = 'none'
      setTimeout(() => preloader.remove(), 500)
    }, 4000)
  }
})
