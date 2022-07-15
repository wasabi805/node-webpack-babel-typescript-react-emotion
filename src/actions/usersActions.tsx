import { iUser } from "interfaces";
import { iSetEditUserInputChange } from "interfaces";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const getAllUsers = (users: iUser[]) => {
  return {
    type: GET_ALL_USERS,
    payload: { users },
  };
};

export const SET_NEW_USER_INPUT_CHANGE = "SET_NEW_USER_INPUT_CHANGE";
export const setNewUserInputChange = (name: string, value: string) => {
  return {
    type: SET_NEW_USER_INPUT_CHANGE,
    payload: {
      createUser: {
        [name]: value,
      },
    },
  };
};

export const SUBMIT_NEW_USER = "SUBMIT_NEW_USER";
export const submitNewUser = (users: iUser[]) => {
  return {
    type: SUBMIT_NEW_USER,
    payload: {
      users,
    },
  };
};

export const DELETE_USER = "DELETE_USER";
export const deleteUser = (users: iUser[]) => {
  return {
    type: DELETE_USER,
    payload: {
      users,
    },
  };
};

export const CREATE_EDIT_FORM = "CREATE_EDIT_FORM";
export const createEditForm = (edit: string[], editForm: any) => {
  return {
    type: CREATE_EDIT_FORM,
    payload: {
      edit: edit,
      editForm: editForm,
    },
  };
};

export const UPDATE_EDITED_USER = "UPDATE_EDITED_USER";
export const updateEditedUser = (edit: string[]) => {
  return {
    type: UPDATE_EDITED_USER,
    payload: {
      edit: edit,
    },
  };
};

export const SET_EDIT_USER_INPUT_CHANGE = "SET_EDIT_USER_INPUT_CHANGE";
export const setEditUserInputChange = ({
  userId,
  value,
  users,
}: iSetEditUserInputChange) => {
  const updatedUser = {
    id: userId,
    name: value,
  };

  const updateIdx = users.findIndex((user: iUser) => user.id === userId);

  const updatedUsers = [...users];

  updatedUsers[updateIdx] = updatedUser;

  return {
    type: SET_EDIT_USER_INPUT_CHANGE,
    payload: {
      users: updatedUsers,
    },
  };
};
