import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const BusinessPersonal = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }

  img {
    max-width: 100%;
    width: 35vw;
    height: auto;
    object-fit: contain;
    animation: ${slideInLeft} 4s ease-out forwards;

    @media (max-width: 1024px) {
      max-width: 400px;
    }

    @media (max-width: 768px) {
      width: 250px;
      height: 300px;
      position: absolute;
      bottom: 0;
      left: 20%;
      animation: ${slideInLeft} 3s ease-out forwards;
    }
  }
`;
