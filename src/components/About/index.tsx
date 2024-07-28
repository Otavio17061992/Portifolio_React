import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import {
  ContainerAbout,
  Image,
  SubContainerAbout,
  SubTitle,
  Description,
  ContainerButtons,
  ContactButton,
  TextButton,
} from "./styles";

import photo from "../../assets/photo.png";

import { FiArrowRight } from "react-icons/fi";
interface Props {
  toggleTheme(): void;
}

const About: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <ContainerAbout id="sobre">
      <Image src={photo} alt="Gabriel Barbosa" />

      <SubContainerAbout>
        <SubTitle>Sobre mim</SubTitle>

        <Description>
          Comecei minha jornada na programação em 2021, quando ingressei em uma
          escola técnica de informatíca, de lá pra cá descobri sou um apaixonado
          por tecnologia e por desenvolvimento pessoal.
        </Description>
        <Description>
          Atualmente estou estudando linguagens/frameworks como: Javascript,
          TypeScript, React, C# entre outras tecnologias que uso para criar
          aplicações web/mobile de alto nível e valor.
        </Description>
        <Description>
          Meu foco é evoluir como programador, com aprendizado voltado para um
          desenvolvimento completo desde como é o funcionamento de um
          processador até desenvolvimento web, gosto sempre de estar em
          constante aprendizado e evoluindo dia após dia, e agregando muito
          valor.
        </Description>
        <ContainerButtons>
          <ContactButton href="#contato">
            <TextButton>Contato</TextButton>
          </ContactButton>
        </ContainerButtons>
      </SubContainerAbout>
    </ContainerAbout>
  );
};

export default About;
