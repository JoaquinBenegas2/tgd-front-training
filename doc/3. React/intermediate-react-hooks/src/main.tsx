import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextApp from './context-hook/ContextApp'
import ReducerApp from './reducer-hook/ReducerApp'
import ReducerAppExersize from "./reducer-hook-exercise/ReducerApp"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ContextApp /> */}
    {/* <ReducerApp /> */}
    <ReducerAppExersize />
  </StrictMode>,
)
