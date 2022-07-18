import React, {
  FC,
  ReactElement,
  useContext,
  createContext,
  useReducer,
} from "react";
import { iAppContext } from "../../src/interfaces";
import { render, RenderOptions } from "@testing-library/react";
import appReducer from "../../src/reducers";

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

const mockCallBack = jest.fn((state, action) => appReducer(state, action));

export const AppContext = createContext<iAppContext>({
  state: mockState,
  dispatch: mockCallBack,
});

// export const dispatchMock = jest.fn(() => useContext(AppContext).dispatch);

export const AppWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(mockCallBack, mockState);
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
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
