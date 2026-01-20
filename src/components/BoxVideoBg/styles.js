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

    }  
  

  video {
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;

    @media (max-width: 768px){
      width: 100%;

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
    109deg,
    rgba(10, 12, 16, 0.95) 15%,
    rgba(10, 12, 16, 0.6) 50%,
    rgba(10, 12, 16, 0.95) 85%
  );
  z-index: 1; /* Fica acima do vídeo, mas abaixo do conteúdo da home */

`