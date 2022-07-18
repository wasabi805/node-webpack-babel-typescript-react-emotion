// TODO: Add notes in READ ME for mocking api for jest : https://www.leighhalliday.com/mock-fetch-jest

import React from "react";
import { AppWrapper, render } from "../../utils/test-utils";
import UserTable from "../../../src/components/UserTable";

import {
  // render,
  fireEvent,
  waitFor,
  screen,
  // getByTestId,
} from "@testing-library/react";

describe("User Table Component", () => {
  it("renders w/o crashing", async () => {
    const customRender = () => {
      return render(
        <AppWrapper>
          <UserTable />
        </AppWrapper>
      );
    };

    expect(customRender()).toBeTruthy;
  });

  // it("displays the correct amount of users", async() => {
  //   const customRender = () => {
  //     return render(
  //       <AppWrapper>
  //         <UserTable/>
  //       </AppWrapper>
  //     );
  //   };
  //   const { container, } = customRender();

  //   const userTable = await waitFor(()=> container.querySelector("#user-table"))
  //   expect(userTable?.getElementsByClassName("user-name").length).toBe(2);
  // });
});
