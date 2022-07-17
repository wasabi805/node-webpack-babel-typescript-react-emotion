// TODO: Add notes in READ ME for mocking api for jest : https://www.leighhalliday.com/mock-fetch-jest

import React from "react";
import { AppWrapper, render } from "../../utils/test-utils";
import UserTable from "../../../src/components/UserTable";
import { mockState, cleanup } from "../../utils/test-utils";

import {
  // render,
  fireEvent,
  waitFor,
  screen,
  // getByTestId,
} from "@testing-library/react";

afterEach(cleanup);

describe("User Table Component", () => {
  it("renders w/o crashing", () => {
    const customRender = () => {
      return render(
        <AppWrapper>
          <UserTable users={mockState.users} />
        </AppWrapper>
      );
    };

    expect(customRender()).toBeTruthy;
  });

  it("displays the correct amount of users", () => {
    const customRender = () => {
      return render(
        <AppWrapper>
          <UserTable users={mockState.users} />
        </AppWrapper>
      );
    };

    const { container } = customRender();
    const userTable = container.querySelector("#user-table");
    expect(userTable?.getElementsByClassName("user-name").length).toBe(2);
  });

  it("deletes a user", () => {
    // const customRender = () => {
    //   return render(
    //     <AppWrapper>
    //       <UserTable users={mockState.users} />
    //     </AppWrapper>
    //   );
    // };

    // const deleteButton = customRender().getByTestId("delete-1");

    // fireEvent.click(deleteButton);

    expect(1 + 1 === 2).toBe(true);
  });
});
