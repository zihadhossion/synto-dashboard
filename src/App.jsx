import { useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Ecommerce from './pages/ecommerce/Ecommerce';
import NotFound from './pages/notFound/NotFound';
import { SidebarContext } from "./context/SidebarContext";

function App() {
  const { sidebarActive } = useContext(SidebarContext);

  return (
    <div className={sidebarActive ? "app" : "app active"}>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/ecommerce' element={<Ecommerce />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
