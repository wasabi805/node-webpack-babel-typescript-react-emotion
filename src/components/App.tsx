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

const App: FC = (): JSX.Element => {
  const [state, setState] = useState<iState>({
    users: [],
    firstName: "",
    lastName: "",
    edit: [],
    editForm: [],
  });

  // const {state, dispatch} = useAppContext()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const loadUsers = async () => {
    const users = await callApi({
      method: "GET",
      url: `${BACKEND_API}/users`,
    });

    setState({
      ...state,
      users,
    });
  };

  const handleSubmit = async () => {
    const users = await callApi({
      method: "POST",
      url: `${BACKEND_API}/users/add-user`,
      body: {
        firstName: state.firstName,
        lastName: state.lastName,
      },
    });

    setState({
      ...state,
      users,
    });
  };

  const handleDelete = async (id: string) => {
    const users = await callApi({
      method: "DELETE",
      url: `${BACKEND_API}/users/delete-user`,
      body: { id },
    });

    setState({
      ...state,
      users: users,
    });
  };

  const isEdit = (userId: string) =>
    state.edit.filter((editId: string) => editId === userId).length > 0;

  const handleEdit = async (id: string, name: string) => {
    const editId = id.split("edit-")[1];

    const hasId = state.edit.filter((id) => id === editId).length > 0;

    const createEditForm = () => {
      setState({
        ...state,
        edit: state.edit.concat(editId),
        editForm: [...state.editForm, { id: `editform-${editId}`, name }],
      });
    };

    const upDateChanges = async () => {
      setState({
        ...state,
        edit: state.edit.filter((id) => id !== editId),
      });

      const editedUser = state.users.filter(
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

    !hasId ? createEditForm() : upDateChanges();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleEditFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const userId = id.split("editForm-")[1];

    const updatedUser = {
      id: userId,
      name: value,
    };

    //find the user with userId in the users array
    const updateIdx = state.users.findIndex(
      (user: iUser) => user.id === userId
    );

    const updatedUsers = [...state.users];
    updatedUsers[updateIdx] = updatedUser;

    setState({
      ...state,
      users: updatedUsers,
    });
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
            value={state.firstName}
            onChange={handleInputChange}
          />
          <Input
            styling={signUpStyle}
            placeholder="Last Name"
            name="lastName"
            value={state.lastName}
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
              users={state.users}
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
