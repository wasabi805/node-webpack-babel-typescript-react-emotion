import React, { useState, useEffect, ChangeEvent } from "react";
import { BACKEND_API } from "../constants";
import { callApi } from "../helpers";
import { Container, Wrapper, Button, Input } from "./styledComponents";

interface iState {
  users: any;
  firstName: string;
  lastName: string;
  edit: number[];
  editForm: any;
}

const App = () => {
  const [state, setState] = useState<iState>({
    users: [],
    firstName: "",
    lastName: "",
    edit: [],
    editForm: [],
  });

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

  const handleDelete = async (e: any) => {
    const { id } = e.target;

    const users = await callApi({
      method: "POST",
      url: `${BACKEND_API}/users/delete-user`,
      body: { id },
    });

    setState({
      ...state,
      users: users,
    });
  };

  const isEdit = (userId: any) => {
    return (
      state.edit.filter((editId: any) => parseInt(editId, 10) === userId)
        .length > 0
    );
  };

  const handleEdit = async (e: any) => {
    const { id, value } = e.target;
    const editId = id.split("-")[1];

    const hasId = state.edit.filter((id) => id === editId).length > 0;

    const createEditForm = () => {
      setState({
        ...state,
        edit: state.edit.concat(editId),
        editForm: [
          ...state.editForm,
          { id: `editform-${editId}`, name: value },
        ],
      });
    };

    const upDateChanges = async () => {
      setState({
        ...state,
        edit: state.edit.filter((id) => id !== editId),
      });

      await callApi({
        method: "POST",
        url: `${BACKEND_API}/users/edit-user`,
        body: { users: state.users },
      });
    };

    !hasId ? createEditForm() : upDateChanges();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleEditFormChange = (e: any) => {
    const { id, value } = e.target;
    const userId = parseInt(id.split("-")[1], 10);

    //find the user with userId in the users array
    const updatedUser = {
      id: userId,
      name: value,
    };

    const updateIdx = state.users.findIndex((user: any) => user.id === userId);

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
        <h1>SIGN UP</h1>
        <Wrapper>
          <Input
            placeholder="First Name"
            name="firstName"
            value={state.firstName}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Last Name"
            name="lastName"
            value={state.lastName}
            onChange={handleInputChange}
          />
          <Button
            onClick={handleSubmit}
            styling={{
              someBgColor: "azure",
            }}
          >
            SUBMIT
          </Button>
        </Wrapper>
      </Container>

      <Container>
        <h1>USERS FROM BACKEND</h1>
        <Wrapper>
          <Wrapper className="user-list">
            <table>
              <tbody>
                {state.users &&
                  state.users.map((user: any, idx: number) => {
                    return (
                      <tr key={`user-data-row${idx}`}>
                        <td>
                          {" "}
                          {isEdit(user.id) ? (
                            <input
                              id={`editForm-${user.id}`}
                              value={user?.name}
                              onChange={handleEditFormChange}
                            />
                          ) : (
                            user?.name
                          )}
                        </td>

                        <td>
                          <button
                            id={`edit-${user?.id}`}
                            value={user.name}
                            className="button"
                            onClick={handleEdit}
                          >
                            Edit
                          </button>
                        </td>

                        <td>
                          <button
                            id={user.id}
                            className="button"
                            onClick={handleDelete}
                            disabled={isEdit(user.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </Wrapper>
        </Wrapper>
      </Container>
    </div>
  );
};

export default App;
