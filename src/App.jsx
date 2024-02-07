import { useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Ecommerce from './pages/ecommerce/Ecommerce';
import Crypto from "./pages/crypto/Crypto";
import Jobs from "./pages/jobs/Jobs";
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
          <Route path='/crypto' element={<Crypto />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
