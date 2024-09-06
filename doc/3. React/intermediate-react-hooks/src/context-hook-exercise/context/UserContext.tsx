import { createContext, useState, ReactNode } from "react";

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ? }) => {
  return <UserContext.Provider value={}>{}</UserContext.Provider>;
};
