import React from "react";
import { render, AppWrapper } from "../../utils/test-utils";
import UserTable from "../../../src/components/UserTable";

import {
  // render,
  fireEvent,
  waitFor,
  screen,
  getByTestId,
} from "@testing-library/react";

describe("User Table Component", () => {
  let isEdit;
  let users;
  let wrapper;
  let handleEdit;

  beforeEach(() => {
    isEdit = jest.fn();
    handleEdit = jest.fn();
    users = [
      { id: 1, name: "tim" },
      { id: 2, name: "kayla" },
    ];

    wrapper = render(
      <AppWrapper>
        <UserTable users={users} isEdit={isEdit} handleEdit={handleEdit} />
      </AppWrapper>
    );
  });

  it("renders w/o crashing", () => {
    expect(wrapper).toBeTruthy;
  });

  it("displays an edit field when edit button is clicked", () => {
    const editButton = screen.getByTestId("edit-1");
    fireEvent.click(editButton);

    expect(handleEdit).toHaveBeenCalledWith("edit-1", "tim");

    const editInput = screen.getByTestId("editForm-1");
    expect(editInput).toBeInTheDocument();

    expect(1 + 1 === 2).toBe(true);
  });
});
