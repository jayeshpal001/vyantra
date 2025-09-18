// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { ContextWrapper } from './context/ContextWrapper.jsx'
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextWrapper>


 <CartProvider>
      <App />
    </CartProvider>
      

    </ContextWrapper>
  </BrowserRouter>


)




