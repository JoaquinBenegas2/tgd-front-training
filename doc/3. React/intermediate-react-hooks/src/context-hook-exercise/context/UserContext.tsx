import { createContext, ReactNode, useState } from "react";

interface UserContextType {
  user:string
  setUser: (user: string) => void
}


export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: {children: ReactNode}) =>{
  const [user, setUser] = useState("inicio");
  return <UserContext.Provider value={{ user, setUser }}>{ children }</UserContext.Provider>
}