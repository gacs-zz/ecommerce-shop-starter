import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//product provider
import ProductProvider from './contexts/ProductContext';
//Sidebar provider
import SidebarProvider from './contexts/SidebarContext';
//Cart provider
import CartProvider from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

//9. Enclose React.StrictMode into ProductProvider
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
  
);
