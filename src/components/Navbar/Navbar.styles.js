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

  @media (max-width:760px) {
      h1{
        font-size:18px;
      }
      h2{
        font-size:17px;
      
      }
    }
`;

export const ImageLogo =styled.img`

    width: 120px;
    padding-right: 20px;

    @media (max-width:760px) {
      padding-right: 0;
      width: 100px;
    }
  
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;

  p{
    cursor: pointer;
    padding: 0 13px;
    text-decoration: none;
    color: ${colors.TEXT_BLACK};
    font-weight: 500;

  }

  @media (max-width:760px) {
    display: ${(props)=>(props.showBurguerMenu? 'inline-grid':'none')}; // modify with props
    position: absolute;
    top: 100px;
    background: ${colors.TEXT_WHITE};
    box-shadow: ${colors.BOX_SHADOW};
    padding: 10 px 0 20px 0;
    width: 100%;
    left: 0;

    a{
      padding: 10px 20px;
    }

  }
`;  

export const Button = styled.button`
color: ${colors.TEXT_WHITE};
box-shadow: ${colors.BOX_SHADOW_BUTTON};
background: linear-gradient(220deg, #B22222 0%, #FFA07A 100%);
padding: 12px 20px;
border-radius: 999px;
border:none;
margin: 10px 0;
font-size: 16px;
font-weight:700;
cursor: pointer;

@media (max-width:760px) {
  width: 50%;
  margin: 5px 10px o 10px;
}
`;

export const ContainerBurger = styled.div`
display: none;

 @media (max-width:760px) {
  display: block;

 }
`;

export const BurguerMenu = styled.div`
width: 30px;
height: 2px;
background-color: ${colors.TEXT_BLACK};
margin: 5px 0;
`;


