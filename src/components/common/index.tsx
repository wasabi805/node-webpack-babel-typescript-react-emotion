import styled from "@emotion/styled";

// example 1 : Basic Useage
export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  color: cyan;
`;

//example 2 : Another Basic Useage
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2rem;

  & h1 {
    font-family: "Adistro";
  }

  color: #9d4bb3;
  background: LightSlateGrey;
  height: 500px;
  width: 500px;
  border-radius: 5px;
`;

//  example 3 : Extnding Styles
// https://styled-components.com/docs/basics#extending-styles

export const ExtendedWrapper = styled(Wrapper)`
  background: cyan;
  color: blue;
`;

//  example 4  : Passed Props
// see: https://styled-components.com/docs/basics#passed-props

interface iButton {
  styling?: {
    someBgColor?: string;
  };
}

export const Button = styled.button`
  background: ${(props: iButton) => props?.styling?.someBgColor};
  height: 3rem;
  width: 4rm;
  padding: 0 1rem;
  cursor: pointer;
  margin-top: 2rem;
`;

export const Input = styled.input`
  margin-bottom: 0.5rem;
  height: 2rem;
  width: 18rem;
`;
