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
  margin-bottom: 0;

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  img {
    max-width: 100%;
    width: 20vw;
    height: auto;
    object-fit: cover;
    
    margin-bottom: 0;
    animation: ${slideInLeft} 4s ease-out forwards;

    @media (max-width: 1024px) {
      max-width: 400px;
    }

    @media (max-width: 768px) {
      width: 250px;
      height: 300px; 
      animation: ${slideInLeft} 3s ease-out forwards;
    }
  }
`;
