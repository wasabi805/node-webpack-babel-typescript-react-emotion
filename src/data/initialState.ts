import { iInitialState } from "interfaces";

const initialState: iInitialState = {
  users: [],
  createUser: {
    firstName: "",
    lastName: "",
  },
  edit: [],
  editForm: [],
};

export default initialState;
