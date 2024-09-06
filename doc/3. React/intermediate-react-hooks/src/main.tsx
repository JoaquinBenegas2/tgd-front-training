import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextApp from './context-hook/ContextApp'
import ReducerApp from './reducer-hook/ReducerApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ContextApp /> */}
    <ReducerApp />
  </StrictMode>,
)
