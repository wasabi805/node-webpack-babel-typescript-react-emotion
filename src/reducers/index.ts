import { iAppActions } from "../interfaces";
import * as userSlice from "../reducers/slices/usersSlice";

const appReducer = (state: any, action: any) => {
  const appActions: iAppActions = {
    GET_ALL_USERS: userSlice.getAllUsers,
    SET_NEW_USER_INPUT_CHANGE: userSlice.setNewUserInputChange,
    SUBMIT_NEW_USER: userSlice.submitNewUser,
    DELETE_USER: userSlice.deleteUser,
    CREATE_EDIT_FORM: userSlice.createEditForm,
    UPDATE_EDITED_USER: userSlice.updateEditedUser,
    SET_EDIT_USER_INPUT_CHANGE: userSlice.setEditUserInputChange,
  };

  const selectReducer = (type: string) => {
    return type in appActions ? appActions[type](state, action) : state;
  };

  return selectReducer(action.type);
};

export default appReducer;
