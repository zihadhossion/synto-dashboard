import { createContext, useState } from "react";
export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {

    const [sidebarActive, setSidebarActive] = useState(false);

    return (
        <SidebarContext.Provider value={{ sidebarActive, setSidebarActive }}>
            {children}
        </SidebarContext.Provider>
    )
}