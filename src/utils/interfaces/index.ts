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
