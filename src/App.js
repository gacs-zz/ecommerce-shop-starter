import React from 'react';
// 1. import react dom
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// 3. import Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

// 3. import Components
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

//4. Define pages in Router, Header, Routes, Route, Sidebar, Footer
const App = () => {
  return (<div className='overflow-hidden'>
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<ProductDetails />} />
            </Routes>
            <Sidebar />
            <Footer />
          </Router>
  </div>
  )

};

export default App;
