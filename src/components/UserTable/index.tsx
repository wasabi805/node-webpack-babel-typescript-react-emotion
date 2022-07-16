import React, { FC } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { iUser, iUserTable } from "interfaces";

const UserTable: FC<iUserTable> = ({
  users,
  isEdit,
  handleEdit,
  handleDelete,
  handleEditFormChange,
}): JSX.Element => {
  return (
    <table id="user-table" data-testid="user-table">
      <tbody>
        {users &&
          users.map((user: iUser, idx: number) => {
            return (
              <tr key={`user-data-row${idx}`}>
                <td>
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
