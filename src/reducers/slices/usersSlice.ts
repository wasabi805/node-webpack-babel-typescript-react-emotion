import { iInitialState, iAction } from "../../interfaces";

export const getAllUsers = (state: iInitialState, action: iAction) => {
  return {
    ...state,
    users: action?.payload?.users,
  };
};

export const setNewUserInputChange = (
  state: iInitialState,
  action: iAction
) => {
  const { createUser } = action?.payload!;
  return {
    ...state,
    createUser: {
      ...state.createUser,
      ...createUser,
    },
  };
};

export const submitNewUser = (state: iInitialState, action: iAction) => {
  const { users } = action?.payload!;
  return {
    ...state,
    users,
  };
};

export const deleteUser = (state: iInitialState, action: iAction) => {
  const { users } = action?.payload!;
  return {
    ...state,
    users: users,
  };
};

export const createEditForm = (state: iInitialState, action: iAction) => {
  return {
    ...state,
    edit: action?.payload?.edit!,
    editForm: action?.payload?.editForm,
  };
};

export const updateEditedUser = (state: iInitialState, action: iAction) => {
  return {
    ...state,
    edit: action.payload?.edit!,
  };
};

export const setEditUserInputChange = (
  state: iInitialState,
  action: iAction
) => {
  return {
    ...state,
    users: action.payload?.users,
  };
};
