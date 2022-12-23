import { createContext, useState } from "react";

const MenuContext = createContext("/beranda");
export default function ({ children }) {
  const [menu, setMenu] = useState("/beranda");
  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
