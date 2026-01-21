import styled from "styled-components";

export const BoxVideo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;

  @media (max-width: 768px){
      width: 100%;
      top: 0;

    }  
  

  video {
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;

    @media (max-width: 768px){
      width: 100%;
      margin-top: 95px;

    }
  }
`
export const Mask = styled.div`
  position: absolute; /* Absolute em relação ao BoxVideo */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg, 
    rgba(0, 0, 0, 2.1) 20%,   /* Topo bem escuro para o logo */
    rgba(0, 0, 0, 0.8) 80%,    /* Meio mais transparente para ver o vídeo */
    rgba(0, 0, 0, 0.95) 100%  /* Rodapé escuro para acabamento */
);
  z-index: 1; /* Fica acima do vídeo, mas abaixo do conteúdo da home */

`