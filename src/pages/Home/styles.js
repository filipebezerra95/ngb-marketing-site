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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: auto;
  margin-bottom: auto;
  height: 80vh;

    @media (max-width: 768px) {
      flex-direction: column;
    }

`;
export const DivTitle = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;

    @media (max-width: 768px){
      max-width: 200px;
      justify-content: center;
      align-items: center;
    }
`;

export const Title = styled.h1`
  color: #faa1d4;
  font-size: clamp(3rem, 8vw, 130px);
  font-family: "anton";
  font-weight: bold;
  line-height: 1;
  text-align: left;
  margin-top: 5vh;
  animation: ${slideInLeft} 2s ease-out forwards;

    @media (max-width: 768px){
      font-size: 5rem;
      text-align: center;
      
    }
`;
