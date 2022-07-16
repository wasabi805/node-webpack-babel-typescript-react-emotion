import React, { FC, ReactElement } from "react";
import { AppContext } from "../../src/context/AppContext";
import { render, RenderOptions } from "@testing-library/react";
import initialState from "../../src/data/initialState";

export const dispatchMock = jest.fn();

export const AppWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        state: initialState,
        dispatch: dispatchMock,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AppWrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
