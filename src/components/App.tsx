import React, { useState, useEffect, ChangeEvent, FC } from "react";
import {
  BACKEND_API,
  FORM_HEADING,
  USER_TABLE_HEADING,
} from "../data/constants";
import { callApi } from "../utils/helpers";
import { Container, Wrapper } from "./common";
import Button, { submitStyle } from "./common/Button";
import { iUser, iState } from "../interfaces";
import Input, { signUpStyle } from "./common/Input";
import UserTable from "./UserTable";
import { useAppContext } from "../context/AppContext";
import {
  getAllUsers,
  setNewUserInputChange,
  submitNewUser,
  deleteUser,
  createEditForm,
  updateEditedUser,
  setEditUserInputChange,
} from "../actions/usersActions";

const App: FC = (): JSX.Element => {
  const [state, setState] = useState<iState>({
    users: [],
    firstName: "",
    lastName: "",
    edit: [],
    editForm: [],
  });

  const { state: reducerState, dispatch } = useAppContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setNewUserInputChange(name, value));
  };

  const loadUsers = async () => {
    const users = await callApi({
      method: "GET",
      url: `${BACKEND_API}/users`,
    });
    dispatch(getAllUsers(users));
  };

  const handleSubmit = async () => {
    const users = await callApi({
      method: "POST",
      url: `${BACKEND_API}/users/add-user`,
      body: {
        firstName: reducerState.createUser.firstName,
        lastName: reducerState.createUser.lastName,
      },
    });

    dispatch(submitNewUser(users));
  };

  const handleDelete = async (id: string) => {
    const users = await callApi({
      method: "DELETE",
      url: `${BACKEND_API}/users/delete-user`,
      body: { id },
    });

    dispatch(deleteUser(users));
  };

  const isEdit = (userId: string) =>
    reducerState.edit.filter((editId: string) => editId === userId).length > 0;

  const handleEdit = async (id: string, name: string) => {
    const editId = id.split("edit-")[1];
    const hasId = reducerState.edit.filter((id) => id === editId).length > 0;

    const handleCreateEditForm = () => {
      dispatch(
        createEditForm(reducerState.edit.concat(editId), [
          ...reducerState.editForm,
          { id: `editform-${editId}`, name },
        ])
      );
    };

    const handleUpDateChanges = async () => {
      dispatch(updateEditedUser(state.edit.filter((id) => id !== editId)));

      const editedUser = reducerState.users.filter(
        (user: iUser) => user.id === editId
      )[0];

      await callApi({
        method: "PATCH",
        url: `${BACKEND_API}/users/edit-user`,
        body: {
          id: editId,
          name: editedUser.name,
        },
      });
    };

    !hasId ? handleCreateEditForm() : handleUpDateChanges();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleEditFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const userId = id.split("editForm-")[1];

    dispatch(
      setEditUserInputChange({
        userId,
        value,
        users: reducerState.users,
      })
    );
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Container>
        <h1>{FORM_HEADING}</h1>
        <Wrapper>
          <Input
            styling={signUpStyle}
            placeholder="First Name"
            name="firstName"
            value={reducerState.createUser.firstName}
            onChange={handleInputChange}
          />
          <Input
            styling={signUpStyle}
            placeholder="Last Name"
            name="lastName"
            value={reducerState.createUser.lastName}
            onChange={handleInputChange}
          />
          <Button onClick={handleSubmit} styling={submitStyle}>
            SUBMIT
          </Button>
        </Wrapper>
      </Container>

      <Container>
        <h1>{USER_TABLE_HEADING}</h1>
        <Wrapper>
          <Wrapper className="user-list">
            <UserTable
              users={reducerState.users}
              isEdit={isEdit}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleEditFormChange={handleEditFormChange}
            />
          </Wrapper>
        </Wrapper>
      </Container>
    </div>
  );
};

export default App;
