import { useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SidebarContext } from "./context/SidebarContext";
import Home from './pages/home/Home';
import Ecommerce from './pages/ecommerce/Ecommerce';
import Crypto from "./pages/crypto/Crypto";
import Jobs from "./pages/jobs/Jobs";
import NotFound from './pages/notFound/NotFound';
import NFT from "./pages/nft/NFT";
import Analytics from "./pages/analytics/Analytics";
import Projects from "./pages/projects/Projects";
import HRM from "./pages/hrm/HRM";
import CRM from "./pages/crm/CRM";
import Personal from "./pages/personal/Personal";
import Stocks from "./pages/stocks/Stocks";
import Course from "./pages/course/Course";

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
          <Route path='/nft' element={<NFT />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/hrm' element={<HRM />} />
          <Route path='/crm' element={<CRM />} />
          <Route path='/personal' element={<Personal />} />
          <Route path='/stocks' element={<Stocks />} />
          <Route path='/course' element={<Course />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
