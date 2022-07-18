import React, { FC, useEffect, ChangeEvent } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { iUser, iUserTable } from "interfaces";
import { useAppContext } from "../../context/AppContext";
import * as constants from "../../data/constants";
import { callApi } from "../../utils/helpers";
import * as usersActions from "../../actions/usersActions";

const UserTable = (): JSX.Element => {
  const { state, dispatch } = useAppContext();

  const loadUsers = async () => {
    const users = await callApi({
      method: "GET",
      url: `${constants.BACKEND_API}/users`,
    });
    dispatch(usersActions.getAllUsers(users));
  };

  const handleDelete = async (id: string) => {
    try {
      console.log("i did fire");
      const users = await callApi({
        method: "DELETE",
        url: `${constants.BACKEND_API}/users/delete-user`,
        body: { id },
      });

      dispatch(usersActions.deleteUser(users));
    } catch (error) {
      return null;
    }
  };

  const isEdit = (userId: string) =>
    state.edit.filter((editId: string) => editId === userId).length > 0;

  const handleEdit = async (id: string, name: string) => {
    const editId = id.split("edit-")[1];
    const hasId = state.edit.filter((id) => id === editId).length > 0;

    const handleCreateEditForm = () => {
      dispatch(
        usersActions.createEditForm(state.edit.concat(editId), [
          ...state.editForm,
          { id: `editform-${editId}`, name },
        ])
      );
    };

    const handleUpDateChanges = async () => {
      dispatch(
        usersActions.updateEditedUser(state.edit.filter((id) => id !== editId))
      );

      const editedUser = state.users.filter(
        (user: iUser) => user.id === editId
      )[0];

      await callApi({
        method: "PATCH",
        url: `${constants.BACKEND_API}/users/edit-user`,
        body: {
          id: editId,
          name: editedUser.name,
        },
      });
    };

    !hasId ? handleCreateEditForm() : handleUpDateChanges();
  };

  const handleEditFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const userId = id.split("editForm-")[1];

    dispatch(
      usersActions.setEditUserInputChange({
        userId,
        value,
        users: state.users,
      })
    );
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <table id="user-table" data-testid="user-table">
      <tbody data-testid="user-table-body">
        {state.users &&
          state.users.map((user: iUser, idx: number) => {
            return (
              <tr key={`user-data-row${idx}`}>
                <td
                  id={`user-name-${user?.id}`}
                  className={`user-name`}
                  data-testid={`user-name-${user?.id}`}
                >
                  {" "}
                  {isEdit(user.id) ? (
                    <Input
                      id={`editForm-${user.id}`}
                      data-testid={`editForm-${user.id}`}
                      value={user?.name}
                      onChange={handleEditFormChange}
                    />
                  ) : (
                    user?.name
                  )}
                </td>

                <td>
                  <Button
                    id={`edit-${user?.id}`}
                    data-testid={`edit-${user?.id}`}
                    value={user.name}
                    className="button"
                    onClick={() => handleEdit(`edit-${user?.id}`, user.name)}
                  >
                    Edit
                  </Button>
                </td>

                <td>
                  <Button
                    id={user.id}
                    data-testid={`delete-${user?.id}`}
                    className="button"
                    onClick={() => handleDelete(user.id)}
                    disabled={isEdit(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default UserTable;
