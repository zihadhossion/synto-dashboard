import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { SidebarContextProvider } from './context/SidebarContext.jsx';
import { DarkModeProvider } from './context/DarkModeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </DarkModeProvider>
  </React.StrictMode>,
)


{/* <NavLink to={"/"} className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "active" : ""
}>

</NavLink> */}