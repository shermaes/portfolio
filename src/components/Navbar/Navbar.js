import React from 'react'
import * as S from "./Navbar.styles";
import  LogoSher from '../../img/logo_sher.jpeg'
const Navbar = () => {
  return (
    <S.ContainerNavbar> 
      <S.ContainerLogo>
        <img src={LogoSher} alt="Sher Maestre" />
        <div>
          <h1>Sherilyn Maestre</h1>
          <h2>Frontend Developer</h2>
        </div>
      </S.ContainerLogo>
    </S.ContainerNavbar>
  )
}

export default Navbar