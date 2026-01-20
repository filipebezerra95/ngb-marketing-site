import { useState } from "react";
import { NavBar, Menu, Hamburger } from "./styles";
import { useNavigate } from "react-router-dom";

function HeaderNavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const goTo = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <NavBar>
      <Menu open={open}>
        <a onClick={() => goTo("/")}>HOME</a>
        <a onClick={() => goTo("/nossos-servicos")}>NOSSOS SERVIÇOS</a>
        <a onClick={() => goTo("/alguns-resultados")}>ALGUNS RESULTADOS</a>
        <a onClick={() => goTo("/portifolio")}>PORTIFOLIO</a>
        <a onClick={() => goTo("/sobre-nos")}>SOBRE NÓS</a>
        <a onClick={() => goTo("/contato")}>CONTATO</a>
      </Menu>

      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>
    </NavBar>
  );
}

export default HeaderNavBar;
