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
