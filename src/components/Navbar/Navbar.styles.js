import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerNavbar =styled.div`
max-width: 100vw;
  height: 100px;
  box-shadow: ${colors.BOX_SHADOW};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: ${colors.TEXT_WHITE};
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  h1,
  h2 {
    font-weight: 700;
    color: ${colors.TEXT_BLACK};
    margin: 0;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    background: linear-gradient(110deg, #B22222 0%, #FFA07A 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  img{
    width: 130px;
    padding-right: 20px;
  }
`;


