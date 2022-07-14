import { ChangeEvent } from "react";

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
  editForm: any;
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

  params?: {
    id?: string;
  } | null;
}

export interface iUserTable {
  users: iUser[];
  isEdit: (id: string) => boolean;
  handleEdit: (id: string, name: string) => void;
  handleDelete: (id: string) => void;
  handleEditFormChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface iInitialState {
  users: iUser[];
  firstName: string;
  lastName: string;
  edit: string[];
  editForm: any;
}

export interface iAppContext {
  state: iInitialState;
  dispatch: () => void;
}

export interface iAppProvider {}

export interface iAction {
  type: string;
  payload?: {};
}

export interface iAppActions {
  [key: string]: (state: iInitialState, action: iAction) => {};
}
