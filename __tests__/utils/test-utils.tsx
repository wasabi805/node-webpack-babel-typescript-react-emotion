import React, { FC, ReactElement, useContext, createContext } from "react";
import { iAppContext } from "../../src/interfaces";
import { render, RenderOptions } from "@testing-library/react";

export const mockState = {
  users: [
    { id: "1", name: "tim" },
    { id: "2", name: "kayla" },
  ],
  createUser: {
    firstName: "",
    lastName: "",
  },
  edit: [],
  editForm: [],
};

export const AppContext = createContext<iAppContext>({
  state: mockState,
  dispatch: () => {},
});

export const dispatchMock = jest.fn(() => useContext(AppContext).dispatch);

export const AppWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        state: mockState,
        dispatch: () => {},
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
