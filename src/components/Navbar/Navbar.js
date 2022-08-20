import React, { useState } from 'react'
import * as S from "./Navbar.styles";
import  LogoSher from '../../img/logo_sher.jpeg'
const Navbar = () => {
  const[showBurguerMenu, setshowBurguerMenu]=useState(false);
console.log(showBurguerMenu);
  return (
    <S.ContainerNavbar> 
      <S.ContainerLogo>
        <S.ImageLogo src={LogoSher} alt="Sher Maestre" />
        <div>
          <h1>Sherilyn Maestre</h1>
          <h2>Frontend Developer</h2>
        </div>
      </S.ContainerLogo>
      <S.ContainerBurger onClick={()=>setshowBurguerMenu(!showBurguerMenu)}>
        <S.BurguerMenu/>
        <S.BurguerMenu/>
        <S.BurguerMenu/>
      </S.ContainerBurger>
      <S.ContainerItems showBurguerMenu={showBurguerMenu}>
        <p>About me</p>
        <p>Projects</p>
        <S.Button>Contact me 📲🤙🏻</S.Button>
      </S.ContainerItems>
    </S.ContainerNavbar>
  )
}

export default Navbar