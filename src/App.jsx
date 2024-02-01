import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Ecommerce from './pages/ecommerce/Ecommerce';
import NotFound from './pages/notFound/NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/ecommerce' element={<Ecommerce />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
