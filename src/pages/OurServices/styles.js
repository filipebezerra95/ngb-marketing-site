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
`
const slideInUp = keyframes`
    from {
    opacity: 0;
    transform: translateY(50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding:  20px;
  background: #f5f5ef;
`;

export const SubContainer = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 60px;
  margin-top: 40px;
  

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 0;
    
  }
`;

export const SubArticles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: baseline;

  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 20px;
  }

  
`;

export const DivTitle = styled.div`
  width: 100%;
  margin: 0;

  @media (max-width: 768px) {
    align-items:center;
    justify-content: flex-end;
    margin-bottom: 0;
  }
  
`;

export const Title = styled.h1`
  color: #000;
  font-size: clamp(3rem, 10vw, 150px);
  font-family: "anton";
  font-weight: bold;
  line-height: 0.9;
  text-align: left;
  margin: 0;
  text-transform: uppercase;
  animation: ${slideInLeft} 2s ease-out forwards;

    &:hover{
      color: #FAA1D4;
      transition: all 0.3s ease-in-out;
    }

    @media (max-width: 768px) {
      text-align: center;
      margin-top: 40px;
      font-size: 4rem;
      line-height: 1.3;
      
    }
`;
export const TextBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
  padding-left: 5px;

  @media (min-height: 700px){
    margin-top: 50px;
    align-items: center;
  }

  @media (max-width: 768px){
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 0;
  }
`;

export const DivArts = styled.div`
  width: 100%;
  height: 40%;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px){
    margin-top: 0;
    margin-bottom: 30px;
    animation: ${slideInLeft} 2s ease-out forwards;
  }
`;
export const DivLandingPages = styled.div`
  width: 100%;
  height: 40%;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 768px){
    margin-top: 0;
    margin-bottom: 30px;
    animation: ${slideInUp} 2s ease-out forwards;
  }
`;

export const DivParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
  padding-top: 10px;

    @media (min-height: 700px){
    justify-content: space-evenly;
    gap: 60px;
    }
`;
export const DivLogotypes = styled.div`
   cursor: pointer;

   @media (max-width: 768px){
    margin-top: 0;
    margin-bottom: 30px;
    animation: ${slideInLeft} 2s ease-out forwards;
  }

  
  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
  }
`;

export const DivMaterials = styled.div`
  cursor: pointer;

  @media (max-width: 768px){
    margin-top: 0;
    margin-bottom: 30px;
    animation: ${slideInUp} 2s ease-out forwards;
  }

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
  }
`;

export const DivVideo = styled.div`
cursor: pointer;
  
  
  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
    
  }

  @media (max-width: 768px){
    margin-top: 0;
    margin-bottom: 30px;
    animation: ${slideInLeft} 2s ease-out forwards;
  }

  
`;

export const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.1;
  color: #000;
  font-family: "league spartan", sans-serif;
  animation: ${slideInUp} 1s ease-out forwards;

  &:hover{
      color: #FAA1D4;
      transition: all 0.3s ease-in-out;
    }

  @media (max-width: 768px){
    font-size: 2rem;
  }
`;
export const TextSubTitle = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  max-width: 320px;
  color: #333;
  font-family: "montserrat", sans-serif;
  animation: ${slideInUp} 3s ease-out forwards;

  @media (max-width: 768px){
    font-size: 1.4rem;
    font-weight: 500;
  }
`;
