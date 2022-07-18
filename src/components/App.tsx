import React, { useEffect, ChangeEvent, FC } from "react";
import * as usersActions from "../actions/usersActions";
import * as constants from "../data/constants";
import { callApi } from "../utils/helpers";
import { Container, Wrapper } from "./common";
import Button, { submitStyle } from "./common/Button";
import { iUser } from "interfaces";
import Input, { signUpStyle } from "./common/Input";
import UserTable from "./UserTable";
import { useAppContext } from "../context/AppContext";

const App: FC = (): JSX.Element => {
  const { state, dispatch } = useAppContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(usersActions.setNewUserInputChange(name, value));
  };

  const handleSubmit = async () => {
    const users = await callApi({
      method: "POST",
      url: `${constants.BACKEND_API}/users/add-user`,
      body: {
        firstName: state.createUser.firstName,
        lastName: state.createUser.lastName,
      },
    });

    dispatch(usersActions.submitNewUser(users));
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Container>
        <h1>{constants.FORM_HEADING}</h1>
        <Wrapper>
          <Input
            data-testid="user-first-name"
            styling={signUpStyle}
            placeholder="First Name"
            name="firstName"
            value={state.createUser.firstName}
            onChange={handleInputChange}
          />
          <Input
            data-testid="user-last-name"
            styling={signUpStyle}
            placeholder="Last Name"
            name="lastName"
            value={state.createUser.lastName}
            onChange={handleInputChange}
          />
          <Button onClick={handleSubmit} styling={submitStyle}>
            SUBMIT
          </Button>
        </Wrapper>
      </Container>

      <Container>
        <h1>{constants.USER_TABLE_HEADING}</h1>
        <Wrapper>
          <Wrapper className="user-list">
            <UserTable />
          </Wrapper>
        </Wrapper>
      </Container>
    </div>
  );
};

export default App;
