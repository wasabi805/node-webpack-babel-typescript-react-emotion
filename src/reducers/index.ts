import { iAppActions, iInitialState, iAction } from "../interfaces";

const appReducer = (state: any, action: any) => {
  const appActions: iAppActions = {
    SET_INPUT: (state: iInitialState, action: iAction) => {
      console.log(action);
      return {
        ...state,
      };
    },
  };

  const selectReducer = (type: string) => {
    return appActions[type];
  };

  selectReducer(action.type);
};

export default appReducer;
