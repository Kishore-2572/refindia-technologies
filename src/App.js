import React from 'react';
import './App.css'
import {BrowserRouter,Route,Router,Routes,Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Products from './pages/Products'
import Services from './pages/Services'
import MarketPlace from './pages/MarketPlace'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';

import 'aos/dist/aos.css';
import ProductInfo from './pages/ProductInfo';


const App = () => {
  return(
    <BrowserRouter>
    <header>
          {/*NavBar-start*/}
          <NavBar/>
          {/* HEADER NAVBAR  */}
          {/*NavBar-end*/}
    </header>
    <main>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/products/:id' element={<ProductInfo/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/marketplace' element={<MarketPlace/>}></Route>
      <Route path='/*' element={<NotFound/>}></Route>
    </Routes>
    </main>
    <footer>
      {/* footnav-start  */}
      {/* FOOTER NAVBAR  */}
      <FooterBar/>
      {/* footnav-end */}
    </footer>
    </BrowserRouter>
  )
};

export default App;
