import styled from "@emotion/styled";
import { iButton } from "../../../interfaces/style";

const Button = styled.button`
  background: ${(props: iButton) => props?.styling?.background};
  height: ${(props: iButton) => props?.styling?.height};
  padding: ${(props: iButton) => props?.styling?.padding};
  cursor: ${(props: iButton) => props?.styling?.cursor};
  margin-top: ${(props: iButton) => props?.styling?.marginTop};
`;

export const submitStyle = {
  background: "azure",
  height: "3rem",
  width: "4rem",
  padding: "0 1rem",
  cursor: "pointer",
  marginTop: "2rem",
};

export default Button;
