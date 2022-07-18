import React from "react";
import { render, screen , } from "@testing-library/react";
import "@testing-library/jest-dom";

import { AppContext, AppProvider } from "../../../src/context/AppContext";
import App from '../../../src/components/App'
import { iInitialState } from '../../../src/interfaces' 

describe("AppContext", () => {

  let state: iInitialState = {
    users: [],
    createUser: {
      firstName: "",
      lastName: "",
    },
    edit: [],
    editForm: [],
  };

  let wrapper: any;

  beforeEach(()=>{
    wrapper = (props: any, children: any) =>
    render(
      <AppContext.Provider value={{ state: state, dispatch: () => {} }} {...props}>
        {children}
      </AppContext.Provider>
    );
  })

  afterEach(()=>{
    state = {
        users: [],
    createUser: {
      firstName: "",
      lastName: "",
    },
    edit: [],
    editForm: [],
    }
  })

  it("Table does not contain users", () => {
    wrapper( state , <App/>);
    expect(screen.getByTestId("user-table-body")).toBeFalsy;
  });

  it("Table contain users", () => {
    state.users=[{id:'3', name: 'Ben Grim'}, {id: '4', name: 'Sue Storm'}]
    wrapper( state , <App/>);
    expect(screen.getByTestId('user-table-body')).toBeTruthy()
  });

  it("contains values for firstName input field", () => {
    state.createUser={
        firstName: 'Johnny',
        lastName: 'Strom'
    }
    wrapper( state , <App/>);

    expect(screen.getByDisplayValue('Johnny')).toBeInTheDocument()
   
  });

  it("contains values for lastName input field", () => {
    state.createUser={
        firstName: 'Johnny',
        lastName: 'Strom'
    }
    wrapper( state , <App/>);

    expect(screen.getByDisplayValue('Storm')).toBeInTheDocument()
   
  });
});
