import { createContext, useState, ReactNode } from "react";

interface UserContextType {
  user: string;
  setUser: (user: any) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string>("My current user");

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
