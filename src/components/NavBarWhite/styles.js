import styled from "styled-components";

export const NavBar = styled.nav`
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px 0;
  position: relative;
  z-index: 100;
`;

/* MENU — DESKTOP NORMAL */
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  a {
    font-size: clamp(1rem, 1.5vw, 1.8rem);
    font-weight: 400;
    font-family: "poppins";
    color: #fff;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 1.8);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  a:hover {
    color: #faa1d4;
    transform: translateY(-5px);
  }

  /* 🔽 MOBILE */
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    
    flex-direction: column;
    background: rgba(0, 0, 0, 0.95);
    padding: 20px;
    border-radius: 12px;
    gap: 15px;

    transform: ${({ open }) =>
      open ? "translateY(0)" : "translateY(-20px)"};
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? "auto" : "none")};

    transition: all 0.3s ease;

    
  }
`;

/* 🍔 HAMBURGUER */
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  z-index: 200;

  span {
    width: 30px;
    height: 3px;
    background: #000;
    
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  /* ❌ quando estiver aberto */
  ${({ open }) =>
    open &&
    `
    span:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  `}

  /* Só no mobile */
  @media (max-width: 768px) {
    display: flex;
  }
`;
