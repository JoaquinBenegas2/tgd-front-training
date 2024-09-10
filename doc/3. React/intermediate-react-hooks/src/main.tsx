import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ContextApp from "./context-hook/ContextApp";
import ReducerApp from "./reducer-hook/ReducerApp";
import ReducerAppExersize from "./reducer-hook-exercise/ReducerApp";
import ContextAppExersize from "./context-hook-exercise/ContextApp"
import MemoApp from "./memo-hook/MemoApp";
import CallBackApp from "./call-back-hook/CallBackApp";
import RefApp from "./ref-hook/RefApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ContextApp /> */} 
    <ContextAppExersize /> 
    {/* <ReducerApp /> */}
    {/* <ReducerAppExersize /> */}
    {/* <MemoApp /> */}
    {/* <CallBackApp /> */}
    {/* <RefApp /> */}
  </StrictMode>
);
