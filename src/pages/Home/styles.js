import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 clamp(20px, 5vw, 60px);
  background-color: transparent;
  z-index: 1;

    @media (max-width: 768px){
      padding: 0;
      overflow: hidden;
    }
`;

export const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;

    @media (max-width: 768px) {
      flex-direction: column;
    }

`;
export const DivTitle = styled.div`
  flex: 1;
  
  display: flex;
  flex-direction: column;

    @media (max-width: 768px){
      max-width: 700px;
      justify-content: center;
      align-items: center;
    }
`;

export const Title = styled.h1`
  color: #fff;
  text-shadow: 0 0 10px #0000, 0 0 20px #0000;
  font-size: clamp(2.5rem, 7vw, 110px);
  font-family: "poppins";
  font-weight: bold;
  line-height: 1;
  text-align: center;
  margin-top: 5vh;
  animation: ${slideInLeft} 2s ease-out forwards;

  span {
    color: #faa1d4;
  }

    @media (max-width: 768px){
      margin-top: 0;
      font-size: 2.4rem;
      text-align: center;
      height: 400px;
      
      
    }
`;
