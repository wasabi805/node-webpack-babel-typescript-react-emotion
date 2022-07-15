import styled from "@emotion/styled";
import { iBaseStyling } from "interfaces/style";

const Input = styled.input`
  margin-bottom: ${(props: iBaseStyling) => props?.styling?.marginBottom};
  height: ${(props: iBaseStyling) => props?.styling?.height};
  width: ${(props: iBaseStyling) => props?.styling?.width};
`;

export const signUpStyle = {
  width: "18rem",
  height: "2rem",
  marginBottom: "0.5rem",
};

export default Input;
