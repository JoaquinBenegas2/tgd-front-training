import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextApp from './context-hook/ContextApp'
import ReducerApp from './reducer-hook/ReducerApp'
import MemoApp from './memo-hook/MemoApp'
import CallBackApp from './call-back-hook/CallBackApp'
import RefApp from './ref-hook/RefApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ContextApp /> */}
    {/* <ReducerApp /> */}
    {/* <MemoApp /> */}
    {/* <CallBackApp /> */}
    <RefApp />
  </StrictMode>,
)
