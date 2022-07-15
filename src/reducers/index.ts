import initialState from "../data/initialState";
import { iAppActions, iInitialState, iAction } from "../interfaces";

const appReducer = (state: any, action: any) => {
  const appActions: iAppActions = {
    GET_ALL_USERS: (state: iInitialState, action: iAction) => {
      return {
        ...state,
        users: action?.payload?.users,
      };
    },

    SET_NEW_USER_INPUT_CHANGE: (state: iInitialState, action: iAction) => {
      const { createUser } = action?.payload!;
      return {
        ...state,
        createUser: {
          ...state.createUser,
          ...createUser,
        },
      };
    },

    SUBMIT_NEW_USER: (state: iInitialState, action: iAction) => {
      const { users } = action?.payload!;
      return {
        ...state,
        users,
      };
    },

    DELETE_USER: (state: iInitialState, action: iAction) => {
      const { users } = action?.payload!;
      return {
        ...state,
        users: users,
      };
    },

    CREATE_EDIT_FORM: (state: iInitialState, action: iAction) => {
      console.log(action);
      return {
        ...state,
        edit: action?.payload?.edit!,
        editForm: action?.payload?.editForm,
      };
    },

    UPDATE_EDITED_USER: (state: iInitialState, action: iAction) => {
      return {
        ...state,
        edit: action.payload?.edit!,
      };
    },

    SET_EDIT_USER_INPUT_CHANGE: (state: iInitialState, action: iAction) => {
      return {
        ...state,
        users: action.payload?.users,
      };
    },
  };

  const selectReducer = (type: string) => {
    return type in appActions ? appActions[type](state, action) : state;
  };

  return selectReducer(action.type);
};

export default appReducer;
