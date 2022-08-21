import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkedin from "../../svg/linkedin.svg";
import ProfilePic from "../../img/comic-profile.png"


const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/shermaes",
      logo: logoGithub,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sherilyn-maestre-62937721a/",
      logo: logoLinkedin,
    },
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>👋🏼 Hello, I'm</p>
            <p>Sherilyn Maestre</p>
            <p>Frontend Developer</p>
          </S.Title>
          <S.DescriptionText>
          I am a full stack developer from Venezuela. I am a hands-on learner, that´s why I prefer learning new technologies through development.
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="__blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src={ProfilePic} alt="Sher Maestre - Frontend Developer" />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};

export default AboutMe;