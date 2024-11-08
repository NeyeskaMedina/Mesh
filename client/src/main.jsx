import { StrictMode } from 'react'
import { ContextAuth } from "./context/ContextAuth.jsx";
import { createRoot } from 'react-dom/client'
import { ContextProvider } from "./context/ContextGlobal.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
        <ContextAuth>
            <App />
        </ContextAuth>
    </ContextProvider>
  </StrictMode>,
)
