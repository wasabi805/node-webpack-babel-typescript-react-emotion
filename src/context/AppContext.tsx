// see https://javascript.works-hub.com/learn/building-with-react-context-provider-pattern-1af4b
import React, { createContext, useContext, useReducer } from "react";
import { iAppContext, iAppProvider } from "../interfaces";

import appReducer from "../reducers/index";
import initialState from "../data/initialState";

const AppContext = createContext<iAppContext>({
  state: initialState,
  dispatch: () => {},
});

export const AppProvider = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {...children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
