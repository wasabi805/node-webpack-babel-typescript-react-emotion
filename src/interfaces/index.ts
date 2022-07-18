export interface iUser {
  id: string;
  name: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo?: {};
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface iState {
  users: iUser[];
  firstName: string;
  lastName: string;
  edit: string[];
  editForm: iUser[];
}

export interface iCallApi {
  method: string;
  url: string;
  body?: {
    id?: string;
    name?: string;
    firstName?: string;
    lastName?: string;
  };
}

export interface iUserTable {
  users: iUser[];
}

export interface iInitialState {
  users: iUser[];
  createUser: {
    firstName: string;
    lastName: string;
  };
  edit: string[];
  editForm: iUser[];
}

export interface iAppContext {
  state: iInitialState;
  // dispatch: (fn: iAction) => void;
  dispatch: any;
}

export interface iAction {
  type: string;
  payload?: {
    users?: iUser[];
    createUser?: {
      firstName?: string;
      lastName?: string;
    };
    edit?: string[];
    editForm?: iUser[];
  };
}

export interface iAppActions {
  [key: string]: (state: iInitialState, action: iAction) => {};
}

export interface iSetEditUserInputChange {
  userId: string;
  value: string;
  users: iUser[];
}
