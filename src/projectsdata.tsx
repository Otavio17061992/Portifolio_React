import professor from "./assets/mock/professor.png";
import orientador from "./assets/mock/orientador.png";
import pokedex from "./assets/mock/pokedex.png";
import flix from "./assets/mock/flix.png";

const ProjectsData = [
  {
    id: 1,
    img: professor,
    title: "Horas Extras",
    description:
      "Projeto desenvolvido por mim Utilizando .Net Framework, este projeto foi elaborado para adicionar fuincionarios e adicionar horas extras ao banco de dados gerado em Sqlite.",
    tool: "React · Firebase",
    github: "https://github.com/Otavio17061992/ProjetoHorasExtras",
    link: "",
  },
  {
    id: 2,
    img: orientador,
    title: "TCC - Orientador",
    description:
      "Projeto desenvolvido por mim e pela minha equipe em 2021 para minha escola como TCC e estágio, com principal função dos orientadores receberem, organizarem as ocorrências dos alunos da escola.",
    tool: "React · Firebase",
    github: "",
    link: "",
  },
  {
    id: 3,
    img: pokedex,
    title: "Pokédex",
    description:
      "Pokédex para procurar pokémons pelo nome ou número, mostrando e filtrando dados referente ao pokémon selecionado.",
    tool: "React · TypeScript · PokeAPI",
    github: "",
    link: "",
  },
  {
    id: 4,
    img: flix,
    title: "Flix",
    description:
      "Plataforma de filmes em exibição, com acesso a informações do filme, como tempo de duração, gêneros, sinopse, entre outras coisas.",
    tool: "React · TheMovieDB",
    github: "",
    link: "",
  },
];

export default ProjectsData;
