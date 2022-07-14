import React, { Component, createContext, useContext, useReducer } from "react";
import { iAppContext, iAppProvider } from "../interfaces";

import initialState from "../data/initialState";

const AppContext = createContext<iAppContext>({
  state: initialState,
  dispatch: () => {},
});

export const AppProvider = ({ children }: any): JSX.Element => {
  return (
    <AppContext.Provider
      value={{
        state: initialState,
        dispatch: () => {},
      }}
    >
      {...children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
